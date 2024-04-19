import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
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
    interface: {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    quote: {
        fontSize: 20,
        marginBottom: 20,
        position: 'absolute', 
        top: '50%',
        color: '#ffffff',
    },
    eightBallContainer: {
        alignItems: 'center',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    eightBallImage: {
        flex: 1,
        resizeMode: 'contain',
    },
    modalButton: {
        marginHorizontal: 10, 
        marginVertical: 5,
        width: "25%",
        backgroundColor: '#ffffff',
        borderColor: '#4CAF50',
        borderWidth: 5,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 10,
    },
    modelButtonClicked: {
        backgroundColor: 'black',
    },
    modalButtonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
});

export default styles;