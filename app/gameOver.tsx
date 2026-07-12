import GameOverScreen from '@/components/GameOverScreen'
import { useLocalSearchParams } from 'expo-router'
import React from 'react'

export default function GameOver() {
  const { userNumber , rounds  } = useLocalSearchParams<{userNumber :string , rounds:string}>()
  return (
   <GameOverScreen userNumber={Number(userNumber)} roundsNumber={Number(rounds)}/>
  )
}