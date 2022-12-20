import { View, Text, Image, Dimensions } from "react-native";
import React from "react";

const Card = ({ card }) => {
  return (
    <View
      style={{
        flex: 0.45,
        borderRadius: 8,
        shadowRadius: 25,
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowOffset: { width: 0, height: 0 },
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Image
        source={card.image}
        style={{
          width: Dimensions.get("window").width,
          flex: 1,
          resizeMode: "contain",
        }}
      />
    </View>
  );
};

export default Card;
