import React, { useState, } from 'react';
import { View, Text, Modal, Pressable } from 'react-native';
import DirectionButton from '../Components/directionButton';
import Styles from '../Styles/styles';
import { Link } from "expo-router";

export default function App() {
    const [modalVisible, setModalVisible] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(Array(9).fill(false));
    const buttonTexts = ["Perserverance", "Courage", "Hope", "Determination", "Focus", "Action", "Self-Acceptance", "Self-Confidence", "Positivity"];

    // button dictionary
    // 1 2 3
    // 4 5 6
    // 7 8 9
    // Perserverance, Courage, Hope, 
    // Determination, Focus, Action, 
    // Self-Acceptance, Self-Confidence, Positivity

    const toggleButton = (index) => {
        const newClickedState = [...buttonClicked];
        newClickedState[index] = !newClickedState[index];
        setButtonClicked(newClickedState);

        console.log('///////////////////////')
        newClickedState.forEach((button, index) => {
            if (button === true) {
                console.log('Button ' + (index+1) + ' is clicked');
            }
        });
    };

    return (
        <View style={[Styles.container, { justifyContent: 'center' }]}>
            {/* Title */}
            <Text style={Styles.title}>Motivation Modes </Text>
            {/* back button */}
            <DirectionButton
                text="Go Back"
                path="../index" // not sure if this is the right path
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
            <Link 
            href={{
                pathname: "./eightBall",
                params: { 
                    button1: buttonClicked[0],
                    button2: buttonClicked[1],
                    button3: buttonClicked[2],
                    button4: buttonClicked[3],
                    button5: buttonClicked[4],
                    button6: buttonClicked[5],
                    button7: buttonClicked[6],
                    button8: buttonClicked[7],
                    button9: buttonClicked[8]
                 }
            }} 
            asChild> 
                <Pressable
                    style={Styles.buttonStyle}
                    onPress={() => { }}
                >
                    <Text style={Styles.buttonText}>Go to the Eight ball</Text>
                </Pressable>
            </Link>
            {/* Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)}
            >
                <View style={Styles.interface}>
                    <Pressable
                        style={Styles.backButtonStyle}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={Styles.buttonText}>Hide Modal</Text>
                    </Pressable>
                    {/* Nine buttons */}
                    <View style={Styles.modalButtonContainer}>
                        {[...Array(9)].map((_, index) => (
                            <Pressable
                                key={index}
                                style={[Styles.modalButton, buttonClicked[index] && Styles.modelButtonClicked]}
                                onPress={() => toggleButton(index)}>
                                <Text style={Styles.buttonText}>{buttonTexts[index]}</Text>
                            </Pressable>
                        ))}
                    </View>
                </View>
            </Modal>
        </View>
    );
};
