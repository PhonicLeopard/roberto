import { getDatabase } from "./mongodb-connection"
import { ObjectId } from "mongodb"

export interface PhilosophyContent {
  _id?: ObjectId
  subject: string
  period: string
  title: string
  description: string
  difficulty: "easy" | "medium" | "hard"
  estimatedMinutes: number
  content: {
    theory: {
      sections: Array<{
        title: string
        content: string
        keyPoints: string[]
        examples?: string[]
      }>
    }
    practice: {
      exercises: Array<{
        title: string
        statement: string
        type: "conceptual" | "analytical" | "comparative"
        difficulty: "easy" | "medium" | "hard"
        hints?: string[]
      }>
    }
  }
  questions: Array<{
    type: "multiple_choice" | "true_false" | "essay"
    statement: string
    options?: string[]
    correctAnswer?: string | boolean
    explanation: string
    difficulty: "easy" | "medium" | "hard"
  }>
  createdAt: Date
  updatedAt: Date
}

export interface UserProgress {
  _id?: ObjectId
  userId: string
  subject: string
  topicId: string
  completed: boolean
  timeSpent: number
  questionsAnswered: number
  correctAnswers: number
  lastStudied: Date
  streak: number
}

export class ContentService {
  private async getCollection(name: string) {
    const db = await getDatabase()
    return db.collection(name)
  }

  async createPhilosophyContent(content: Omit<PhilosophyContent, "_id" | "createdAt" | "updatedAt">) {
    const collection = await this.getCollection("philosophy_content")
    const result = await collection.insertOne({
      ...content,
      createdAt: new Date(),
      updatedAt: new Date(),
    })
    return result.insertedId
  }

  async getPhilosophyContent(period?: string) {
    const collection = await this.getCollection("philosophy_content")
    const filter = period ? { period } : {}
    return await collection.find(filter).toArray()
  }

  async updateUserProgress(userId: string, topicId: string, progress: Partial<UserProgress>) {
    const collection = await this.getCollection("user_progress")
    return await collection.updateOne(
      { userId, topicId },
      {
        $set: {
          ...progress,
          lastStudied: new Date(),
        },
        $inc: { timeSpent: progress.timeSpent || 0 },
      },
      { upsert: true },
    )
  }

  async getUserProgress(userId: string, subject?: string) {
    const collection = await this.getCollection("user_progress")
    const filter: any = { userId }
    if (subject) filter.subject = subject
    return await collection.find(filter).toArray()
  }

  async generateVariedQuestions(topicId: string, count = 5) {
    const collection = await this.getCollection("philosophy_content")
    const content = await collection.findOne({ _id: new ObjectId(topicId) })

    if (!content) return []

    // Gera variações das questões existentes
    const questions = content.questions || []
    const variedQuestions = []

    for (let i = 0; i < Math.min(count, questions.length); i++) {
      const originalQuestion = questions[i]

      // Cria variações baseadas no tipo
      if (originalQuestion.type === "multiple_choice") {
        variedQuestions.push({
          ...originalQuestion,
          statement: this.varyQuestionStatement(originalQuestion.statement),
          options: this.shuffleArray([...originalQuestion.options]),
        })
      } else {
        variedQuestions.push({
          ...originalQuestion,
          statement: this.varyQuestionStatement(originalQuestion.statement),
        })
      }
    }

    return variedQuestions
  }

  private varyQuestionStatement(statement: string): string {
    // Variações simples de formulação
    const variations = [
      statement,
      statement.replace("Qual", "Que"),
      statement.replace("Como", "De que forma"),
      statement.replace("Por que", "Qual o motivo pelo qual"),
    ]
    return variations[Math.floor(Math.random() * variations.length)]
  }

  private shuffleArray<T>(array: T[]): T[] {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }
}

export const contentService = new ContentService()
