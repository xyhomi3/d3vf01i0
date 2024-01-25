'use client'

import { LucideVolume2, LucideVolumeX, icons } from 'lucide-react'
import React, { useState } from 'react'

import { Button } from '@/components/atoms/button'

let audioBG: HTMLAudioElement
let isMusic = false
let generalVolume = 1

export const AmbientMusic = () => {
  //const [getCurrentMenuClicked, setCurrentMenuClicked] = useState(false);
  const [isMusicOn, setIsMusicOn] = useState(false)

  const backGroundMusic = (e: any) => {
    // Verifica si la instancia de Audio ya existe, si no, crea una nueva.
    if (!audioBG) {
      audioBG = new Audio('/sounds/music.mp3')
      audioBG.volume = generalVolume
      audioBG.loop = true
    }

    // Verifica si la música está reproduciéndose o no y actúa en consecuencia.
    if (!isMusic) {
      audioBG.play()
      setIsMusicOn(true)
    } else {
      audioBG.pause()
      setIsMusicOn(false)
    }
    isMusic = !isMusic // Cambia el estado de isMusic al valor opuesto.
  }
  return (
    <>
      <Button
        id='musicTrigger'
        variant="outline"
        size="icon"
        className='absolute z-40 top-20 left-5 w-7 h-7 hover:bg-transparent border-gray-500 dark:border-gray-200 cursor-pointer text-secondary dark:text-gray-200 backdrop-filter backdrop-blur bg-black bg-opacity-25 hover:text-white'
        onClick={e => backGroundMusic(e)}
      >
        {isMusicOn ? <LucideVolume2 size={20} /> : <LucideVolumeX size={20} />}
      </Button>
    </>
  )
}
