import React from "react";
import GameScreen from "@/components/GameScreen";
import { useLocalSearchParams } from "expo-router";

export default function StartGame() {
  const { userNumber  } = useLocalSearchParams<{ userNumber: string }>();

  return <GameScreen userNumber={Number(userNumber)} />;
}
