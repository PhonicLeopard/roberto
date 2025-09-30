"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, BookOpen, Target, Lightbulb } from "lucide-react"

export default function AntecedentesPage() {
  const [secoesConcluidas, setSecoesConcluidas] = useState<string[]>([])
  const [respostasSelecionadas, setRespostasSelecionadas] = useState<Record<string, string>>({})
  const [mostrarResultados, setMostrarResultados] = useState(false)

  const toggleSecao = (id: string) => {
    setSecoesConcluidas((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]))
  }

  const exercicios = [
    {
      id: "ex1",
      pergunta: "Qual foi o principal motivo da rivalidade naval entre Reino Unido e Alemanha no início do século XX?",
      opcoes: [
        "Disputa por colônias na África",
        "Competição pela supremacia nos mares e controle de rotas comerciais",
        "Conflitos religiosos entre protestantes e católicos",
        "Disputa territorial na Europa Oriental",
      ],
      correta: 1,
      explicacao:
        "A corrida armamentista naval foi um dos principais pontos de tensão. A Alemanha, sob o Kaiser Guilherme II, iniciou um programa massivo de construção de navios de guerra para desafiar a supremacia naval britânica, o que ameaçava diretamente os interesses comerciais e a segurança do Império Britânico.",
    },
    {
      id: "ex2",
      pergunta: "O que caracterizava o 'Revanchismo Francês' no período anterior à Primeira Guerra?",
      opcoes: [
        "Desejo de recuperar a Alsácia-Lorena, perdida para a Alemanha em 1871",
        "Vontade de expandir colônias na Ásia",
        "Intenção de formar aliança com a Rússia contra o Reino Unido",
        "Plano de invadir a Itália",
      ],
      correta: 0,
      explicacao:
        "Após a humilhante derrota na Guerra Franco-Prussiana (1870-1871), a França perdeu as ricas regiões da Alsácia e Lorena para a Alemanha. Esse sentimento de vingança e o desejo de recuperar esses territórios alimentaram o nacionalismo francês e contribuíram para as tensões que levaram à guerra.",
    },
    {
      id: "ex3",
      pergunta: "Qual era o objetivo principal do sistema de alianças formado antes da Primeira Guerra Mundial?",
      opcoes: [
        "Promover o comércio livre entre as nações europeias",
        "Garantir segurança mútua e dissuadir ataques através de compromissos de defesa coletiva",
        "Estabelecer colônias conjuntas na África",
        "Criar uma moeda única europeia",
      ],
      correta: 1,
      explicacao:
        "As alianças (Tríplice Aliança e Tríplice Entente) foram formadas para criar um equilíbrio de poder e garantir que, se uma nação fosse atacada, seus aliados viriam em sua defesa. Ironicamente, esse sistema transformou um conflito regional nos Bálcãs em uma guerra continental, pois cada aliança arrastou seus membros para o conflito.",
    },
  ]

  const verificarRespostas = () => {
    setMostrarResultados(true)
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center gap-4">
          <Link href="/materias/historia">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold">Antecedentes e Causas da Primeira Guerra</h1>
            <p className="text-muted-foreground">O "Barril de Pólvora" Europeu</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Contexto Histórico
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              A Europa do início do século XX era um "barril de pólvora" prestes a explodir. Décadas de tensões
              acumuladas, rivalidades imperialistas, nacionalismos exacerbados e uma corrida armamentista desenfreada
              criaram um ambiente onde um único evento poderia desencadear um conflito de proporções catastróficas.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Causas Profundas</h2>

          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle>1. Imperialismo e Disputas Coloniais</CardTitle>
                  <CardDescription>A corrida por colônias e recursos</CardDescription>
                </div>
                <Checkbox
                  checked={secoesConcluidas.includes("imperialismo")}
                  onCheckedChange={() => toggleSecao("imperialismo")}
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <p>As grandes potências europeias competiam ferozmente por colônias na África e na Ásia, buscando:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Recursos naturais:</strong> Matérias-primas como borracha, petróleo, minerais
                  </li>
                  <li>
                    <strong>Mercados consumidores:</strong> Locais para vender produtos industrializados
                  </li>
                  <li>
                    <strong>Prestígio nacional:</strong> Ter colônias era símbolo de poder e grandeza
                  </li>
                </ul>
                <div className="bg-muted p-4 rounded-lg mt-4">
                  <p className="text-sm font-semibold mb-2 flex items-center gap-2">
                    <Target className="h-4 w-4" />
                    Ponto de Tensão
                  </p>
                  <p className="text-sm">
                    A Alemanha, unificada apenas em 1871, chegou tarde à partilha colonial. O Kaiser Guilherme II exigia
                    "um lugar ao sol" para a Alemanha, gerando atritos com França e Reino Unido, que já controlavam
                    vastos impérios coloniais.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle>2. Nacionalismos Exacerbados</CardTitle>
                  <CardDescription>Movimentos que inflamaram a Europa</CardDescription>
                </div>
                <Checkbox
                  checked={secoesConcluidas.includes("nacionalismos")}
                  onCheckedChange={() => toggleSecao("nacionalismos")}
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Badge>Pan-eslavismo</Badge>
                  <p className="text-sm">
                    A Rússia se via como protetora dos povos eslavos nos Bálcãs (sérvios, búlgaros, etc.), incentivando
                    sua independência do Império Austro-Húngaro.
                  </p>
                </div>
                <div className="space-y-2">
                  <Badge>Pan-germanismo</Badge>
                  <p className="text-sm">
                    A Alemanha buscava unificar todos os povos de origem germânica sob sua influência, expandindo seu
                    poder na Europa Central.
                  </p>
                </div>
                <div className="space-y-2">
                  <Badge>Revanchismo Francês</Badge>
                  <p className="text-sm">
                    A França alimentava um forte desejo de vingança contra a Alemanha pela derrota de 1871 e pela perda
                    da Alsácia-Lorena.
                  </p>
                </div>
              </div>
              <div className="bg-muted p-4 rounded-lg mt-4">
                <p className="text-sm font-semibold mb-2 flex items-center gap-2">
                  <Lightbulb className="h-4 w-4" />
                  Entenda Melhor
                </p>
                <p className="text-sm">
                  Os Bálcãs eram chamados de "barril de pólvora da Europa" devido à mistura explosiva de diferentes
                  etnias, religiões e aspirações nacionalistas em um território pequeno, todos disputados pelas grandes
                  potências.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle>3. Corrida Armamentista (Paz Armada)</CardTitle>
                  <CardDescription>Preparando-se para o inevitável</CardDescription>
                </div>
                <Checkbox
                  checked={secoesConcluidas.includes("armamentista")}
                  onCheckedChange={() => toggleSecao("armamentista")}
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p>
                Entre 1890 e 1914, a Europa viveu um período de "Paz Armada" - havia paz, mas todas as nações se
                preparavam intensamente para a guerra:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Corrida Naval</h4>
                  <p className="text-sm">
                    Reino Unido vs Alemanha: competição pela construção de navios de guerra modernos (dreadnoughts). A
                    Alemanha queria desafiar a supremacia naval britânica.
                  </p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Exércitos Massivos</h4>
                  <p className="text-sm">
                    Todas as potências aumentaram drasticamente o tamanho de seus exércitos através do serviço militar
                    obrigatório e investiram em novas tecnologias militares.
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground italic">
                "Se você quer paz, prepare-se para a guerra" - Este ditado romano resumia a mentalidade da época.
                Ironicamente, essa preparação tornou a guerra mais provável e mais devastadora.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle>4. Sistema de Alianças</CardTitle>
                  <CardDescription>A rede que transformou um conflito local em guerra mundial</CardDescription>
                </div>
                <Checkbox
                  checked={secoesConcluidas.includes("aliancas")}
                  onCheckedChange={() => toggleSecao("aliancas")}
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="border-2 border-red-500 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3 text-red-600">Tríplice Aliança (Potências Centrais)</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      🇩🇪 <strong>Império Alemão</strong> - Líder militar e industrial
                    </li>
                    <li>
                      🇦🇹 <strong>Império Austro-Húngaro</strong> - Potência em declínio
                    </li>
                    <li>
                      🇮🇹 <strong>Itália</strong> - Mudaria de lado em 1915
                    </li>
                  </ul>
                </div>
                <div className="border-2 border-blue-500 p-4 rounded-lg">
                  <h4 className="font-semibold mb-3 text-blue-600">Tríplice Entente (Aliados)</h4>
                  <ul className="space-y-2 text-sm">
                    <li>
                      🇫🇷 <strong>França</strong> - Buscava vingança contra a Alemanha
                    </li>
                    <li>
                      🇷🇺 <strong>Império Russo</strong> - Protetor dos eslavos
                    </li>
                    <li>
                      🇬🇧 <strong>Reino Unido</strong> - Maior império colonial
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 p-4 rounded-lg">
                <p className="text-sm font-semibold mb-2">⚠️ O Perigo das Alianças</p>
                <p className="text-sm">
                  Essas alianças eram secretas e criavam compromissos automáticos de defesa. Quando a Áustria-Hungria
                  declarou guerra à Sérvia, o sistema de alianças funcionou como um efeito dominó, arrastando todas as
                  grandes potências para o conflito em questão de dias.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Exercícios de Fixação</CardTitle>
            <CardDescription>Teste seu conhecimento sobre os antecedentes da guerra</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {exercicios.map((ex, idx) => (
              <div key={ex.id} className="space-y-3">
                <p className="font-semibold">
                  {idx + 1}. {ex.pergunta}
                </p>
                <div className="space-y-2">
                  {ex.opcoes.map((opcao, opcaoIdx) => (
                    <div
                      key={opcaoIdx}
                      className={`p-3 rounded-lg border-2 cursor-pointer transition-colors ${
                        respostasSelecionadas[ex.id] === String(opcaoIdx)
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      } ${
                        mostrarResultados
                          ? opcaoIdx === ex.correta
                            ? "border-green-500 bg-green-50 dark:bg-green-950"
                            : respostasSelecionadas[ex.id] === String(opcaoIdx)
                              ? "border-red-500 bg-red-50 dark:bg-red-950"
                              : ""
                          : ""
                      }`}
                      onClick={() => {
                        if (!mostrarResultados) {
                          setRespostasSelecionadas((prev) => ({
                            ...prev,
                            [ex.id]: String(opcaoIdx),
                          }))
                        }
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            respostasSelecionadas[ex.id] === String(opcaoIdx)
                              ? "border-primary bg-primary"
                              : "border-border"
                          }`}
                        >
                          {respostasSelecionadas[ex.id] === String(opcaoIdx) && (
                            <div className="w-2 h-2 rounded-full bg-white" />
                          )}
                        </div>
                        <span className="text-sm">{opcao}</span>
                      </div>
                    </div>
                  ))}
                </div>
                {mostrarResultados && (
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-semibold mb-1">Explicação:</p>
                    <p className="text-sm">{ex.explicacao}</p>
                  </div>
                )}
              </div>
            ))}
            {!mostrarResultados && (
              <Button onClick={verificarRespostas} className="w-full">
                Verificar Respostas
              </Button>
            )}
            {mostrarResultados && (
              <div className="text-center space-y-2">
                <p className="font-semibold">
                  Você acertou {exercicios.filter((ex) => respostasSelecionadas[ex.id] === String(ex.correta)).length}{" "}
                  de {exercicios.length} questões
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setMostrarResultados(false)
                    setRespostasSelecionadas({})
                  }}
                >
                  Tentar Novamente
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <Link href="/materias/historia">
            <Button variant="outline">Voltar aos Tópicos</Button>
          </Link>
          <Link href="/materias/historia/estopim">
            <Button>Próximo: O Estopim da Guerra</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
