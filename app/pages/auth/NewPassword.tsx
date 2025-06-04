import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PrimaryButton from '../../components/button';
import Input from '../../components/input';

interface WelcomeScreenProps {
  navigation?: any;
}

export default function NewPassword({ navigation }: WelcomeScreenProps) {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [errorRepeatPassword, setErrorRepeatPassword] = useState(false);

  const handleSignup = () => {
    navigation?.navigate('Welcome');
    console.log('Signup attempt:', { password });
  };

  const handleBack = () => {
    if (navigation?.canGoBack()) {
      navigation.goBack();
    } else {
      console.log('No previous screen to go back to');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='light-content' backgroundColor='#1a1a1a' />
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBack}>
          <Ionicons name='chevron-back' size={24} color='#fff' />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>New password</Text>
        <View style={styles.placeholder} />
      </View>
      <View
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 16,
        }}
      >
        <View style={styles.form}>
          <Text style={styles.pageTitle}>Please fill the details below</Text>
          <Text style={styles.pageSubtitle}>
            Enter the email address with your account and we'll send a code with confirmation to
            reset your password.
          </Text>
          <Input
            value={password}
            onChangeText={setPassword}
            isPassword={true}
            keyboardType={'visible-password'}
            placeholder='Password'
          />
          <Input
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            isPassword={true}
            keyboardType={'visible-password'}
            placeholder='Re-enter password'
          />
          <View style={{ height: 34, display: 'flex' }}>
            {errorRepeatPassword ? (
              <Text style={{ color: '#ed3737', fontSize: 14 }}>
                Repeat password is not matching.
              </Text>
            ) : (
              <Text style={{ color: '#adadad', fontSize: 14 }}>Minimum 8 characters</Text>
            )}
          </View>
        </View>
        <PrimaryButton
          style={{ marginBottom: 26 }}
          title={'Save new password'}
          onPress={handleSignup}
        ></PrimaryButton>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    justifyContent: 'center',
  },
  statusBarTitle: {
    paddingTop: 10,
    paddingBottom: 5,
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  backButton: {
    paddingVertical: 5,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#fff',
  },
  pageTitle: {
    color: '#f0f0f0',
    textAlign: 'center',
    marginBottom: 8,
    fontWeight: 600,
    fontSize: 16,
  },
  pageSubtitle: {
    color: '#adadad',
    textAlign: 'center',
    marginBottom: 24,
    fontSize: 14,
    fontWeight: 400,
  },
  placeholder: {
    width: 34,
  },
  form: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 16,
  },
});
