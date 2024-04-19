import { useEffect, useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native'; // Import Image and Pressable
import DirectionButton from '../Components/directionButton';
import Styles from '../Styles/styles';
import { initializeDatabase, getQuotes } from './sql.js';
import { useLocalSearchParams } from 'expo-router';

export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState(null);
  const params = useLocalSearchParams();


  // button dictionary
  // 1 2 3
  // 4 5 6
  // 7 8 9
  // Perserverance, Courage, Hope, 
  // Determination, Focus, Action, 
  // Self-Acceptance, Self-Confidence, Positivity
  // Initialize the database

  
  useEffect(() => {
    initializeDatabase();
  }, []);

  // Get the quotes
  useEffect(() => {
    getQuotes(setQuotes);
  }, []);

  //filter quotes based on the button clicked
  //then randomly select a quote from the filtered quotes
  const selectRandomQuote = () => {
    console.log(params);
    let filteredQuotes = [];
    for (let i = 0; i < quotes.length; i++) {
      //inspirational
      if (quotes[i].Inspirational === "Perseverance" && params.button1 == "true") {
        filteredQuotes.push(quotes[i]);
      }
      if (quotes[i].Inspirational === "Courage" && params.button2 === "true") {
        filteredQuotes.push(quotes[i]);
      }
      if (quotes[i].Inspirational === "Hope" && params.button3 === "true") {
        filteredQuotes.push(quotes[i]);
      }
      //goal oriented
      if (quotes[i].GoalOriented === "Determination" && params.button4 === "true") {
        filteredQuotes.push(quotes[i]);
      }
      if (quotes[i].GoalOriented === "Focus" && params.button5 === "true") {
        filteredQuotes.push(quotes[i]);
      }
      if (quotes[i].GoalOriented === "Action" && params.button6 === "true") {
        filteredQuotes.push(quotes[i]);
      }
      //self love
      if (quotes[i].SelfLove === "Self-Acceptance" && params.button7 === "true") {
        filteredQuotes.push(quotes[i]);
      }
      if (quotes[i].SelfLove === "Self-Confidence" && params.button8 === "true") {
        filteredQuotes.push(quotes[i]);
      }
      if (quotes[i].SelfLove === "Positivity" && params.button9 === "true") {
        filteredQuotes.push(quotes[i]);
      }
    }
    console.log(filteredQuotes);
    const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
    setRandomQuote(filteredQuotes[randomIndex]);
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
