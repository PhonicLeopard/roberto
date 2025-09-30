"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, BookOpen, CheckCircle2, XCircle, AlertTriangle } from "lucide-react"

export default function SegundaGuerraPage() {
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
            <h1 className="text-3xl font-bold">Segunda Guerra Mundial (1939-1945)</h1>
            <p className="text-muted-foreground">O conflito mais devastador da história humana</p>
          </div>
        </div>

        <Card className="border-destructive/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive" />
              Visão Geral do Conflito
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              A Segunda Guerra Mundial foi o conflito mais mortífero e destrutivo da história, resultando em
              aproximadamente 70-85 milhões de mortes. Foi uma guerra total que envolveu todos os aspectos da sociedade
              e marcou o fim de uma era e o início de outra.
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="bg-destructive/10 p-4 rounded-lg">
                <p className="text-2xl font-bold text-destructive">70-85M</p>
                <p className="text-sm text-muted-foreground">Mortes totais</p>
              </div>
              <div className="bg-destructive/10 p-4 rounded-lg">
                <p className="text-2xl font-bold text-destructive">6 anos</p>
                <p className="text-sm text-muted-foreground">Duração (1939-1945)</p>
              </div>
              <div className="bg-destructive/10 p-4 rounded-lg">
                <p className="text-2xl font-bold text-destructive">60+ países</p>
                <p className="text-sm text-muted-foreground">Envolvidos</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />O Início da Guerra Fria e a Bipolarização
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              O conflito mais devastador da história deu lugar a um novo tipo de guerra: uma disputa ideológica,
              política, econômica e militar entre as duas novas superpotências, sem um confronto armado direto entre
              elas.
            </p>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Surgimento de Duas Superpotências</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Estados Unidos</h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Sistema capitalista</li>
                        <li>• Democracia liberal</li>
                        <li>• Economia de mercado</li>
                        <li>• Influência na Europa Ocidental</li>
                      </ul>
                    </div>
                    <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">União Soviética</h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>• Sistema comunista</li>
                        <li>• Partido único</li>
                        <li>• Economia planificada</li>
                        <li>• Controle da Europa Oriental</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">A "Cortina de Ferro"</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Termo cunhado por Winston Churchill para descrever a divisão ideológica e física da Europa. De um
                    lado, a Europa Ocidental, sob influência americana; do outro, a Europa Oriental, controlada por
                    regimes comunistas satélites da URSS.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Doutrina Truman (1947)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Política externa dos EUA de "contenção" do comunismo, prometendo apoio a qualquer nação que se
                    sentisse ameaçada pela expansão soviética. Marcou o início oficial da Guerra Fria.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Plano Marshall (1948)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Um gigantesco programa de ajuda econômica dos EUA (mais de $13 bilhões) para a reconstrução dos
                    países da Europa Ocidental. O objetivo era recuperar suas economias para que não se tornassem
                    vulneráveis ao comunismo. A URSS proibiu os países sob sua influência de aceitarem a ajuda.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />A Divisão da Alemanha e a Crise de Berlim
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              A Alemanha, no centro da Europa, tornou-se o principal símbolo da Guerra Fria, dividida entre as potências
              vencedoras e transformada em campo de batalha ideológico.
            </p>

            <div className="space-y-4">
              <div className="bg-muted p-4 rounded-lg space-y-2">
                <h4 className="font-semibold">Ocupação e Divisão (1949)</h4>
                <p className="text-sm text-muted-foreground">
                  O país foi dividido em quatro zonas de ocupação (EUA, Reino Unido, França e URSS). As zonas ocidentais
                  se unificaram na <strong>República Federal da Alemanha</strong> (Alemanha Ocidental, capitalista), e a
                  zona soviética se tornou a <strong>República Democrática Alemã</strong> (Alemanha Oriental,
                  comunista).
                </p>
              </div>

              <Card className="border-2 border-amber-500/50">
                <CardHeader>
                  <CardTitle className="text-base">Bloqueio de Berlim (1948-1949)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Stalin bloqueou todos os acessos terrestres a Berlim Ocidental (que ficava dentro da Alemanha
                    Oriental) para tentar forçar a saída dos Aliados. Foi a primeira grande crise da Guerra Fria.
                  </p>
                  <div className="bg-green-500/10 border border-green-500/20 p-3 rounded">
                    <p className="text-sm">
                      <strong>Resposta Aliada:</strong> Os EUA e o Reino Unido responderam com uma massiva ponte aérea
                      que abasteceu a cidade por quase um ano, realizando mais de 200 mil voos e entregando 2,3 milhões
                      de toneladas de suprimentos.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-destructive/50">
                <CardHeader>
                  <CardTitle className="text-base">Construção do Muro de Berlim (1961)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm text-muted-foreground">
                    Para impedir a fuga em massa de seus cidadãos para o lado ocidental (mais de 3 milhões haviam
                    fugido), o governo da Alemanha Oriental construiu um muro que dividiu a cidade ao meio.
                  </p>
                  <div className="bg-destructive/10 p-3 rounded text-sm">
                    O Muro de Berlim se tornou o símbolo máximo da divisão da Guerra Fria e da repressão comunista. Mais
                    de 140 pessoas morreram tentando atravessá-lo.
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />O Processo de Descolonização
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              A guerra enfraqueceu fatalmente os velhos impérios coloniais europeus (Reino Unido e França), acelerando
              os movimentos de independência na Ásia e África.
            </p>

            <div className="grid gap-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Independência da Índia (1947)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    A "joia da coroa" britânica conquistou sua independência (liderada por Gandhi e Nehru), mas foi
                    dividida entre Índia (maioria hindu) e Paquistão (maioria muçulmana), gerando um conflito violento
                    que matou mais de 1 milhão de pessoas.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Revolução Comunista na China (1949)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Liderada por Mao Zedong, a revolução expandiu drasticamente o bloco comunista no mundo,
                    transformando o país mais populoso do planeta em uma nação comunista.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-base">Guerras de Independência</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Muitos processos foram violentos, como a Guerra da Indochina (que levou à Guerra do Vietnã) e a
                    Guerra da Argélia contra a França (1954-1962).
                  </p>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Exercícios de Fixação</CardTitle>
            <CardDescription>Teste seus conhecimentos sobre o pós-Segunda Guerra</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-semibold">1. O que foi a "Cortina de Ferro"?</h3>
              <div className="space-y-2">
                {[
                  { id: "a", texto: "Uma barreira física construída ao redor da Europa" },
                  { id: "b", texto: "A divisão ideológica e física entre Europa Ocidental e Oriental" },
                  { id: "c", texto: "Um acordo comercial entre EUA e URSS" },
                  { id: "d", texto: "Uma aliança militar europeia" },
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
                        A "Cortina de Ferro" foi um termo cunhado por Winston Churchill para descrever a divisão entre a
                        Europa Ocidental (capitalista, sob influência dos EUA) e a Europa Oriental (comunista, sob
                        controle soviético). Representava tanto uma divisão ideológica quanto física.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Separator />

            <div className="space-y-4">
              <h3 className="font-semibold">2. Qual foi o objetivo do Plano Marshall?</h3>
              <div className="space-y-2">
                {[
                  { id: "a", texto: "Ajudar a URSS a se reconstruir após a guerra" },
                  { id: "b", texto: "Reconstruir a Europa Ocidental para evitar a expansão comunista" },
                  { id: "c", texto: "Criar uma aliança militar contra a Alemanha" },
                  { id: "d", texto: "Dividir a Alemanha em zonas de ocupação" },
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
                        O Plano Marshall foi um programa de ajuda econômica dos EUA (mais de $13 bilhões) para
                        reconstruir a Europa Ocidental. O objetivo era recuperar suas economias para que não se
                        tornassem vulneráveis ao comunismo. A URSS proibiu os países sob sua influência de aceitarem a
                        ajuda.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <Link href="/materias/historia/pos-primeira-guerra">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Anterior: Pós-Primeira Guerra
            </Button>
          </Link>
          <Link href="/materias/historia/guerra-fria">
            <Button>
              Próximo: Guerra Fria
              <ArrowLeft className="h-4 w-4 ml-2 rotate-180" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
