import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PrimaryButton from '../../components/button';
import Input from '../../components/input';

interface CreateAccountScreenProps {
  navigation?: any;
}

export default function CreateAccountScreen({ navigation }: CreateAccountScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    if (!email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match');
      return;
    }

    console.log('Signup attempt:', { email, password });
    Alert.alert('Success', 'Account created successfully!');
  };

  const handleLogin = () => {
    navigation?.navigate('Login');
  };

  const handleTermsPress = () => {
    console.log('Navigate to Terms of Service');
  };

  const handlePrivacyPress = () => {
    console.log('Navigate to Privacy Policy');
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
        <Text style={styles.headerTitle}>Create account</Text>
        <View style={styles.placeholder} />
      </View>
      <View style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <View style={styles.profileIconContainer}>
          <View style={styles.profileIcon}>
            <Image
              style={{ width: 90, height: 97 }}
              source={require('../../../assets/images/Signup/Mask group.svg')}
            />
          </View>
        </View>
        <View style={styles.form}>
          <Input
            value={email}
            onChangeText={setEmail}
            keyboardType={'email-address'}
            placeholder='Enter your email'
          />
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
          <View style={{ height: 34, display: 'flex', justifyContent: 'flex-end' }}>
            <Text style={{ color: '#ed3737', fontSize: 14 }}>
              Oops! Looks like there was a typo. Let's try again!
            </Text>
          </View>
          <PrimaryButton
            style={{ marginTop: 4 }}
            title={'Signup with email'}
            onPress={handleSignup}
          ></PrimaryButton>
          <View style={styles.termsContainer}>
            <Text style={styles.termsText}>By signing up, you agree to our </Text>
            <TouchableOpacity onPress={handleTermsPress}>
              <Text style={styles.linkText}>
                Terms of Service
                <Text style={styles.termsText}> and </Text>
                <TouchableOpacity onPress={handlePrivacyPress}>
                  <Text style={styles.linkText}>Privacy Policy</Text>
                </TouchableOpacity>
                <Text style={styles.termsText}>.</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.loginContainerWrapper}>
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account?</Text>
          <TouchableOpacity onPress={handleLogin}>
            <Text style={styles.loginLink}>Login</Text>
          </TouchableOpacity>
        </View>
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
  placeholder: {
    width: 34,
  },
  profileIconContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  profileIcon: {
    width: 126,
    height: 134,
    backgroundColor: '#2a4a3e',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    paddingHorizontal: 16,
  },
  termsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: 34,
  },
  termsText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 21,
  },
  linkText: {
    color: '#009dff',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  loginContainerWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    alignItems: 'center',
    paddingBottom: 30,
    borderTopWidth: 1,
    borderTopColor: '#727272',
    paddingTop: 4,
    width: 260,
  },
  loginText: {
    color: '#f0f0f0',
    fontSize: 14,
    marginBottom: 4,
  },
  loginLink: {
    color: '#2BB6A9',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 4,
  },
});
