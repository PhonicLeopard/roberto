import { Navbar } from "@/components/navbar"
import { Sidebar } from "@/components/sidebar"
import { PomodoroTimer } from "@/components/pomodoro-timer"
import { StudyCalendar } from "@/components/study-calendar"
import { SubjectSelector } from "@/components/subject-selector"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, Clock, Target, BookOpen, FileText, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-6 ml-64">
          <div className="max-w-7xl mx-auto space-y-6">
            {/* Header */}
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-balance">Bem-vindo à sua plataforma de estudos</h1>
              <p className="text-muted-foreground text-pretty">
                Organize seus estudos, mantenha o foco e acompanhe seu progresso de forma eficiente.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Horas estudadas hoje</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3h 45min</div>
                  <p className="text-xs text-muted-foreground">+20% em relação a ontem</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Matérias ativas</CardTitle>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">6</div>
                  <p className="text-xs text-muted-foreground">2 concluídas esta semana</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Sequência de estudos</CardTitle>
                  <Target className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12 dias</div>
                  <p className="text-xs text-muted-foreground">Seu melhor resultado!</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Progresso geral</CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">68%</div>
                  <p className="text-xs text-muted-foreground">+5% esta semana</p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-500 text-white rounded-lg">
                      <FileText className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-blue-900">Provas e vestibulares</CardTitle>
                      <p className="text-sm text-blue-700">
                        Pratique com provas anteriores dos principais vestibulares
                      </p>
                    </div>
                  </div>
                  <Button asChild>
                    <Link href="/provas">
                      Acessar provas
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    ENEM
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                    FUVEST
                  </Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    UNICAMP
                  </Badge>
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                    Universidades Federais
                  </Badge>
                  <Badge variant="secondary" className="bg-indigo-100 text-indigo-800">
                    Institutos Federais
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <SubjectSelector />
                <StudyCalendar />
              </div>

              <div className="space-y-6">
                <PomodoroTimer />

                <Card>
                  <CardHeader>
                    <CardTitle>Atividades recentes</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">Matemática - Derivadas</p>
                        <p className="text-xs text-muted-foreground">2 horas atrás</p>
                      </div>
                      <Badge variant="secondary">Concluído</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">História - Revolução Industrial</p>
                        <p className="text-xs text-muted-foreground">Ontem</p>
                      </div>
                      <Badge variant="secondary">Concluído</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">Física - Cinemática</p>
                        <p className="text-xs text-muted-foreground">2 dias atrás</p>
                      </div>
                      <Badge variant="outline">Em progresso</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-background">
        <div className="container flex h-14 items-center justify-center">
          <p className="text-sm text-muted-foreground">Desenvolvido por Brayan • © 2025 Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  )
}
