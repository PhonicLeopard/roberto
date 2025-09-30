import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, BookOpen, Clock } from "lucide-react"

const topicos = [
  {
    id: "antecedentes",
    titulo: "Antecedentes e Causas da Primeira Guerra",
    descricao: "Imperialismo, nacionalismos, corrida armamentista e sistema de alianças",
    duracao: "45 min",
  },
  {
    id: "estopim",
    titulo: "O Estopim: Sarajevo e o Início",
    descricao: "O atentado de Sarajevo e o efeito dominó que levou à guerra",
    duracao: "30 min",
  },
  {
    id: "pos-primeira-guerra",
    titulo: "Pós-Primeira Guerra Mundial",
    descricao: "Tratado de Versalhes, crise econômica e ascensão de ideologias extremistas",
    duracao: "60 min",
  },
  {
    id: "segunda-guerra",
    titulo: "Segunda Guerra Mundial",
    descricao: "O conflito mais devastador da história e suas consequências",
    duracao: "90 min",
  },
  {
    id: "guerra-fria",
    titulo: "Guerra Fria (1947-1991)",
    descricao: "A rivalidade entre EUA e URSS que dividiu o mundo em dois blocos",
    duracao: "80 min",
  },
]

export default function HistoriaPage() {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex items-center gap-4">
          <Link href="/materias/2">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold">História - Século XX</h1>
            <p className="text-muted-foreground">Estude os principais eventos que moldaram o mundo moderno</p>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Sobre este módulo</CardTitle>
            <CardDescription>
              Explore os eventos mais transformadores do século XX, desde a Primeira Guerra Mundial até o fim da Guerra
              Fria. Compreenda as causas, desenvolvimentos e consequências que moldaram o mundo contemporâneo.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-6 text-sm">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-muted-foreground" />
                <span>{topicos.length} tópicos principais</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>~5h de estudo</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Tópicos de Estudo</h2>
          <div className="grid gap-4">
            {topicos.map((topico) => (
              <Link key={topico.id} href={`/materias/historia/${topico.id}`}>
                <Card className="hover:bg-accent transition-colors cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 space-y-2">
                        <h3 className="font-semibold text-lg">{topico.titulo}</h3>
                        <p className="text-sm text-muted-foreground">{topico.descricao}</p>
                        <Badge variant="secondary" className="text-xs">
                          <Clock className="h-3 w-3 mr-1" />
                          {topico.duracao}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
