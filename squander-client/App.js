import React, {useState, useEffect} from 'react';
import _loadFontsAsync from './CustomFonts';

import WelcomeScreen from './src/screens/Welcome/WelcomeScreen';

const App = ()=>{
  return <WelcomeScreen />
}

export default ()=>{
  
  [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(()=>{
    _loadFontsAsync();
  }, []);

  if(!fontsLoaded){
    return null;
  }

  return <App />
}
