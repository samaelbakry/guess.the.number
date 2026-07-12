import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { useRouter } from "expo-router";

type GameOverScreenProps = {
  roundsNumber?: number;
  userNumber?: number;
};

export default function GameOverScreen({
  roundsNumber,
  userNumber,
}: GameOverScreenProps) {
  const router = useRouter();
  const onRestart = () => {
    router.replace("/");
  };
  return (
    <SafeAreaView style={tw`flex-1 bg-gray-100`}>
      <View style={tw`flex-1 justify-center items-center px-6`}>
        <Text style={tw`text-4xl font-bold text-gray-800 mb-8`}>
          Game Over!
        </Text>

        <View
          style={tw`bg-white rounded-3xl shadow-lg w-full p-6 items-center mb-8`}
        >
          <Text style={tw`text-lg text-gray-500 mb-2`}>Total Rounds</Text>

          <Text style={tw`text-5xl font-bold text-green-600 mb-6`}>
            {roundsNumber}
          </Text>

          <Text style={tw`text-lg text-gray-500`}>Your Number</Text>

          <Text style={tw`text-4xl font-bold text-blue-600 mt-2`}>
            {userNumber}
          </Text>
        </View>

        <TouchableOpacity
          onPress={onRestart}
          style={tw`bg-green-500 px-10 py-4 rounded-2xl shadow`}
        >
          <Text style={tw`text-white text-lg font-bold`}>Start New Game</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
