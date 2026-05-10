import { useCallback, useEffect, useState } from 'react';
import { PermissionsAndroid, Text, View } from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { styles } from './LocationComponent.styles.ts';
import { Coordinates } from './LocationComponent.types.ts';

export const LocationComponent = () => {
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [error, setError] = useState<string | null>(null);

  const requestLocationPermission = useCallback(async () => {
    const result = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
    return result === PermissionsAndroid.RESULTS.GRANTED;
  }, []);

  const getCurrentLocation = useCallback(async () => {
    const hasPermission = await requestLocationPermission();

    if (!hasPermission) {
      setError('Permission denied');
      return;
    }

    Geolocation.getCurrentPosition(
      position => {
        setCoordinates({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        setError(null);
      },
      locationError => {
        setError(locationError.message);
        console.log(locationError.code, locationError.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 10000,
      },
    );
  }, [requestLocationPermission]);

  useEffect(() => {
    getCurrentLocation();
  }, [getCurrentLocation]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Current Location</Text>

      {coordinates ? (
        <>
          <Text>Latitude: {coordinates.latitude}</Text>
          <Text>Longitude: {coordinates.longitude}</Text>
        </>
      ) : (
        <Text>Loading coordinates...</Text>
      )}

      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};
