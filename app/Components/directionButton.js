import { Pressable,Text } from "react-native";
import Styles from "../Styles/styles.js";
import { Link } from "expo-router";

export default DirectionButton = ({ text, style, path }) => {
    return (
            <Link href={path} asChild> 
                <Pressable
                    style={style}
                    onPress={() => { }}
                >
                    <Text style={Styles.buttonText}>{text}</Text>
                </Pressable>
            </Link>
    );
};
