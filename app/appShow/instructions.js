import { View, Text, } from 'react-native';
import GoBackButton from '../Components/goBackButton';
import Styles from '../Styles/styles';

export default function App() {
  return (
    <View style={Styles.container}>

      {/* Instructions */}
      <Text style={Styles.title}>Instructions</Text>

      {/* back button */}
      <GoBackButton
        text="Go Back"
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