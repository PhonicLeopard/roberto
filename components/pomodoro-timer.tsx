"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Play, Pause, RotateCcw, Settings } from "lucide-react"

export function PomodoroTimer() {
  const [minutes, setMinutes] = useState(25)
  const [seconds, setSeconds] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [isBreak, setIsBreak] = useState(false)
  const [totalTime, setTotalTime] = useState(25 * 60)

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isActive && (minutes > 0 || seconds > 0)) {
      interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1)
        } else if (minutes > 0) {
          setMinutes(minutes - 1)
          setSeconds(59)
        }
      }, 1000)
    } else if (minutes === 0 && seconds === 0) {
      setIsActive(false)
      // Alternar entre trabalho e pausa
      if (!isBreak) {
        setMinutes(5)
        setTotalTime(5 * 60)
        setIsBreak(true)
      } else {
        setMinutes(25)
        setTotalTime(25 * 60)
        setIsBreak(false)
      }
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isActive, minutes, seconds, isBreak])

  const reset = () => {
    setIsActive(false)
    if (isBreak) {
      setMinutes(5)
      setTotalTime(5 * 60)
    } else {
      setMinutes(25)
      setTotalTime(25 * 60)
    }
    setSeconds(0)
  }

  const currentTime = minutes * 60 + seconds
  const progress = ((totalTime - currentTime) / totalTime) * 100

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Temporizador Pomodoro</span>
          <Button variant="ghost" size="sm">
            <Settings className="h-4 w-4" />
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <div className="text-6xl font-mono font-bold text-primary">
            {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
          </div>
          <p className="text-sm text-muted-foreground mt-2">{isBreak ? "Tempo de pausa" : "Tempo de foco"}</p>
        </div>

        <Progress value={progress} className="w-full" />

        <div className="flex justify-center space-x-2">
          <Button onClick={() => setIsActive(!isActive)} variant={isActive ? "secondary" : "default"}>
            {isActive ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            {isActive ? "Pausar" : "Iniciar"}
          </Button>
          <Button onClick={reset} variant="outline">
            <RotateCcw className="h-4 w-4" />
            Reiniciar
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
