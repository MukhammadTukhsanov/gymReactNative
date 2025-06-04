// src/screens/OnboardingScreen.js
import React from 'react';
import { Dimensions, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

interface OnboardingScreenProps {
  navigation?: any;
}

const { width, height } = Dimensions.get('window');

const OnboardingScreen = ({ navigation }: OnboardingScreenProps) => {
  return (
    <Onboarding
      onSkip={() => navigation.replace('Home')}
      onDone={() => navigation.replace('Home')}
      pages={[
        {
          backgroundColor: '#121212',
          image: (
            <Image
              source={require('../../../assets/images/Signup/onboarding-1.png')}
              style={{ width: width, height: height, position: 'absolute' }}
            />
          ),
          title: 'Welcome',
          subtitle: 'Your journey starts here!',
        },
        {
          backgroundColor: '#fdeb93',
          image: (
            <Image
              // source={require('../../assets/onboarding2.png')}
              style={{ width: '100%' }}
            />
          ),
          title: 'Connect',
          subtitle: 'Connect with your community.',
        },
        {
          backgroundColor: '#e9bcbe',
          image: (
            <Image
              // source={require('../../assets/onboarding3.png')}
              style={{ width: 200, height: 200 }}
            />
          ),
          title: 'Get Started',
          subtitle: 'Let’s dive in!',
        },
      ]}
    />
  );
};

export default OnboardingScreen;
