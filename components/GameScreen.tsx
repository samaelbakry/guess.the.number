import { View, Text, TouchableOpacity, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

function generateRandomNumber(min: number, max: number, execute: number) {
  let rndNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  if (rndNumber === execute) {
    return generateRandomNumber(min, max, execute);
  } else {
    return rndNumber;
  }
}

let minBoundry = 1;
let maxBoundry = 100;

export default function GameScreen({ userNumber }: { userNumber: number }) {
  const initial = generateRandomNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initial);
  const router = useRouter();

  useEffect(() => {
    if (currentGuess === userNumber) {
      router.replace({
        pathname: "/game",
        params: {
          userNumber: String(userNumber),
        },
      });
    }
  }, [currentGuess, userNumber, router]);

  const handleRandomNumber = (direction: string) => {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("oops!", "you are on the wrong way", [
        { text: "Cancel", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundry = currentGuess;
    } else {
      minBoundry = currentGuess + 1;
    }
    let correctAnswer = generateRandomNumber(
      minBoundry,
      maxBoundry,
      currentGuess,
    );
    setCurrentGuess(correctAnswer);
  };

  return (
    <SafeAreaView style={tw`flex-1 bg-gray-100 px-6`}>
      <View style={tw`flex-1 justify-center items-center`}>
        <Text style={tw`text-3xl font-bold text-gray-800 mb-10`}>
          Opponent&apos;s Guess
        </Text>

        <View
          style={tw`bg-white rounded-2xl shadow-lg px-12 py-8 items-center mb-10`}
        >
          <Text style={tw`text-gray-500 text-lg mb-2`}>Current Guess</Text>
          <Text style={tw`text-5xl font-bold text-green-600`}>
            {currentGuess}
          </Text>
        </View>

        <Text style={tw`text-xl font-semibold text-gray-700 mb-6`}>
          Higher or Lower?
        </Text>

        <View style={tw`flex-row`}>
          <TouchableOpacity
            onPress={() => {
              handleRandomNumber("lower");
            }}
            style={tw`bg-red-500 px-8 py-4 rounded-xl mr-4`}
          >
            <Ionicons name="remove-circle-outline" color={"gray"} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              handleRandomNumber("greater");
            }}
            style={tw`bg-green-500 px-8 py-4 rounded-xl ml-4`}
          >
            <Ionicons name="pulse-outline" color={"gray"} />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
