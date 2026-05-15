import React, { useState } from 'react';
import { View, Text, TextInput, Alert } from 'react-native';
import { useTheme } from '@react-navigation/native';
import { useUser } from '../../context/userContext/useUser';
import { styles } from './ProfileForm.styles';
import { CustomButton } from '../CustomButton';

export const ProfileForm = () => {
  const { colors } = useTheme();
  const { user, updateUser } = useUser();
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);

  const handleSave = () => {
    updateUser({ firstName, lastName, phoneNumber });
    Alert.alert('User data changed!');
  };

  return (
    <View style={styles.form}>
      <Text style={[styles.label, { color: colors.text }]}>Name</Text>
      <TextInput
        style={[
          styles.input,
          { color: colors.text, borderColor: colors.border },
        ]}
        value={firstName}
        onChangeText={setFirstName}
        placeholder="Name"
        placeholderTextColor="#8f9098"
      />

      <Text style={[styles.label, { color: colors.text }]}>Last name</Text>
      <TextInput
        style={[
          styles.input,
          { color: colors.text, borderColor: colors.border },
        ]}
        value={lastName}
        onChangeText={setLastName}
        placeholder="Last name"
        placeholderTextColor="#8f9098"
      />

      <Text style={[styles.label, { color: colors.text }]}>Phone</Text>
      <TextInput
        style={[
          styles.input,
          { color: colors.text, borderColor: colors.border },
        ]}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        placeholder="+380..."
        keyboardType="phone-pad"
        placeholderTextColor="#8f9098"
      />

      <CustomButton
        title="Save"
        onPress={handleSave}
        style={styles.saveButton}
      />
    </View>
  );
};
