import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { KeyboardTypeOptions, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

interface InputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  keyboardType?: KeyboardTypeOptions;
  isPassword?: boolean;
}

export default function Input({
  value,
  onChangeText,
  placeholder,
  keyboardType = 'default',
  isPassword = false,
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor='#666'
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry={isPassword && !showPassword}
      />
      {isPassword && (
        <TouchableOpacity style={styles.eyeIcon} onPress={() => setShowPassword(!showPassword)}>
          <Ionicons name={showPassword ? 'eye-off' : 'eye'} size={20} color='#666' />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#1B1D1B',
    borderRadius: 8,
    padding: 16,
    paddingRight: 40, // space for the icon
    fontSize: 16,
    color: '#fff',
    borderWidth: 1,
    borderColor: 'rgba(43, 182, 169, 0.55)',
    height: 44,
  },
  eyeIcon: {
    position: 'absolute',
    right: 12,
    top: 12,
  },
});
