import React, { useEffect, useState } from 'react';
import { View, Text, Button, Image, Pressable } from 'react-native'; // Import Image and Pressable
import DirectionButton from '../Components/directionButton';
import Styles from '../Styles/styles';
import { initializeDatabase, getQuotes } from './sql.js';

export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState(null);

  // Initialize the database
  useEffect(() => {
    initializeDatabase();
  }, []);

  // Get the quotes
  useEffect(() => {
    getQuotes(setQuotes);
  }, []);

  // Function to select a random quote
  const selectRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  };

  return (
    <View style={[Styles.container, { justifyContent: 'center' }]}>
      {/* Button to go back */}
      <DirectionButton
        text="Choose your own cards"
        path="./choose"
        style={Styles.buttonStyle}
      />

      {/* Eight ball image */}
      <Pressable onPress={selectRandomQuote} style={Styles.eightBallContainer}>
        <Image source={require('../../assets/8ball.png')} style={Styles.eightBallImage} />
        {/* Display random quote */}
        {randomQuote && (
          <Text style={Styles.quote}>
            {randomQuote.quote}
          </Text>
        )}
      </Pressable>
    </View>
  );
}
