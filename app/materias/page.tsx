import { Navbar } from "@/components/navbar"
import { Sidebar } from "@/components/sidebar"
import { SubjectSelector } from "@/components/subject-selector"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Plus, BookOpen, Clock, Target } from "lucide-react"
import Link from "next/link"

export default function MateriasPage() {
  const subjects = [
    { id: 1, name: "Matemática", progress: 75, hours: 28, color: "bg-blue-500", slug: "matematica" },
    { id: 2, name: "História", progress: 60, hours: 22, color: "bg-green-500", slug: "historia" },
    { id: 3, name: "Física", progress: 45, hours: 18, color: "bg-purple-500", slug: "fisica" },
    { id: 4, name: "Química", progress: 30, hours: 12, color: "bg-orange-500", slug: "quimica" },
    { id: 5, name: "Literatura", progress: 90, hours: 15, color: "bg-pink-500", slug: "literatura" },
    { id: 6, name: "Geografia", progress: 55, hours: 20, color: "bg-teal-500", slug: "geografia" },
    { id: 7, name: "Inglês", progress: 70, hours: 25, color: "bg-indigo-500", slug: "ingles" },
    { id: 8, name: "Biologia", progress: 45, hours: 16, color: "bg-emerald-500", slug: "biologia" },
    { id: 9, name: "Artes", progress: 80, hours: 10, color: "bg-rose-500", slug: "artes" },
    { id: 10, name: "Redação", progress: 65, hours: 14, color: "bg-amber-500", slug: "redacao" },
    { id: 11, name: "Sociologia", progress: 50, hours: 8, color: "bg-violet-500", slug: "sociologia" },
    { id: 12, name: "Espanhol", progress: 35, hours: 12, color: "bg-cyan-500", slug: "espanhol" },
    { id: 13, name: "Filosofia", progress: 60, hours: 18, color: "bg-slate-500", slug: "filosofia" },
    { id: 14, name: "Educação Física", progress: 95, hours: 6, color: "bg-lime-500", slug: "educacao-fisica" },
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
                <h1 className="text-3xl font-bold text-foreground">Matérias</h1>
                <p className="text-muted-foreground">Gerencie suas disciplinas e acompanhe o progresso</p>
              </div>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Nova matéria
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Seletor de matérias</CardTitle>
                    <CardDescription>Escolha a matéria para sua próxima sessão de estudos</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <SubjectSelector />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Todas as matérias</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {subjects.map((subject) => (
                        <div
                          key={subject.name}
                          className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <div className={`w-4 h-4 rounded-full ${subject.color}`}></div>
                            <div>
                              <h3 className="font-medium">{subject.name}</h3>
                              <p className="text-sm text-muted-foreground">{subject.hours}h estudadas</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-right">
                              <p className="text-sm font-medium">{subject.progress}%</p>
                              <Progress value={subject.progress} className="w-20 h-2" />
                            </div>
                            <Link href={`/materias/${subject.slug}`}>
                              <Button variant="outline" size="sm">
                                Ver conteúdo
                              </Button>
                            </Link>
                          </div>
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
                      <BookOpen className="h-5 w-5" />
                      Resumo geral
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Total de matérias</span>
                      <Badge variant="secondary">14</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Horas totais</span>
                      <span className="font-medium">224h</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Progresso médio</span>
                      <span className="font-medium">62%</span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Target className="h-5 w-5" />
                      Metas da semana
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Matemática</span>
                        <span>8/10h</span>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>História</span>
                        <span>5/8h</span>
                      </div>
                      <Progress value={62} className="h-2" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      Última sessão
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="font-medium">Matemática</p>
                      <p className="text-sm text-muted-foreground">2 horas • Ontem às 14:00</p>
                      <p className="text-xs text-muted-foreground">6 pomodoros completos</p>
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
