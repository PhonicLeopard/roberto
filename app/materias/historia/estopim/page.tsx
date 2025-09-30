"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Calendar, MapPin, Users } from "lucide-react"

export default function EstopimPage() {
  const [secoesConcluidas, setSecoesConcluidas] = useState<string[]>([])

  const toggleSecao = (id: string) => {
    setSecoesConcluidas((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]))
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
            <h1 className="text-3xl font-bold">O Estopim da Guerra</h1>
            <p className="text-muted-foreground">Sarajevo e o efeito dominó</p>
          </div>
        </div>

        <Card className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 border-red-200 dark:border-red-800">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              28 de junho de 1914
            </CardTitle>
            <CardDescription>O dia que mudou o mundo</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Um único tiro em Sarajevo desencadeou uma série de eventos que levaria à morte de mais de 15 milhões de
              pessoas. O assassinato do arquiduque Francisco Ferdinando foi a faísca que incendiou o "barril de pólvora"
              europeu.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle>O Atentado de Sarajevo</CardTitle>
                  <CardDescription>28 de junho de 1914</CardDescription>
                </div>
                <Checkbox
                  checked={secoesConcluidas.includes("atentado")}
                  onCheckedChange={() => toggleSecao("atentado")}
                />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Users className="h-5 w-5 mt-0.5 text-muted-foreground" />
                    <div>
                      <p className="font-semibold">A Vítima</p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Francisco Ferdinando</strong>, arquiduque da Áustria e herdeiro do trono do Império
                        Austro-Húngaro, estava visitando Sarajevo com sua esposa Sofia.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Users className="h-5 w-5 mt-0.5 text-muted-foreground" />
                    <div>
                      <p className="font-semibold">O Assassino</p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Gavrilo Princip</strong>, um jovem nacionalista sérvio de 19 anos, membro do grupo
                        terrorista "Mão Negra" (ou "União ou Morte").
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 mt-0.5 text-muted-foreground" />
                    <div>
                      <p className="font-semibold">O Local</p>
                      <p className="text-sm text-muted-foreground">
                        <strong>Sarajevo</strong>, capital da Bósnia-Herzegovina, território anexado pela
                        Áustria-Hungria em 1908, mas com população majoritariamente eslava que desejava independência.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Calendar className="h-5 w-5 mt-0.5 text-muted-foreground" />
                    <div>
                      <p className="font-semibold">A Data</p>
                      <p className="text-sm text-muted-foreground">
                        28 de junho era o <strong>Dia de São Vito</strong>, data nacional sérvia que comemorava uma
                        batalha medieval contra os otomanos - uma provocação à população local.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-muted p-4 rounded-lg">
                <p className="text-sm font-semibold mb-2">📖 Como aconteceu</p>
                <div className="space-y-2 text-sm">
                  <p>
                    <strong>1.</strong> Pela manhã, uma bomba foi lançada contra o carro do arquiduque, mas errou o alvo
                    e feriu outras pessoas.
                  </p>
                  <p>
                    <strong>2.</strong> Francisco Ferdinando decidiu visitar os feridos no hospital. No caminho de
                    volta, o motorista errou o caminho.
                  </p>
                  <p>
                    <strong>3.</strong> Ao fazer a manobra para corrigir a rota, o carro parou bem em frente a Gavrilo
                    Princip, que estava em um café.
                  </p>
                  <p>
                    <strong>4.</strong> Princip aproveitou a oportunidade e disparou dois tiros: um matou o arquiduque,
                    o outro matou sua esposa Sofia.
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 p-4 rounded-lg">
                <p className="text-sm font-semibold mb-2">💡 Curiosidade Histórica</p>
                <p className="text-sm">
                  As últimas palavras de Francisco Ferdinando foram para sua esposa: "Sofia, Sofia, não morra! Fique
                  viva por nossos filhos!" Ironicamente, ele era um dos poucos membros da família real que defendia
                  reformas para dar mais autonomia aos povos eslavos do império.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle>A Crise de Julho: O Efeito Dominó</CardTitle>
                  <CardDescription>De um assassinato a uma guerra mundial em 37 dias</CardDescription>
                </div>
                <Checkbox checked={secoesConcluidas.includes("crise")} onCheckedChange={() => toggleSecao("crise")} />
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                O sistema de alianças transformou um conflito regional em uma guerra continental. Veja como cada nação
                foi arrastada para o conflito:
              </p>

              <div className="space-y-3">
                <div className="border-l-4 border-red-500 pl-4 py-2">
                  <p className="font-semibold text-sm">23 de julho - Ultimato Austro-Húngaro</p>
                  <p className="text-sm text-muted-foreground">
                    A Áustria-Hungria, com apoio da Alemanha, envia um ultimato extremamente duro à Sérvia, com
                    exigências que violavam a soberania sérvia (como permitir que policiais austríacos investigassem em
                    território sérvio).
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <p className="font-semibold text-sm">25 de julho - Resposta Sérvia</p>
                  <p className="text-sm text-muted-foreground">
                    A Sérvia aceita quase todas as exigências, mas rejeita a que violava sua soberania. A
                    Áustria-Hungria considera a resposta insatisfatória.
                  </p>
                </div>

                <div className="border-l-4 border-red-500 pl-4 py-2">
                  <p className="font-semibold text-sm">28 de julho - Primeira Declaração de Guerra</p>
                  <p className="text-sm text-muted-foreground">
                    A Áustria-Hungria declara guerra à Sérvia. Começa o bombardeio de Belgrado.
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4 py-2">
                  <p className="font-semibold text-sm">30 de julho - Mobilização Russa</p>
                  <p className="text-sm text-muted-foreground">
                    A Rússia, protetora dos eslavos, mobiliza seu exército para defender a Sérvia. A mobilização russa
                    era vista como um ato de guerra.
                  </p>
                </div>

                <div className="border-l-4 border-gray-500 pl-4 py-2">
                  <p className="font-semibold text-sm">1º de agosto - Alemanha entra na guerra</p>
                  <p className="text-sm text-muted-foreground">
                    A Alemanha, aliada da Áustria-Hungria, declara guerra à Rússia. Ativa o Plano Schlieffen para atacar
                    a França antes que a Rússia mobilize completamente.
                  </p>
                </div>

                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <p className="font-semibold text-sm">3 de agosto - Alemanha vs França</p>
                  <p className="text-sm text-muted-foreground">
                    A Alemanha declara guerra à França, aliada da Rússia. Invade a Bélgica (país neutro) para atacar a
                    França pelo norte.
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4 py-2">
                  <p className="font-semibold text-sm">4 de agosto - Reino Unido entra na guerra</p>
                  <p className="text-sm text-muted-foreground">
                    O Reino Unido, que havia garantido a neutralidade belga, declara guerra à Alemanha. A guerra se
                    torna verdadeiramente mundial.
                  </p>
                </div>
              </div>

              <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 p-4 rounded-lg">
                <p className="text-sm font-semibold mb-2">⚠️ O "Cheque em Branco"</p>
                <p className="text-sm">
                  A Alemanha deu à Áustria-Hungria um "cheque em branco" - apoio incondicional para qualquer ação contra
                  a Sérvia. Esse apoio encorajou a Áustria a ser mais agressiva, sabendo que tinha o poderoso exército
                  alemão ao seu lado. Foi uma decisão que ajudou a transformar uma crise regional em uma guerra mundial.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>O Plano Schlieffen</CardTitle>
              <CardDescription>A estratégia alemã que moldou o início da guerra</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm">
                Desenvolvido pelo general Alfred von Schlieffen, o plano alemão previa uma guerra em duas frentes:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted p-4 rounded-lg">
                  <p className="font-semibold mb-2">Fase 1: Nocautear a França</p>
                  <p className="text-sm">
                    Atacar a França rapidamente através da Bélgica (violando sua neutralidade), cercando Paris e
                    forçando a rendição francesa em 6 semanas.
                  </p>
                </div>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="font-semibold mb-2">Fase 2: Virar para o Leste</p>
                  <p className="text-sm">
                    Com a França derrotada, transferir todas as tropas para a frente oriental e derrotar a Rússia, que
                    levaria mais tempo para mobilizar seu enorme exército.
                  </p>
                </div>
              </div>
              <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 p-4 rounded-lg">
                <p className="text-sm font-semibold mb-2">❌ Por que falhou?</p>
                <p className="text-sm">
                  A Rússia mobilizou mais rápido do que esperado, forçando a Alemanha a desviar tropas para o leste. A
                  resistência belga atrasou o avanço. E a França, com ajuda britânica, conseguiu deter os alemães na
                  Batalha do Marne. O plano de vitória rápida fracassou, e a guerra se transformou em um longo e
                  sangrento conflito de desgaste.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-between">
          <Link href="/materias/historia/antecedentes">
            <Button variant="outline">Anterior: Antecedentes</Button>
          </Link>
          <Link href="/materias/historia/fases-militares">
            <Button>Próximo: Fases Militares</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
