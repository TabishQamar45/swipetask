import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-deck-swiper";
import Card from "./components/Card";
import React from "react";
import { images } from "./constants/Utils";
export default function App() {
  const [index, setIndex] = React.useState(0);
  const swipedHandler = () => {
    setIndex(index + 1);
  };
  return (
    <View style={styles.container}>
      <Text>Hello there!</Text>
      <Swiper
        cards={images}
        cardIndex={index}
        renderCard={(card) => <Card card={card} />}
        keyExtractor={(card) => card.id}
        onSwiping={swipedHandler}
        stackSize={4}
        swipeBackCard={true}
        stackScale={10}
        stackSeparation={14}
        infinite={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
