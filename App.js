import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './components/Tabs';
import Header from './components/Header';
import CacheContext from './components/CacheContext';
import { useState, useCallback } from 'react';
import { styles } from './style';
import { View } from 'react-native'

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [isLoaded] = useFonts({
    "mrt-bold": require("./assets/fonts/Montserrat-Bold.ttf"),
    "mrt-sbold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "nnt-sans-bold": require("./assets/fonts/NunitoSans-Bold.ttf"),
    "nnt-sans-xbold": require("./assets/fonts/NunitoSans-ExtraBold.ttf"),
    "ppn-bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "tk-med": require("./assets/fonts/Teko-Medium.ttf"),
    "tk-regular": require("./assets/fonts/Teko-Regular.ttf"),
  });
  const [cache, setCache] = useState([]);

  const updateCache = (cache) => {
    setCache(cache);
  }

  const handleOnLayout = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync(); //hide the splashscreen
    }
  }, [isLoaded]);

  if (!isLoaded) {
    return null;
  }
  
  return (
    <View
      style={styles.container}
      onLayout={handleOnLayout}
    >
      <CacheContext.Provider value={{ cache, updateCache }}>
        <NavigationContainer>
          <Header/>
          <Tabs/>
        </NavigationContainer>
      </CacheContext.Provider>
    </View>
  );
};

export default App;