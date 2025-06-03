import { StatusBar, View } from 'react-native';

function HomeScreen({}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar hidden={true} />
    </View>
  );
}

export default HomeScreen;
