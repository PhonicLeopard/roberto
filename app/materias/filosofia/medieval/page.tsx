"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
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

const studySections: StudySection[] = [
  {
    id: "patristica",
    title: "Patrística (Séculos I-VIII)",
    content: `A Patrística representa o primeiro período da filosofia cristã, caracterizada pela tentativa de conciliar a fé cristã com a filosofia grega. Os Padres da Igreja buscaram defender o cristianismo contra heresias e estabelecer bases doutrinárias sólidas.

Este período marca a transição do mundo antigo para o medieval, onde a filosofia passa a servir à teologia. A razão é vista como instrumento para compreender e defender a fé, estabelecendo o princípio de que a verdade não pode contradizer a verdade.`,
    keyPoints: [
      "Conciliação entre fé cristã e filosofia grega",
      "Defesa do cristianismo contra heresias",
      "Estabelecimento de bases doutrinárias",
      "Razão como instrumento da fé",
      "Transição do mundo antigo para o medieval",
    ],
    examples: [
      "Justino Mártir: uso da filosofia platônica para explicar o cristianismo",
      "Clemente de Alexandria: 'filosofia como preparação para o Evangelho'",
      "Orígenes: interpretação alegórica das Escrituras",
    ],
    completed: false,
  },
  {
    id: "agostinho",
    title: "Santo Agostinho (354-430)",
    content: `Aurelius Augustinus, conhecido como Santo Agostinho, é considerado o maior filósofo da Patrística. Nascido em Tagaste (atual Argélia), converteu-se ao cristianismo aos 32 anos após uma juventude marcada por questionamentos filosóficos.

Agostinho desenvolveu uma síntese original entre platonismo e cristianismo. Sua obra "Confissões" é considerada a primeira autobiografia psicológica da história, enquanto "A Cidade de Deus" apresenta uma filosofia da história cristã. Influenciou profundamente o pensamento ocidental por mais de mil anos.`,
    keyPoints: [
      "Síntese entre platonismo e cristianismo",
      "Teoria da iluminação divina",
      "Conceito de tempo: 'O que é o tempo? Se ninguém me pergunta, sei; se quero explicar, não sei'",
      "Livre-arbítrio e o problema do mal",
      "Cidade terrena vs Cidade de Deus",
    ],
    examples: [
      "Cogito agostiniano: 'Si fallor, sum' (Se me engano, existo)",
      "Teoria da iluminação: conhecimento vem de Deus",
      "Problema do mal: mal como privação do bem",
    ],
    completed: false,
  },
  {
    id: "escolastica-inicial",
    title: "Início da Escolástica (Séculos IX-XII)",
    content: `A Escolástica surge como método de ensino nas escolas catedrais e universidades medievais. Caracteriza-se pelo uso rigoroso da razão para compreender e sistematizar a fé cristã, utilizando principalmente a filosofia aristotélica.

O método escolástico envolve a quaestio (questão), onde se apresenta um problema, expõem-se argumentos contrários, desenvolve-se a solução e respondem-se às objeções. Este período viu o renascimento do aristotelismo no Ocidente através das traduções árabes.`,
    keyPoints: [
      "Método de ensino sistemático",
      "Uso da razão para compreender a fé",
      "Redescoberta de Aristóteles via mundo árabe",
      "Desenvolvimento das universidades",
      "Método da quaestio (questão disputada)",
    ],
    examples: [
      "Anselmo de Canterbury: argumento ontológico para existência de Deus",
      "Pedro Abelardo: método dialético 'Sic et Non'",
      "Escola de Chartres: platonismo cristão",
    ],
    completed: false,
  },
  {
    id: "tomas-aquino",
    title: "São Tomás de Aquino (1225-1274)",
    content: `Tomás de Aquino representa o apogeu da Escolástica. Dominicano italiano, realizou a mais completa síntese entre aristotelismo e cristianismo. Sua obra "Suma Teológica" é considerada uma das maiores realizações intelectuais da humanidade.

Aquino distingue entre razão e fé, mas as vê como complementares. Desenvolveu as famosas "cinco vias" para demonstrar racionalmente a existência de Deus e estabeleceu princípios que influenciam o pensamento católico até hoje.`,
    keyPoints: [
      "Síntese entre aristotelismo e cristianismo",
      "Distinção e complementaridade entre razão e fé",
      "Cinco vias para demonstrar a existência de Deus",
      "Teoria do conhecimento: 'nada está no intelecto que não tenha passado pelos sentidos'",
      "Ética das virtudes adaptada ao cristianismo",
    ],
    examples: [
      "Primeira via: argumento do movimento (motor imóvel)",
      "Lei natural: princípios morais universais",
      "Teoria da dupla verdade: verdades da razão e da fé não se contradizem",
    ],
    completed: false,
  },
  {
    id: "cinco-vias",
    title: "As Cinco Vias de Tomás de Aquino",
    content: `As cinco vias são argumentos racionais desenvolvidos por Tomás de Aquino para demonstrar a existência de Deus. Baseiam-se na observação do mundo sensível e no princípio de causalidade, seguindo a lógica aristotélica.

Cada via parte de um fenômeno observável (movimento, causalidade, contingência, graus de perfeição, finalidade) e conclui pela necessidade de uma causa primeira, que identificamos com Deus. Estas demonstrações influenciaram profundamente a teologia natural.`,
    keyPoints: [
      "1ª Via: Argumento do movimento (motor imóvel)",
      "2ª Via: Causalidade eficiente (causa primeira)",
      "3ª Via: Contingência e necessidade (ser necessário)",
      "4ª Via: Graus de perfeição (ser perfeitíssimo)",
      "5ª Via: Finalidade (inteligência ordenadora)",
    ],
    examples: [
      "1ª Via: Tudo que se move é movido por outro; logo, existe um primeiro motor",
      "2ª Via: Toda causa é causada por outra; logo, existe uma causa primeira",
      "3ª Via: Seres contingentes pressupõem um ser necessário",
    ],
    completed: false,
  },
  {
    id: "outros-escolasticos",
    title: "Outros Pensadores Escolásticos",
    content: `Além de Tomás de Aquino, a Escolástica produziu outros grandes pensadores. Duns Escoto desenvolveu o voluntarismo, enfatizando a vontade divina. Guilherme de Ockham propôs o nominalismo e o princípio da navalha de Ockham.

Estes pensadores prepararam o terreno para as transformações filosóficas que viriam no Renascimento, questionando alguns aspectos do tomismo e desenvolvendo novas abordagens para problemas clássicos da filosofia medieval.`,
    keyPoints: [
      "Duns Escoto: voluntarismo e individualidade",
      "Guilherme de Ockham: nominalismo e navalha de Ockham",
      "Escola franciscana vs dominicana",
      "Debate sobre universais",
      "Preparação para mudanças renascentistas",
    ],
    examples: [
      "Escoto: primado da vontade sobre o intelecto",
      "Ockham: 'não multiplicar entes sem necessidade'",
      "Nominalismo: universais são apenas nomes",
    ],
    completed: false,
  },
]

export default function FilosofiaMedieval() {
  const [sections, setSections] = useState(studySections)

  const toggleSectionComplete = (sectionId: string) => {
    setSections((prev) =>
      prev.map((section) => (section.id === sectionId ? { ...section, completed: !section.completed } : section)),
    )
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Filosofia Medieval</h1>
            <p className="text-gray-600">Patrística e Escolástica: Santo Agostinho e Tomás de Aquino</p>
          </div>
          <div className="text-right">
            <div className="flex items-center space-x-2 mb-2">
              <Clock className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-600">50 min</span>
            </div>
            <div className="flex items-center space-x-2">
              <Target className="h-4 w-4 text-gray-500" />
              <span className="text-sm font-medium">{Math.round(progressPercentage)}% concluído</span>
            </div>
          </div>
        </div>

        <Progress value={progressPercentage} className="mt-4" />
      </div>

      <div className="space-y-6">
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
      </div>
    </div>
  )
}
