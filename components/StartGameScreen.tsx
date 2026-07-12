import React, { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import GameScreen from "./GameScreen";

export default function StartGameScreen() {
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (value: string) => {
    setInputValue(value);
  };
  const handleConfirm = () => {
    let chossenNumber = parseInt(inputValue);
    if (isNaN(chossenNumber) || chossenNumber < 1 || chossenNumber > 99){
      return Alert.alert("please enter a number between 1 and 99 ");
    } else {
     return <GameScreen userNumber={chossenNumber}/>
    }
  }

  const handleReset = () => {
    setInputValue("")
  };
  
  return (
    <View style={tw`bg-white rounded-3xl p-6 mx-6 mt-20 shadow-lg`}>
      <Text style={tw`text-2xl font-bold text-center mb-6`}>
        Guess My Number
      </Text>

      <Text style={tw`text-center text-gray-500 mb-4`}>
        Enter a number between 1 and 99
      </Text>

      <View style={tw`items-center mb-8`}>
        <TextInput
          keyboardType="number-pad"
          placeholder="00"
          placeholderTextColor="gray"
          autoCapitalize="none"
          autoCorrect={false}
          maxLength={2}
          value={inputValue}
          onChangeText={handleInputValue}
          style={tw`w-24 h-16 text-3xl font-bold text-center border-b-4 border-green-500`}
        />
      </View>

      <View style={tw`flex-row justify-between`}>
        <TouchableOpacity
          onPress={handleReset}
          style={tw`bg-red-500 flex-1 mr-2 py-3 rounded-xl`}
        >
          <Text style={tw`text-white text-center font-bold text-lg`}>
            Reset
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleConfirm}
          style={tw`bg-green-500 flex-1 ml-2 py-3 rounded-xl`}
        >
          <Text style={tw`text-white text-center font-bold text-lg`}>
            Confirm
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
