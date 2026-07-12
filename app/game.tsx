import GameOverScreen from '@/components/GameOverScreen'
import { useLocalSearchParams } from 'expo-router'
import React from 'react'

export default function Game() {
  const { userNumber } = useLocalSearchParams<{userNumber :string}>()
  return (
   <GameOverScreen userNumber={Number(userNumber)}/>
  )
}