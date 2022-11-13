import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import _loadFontsAsync from './CustomFonts';

import WelcomeScreen from './src/screens/Welcome/WelcomeScreen';
import AuthMainScreen from './src/screens/Authentication/AuthMainScreen';

const Stack = createNativeStackNavigator();

const App = ()=>{
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen}
          options={{
            headerShown : false
          }}
        />
        <Stack.Screen 
          name="AuthMain" 
          component={AuthMainScreen}
          options={{
            headerShown : false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ()=>{
  
  [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(()=>{
    _loadFontsAsync();
  }, []);

  if(!fontsLoaded){
    return null;
  }

  return (
    <App />
  )
}
