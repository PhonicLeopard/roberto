import { Navbar } from "@/components/navbar"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Plus, Target, Calendar, Clock, TrendingUp } from "lucide-react"

export default function MetasPage() {
  const goals = [
    {
      title: "Estudar 40 horas por semana",
      progress: 75,
      current: 30,
      target: 40,
      deadline: "Esta semana",
      status: "em-progresso",
    },
    {
      title: "Completar curso de Matemática",
      progress: 60,
      current: 12,
      target: 20,
      deadline: "30 dias",
      status: "em-progresso",
    },
    {
      title: "Fazer 200 pomodoros este mês",
      progress: 85,
      current: 170,
      target: 200,
      deadline: "Este mês",
      status: "quase-completa",
    },
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
                <h1 className="text-3xl font-bold text-foreground">Metas</h1>
                <p className="text-muted-foreground">Defina objetivos e acompanhe seu progresso</p>
              </div>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Nova meta
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium flex items-center gap-2">
                        <Target className="h-4 w-4" />
                        Metas ativas
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">3</div>
                      <p className="text-xs text-muted-foreground">Em progresso</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium flex items-center gap-2">
                        <TrendingUp className="h-4 w-4" />
                        Taxa de sucesso
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">87%</div>
                      <p className="text-xs text-muted-foreground">Últimos 30 dias</p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-sm font-medium flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        Tempo médio
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">18</div>
                      <p className="text-xs text-muted-foreground">Dias para completar</p>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Metas atuais</CardTitle>
                    <CardDescription>Acompanhe o progresso das suas metas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {goals.map((goal, index) => (
                        <div key={index} className="space-y-3">
                          <div className="flex items-center justify-between">
                            <div>
                              <h3 className="font-medium">{goal.title}</h3>
                              <p className="text-sm text-muted-foreground">
                                {goal.current} de {goal.target} • {goal.deadline}
                              </p>
                            </div>
                            <Badge variant={goal.status === "quase-completa" ? "default" : "secondary"}>
                              {goal.progress}%
                            </Badge>
                          </div>
                          <Progress value={goal.progress} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      Próximos prazos
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div>
                        <p className="font-medium text-sm">40h esta semana</p>
                        <p className="text-xs text-muted-foreground">Faltam 2 dias</p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        75%
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div>
                        <p className="font-medium text-sm">200 pomodoros</p>
                        <p className="text-xs text-muted-foreground">Faltam 8 dias</p>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        85%
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Conquistas recentes</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <Target className="h-4 w-4 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Meta semanal atingida</p>
                        <p className="text-xs text-muted-foreground">Há 2 dias</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Clock className="h-4 w-4 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">100 pomodoros completos</p>
                        <p className="text-xs text-muted-foreground">Há 5 dias</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Dicas para suas metas</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="text-sm">💡 Você está 25% acima da média semanal!</p>
                      <p className="text-sm">🎯 Foque em Matemática para atingir sua meta mensal</p>
                      <p className="text-sm">⏰ Mantenha a consistência nos pomodoros</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
