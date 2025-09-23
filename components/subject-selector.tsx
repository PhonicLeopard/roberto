"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Plus, BookOpen, Search } from "lucide-react"
import Link from "next/link"

const subjects = [
  { id: 1, name: "Matemática", color: "bg-blue-500", topics: 12, progress: 75 },
  { id: 2, name: "História", color: "bg-green-500", topics: 8, progress: 60 },
  { id: 3, name: "Física", color: "bg-purple-500", topics: 15, progress: 40 },
  { id: 4, name: "Química", color: "bg-orange-500", topics: 10, progress: 85 },
  { id: 5, name: "Literatura", color: "bg-pink-500", topics: 6, progress: 90 },
  { id: 6, name: "Geografia", color: "bg-teal-500", topics: 9, progress: 55 },
  { id: 7, name: "Inglês", color: "bg-indigo-500", topics: 11, progress: 70 },
  { id: 8, name: "Biologia", color: "bg-emerald-500", topics: 13, progress: 45 },
  { id: 9, name: "Artes", color: "bg-rose-500", topics: 7, progress: 80 },
  { id: 10, name: "Redação", color: "bg-amber-500", topics: 5, progress: 65 },
  { id: 11, name: "Sociologia", color: "bg-violet-500", topics: 8, progress: 50 },
  { id: 12, name: "Espanhol", color: "bg-cyan-500", topics: 10, progress: 35 },
  { id: 13, name: "Filosofia", color: "bg-slate-500", topics: 9, progress: 60 },
  { id: 14, name: "Educação Física", color: "bg-lime-500", topics: 6, progress: 95 },
]

export function SubjectSelector() {
  const [selectedSubject, setSelectedSubject] = useState<number | null>(null)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredSubjects = subjects.filter((subject) => subject.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Matérias de estudo</span>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-1" />
            Nova matéria
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar matérias..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {filteredSubjects.map((subject) => (
            <Link key={subject.id} href={`/materias/${subject.id}`}>
              <div
                className={`p-4 rounded-lg border cursor-pointer transition-all hover:shadow-md ${
                  selectedSubject === subject.id
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/50"
                }`}
                onClick={() => setSelectedSubject(subject.id)}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${subject.color}`} />
                  <div className="flex-1">
                    <h3 className="font-medium">{subject.name}</h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant="secondary" className="text-xs">
                        {subject.topics} tópicos
                      </Badge>
                      <span className="text-xs text-muted-foreground">{subject.progress}% concluído</span>
                    </div>
                  </div>
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                </div>

                <div className="mt-3">
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div
                      className="bg-primary h-2 rounded-full transition-all"
                      style={{ width: `${subject.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {selectedSubject && (
          <div className="mt-4 p-4 bg-accent rounded-lg">
            <h4 className="font-medium mb-2">{subjects.find((s) => s.id === selectedSubject)?.name} selecionada</h4>
            <p className="text-sm text-muted-foreground">
              Pronto para começar a estudar! Use o temporizador Pomodoro para manter o foco.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
