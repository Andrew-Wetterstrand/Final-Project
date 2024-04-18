import { StatusBar, View, Text, } from 'react-native';
import { useEffect } from 'react';
import DirectionButton from '../Components/directionButton';
import Styles from '../Styles/styles';

export default function App() {
  return (
    <View style={Styles.container}>

      {/* Instructions */}
      <Text style={Styles.title}>Instructions</Text>

      {/* back button */}
      <DirectionButton
        text="Go Back"
        path="../index.js"
        style={Styles.backButtonStyle}
      />
        <Text style={Styles.buttonText}>
            This app is designed to help you stay motivated and focused on your goals. 
            You can choose to have the app show you motivational cards, or you can choose your own cards. 
            You can also choose to have the app show you a motivational quote every day. 
            To get started, click on one of the buttons below.
        </Text>

    </View>
  );
};