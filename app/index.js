import { StatusBar, View, Text, } from 'react-native';
import { useEffect } from 'react';
import DirectionButton from './Components/directionButton';
import Styles from './Styles/styles';

export default function App() {

  useEffect(() => {
    StatusBar.setBarStyle('light-content');
    StatusBar.setBackgroundColor('#4CAF50');
  }, []);

  return (
    <View style={[Styles.container, {justifyContent: 'center'}]}>

      {/* Title */}
      <Text style={Styles.title}>Motivational Mobile</Text>

      {/* button for choose own thing */}
      <DirectionButton
        text="Choose your own cards"
        path="choose"
        style={Styles.buttonStyle}
      />

      {/* button to show instructions */}
      <DirectionButton
        text="Instructions"
        path="./appShow/instructions.js"
        style={Styles.buttonStyle}
      />
    </View>
  );
};