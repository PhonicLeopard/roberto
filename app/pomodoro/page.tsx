import { Navbar } from "@/components/navbar"
import { Sidebar } from "@/components/sidebar"
import { PomodoroTimer } from "@/components/pomodoro-timer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Clock, Target, TrendingUp } from "lucide-react"

export default function PomodoroPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Temporizador Pomodoro</h1>
              <p className="text-muted-foreground">Mantenha o foco com a técnica Pomodoro</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Timer principal</CardTitle>
                    <CardDescription>25 minutos de foco, 5 minutos de pausa</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <PomodoroTimer />
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5" />
                      Meta diária
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Pomodoros completos</span>
                      <Badge variant="secondary">6/8</Badge>
                    </div>
                    <Progress value={75} className="h-2" />
                    <p className="text-xs text-muted-foreground">Faltam 2 pomodoros para atingir sua meta</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      Sessão atual
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Matéria</span>
                      <span className="font-medium">Matemática</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Pomodoros hoje</span>
                      <span className="font-medium">6</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Tempo total</span>
                      <span className="font-medium">3h 30min</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Estatísticas
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Esta semana</span>
                      <span className="font-medium">42 pomodoros</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Média diária</span>
                      <span className="font-medium">6 pomodoros</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Melhor dia</span>
                      <span className="font-medium">10 pomodoros</span>
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
