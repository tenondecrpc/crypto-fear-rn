import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
// import {Colors} from 'react-native/Libraries/NewAppScreen';
import FearImage from './src/components/FearImage';
import {requestPushPermission, getBackgroundNotification} from './src/helper';

requestPushPermission();
getBackgroundNotification();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    // backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    backgroundColor: 'white',
  };

  const styles = StyleSheet.create({
    container: {
      // backgroundColor: isDarkMode ? Colors.black : Colors.white,
    },
  });

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.container}>
          <FearImage />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
