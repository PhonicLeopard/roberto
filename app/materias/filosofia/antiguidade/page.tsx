"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, BookOpen, Brain, CheckCircle, Clock, Target } from "lucide-react"
import Link from "next/link"

interface StudySection {
  id: string
  title: string
  content: string
  keyPoints: string[]
  examples: string[]
  completed: boolean
}

interface Exercise {
  id: string
  type: "multiple_choice" | "true_false" | "conceptual"
  statement: string
  options?: string[]
  correctAnswer: string
  explanation: string
  difficulty: "easy" | "medium" | "hard"
}

const studySections: StudySection[] = [
  {
    id: "pensamento-mitico",
    title: "Do Pensamento Mítico ao Racional",
    content: `A filosofia nasceu na Grécia Antiga (século VI a.C.) como uma nova forma de explicar o mundo, substituindo as explicações míticas por investigações racionais. Esta transição marca o nascimento do pensamento ocidental.

O pensamento mítico caracterizava-se por explicações sobrenaturais, onde deuses e forças mágicas eram responsáveis pelos fenômenos naturais. Já o pensamento racional (logos) busca explicações baseadas na razão, observação e argumentação lógica.`,
    keyPoints: [
      "Transição do mito (mythos) para a razão (logos)",
      "Nascimento da filosofia no século VI a.C. na Grécia",
      "Busca por explicações naturais dos fenômenos",
      "Desenvolvimento do pensamento crítico e questionador",
    ],
    examples: [
      "Mito: Zeus causa os raios / Racional: Fenômeno elétrico atmosférico",
      "Mito: Poseidon causa terremotos / Racional: Movimento das placas tectônicas",
    ],
    completed: false,
  },
  {
    id: "pre-socraticos",
    title: "Filósofos Pré-Socráticos",
    content: `Os pré-socráticos foram os primeiros filósofos, focados em compreender a natureza (physis) e encontrar o princípio fundamental (arché) de todas as coisas.

Tales de Mileto (624-546 a.C.) considerava a água como princípio de tudo. Anaximandro propôs o ápeiron (indefinido). Heráclito defendia que tudo flui e o fogo como elemento primordial. Parmênides argumentava que o ser é uno e imutável.`,
    keyPoints: [
      "Busca pelo arché (princípio fundamental)",
      "Tales: água como princípio",
      "Heráclito: tudo flui, logos universal",
      "Parmênides: ser uno e imutável",
      "Demócrito: teoria atomista",
    ],
    examples: [
      "Tales previu eclipse solar usando matemática",
      "Heráclito: 'Não se pode entrar duas vezes no mesmo rio'",
      "Demócrito: tudo é composto de átomos indivisíveis",
    ],
    completed: false,
  },
  {
    id: "sofistas",
    title: "Os Sofistas",
    content: `Os sofistas foram professores itinerantes que ensinavam retórica, política e filosofia mediante pagamento. Eram relativistas, questionando verdades absolutas e focando na persuasão.

Protágoras (490-420 a.C.) afirmou que "o homem é a medida de todas as coisas", defendendo o relativismo. Górgias desenvolveu técnicas retóricas sofisticadas. Foram criticados por Sócrates e Platão por priorizarem a persuasão sobre a verdade.`,
    keyPoints: [
      "Professores itinerantes pagos",
      "Relativismo: verdade depende do contexto",
      "Protágoras: 'homem é medida de todas as coisas'",
      "Foco na retórica e persuasão",
      "Crítica socrática ao relativismo",
    ],
    examples: [
      "Protágoras: o que é justo varia entre culturas",
      "Górgias: técnicas para defender qualquer posição",
      "Ensino de retórica para jovens aristocratas",
    ],
    completed: false,
  },
  {
    id: "socrates",
    title: "Sócrates (470-399 a.C.)",
    content: `Sócrates revolucionou a filosofia ao focar no conhecimento de si mesmo e na ética. Desenvolveu o método socrático (maiêutica), usando perguntas para levar à descoberta da verdade.

Sua famosa frase "só sei que nada sei" expressa a humildade intelectual necessária para o verdadeiro conhecimento. Acreditava que ninguém faz o mal voluntariamente - o mal resulta da ignorância. Foi condenado à morte por "corromper a juventude" e "não reconhecer os deuses da cidade".`,
    keyPoints: [
      "Método socrático (maiêutica): conhecimento através de perguntas",
      "'Só sei que nada sei': humildade intelectual",
      "Conhece-te a ti mesmo (gnôthi seautón)",
      "Ninguém faz o mal voluntariamente",
      "Morte por envenenamento (cicuta) em 399 a.C.",
    ],
    examples: [
      "Diálogo sobre justiça: questiona definições até chegar à essência",
      "Ironia socrática: fingir ignorância para ensinar",
      "Julgamento: preferiu morte a exílio por fidelidade aos princípios",
    ],
    completed: false,
  },
  {
    id: "platao",
    title: "Platão (428-348 a.C.)",
    content: `Discípulo de Sócrates, Platão desenvolveu uma filosofia sistemática baseada na Teoria das Ideias. Segundo ele, existe um mundo inteligível (das Ideias perfeitas) e um mundo sensível (das cópias imperfeitas).

Fundou a Academia em Atenas (387 a.C.), primeira instituição de ensino superior do Ocidente. Seus diálogos, com Sócrates como personagem principal, abordam temas como justiça, conhecimento, política e amor. Propôs um Estado ideal governado por filósofos-reis.`,
    keyPoints: [
      "Teoria das Ideias: mundo inteligível vs sensível",
      "Alegoria da Caverna: níveis de conhecimento",
      "Academia: primeira universidade ocidental",
      "República: Estado ideal com filósofos-reis",
      "Alma tripartite: razão, ânimo, apetite",
    ],
    examples: [
      "Ideia de Justiça perfeita vs justiças imperfeitas no mundo",
      "Alegoria da Caverna: prisioneiros vendo sombras na parede",
      "Filósofo-rei: governante sábio que conhece o Bem",
    ],
    completed: false,
  },
  {
    id: "aristoteles",
    title: "Aristóteles (384-322 a.C.)",
    content: `Discípulo de Platão, Aristóteles desenvolveu um sistema filosófico abrangente, criticando a Teoria das Ideias. Para ele, a essência (forma) está nas próprias coisas, não em mundo separado.

Fundou o Liceu e desenvolveu a lógica formal, criando o silogismo. Classificou as ciências em teóricas, práticas e produtivas. Sua ética foca na busca da felicidade (eudaimonia) através das virtudes. Foi tutor de Alexandre, o Grande.`,
    keyPoints: [
      "Crítica à Teoria das Ideias platônica",
      "Hilemorfismo: matéria + forma = substância",
      "Lógica: silogismo e princípios do pensamento",
      "Ética: virtude como meio-termo, eudaimonia",
      "Classificação das ciências e do conhecimento",
    ],
    examples: [
      "Silogismo: Todo homem é mortal; Sócrates é homem; Logo, Sócrates é mortal",
      "Virtude da coragem: meio-termo entre covardia e temeridade",
      "Classificação: Física (teórica), Ética (prática), Retórica (produtiva)",
    ],
    completed: false,
  },
]

const exercises: Exercise[] = [
  {
    id: "1",
    type: "multiple_choice",
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
    difficulty: "easy",
  },
  {
    id: "2",
    type: "multiple_choice",
    statement: "Segundo Sócrates, qual é o ponto de partida para o verdadeiro conhecimento?",
    options: [
      "A observação dos fenômenos naturais",
      "O estudo dos textos antigos",
      "O reconhecimento da própria ignorância",
      "A memorização de conceitos",
    ],
    correctAnswer: "O reconhecimento da própria ignorância",
    explanation:
      "A frase 'só sei que nada sei' expressa a humildade intelectual necessária para buscar o verdadeiro conhecimento.",
    difficulty: "medium",
  },
  {
    id: "3",
    type: "true_false",
    statement: "Para Platão, o mundo sensível contém as Ideias perfeitas e eternas.",
    correctAnswer: "Falso",
    explanation:
      "Para Platão, as Ideias perfeitas estão no mundo inteligível. O mundo sensível contém apenas cópias imperfeitas das Ideias.",
    difficulty: "medium",
  },
  {
    id: "4",
    type: "conceptual",
    statement:
      "Explique o método socrático (maiêutica) e sua importância para o desenvolvimento do pensamento filosófico.",
    correctAnswer:
      "O método socrático consiste em fazer perguntas sucessivas para levar o interlocutor a descobrir a verdade por si mesmo, como uma parteira ajuda no nascimento. É importante porque desenvolve o pensamento crítico e a autonomia intelectual.",
    explanation:
      "A maiêutica socrática revolucionou o ensino ao tornar o aluno protagonista de seu aprendizado, método ainda usado na educação moderna.",
    difficulty: "hard",
  },
]

export default function FilosofiaAntiguidade() {
  const [sections, setSections] = useState(studySections)
  const [currentExercise, setCurrentExercise] = useState<Exercise | null>(null)
  const [selectedAnswer, setSelectedAnswer] = useState("")
  const [showExplanation, setShowExplanation] = useState(false)
  const [exerciseResults, setExerciseResults] = useState<{ [key: string]: boolean }>({})

  const toggleSectionComplete = (sectionId: string) => {
    setSections((prev) =>
      prev.map((section) => (section.id === sectionId ? { ...section, completed: !section.completed } : section)),
    )
  }

  const handleExerciseAnswer = (exercise: Exercise, answer: string) => {
    setSelectedAnswer(answer)
    setShowExplanation(true)
    const isCorrect = answer === exercise.correctAnswer
    setExerciseResults((prev) => ({ ...prev, [exercise.id]: isCorrect }))
  }

  const completedSections = sections.filter((s) => s.completed).length
  const progressPercentage = (completedSections / sections.length) * 100

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <Link href="/materias/filosofia">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Voltar para Filosofia
          </Button>
        </Link>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Filosofia na Antiguidade</h1>
            <p className="text-gray-600">
              Do pensamento mítico ao racional: Pré-socráticos, Sócrates, Platão e Aristóteles
            </p>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-2 mb-2">
              <Clock className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-600">60 min</span>
            </div>
            <div className="flex items-center space-x-2">
              <Target className="h-4 w-4 text-gray-500" />
              <span className="text-sm font-medium">{Math.round(progressPercentage)}% concluído</span>
            </div>
          </div>
        </div>

        <Progress value={progressPercentage} className="mt-4" />
      </div>

      <Tabs defaultValue="content" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="content">Conteúdo</TabsTrigger>
          <TabsTrigger value="exercises">Exercícios</TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="space-y-6">
          {sections.map((section) => (
            <Card key={section.id} className="w-full">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{section.title}</CardTitle>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox checked={section.completed} onCheckedChange={() => toggleSectionComplete(section.id)} />
                    <span className="text-sm text-gray-600">Concluído</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Conteúdo Principal */}
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">{section.content}</p>
                </div>

                {/* Pontos-Chave */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                    <Brain className="h-4 w-4 mr-2" />
                    Pontos-Chave
                  </h4>
                  <ul className="space-y-2">
                    {section.keyPoints.map((point, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exemplos */}
                {section.examples.length > 0 && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Exemplos
                    </h4>
                    <div className="space-y-2">
                      {section.examples.map((example, index) => (
                        <div key={index} className="bg-blue-50 p-3 rounded-lg border-l-4 border-blue-400">
                          <p className="text-gray-700 text-sm">{example}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="exercises" className="space-y-6">
          {currentExercise ? (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Exercício</CardTitle>
                  <Badge
                    className={
                      currentExercise.difficulty === "easy"
                        ? "bg-green-100 text-green-800"
                        : currentExercise.difficulty === "medium"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                    }
                  >
                    {currentExercise.difficulty}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-900 font-medium">{currentExercise.statement}</p>

                {currentExercise.type === "multiple_choice" && currentExercise.options && (
                  <div className="space-y-2">
                    {currentExercise.options.map((option, index) => (
                      <Button
                        key={index}
                        variant={selectedAnswer === option ? "default" : "outline"}
                        className="w-full text-left justify-start h-auto p-4"
                        onClick={() => handleExerciseAnswer(currentExercise, option)}
                        disabled={showExplanation}
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                )}

                {currentExercise.type === "true_false" && (
                  <div className="flex space-x-4">
                    <Button
                      variant={selectedAnswer === "Verdadeiro" ? "default" : "outline"}
                      onClick={() => handleExerciseAnswer(currentExercise, "Verdadeiro")}
                      disabled={showExplanation}
                      className="flex-1"
                    >
                      Verdadeiro
                    </Button>
                    <Button
                      variant={selectedAnswer === "Falso" ? "default" : "outline"}
                      onClick={() => handleExerciseAnswer(currentExercise, "Falso")}
                      disabled={showExplanation}
                      className="flex-1"
                    >
                      Falso
                    </Button>
                  </div>
                )}

                {showExplanation && (
                  <div
                    className={`p-4 rounded-lg ${
                      selectedAnswer === currentExercise.correctAnswer
                        ? "bg-green-50 border border-green-200"
                        : "bg-red-50 border border-red-200"
                    }`}
                  >
                    <p className="font-medium mb-2">
                      {selectedAnswer === currentExercise.correctAnswer ? "✅ Correto!" : "❌ Incorreto"}
                    </p>
                    <p className="text-gray-700">{currentExercise.explanation}</p>
                  </div>
                )}

                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setCurrentExercise(null)
                      setSelectedAnswer("")
                      setShowExplanation(false)
                    }}
                  >
                    Voltar
                  </Button>
                  {showExplanation && (
                    <Button
                      onClick={() => {
                        const nextIndex = exercises.findIndex((e) => e.id === currentExercise.id) + 1
                        if (nextIndex < exercises.length) {
                          setCurrentExercise(exercises[nextIndex])
                          setSelectedAnswer("")
                          setShowExplanation(false)
                        }
                      }}
                      disabled={exercises.findIndex((e) => e.id === currentExercise.id) === exercises.length - 1}
                    >
                      Próximo Exercício
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ) : (
            <div className="grid gap-4 md:grid-cols-2">
              {exercises.map((exercise) => (
                <Card
                  key={exercise.id}
                  className="hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => setCurrentExercise(exercise)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">Exercício {exercise.id}</CardTitle>
                      <div className="flex items-center space-x-2">
                        <Badge
                          className={
                            exercise.difficulty === "easy"
                              ? "bg-green-100 text-green-800"
                              : exercise.difficulty === "medium"
                                ? "bg-yellow-100 text-yellow-800"
                                : "bg-red-100 text-red-800"
                          }
                        >
                          {exercise.difficulty}
                        </Badge>
                        {exerciseResults[exercise.id] !== undefined && (
                          <div
                            className={`w-4 h-4 rounded-full ${
                              exerciseResults[exercise.id] ? "bg-green-500" : "bg-red-500"
                            }`}
                          />
                        )}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-sm line-clamp-2">{exercise.statement}</p>
                    <Button variant="ghost" className="mt-2 p-0 h-auto">
                      Resolver exercício →
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
