import { useCallback, useEffect, useState } from 'react';
import {
  PermissionsAndroid,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import { styles } from './LocationComponent.styles.ts';
import { Coordinates } from './LocationComponent.types.ts';
import { getAddress } from '../../helpers/getAddress.ts';
import { CustomButton } from '../CustomButton/CustomButton.tsx';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../constants/routes';
import { useTheme } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../store/cart/cartSlice.ts';
import type { AppDispatch } from '../../store/store';

export const LocationComponent = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch<AppDispatch>();
  const { colors } = useTheme();

  const [address, setAddress] = useState<string | null>(null);
  const [coordinates, setCoordinates] = useState<Coordinates | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

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
      async position => {
        const { latitude, longitude } = position.coords;
        setCoordinates({ latitude, longitude });
        try {
          const streetAddress = await getAddress(latitude, longitude);
          setAddress(streetAddress);
          setError(null);
        } catch (err) {
          setError(`Can't get your address. ${err}`);
        } finally {
          setLoading(false);
        }
      },
      locationError => {
        setError(locationError.message);
        setLoading(false);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
    );
  }, [requestLocationPermission]);

  useEffect(() => {
    getCurrentLocation();
  }, [getCurrentLocation]);

  const handleCheckout = () => {
    dispatch(clearCart());
    navigation.reset({
      index: 0,
      routes: [{ name: ROUTES.SuccessfulOrderScreenScreen }],
    });
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.text }]}>Your location:</Text>

      {loading ? (
        <ActivityIndicator size="large" />
      ) : coordinates ? (
        <>
          <Text style={[styles.address, { color: colors.text }]}>
            {address || 'Looking...'}
          </Text>
          <Text style={styles.coordinates}>
            ({coordinates.latitude}, {coordinates.longitude})
          </Text>
        </>
      ) : (
        <Text>Waiting for GPS...</Text>
      )}

      {error ? <Text style={styles.error}>{error}</Text> : null}
      <CustomButton
        style={styles.checkoutBtn}
        title="Checkout"
        onPress={handleCheckout}
        disabled={!address}
      />
    </View>
  );
};
