"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, BookOpen, CheckCircle2, XCircle } from "lucide-react"

export default function PosGuerraPage() {
  const [respostas, setRespostas] = useState<Record<string, string>>({})
  const [mostrarResultados, setMostrarResultados] = useState<Record<string, boolean>>({})

  const verificarResposta = (questaoId: string, respostaCorreta: string) => {
    setMostrarResultados((prev) => ({ ...prev, [questaoId]: true }))
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center gap-4">
          <Link href="/materias/historia">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <Badge className="mb-2">História</Badge>
            <h1 className="text-3xl font-bold">O Mundo Pós-Primeira Guerra Mundial</h1>
            <p className="text-muted-foreground">As consequências devastadoras e as sementes da Segunda Guerra</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Tratado de Versalhes e a Paz Punitiva
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">A Conferência de Paris (1919)</h3>
              <p className="text-muted-foreground leading-relaxed">
                Após o fim da guerra, as potências vitoriosas se reuniram em Paris para decidir o destino dos derrotados
                e redesenhar o mapa mundial. A conferência foi dominada pelos "Três Grandes": Woodrow Wilson (EUA),
                David Lloyd George (Reino Unido) e Georges Clemenceau (França), cada um com visões conflitantes sobre
                como deveria ser a paz.
              </p>

              <div className="bg-muted p-4 rounded-lg space-y-2">
                <h4 className="font-semibold">Visões Conflitantes:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex gap-2">
                    <span className="font-medium">Wilson (EUA):</span>
                    <span>
                      Propunha uma "paz sem vencedores", baseada em seus 14 Pontos, incluindo autodeterminação dos povos
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-medium">Clemenceau (França):</span>
                    <span>
                      Buscava uma punição severa para a Alemanha, garantindo que nunca mais pudesse ameaçar a França
                    </span>
                  </li>
                  <li className="flex gap-2">
                    <span className="font-medium">Lloyd George (Reino Unido):</span>
                    <span>Posição intermediária, querendo punir a Alemanha mas sem destruí-la completamente</span>
                  </li>
                </ul>
              </div>
            </div>

            <Separator />

            <div className="space-y-3">
              <h3 className="font-semibold text-lg">O Tratado de Versalhes (28 de junho de 1919)</h3>
              <p className="text-muted-foreground leading-relaxed">
                O tratado mais importante focou exclusivamente na Alemanha e foi visto pelos alemães como um
                <span className="font-semibold italic"> Diktat</span> (uma paz imposta). Suas cláusulas humilhantes
                criaram profundo ressentimento que seria explorado por movimentos extremistas nas décadas seguintes.
              </p>

              <div className="grid gap-4 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Cláusula de Culpa (Artigo 231)</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Forçou a Alemanha a assumir total responsabilidade pelo início da guerra, justificando as
                      reparações massivas impostas.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Reparações de Guerra</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Indenizações astronômicas (132 bilhões de marcos-ouro) que aleijaram a economia alemã por décadas.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Perdas Territoriais</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Alsácia-Lorena para a França, territórios para a Polônia (Corredor Polonês), e perda de todas as
                      colônias.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Desmilitarização</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Exército reduzido a 100 mil homens, sem aviação, tanques ou submarinos. Renânia desmilitarizada.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />A Crise Econômica e a Hiperinflação Alemã
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Para pagar as reparações impossíveis, a República de Weimar (governo democrático alemão pós-guerra)
              começou a imprimir dinheiro de forma descontrolada, levando a uma das piores hiperinflações da história.
            </p>

            <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-lg space-y-2">
              <h4 className="font-semibold text-destructive">A Hiperinflação de 1923:</h4>
              <ul className="space-y-1 text-sm">
                <li>• Um pão que custava 250 marcos em janeiro custava 200 bilhões em novembro</li>
                <li>
                  • Trabalhadores recebiam salários duas vezes ao dia e corriam para gastar antes que perdesse valor
                </li>
                <li>• Pessoas usavam carrinhos de mão cheios de dinheiro para comprar itens básicos</li>
                <li>• A classe média foi completamente destruída, perdendo todas as economias</li>
              </ul>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              Essa crise econômica devastadora criou o terreno fértil para o surgimento de movimentos extremistas que
              prometiam restaurar a dignidade e a prosperidade alemã.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />A Ascensão de Ideologias Extremistas
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              A humilhação do Tratado de Versalhes, combinada com a crise econômica e a instabilidade política, levou ao
              colapso das democracias liberais e à ascensão de regimes totalitários.
            </p>

            <div className="space-y-4">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-base">Fascismo na Itália (1922)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Benito Mussolini chegou ao poder prometendo restaurar a glória do Império Romano. A Itália se sentia
                    "traída" pelos Aliados, que não cumpriram promessas territoriais feitas durante a guerra.
                  </p>
                  <div className="bg-muted p-3 rounded text-sm">
                    <strong>Características:</strong> Nacionalismo extremo, culto ao líder, militarismo, supressão de
                    oposição, corporativismo econômico.
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-destructive/50">
                <CardHeader>
                  <CardTitle className="text-base">Nazismo na Alemanha (1933)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Adolf Hitler e o Partido Nazista exploraram o ressentimento alemão contra o Tratado de Versalhes,
                    prometendo rasgar o tratado, restaurar o orgulho nacional e criar um "Terceiro Reich" de mil anos.
                  </p>
                  <div className="bg-destructive/10 p-3 rounded text-sm space-y-1">
                    <strong className="text-destructive">Ideologia Nazista:</strong>
                    <ul className="space-y-1 mt-2">
                      <li>• Supremacia racial ariana e antissemitismo violento</li>
                      <li>• Lebensraum (espaço vital) - expansão territorial para o leste</li>
                      <li>• Revanchismo contra o Tratado de Versalhes</li>
                      <li>• Totalitarismo absoluto e culto ao Führer</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-red-500/50">
                <CardHeader>
                  <CardTitle className="text-base">Comunismo Soviético</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    A Revolução Russa de 1917 se consolidou, e a União Soviética surgiu como a primeira nação comunista,
                    inspirando movimentos revolucionários em toda a Europa e gerando medo nas elites capitalistas.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Exercícios de Fixação</CardTitle>
            <CardDescription>Teste seus conhecimentos sobre o período pós-Primeira Guerra</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-semibold">
                1. Qual foi a principal consequência do Tratado de Versalhes para a Alemanha?
              </h3>
              <div className="space-y-2">
                {[
                  { id: "a", texto: "Expansão territorial e fortalecimento militar" },
                  { id: "b", texto: "Humilhação nacional, reparações massivas e desmilitarização" },
                  { id: "c", texto: "Integração pacífica com os países vizinhos" },
                  { id: "d", texto: "Manutenção de todas as suas colônias" },
                ].map((opcao) => (
                  <div key={opcao.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`q1-${opcao.id}`}
                      checked={respostas["q1"] === opcao.id}
                      onCheckedChange={() => {
                        setRespostas((prev) => ({ ...prev, q1: opcao.id }))
                        verificarResposta("q1", "b")
                      }}
                    />
                    <label htmlFor={`q1-${opcao.id}`} className="text-sm cursor-pointer">
                      {opcao.texto}
                    </label>
                  </div>
                ))}
              </div>
              {mostrarResultados["q1"] && (
                <div
                  className={`p-4 rounded-lg ${respostas["q1"] === "b" ? "bg-green-500/10 border border-green-500/20" : "bg-destructive/10 border border-destructive/20"}`}
                >
                  <div className="flex items-start gap-2">
                    {respostas["q1"] === "b" ? (
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                    ) : (
                      <XCircle className="h-5 w-5 text-destructive mt-0.5" />
                    )}
                    <div className="space-y-1">
                      <p className="font-semibold text-sm">{respostas["q1"] === "b" ? "Correto!" : "Incorreto"}</p>
                      <p className="text-sm text-muted-foreground">
                        O Tratado de Versalhes impôs condições humilhantes à Alemanha: a cláusula de culpa de guerra,
                        reparações astronômicas, perda de territórios e desmilitarização. Essas condições criaram
                        profundo ressentimento que foi explorado por Hitler e o Partido Nazista.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="font-semibold">2. O que foi a hiperinflação alemã de 1923?</h3>
              <div className="space-y-2">
                {[
                  { id: "a", texto: "Um período de crescimento econômico acelerado" },
                  { id: "b", texto: "Uma crise onde o dinheiro perdeu completamente seu valor" },
                  { id: "c", texto: "Uma reforma monetária bem-sucedida" },
                  { id: "d", texto: "Um programa de ajuda econômica dos EUA" },
                ].map((opcao) => (
                  <div key={opcao.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`q2-${opcao.id}`}
                      checked={respostas["q2"] === opcao.id}
                      onCheckedChange={() => {
                        setRespostas((prev) => ({ ...prev, q2: opcao.id }))
                        verificarResposta("q2", "b")
                      }}
                    />
                    <label htmlFor={`q2-${opcao.id}`} className="text-sm cursor-pointer">
                      {opcao.texto}
                    </label>
                  </div>
                ))}
              </div>
              {mostrarResultados["q2"] && (
                <div
                  className={`p-4 rounded-lg ${respostas["q2"] === "b" ? "bg-green-500/10 border border-green-500/20" : "bg-destructive/10 border border-destructive/20"}`}
                >
                  <div className="flex items-start gap-2">
                    {respostas["q2"] === "b" ? (
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                    ) : (
                      <XCircle className="h-5 w-5 text-destructive mt-0.5" />
                    )}
                    <div className="space-y-1">
                      <p className="font-semibold text-sm">{respostas["q2"] === "b" ? "Correto!" : "Incorreto"}</p>
                      <p className="text-sm text-muted-foreground">
                        A hiperinflação de 1923 foi uma das piores crises econômicas da história. Para pagar as
                        reparações de guerra, o governo alemão imprimiu dinheiro descontroladamente, fazendo com que os
                        preços aumentassem bilhões de vezes. A classe média foi destruída, criando desespero e raiva que
                        alimentaram movimentos extremistas.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <Link href="/materias/historia">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar para História
            </Button>
          </Link>
          <Link href="/materias/historia/segunda-guerra">
            <Button>
              Próximo: Segunda Guerra Mundial
              <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
