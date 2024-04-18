import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        height: '100%',
        width: '100%',
    },
    buttonText: {
        color: '#4CAF50',
        fontSize: 20, 
        textAlign: 'center',
        overflow: 'hidden',
    },
    buttonStyle: {
        margin: 10,
        backgroundColor: '#ffffff',
        borderWidth: 5,
        borderColor: '#4CAF50',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
    title: {
        color: '#4CAF50',
        fontSize: 30,
        margin: 10,
    },
    backButtonStyle: {
        margin: 10,
        backgroundColor: '#ffffff',
        borderColor: '#4CAF50',
        borderWidth: 5,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
});

export default styles;