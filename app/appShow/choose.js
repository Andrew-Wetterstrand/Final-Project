import { View, Text, Modal, Pressable } from 'react-native';
import DirectionButton from '../Components/directionButton';
import Styles from '../Styles/styles';
import { useState, useEffect } from 'react';

export default function App() {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={[Styles.container, { justifyContent: 'center' }]}>

            {/* Title */}
            <Text style={Styles.title}>Motivation Modes </Text>

            {/* back button */}
            <DirectionButton
                text="Go Back"
                path="../index"
                style={Styles.backButtonStyle}
            />

            {/* button to show options */}
            <Pressable 
                style={Styles.buttonStyle}
                onPress={() => setModalVisible(true)}
            >
                <Text style={Styles.buttonText}>Choose your options</Text>
            </Pressable>

            {/* maybe disable button until options are chosen */}
            {/* button to go to the eight ball */}
            <DirectionButton
                text="Procced to the eight ball"
                path="/eightBall"
                style={Styles.buttonStyle}
            />

            {/* button to show options */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={Styles.interface}>

                        <Pressable
                            style={Styles.backButtonStyle}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={Styles.buttonText}>Hide Modal</Text>
                        </Pressable>
                    </View>

                {/* dropdown */}

                {/* dropdown */}

                {/* dropdown */}
            </Modal>
        </View>

    );
};