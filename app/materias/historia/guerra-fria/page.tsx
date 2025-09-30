"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, BookOpen, CheckCircle2, XCircle, Flame } from "lucide-react"

export default function GuerraFriaPage() {
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
            <h1 className="text-3xl font-bold">Guerra Fria (1947-1991)</h1>
            <p className="text-muted-foreground">A rivalidade que dividiu o mundo em dois blocos</p>
          </div>
        </div>

        <Card className="border-amber-500/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Flame className="h-5 w-5 text-amber-500" />O Que Foi a Guerra Fria?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Foi um período de intensa rivalidade e tensão geopolítica entre as duas superpotências que emergiram da
              Segunda Guerra Mundial: os Estados Unidos (liderando o bloco capitalista) e a União Soviética (liderando o
              bloco comunista).
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Conflito Indireto</h4>
                <p className="text-sm text-muted-foreground">
                  Não houve confronto militar direto entre as superpotências, pois o arsenal nuclear significaria
                  destruição mútua.
                </p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Disputa Ideológica</h4>
                <p className="text-sm text-muted-foreground">
                  Batalha global entre capitalismo (democracia liberal, economia de mercado) e comunismo (partido único,
                  economia planificada).
                </p>
              </div>
              <div className="bg-muted p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Bipolarização Mundial</h4>
                <p className="text-sm text-muted-foreground">
                  O mundo se dividiu em duas esferas de influência, com as potências buscando hegemonia global.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />A Corrida Armamentista e Nuclear
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              O medo de um novo conflito global, desta vez nuclear, dominou as relações internacionais por décadas.
            </p>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">OTAN vs Pacto de Varsóvia</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">OTAN (1949)</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Organização do Tratado do Atlântico Norte - Aliança militar liderada pelos EUA para defesa mútua
                        dos países da Europa Ocidental.
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Membros: EUA, Canadá, Reino Unido, França, Itália, Bélgica, Holanda, Luxemburgo, Noruega,
                        Dinamarca, Islândia, Portugal
                      </p>
                    </div>
                    <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Pacto de Varsóvia (1955)</h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Resposta soviética à OTAN, unindo militarmente a URSS e seus satélites da Europa Oriental.
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Membros: URSS, Polônia, Alemanha Oriental, Tchecoslováquia, Hungria, Romênia, Bulgária, Albânia
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-destructive/50">
                <CardHeader>
                  <CardTitle className="text-base">A Era Nuclear e a MAD</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Em 1949, a URSS testou sua primeira bomba atômica, acabando com o monopólio americano. Isso deu
                    início a uma corrida armamentista desenfreada.
                  </p>
                  <div className="bg-destructive/10 border border-destructive/20 p-3 rounded">
                    <p className="text-sm">
                      <strong className="text-destructive">Destruição Mútua Assegurada (MAD):</strong> Doutrina onde um
                      ataque nuclear de um lado levaria à aniquilação de ambos. Paradoxalmente, o terror nuclear manteve
                      a paz direta entre as superpotências.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">A Corrida Espacial</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    A competição se estendeu à tecnologia espacial, tornando-se um símbolo de superioridade científica e
                    militar.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2">
                      <Badge variant="destructive" className="mt-0.5">
                        URSS
                      </Badge>
                      <div>
                        <p className="font-semibold">1957: Sputnik</p>
                        <p className="text-muted-foreground">Primeiro satélite artificial</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Badge variant="destructive" className="mt-0.5">
                        URSS
                      </Badge>
                      <div>
                        <p className="font-semibold">1961: Yuri Gagarin</p>
                        <p className="text-muted-foreground">Primeiro homem no espaço</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <Badge className="mt-0.5">EUA</Badge>
                      <div>
                        <p className="font-semibold">1969: Apollo 11</p>
                        <p className="text-muted-foreground">Primeiro homem na Lua (Neil Armstrong)</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              As "Guerras por Procuração" (Proxy Wars)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              EUA e URSS evitaram o confronto direto, mas financiaram e se envolveram em conflitos regionais para
              expandir sua influência.
            </p>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Guerra da Coreia (1950-1953)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Primeiro grande conflito armado da Guerra Fria. O Norte comunista (apoiado pela China e URSS)
                    invadiu o Sul (apoiado pelos EUA e ONU). A guerra terminou em um impasse, com a península dividida
                    no Paralelo 38 até hoje.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-amber-500/50">
                <CardHeader>
                  <CardTitle className="text-base">Crise dos Mísseis de Cuba (1962)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    O momento em que o mundo esteve mais perto de uma guerra nuclear. A URSS instalou mísseis nucleares
                    em Cuba (a 150 km da Flórida), e os EUA impuseram um bloqueio naval.
                  </p>
                  <div className="bg-amber-500/10 border border-amber-500/20 p-3 rounded text-sm">
                    <strong>Resolução:</strong> Após 13 dias de tensão extrema, os soviéticos concordaram em remover os
                    mísseis em troca da promessa dos EUA de não invadir Cuba e da retirada secreta de mísseis americanos
                    da Turquia.
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Guerra do Vietnã (1955-1975)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Conflito longo e brutal que resultou na vitória do Norte comunista e em uma derrota humilhante para
                    os Estados Unidos. Mais de 58 mil americanos e milhões de vietnamitas morreram. A guerra se tornou
                    extremamente impopular nos EUA.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Invasão Soviética do Afeganistão (1979-1989)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    A URSS invadiu para apoiar um governo comunista, mas enfrentou uma guerrilha feroz financiada pelos
                    EUA (os mujahidin). O conflito ficou conhecido como o "Vietnã soviético" e contribuiu para o colapso
                    da União Soviética.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />O Fim da Guerra Fria (1989-1991)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              A ascensão de Mikhail Gorbachev ao poder na URSS em 1985 mudou o rumo da história. Para salvar a economia
              soviética estagnada, ele introduziu reformas revolucionárias.
            </p>

            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Glasnost ("Transparência")</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Maior liberdade de expressão e de imprensa, permitindo críticas ao governo pela primeira vez.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Perestroika ("Reestruturação")</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Reformas econômicas para introduzir elementos de mercado na economia planificada.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <Card className="border-2 border-green-500/50">
                <CardHeader>
                  <CardTitle className="text-base">As Revoluções de 1989</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Gorbachev sinalizou que não usaria a força militar para manter os regimes comunistas no Leste
                    Europeu. Em poucos meses, os regimes caíram um após o outro.
                  </p>
                  <div className="bg-muted p-3 rounded text-sm space-y-1">
                    <p>• Polônia: Eleições livres, vitória do Solidariedade</p>
                    <p>• Hungria: Abertura da fronteira com a Áustria</p>
                    <p>• Tchecoslováquia: Revolução de Veludo (pacífica)</p>
                    <p>• Romênia: Queda violenta de Ceaușescu</p>
                    <p>• Bulgária: Renúncia do líder comunista</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-500/50">
                <CardHeader>
                  <CardTitle className="text-base">Queda do Muro de Berlim (9 de novembro de 1989)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    O evento mais simbólico do fim da Guerra Fria. Com o governo da Alemanha Oriental enfraquecido, a
                    população derrubou o muro, e a fronteira foi aberta. A reunificação da Alemanha ocorreu em 1990.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-destructive/50">
                <CardHeader>
                  <CardTitle className="text-base">Dissolução da União Soviética (1991)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    As políticas de Gorbachev enfraqueceram o controle central do Partido Comunista. As repúblicas que
                    formavam a URSS começaram a declarar independência. Após uma tentativa fracassada de golpe por
                    comunistas da linha-dura, Gorbachev renunciou em dezembro de 1991, e a União Soviética deixou de
                    existir. A Guerra Fria terminou oficialmente.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Exercícios de Fixação</CardTitle>
            <CardDescription>Teste seus conhecimentos sobre a Guerra Fria</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-semibold">1. Por que a Guerra Fria é chamada de "fria"?</h3>
              <div className="space-y-2">
                {[
                  { id: "a", texto: "Porque ocorreu em regiões de clima frio" },
                  { id: "b", texto: "Porque não houve confronto militar direto entre EUA e URSS" },
                  { id: "c", texto: "Porque durou pouco tempo" },
                  { id: "d", texto: "Porque foi um conflito pacífico" },
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
                        A Guerra Fria é chamada de "fria" porque não houve um confronto militar direto entre as duas
                        superpotências (EUA e URSS). O arsenal nuclear de ambos os lados significaria destruição mútua,
                        então a rivalidade se manifestou através de guerras por procuração, corrida armamentista e
                        disputa ideológica.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="font-semibold">2. Qual evento marcou simbolicamente o fim da Guerra Fria?</h3>
              <div className="space-y-2">
                {[
                  { id: "a", texto: "A Crise dos Mísseis de Cuba" },
                  { id: "b", texto: "A Guerra do Vietnã" },
                  { id: "c", texto: "A Queda do Muro de Berlim em 1989" },
                  { id: "d", texto: "A criação da OTAN" },
                ].map((opcao) => (
                  <div key={opcao.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`q2-${opcao.id}`}
                      checked={respostas["q2"] === opcao.id}
                      onCheckedChange={() => {
                        setRespostas((prev) => ({ ...prev, q2: opcao.id }))
                        verificarResposta("q2", "c")
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
                  className={`p-4 rounded-lg ${respostas["q2"] === "c" ? "bg-green-500/10 border border-green-500/20" : "bg-destructive/10 border border-destructive/20"}`}
                >
                  <div className="flex items-start gap-2">
                    {respostas["q2"] === "c" ? (
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                    ) : (
                      <XCircle className="h-5 w-5 text-destructive mt-0.5" />
                    )}
                    <div className="space-y-1">
                      <p className="font-semibold text-sm">{respostas["q2"] === "c" ? "Correto!" : "Incorreto"}</p>
                      <p className="text-sm text-muted-foreground">
                        A Queda do Muro de Berlim em 9 de novembro de 1989 foi o evento mais simbólico do fim da Guerra
                        Fria. O muro havia sido o símbolo máximo da divisão entre os blocos capitalista e comunista. Sua
                        queda representou o colapso do comunismo na Europa Oriental e o início do fim da União
                        Soviética.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <Link href="/materias/historia/segunda-guerra">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Anterior: Segunda Guerra
            </Button>
          </Link>
          <Link href="/materias/historia">
            <Button>Voltar para História</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
