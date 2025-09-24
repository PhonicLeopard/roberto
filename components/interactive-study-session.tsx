"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Lightbulb, Clock, Target } from "lucide-react"

interface Question {
  id: string
  type: "multiple_choice" | "true_false" | "essay"
  statement: string
  options?: string[]
  correctAnswer?: string | boolean
  explanation: string
  difficulty: "easy" | "medium" | "hard"
}

interface InteractiveStudySessionProps {
  topicTitle: string
  questions: Question[]
  onComplete: (results: { correct: number; total: number; timeSpent: number }) => void
}

export function InteractiveStudySession({ topicTitle, questions, onComplete }: InteractiveStudySessionProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, any>>({})
  const [showExplanation, setShowExplanation] = useState(false)
  const [sessionStartTime] = useState(Date.now())
  const [questionStartTime, setQuestionStartTime] = useState(Date.now())
  const [results, setResults] = useState<{ questionId: string; correct: boolean; timeSpent: number }[]>([])

  const currentQuestion = questions[currentQuestionIndex]
  const isLastQuestion = currentQuestionIndex === questions.length - 1
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100

  const handleAnswer = (answer: any) => {
    setAnswers((prev) => ({ ...prev, [currentQuestion.id]: answer }))
  }

  const checkAnswer = () => {
    const userAnswer = answers[currentQuestion.id]
    const isCorrect = userAnswer === currentQuestion.correctAnswer
    const timeSpent = Date.now() - questionStartTime

    setResults((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        correct: isCorrect,
        timeSpent,
      },
    ])

    setShowExplanation(true)
  }

  const nextQuestion = () => {
    if (isLastQuestion) {
      const totalTimeSpent = Date.now() - sessionStartTime
      const correctAnswers = results.filter((r) => r.correct).length
      onComplete({
        correct: correctAnswers,
        total: questions.length,
        timeSpent: Math.floor(totalTimeSpent / 1000),
      })
    } else {
      setCurrentQuestionIndex((prev) => prev + 1)
      setShowExplanation(false)
      setQuestionStartTime(Date.now())
    }
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "easy":
        return "bg-green-100 text-green-800"
      case "medium":
        return "bg-yellow-100 text-yellow-800"
      case "hard":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const renderQuestion = () => {
    switch (currentQuestion.type) {
      case "multiple_choice":
        return (
          <RadioGroup value={answers[currentQuestion.id] || ""} onValueChange={handleAnswer} className="space-y-3">
            {currentQuestion.options?.map((option, index) => (
              <div key={index} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={`option-${index}`} />
                <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                  {option}
                </Label>
              </div>
            ))}
          </RadioGroup>
        )

      case "true_false":
        return (
          <RadioGroup
            value={answers[currentQuestion.id]?.toString() || ""}
            onValueChange={(value) => handleAnswer(value === "true")}
            className="space-y-3"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="true" id="true" />
              <Label htmlFor="true" className="cursor-pointer">
                Verdadeiro
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="false" id="false" />
              <Label htmlFor="false" className="cursor-pointer">
                Falso
              </Label>
            </div>
          </RadioGroup>
        )

      case "essay":
        return (
          <Textarea
            placeholder="Digite sua resposta aqui..."
            value={answers[currentQuestion.id] || ""}
            onChange={(e) => handleAnswer(e.target.value)}
            className="min-h-32"
          />
        )

      default:
        return null
    }
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl">{topicTitle}</CardTitle>
            <CardDescription>
              Questão {currentQuestionIndex + 1} de {questions.length}
            </CardDescription>
          </div>
          <Badge className={getDifficultyColor(currentQuestion.difficulty)}>{currentQuestion.difficulty}</Badge>
        </div>
        <Progress value={progress} className="w-full" />
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h3 className="text-lg font-medium leading-relaxed">{currentQuestion.statement}</h3>

          {renderQuestion()}
        </div>

        {showExplanation && (
          <Card className="border-l-4 border-l-blue-500 bg-blue-50">
            <CardContent className="pt-4">
              <div className="flex items-start space-x-2">
                <Lightbulb className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-medium text-blue-900 mb-2">Explicação</h4>
                  <p className="text-blue-800">{currentQuestion.explanation}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="flex justify-between">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>
                Questão {currentQuestionIndex + 1}/{questions.length}
              </span>
            </div>
            <div className="flex items-center space-x-1">
              <Target className="h-4 w-4" />
              <span>{results.filter((r) => r.correct).length} corretas</span>
            </div>
          </div>

          <div className="space-x-2">
            {!showExplanation ? (
              <Button onClick={checkAnswer} disabled={!answers[currentQuestion.id]}>
                Verificar Resposta
              </Button>
            ) : (
              <Button onClick={nextQuestion}>{isLastQuestion ? "Finalizar" : "Próxima Questão"}</Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
