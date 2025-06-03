import { Link } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PrimaryButton from '../../components/button/index';

function SignUp({ navigation }) {
  const handleLogin = () => {
    navigation?.navigate('Login');
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
          style={{ marginTop: 15 }}
          type={'outline'}
          prefixIcon={require('../../../assets/images/Login/SighUp/Group 1410094021.svg')}
          onPress={() => {}}
        />
        <PrimaryButton
          title='Signup with email'
          style={{ marginTop: 15 }}
          onPress={() => navigation.navigate('Create Account')}
        ></PrimaryButton>
      </View>
      <Text
        style={{
          color: '#adadad',
          textAlign: 'center',
          fontSize: 14,
          fontWeight: 400,
          marginTop: 28,
          lineHeight: 21,
        }}
      >
        By signing up, you agree to our <br />{' '}
        <Link style={styles.link} href={'/'}>
          Terms of Service
        </Link>{' '}
        and{' '}
        <Link style={styles.link} href={'/'}>
          Privacy Policy.
        </Link>
      </Text>
      <Text style={{ color: '#adadad', fontSize: 14, marginTop: 20 }}>
        Having trouble?{' '}
        <Link style={styles.link} href={'/'}>
          Contact us.
        </Link>
      </Text>
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
        <Text style={{ color: '#adadad', fontSize: 14, marginTop: 20 }}>
          Already have an account?
        </Text>
        <TouchableOpacity style={{ color: '#32CBBF', marginTop: 4 }} onPress={handleLogin}>
          Login
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
});

export default SignUp;
