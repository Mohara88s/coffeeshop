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
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSave = () => {
    updateUser({ firstName, lastName, phoneNumber });
    Alert.alert('User data changed!');
  };

  const getInputBorderStyle = (fieldName: string) => {
    return {
      borderColor: focusedField === fieldName ? '#006ffd' : colors.border,
      color: colors.text,
    };
  };

  return (
    <View style={styles.form}>
      <Text style={[styles.label, { color: colors.text }]}>Name</Text>
      <TextInput
        style={[styles.input, getInputBorderStyle('firstName')]}
        value={firstName}
        onChangeText={setFirstName}
        onFocus={() => setFocusedField('firstName')}
        onBlur={() => setFocusedField(null)}
        placeholder="Name"
        placeholderTextColor="#8f9098"
      />

      <Text style={[styles.label, { color: colors.text }]}>Last name</Text>
      <TextInput
        style={[styles.input, getInputBorderStyle('lastName')]}
        value={lastName}
        onChangeText={setLastName}
        onFocus={() => setFocusedField('lastName')}
        onBlur={() => setFocusedField(null)}
        placeholder="Last name"
        placeholderTextColor="#8f9098"
      />

      <Text style={[styles.label, { color: colors.text }]}>Phone</Text>
      <TextInput
        style={[styles.input, getInputBorderStyle('phoneNumber')]}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        onFocus={() => setFocusedField('phoneNumber')}
        onBlur={() => setFocusedField(null)}
        placeholder="+380..."
        keyboardType="phone-pad"
        placeholderTextColor="#8f9098"
      />

      <CustomButton
        title="Save"
        onPress={handleSave}
        style={styles.saveButton}
        disabled={!firstName.trim() || !lastName.trim() || !phoneNumber.trim()}
      />
    </View>
  );
};
