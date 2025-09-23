"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, ChevronRight, Plus } from "lucide-react"

const daysOfWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]
const months = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
]

export function StudyCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date())

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  const firstDayOfMonth = new Date(year, month, 1)
  const lastDayOfMonth = new Date(year, month + 1, 0)
  const firstDayWeekday = firstDayOfMonth.getDay()
  const daysInMonth = lastDayOfMonth.getDate()

  const studyDays = [5, 12, 18, 25] // Dias com estudos programados

  const previousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1))
  }

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1))
  }

  const renderCalendarDays = () => {
    const days = []

    // Dias vazios do mês anterior
    for (let i = 0; i < firstDayWeekday; i++) {
      days.push(<div key={`empty-${i}`} className="h-10" />)
    }

    // Dias do mês atual
    for (let day = 1; day <= daysInMonth; day++) {
      const hasStudy = studyDays.includes(day)
      const isToday = new Date().toDateString() === new Date(year, month, day).toDateString()

      days.push(
        <div
          key={day}
          className={`h-10 flex items-center justify-center text-sm cursor-pointer rounded-md hover:bg-accent relative ${
            isToday ? "bg-primary text-primary-foreground" : ""
          }`}
        >
          {day}
          {hasStudy && (
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
          )}
        </div>,
      )
    }

    return days
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <span>Calendário de estudos</span>
          <Button size="sm">
            <Plus className="h-4 w-4 mr-1" />
            Adicionar
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" onClick={previousMonth}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <h3 className="text-lg font-semibold">
              {months[month]} {year}
            </h3>
            <Button variant="ghost" size="sm" onClick={nextMonth}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-7 gap-1">
            {daysOfWeek.map((day) => (
              <div
                key={day}
                className="h-10 flex items-center justify-center text-sm font-medium text-muted-foreground"
              >
                {day}
              </div>
            ))}
            {renderCalendarDays()}
          </div>

          <div className="space-y-2">
            <h4 className="text-sm font-medium">Próximos estudos:</h4>
            <div className="space-y-1">
              <div className="flex items-center justify-between text-sm">
                <span>Matemática - Álgebra</span>
                <Badge variant="secondary">Hoje 14:00</Badge>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>História - Segunda Guerra</span>
                <Badge variant="secondary">Amanhã 16:00</Badge>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
