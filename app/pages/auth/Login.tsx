import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PrimaryButton from '../../components/button/index';
import Input from '../../components/input';

interface LoginScreenProps {
  navigation?: any;
}

function LoginScreen({ navigation }: LoginScreenProps) {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleSignUp = () => {
    navigation?.navigate('SignUp');
  };
  const handleForgotPassword = () => {
    navigation?.navigate('Forgot Password');
  };
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/images/Login/SighUp/Group 1410094012.svg')} />
      <Image
        style={{ marginTop: 14 }}
        source={require('../../../assets/images/Login/SighUp/title.svg')}
      />
      <Image
        style={{ marginTop: 40, width: '100%', maxWidth: 460 }}
        source={require('../../../assets/images/Login/SighUp/Hero Header - Green2 2.png')}
      />

      <View style={{ width: '100%', paddingHorizontal: 16 }}>
        <PrimaryButton
          style={{ marginTop: 15, marginBottom: 13 }}
          type={'outline'}
          prefixIcon={require('../../../assets/images/Login/SighUp/Group 1410094021.svg')}
          onPress={() => {}}
        />
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
        <PrimaryButton
          title='Signup with email'
          onPress={() => navigation.navigate('Create Account')}
        ></PrimaryButton>
      </View>
      <TouchableOpacity style={{ marginTop: 20 }} onPress={handleForgotPassword}>
        <Text style={{ color: '#f0f0f0', textDecorationLine: 'underline' }}>forgot password?</Text>
      </TouchableOpacity>
      <View
        style={{
          position: 'absolute',
          bottom: 40,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderTopWidth: 1,
          borderTopColor: '#727272',
          width: 260,
        }}
      >
        <Text style={{ color: '#f0f0f0', fontSize: 14, marginTop: 4 }}>
          Already have an account?
        </Text>
        <TouchableOpacity style={{ marginTop: 4 }} onPress={handleSignUp}>
          <Text style={styles.loginLink}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121212',
  },
  logoSubtitle: {
    fontSize: 18,
    fontFamily: 'Unbounded-Regular',
    color: '#fff',
  },
  link: {
    color: '#009DFF',
    textDecorationLine: 'underline',
  },
  loginLink: {
    color: '#2BB6A9',
    fontSize: 14,
    fontWeight: '500',
    marginTop: 4,
  },
});

export default LoginScreen;
