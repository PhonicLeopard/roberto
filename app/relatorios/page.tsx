import { Navbar } from "@/components/navbar"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BarChart3, TrendingUp, Clock, Target, Download, Calendar } from "lucide-react"

export default function RelatoriosPage() {
  const weeklyData = [
    { day: "Seg", hours: 6 },
    { day: "Ter", hours: 4 },
    { day: "Qua", hours: 8 },
    { day: "Qui", hours: 5 },
    { day: "Sex", hours: 7 },
    { day: "Sáb", hours: 3 },
    { day: "Dom", hours: 2 },
  ]

  const subjectStats = [
    { name: "Matemática", hours: 28, percentage: 35, color: "bg-blue-500" },
    { name: "História", hours: 22, percentage: 27, color: "bg-green-500" },
    { name: "Física", hours: 18, percentage: 23, color: "bg-purple-500" },
    { name: "Química", hours: 12, percentage: 15, color: "bg-orange-500" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-foreground">Relatórios</h1>
                <p className="text-muted-foreground">Analise seu desempenho e progresso nos estudos</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  Período
                </Button>
                <Button size="sm">
                  <Download className="h-4 w-4 mr-2" />
                  Exportar
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Total de horas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">142h</div>
                  <p className="text-xs text-muted-foreground">+12% vs mês anterior</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <Target className="h-4 w-4" />
                    Pomodoros
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">284</div>
                  <p className="text-xs text-muted-foreground">Média de 9.1 por dia</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    Consistência
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">87%</div>
                  <p className="text-xs text-muted-foreground">27 de 31 dias ativos</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm font-medium flex items-center gap-2">
                    <BarChart3 className="h-4 w-4" />
                    Média diária
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4.6h</div>
                  <p className="text-xs text-muted-foreground">Acima da meta de 4h</p>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Horas por dia da semana</CardTitle>
                  <CardDescription>Distribuição do tempo de estudo</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {weeklyData.map((day) => (
                      <div key={day.day} className="flex items-center gap-4">
                        <div className="w-12 text-sm font-medium">{day.day}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <div className="flex-1 bg-muted rounded-full h-2">
                              <div
                                className="bg-primary h-2 rounded-full"
                                style={{ width: `${(day.hours / 8) * 100}%` }}
                              ></div>
                            </div>
                            <span className="text-sm font-medium w-8">{day.hours}h</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Distribuição por matéria</CardTitle>
                  <CardDescription>Tempo dedicado a cada disciplina</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {subjectStats.map((subject) => (
                      <div key={subject.name} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className={`w-3 h-3 rounded-full ${subject.color}`}></div>
                            <span className="text-sm font-medium">{subject.name}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm">{subject.hours}h</span>
                            <Badge variant="secondary" className="text-xs">
                              {subject.percentage}%
                            </Badge>
                          </div>
                        </div>
                        <Progress value={subject.percentage * 2.5} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Melhor sequência</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold text-primary">12</div>
                    <p className="text-sm text-muted-foreground">Dias consecutivos estudando</p>
                    <p className="text-xs text-muted-foreground">Recorde pessoal: 18 dias</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Horário mais produtivo</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center space-y-2">
                    <div className="text-3xl font-bold text-primary">14h-16h</div>
                    <p className="text-sm text-muted-foreground">Maior concentração</p>
                    <p className="text-xs text-muted-foreground">87% dos pomodoros completos</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Meta mensal</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Progresso</span>
                      <Badge variant="secondary">142h / 160h</Badge>
                    </div>
                    <Progress value={88.75} className="h-2" />
                    <p className="text-xs text-muted-foreground">Faltam 18h para atingir a meta</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
