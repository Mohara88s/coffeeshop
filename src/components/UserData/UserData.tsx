import { Text, View } from 'react-native';
import { styles } from './UserData.styles.ts';
import { useUser } from '../../context/userContext/useUser';
import { useTheme } from '@react-navigation/native';

export const UserData = () => {
  const { colors } = useTheme();
  const { user } = useUser();

  return (
    <View>
      <Text style={[styles.title, { color: colors.text }]}>Your name:</Text>
      <Text style={[styles.info, { color: colors.text }]}>
        {user.firstName}
      </Text>

      <Text style={[styles.title, { color: colors.text }]}>
        Your last name:
      </Text>
      <Text style={[styles.info, { color: colors.text }]}>{user.lastName}</Text>

      <Text style={[styles.title, { color: colors.text }]}>Your phone:</Text>
      <Text style={[styles.info, { color: colors.text }]}>
        {user.phoneNumber}
      </Text>
    </View>
  );
};
