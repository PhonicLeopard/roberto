"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { InteractiveStudySession } from "@/components/interactive-study-session"
import { BookOpen, Clock, Target, Play, CheckCircle } from "lucide-react"

interface PhilosophyTopic {
  id: string
  period: string
  title: string
  description: string
  difficulty: "easy" | "medium" | "hard"
  estimatedMinutes: number
  completed: boolean
  progress: number
}

const philosophyTopics: PhilosophyTopic[] = [
  {
    id: "antiguidade",
    period: "Antiguidade",
    title: "Filosofia na Antiguidade",
    description: "Do pensamento mítico ao racional: Pré-socráticos, Sócrates, Platão e Aristóteles",
    difficulty: "medium",
    estimatedMinutes: 60,
    completed: false,
    progress: 0,
  },
  {
    id: "medieval",
    period: "Medieval",
    title: "Filosofia Medieval",
    description: "Patrística e Escolástica: Santo Agostinho e Tomás de Aquino",
    difficulty: "medium",
    estimatedMinutes: 50,
    completed: false,
    progress: 0,
  },
  {
    id: "helenistica",
    period: "Helenística",
    title: "Filosofia Helenística",
    description: "Estoicismo, Epicurismo, Ceticismo e Cinismo",
    difficulty: "medium",
    estimatedMinutes: 40,
    completed: false,
    progress: 0,
  },
  {
    id: "transicao",
    period: "Transição",
    title: "Transição Medieval-Moderna",
    description: "Renascimento, Reforma Protestante e mudanças culturais",
    difficulty: "hard",
    estimatedMinutes: 45,
    completed: false,
    progress: 0,
  },
]

export default function FilosofiaPage() {
  const [selectedTopic, setSelectedTopic] = useState<PhilosophyTopic | null>(null)
  const [showStudySession, setShowStudySession] = useState(false)
  const [topics, setTopics] = useState(philosophyTopics)

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

  const handleStudyComplete = (results: { correct: number; total: number; timeSpent: number }) => {
    if (selectedTopic) {
      const progressPercentage = (results.correct / results.total) * 100

      setTopics((prev) =>
        prev.map((topic) =>
          topic.id === selectedTopic.id
            ? { ...topic, progress: progressPercentage, completed: progressPercentage >= 70 }
            : topic,
        ),
      )
    }

    setShowStudySession(false)
    setSelectedTopic(null)
  }

  const startStudySession = (topic: PhilosophyTopic) => {
    setSelectedTopic(topic)
    setShowStudySession(true)
  }

  // Mock questions - em produção, viriam do banco de dados
  const mockQuestions = [
    {
      id: "1",
      type: "multiple_choice" as const,
      statement: "Qual a principal diferença entre o pensamento mítico e o pensamento racional (logos)?",
      options: [
        "O pensamento mítico é mais antigo que o racional",
        "O pensamento racional busca explicações baseadas na razão e observação, enquanto o mítico se baseia em narrativas sobrenaturais",
        "O pensamento mítico é mais complexo que o racional",
        "Não há diferença significativa entre eles",
      ],
      correctAnswer:
        "O pensamento racional busca explicações baseadas na razão e observação, enquanto o mítico se baseia em narrativas sobrenaturais",
      explanation:
        "A transição do mito ao logos marca o nascimento da filosofia, substituindo explicações sobrenaturais por investigação racional.",
      difficulty: "easy" as const,
    },
    {
      id: "2",
      type: "multiple_choice" as const,
      statement: "Segundo Sócrates, qual é o ponto de partida para o verdadeiro conhecimento?",
      options: [
        "A observação dos fenômenos naturais",
        "O estudo dos textos antigos",
        "O reconhecimento da própria ignorância",
        "A memorização de conceitos",
      ],
      correctAnswer: "O reconhecimento da própria ignorância",
      explanation:
        'A frase "só sei que nada sei" expressa a humildade intelectual necessária para buscar o verdadeiro conhecimento.',
      difficulty: "medium" as const,
    },
  ]

  if (showStudySession && selectedTopic) {
    return (
      <div className="container mx-auto px-4 py-8">
        <InteractiveStudySession
          topicTitle={selectedTopic.title}
          questions={mockQuestions}
          onComplete={handleStudyComplete}
        />
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Filosofia</h1>
        <p className="text-gray-600">Explore os grandes períodos e pensadores da história da filosofia</p>
      </div>

      <Tabs defaultValue="topics" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="topics">Tópicos</TabsTrigger>
          <TabsTrigger value="progress">Progresso</TabsTrigger>
          <TabsTrigger value="practice">Prática</TabsTrigger>
        </TabsList>

        <TabsContent value="topics" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {topics.map((topic) => (
              <Card key={topic.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{topic.title}</CardTitle>
                      <CardDescription className="text-sm">{topic.description}</CardDescription>
                    </div>
                    {topic.completed && <CheckCircle className="h-6 w-6 text-green-600" />}
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-4">
                        <Badge className={getDifficultyColor(topic.difficulty)}>{topic.difficulty}</Badge>
                        <div className="flex items-center space-x-1 text-gray-600">
                          <Clock className="h-4 w-4" />
                          <span>{topic.estimatedMinutes} min</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 text-gray-600">
                        <Target className="h-4 w-4" />
                        <span>{topic.progress}%</span>
                      </div>
                    </div>

                    {topic.progress > 0 && <Progress value={topic.progress} className="w-full" />}

                    <Button
                      onClick={() => startStudySession(topic)}
                      className="w-full"
                      variant={topic.completed ? "outline" : "default"}
                    >
                      <Play className="h-4 w-4 mr-2" />
                      {topic.completed ? "Revisar" : "Estudar"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="progress">
          <Card>
            <CardHeader>
              <CardTitle>Seu Progresso em Filosofia</CardTitle>
              <CardDescription>Acompanhe seu desempenho nos diferentes períodos filosóficos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {topics.map((topic) => (
                  <div key={topic.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-medium">{topic.title}</h3>
                      <p className="text-sm text-gray-600">{topic.period}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <Progress value={topic.progress} className="w-24" />
                      <span className="text-sm font-medium w-12">{topic.progress}%</span>
                      {topic.completed && <CheckCircle className="h-5 w-5 text-green-600" />}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="practice">
          <Card>
            <CardHeader>
              <CardTitle>Exercícios e Questões</CardTitle>
              <CardDescription>Pratique com questões variadas sobre filosofia</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-8">
                <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">
                  Complete pelo menos um tópico para desbloquear exercícios adicionais
                </p>
                <Button variant="outline" disabled>
                  Exercícios Bloqueados
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
