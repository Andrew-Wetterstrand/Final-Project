import { Pressable,Text } from "react-native";
import Styles from "../Styles/styles.js";
import { useNavigation } from "expo-router";

export default GoBackButton = ({text, style}) => {
    const navigate = useNavigation();
    return (
        <Pressable
            style={style}
            onPress={() => navigate.goBack()}
        >
            <Text style={Styles.buttonText}>{text}</Text>
        </Pressable>
    );
}