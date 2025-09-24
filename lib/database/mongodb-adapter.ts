// Adaptador para MongoDB
import { MongoClient, type Db, type Collection } from "mongodb"
import type {
  User,
  StudySession,
  Subject,
  Topic,
  UserProgress,
  StudyPlan,
  StudyStreak,
  Question,
  DatabaseOperations,
} from "./schemas"

export class MongoDBAdapter implements DatabaseOperations {
  private client: MongoClient
  private db: Db

  constructor(connectionString: string, databaseName: string) {
    this.client = new MongoClient(connectionString)
    this.db = this.client.db(databaseName)
  }

  async connect() {
    await this.client.connect()
  }

  async disconnect() {
    await this.client.close()
  }

  // Collections
  private get users(): Collection<User> {
    return this.db.collection("users")
  }

  private get studySessions(): Collection<StudySession> {
    return this.db.collection("study_sessions")
  }

  private get subjects(): Collection<Subject> {
    return this.db.collection("subjects")
  }

  private get topics(): Collection<Topic> {
    return this.db.collection("topics")
  }

  private get userProgress(): Collection<UserProgress> {
    return this.db.collection("user_progress")
  }

  private get studyPlans(): Collection<StudyPlan> {
    return this.db.collection("study_plans")
  }

  private get studyStreaks(): Collection<StudyStreak> {
    return this.db.collection("study_streaks")
  }

  private get questions(): Collection<Question> {
    return this.db.collection("questions")
  }

  // Implementação dos métodos
  async createUser(userData: Omit<User, "id" | "createdAt" | "updatedAt">): Promise<User> {
    const user: User = {
      ...userData,
      id: new Date().getTime().toString(),
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    await this.users.insertOne(user)
    return user
  }

  async getUserById(id: string): Promise<User | null> {
    return await this.users.findOne({ id })
  }

  async updateUserStats(userId: string, stats: Partial<User["stats"]>): Promise<void> {
    await this.users.updateOne(
      { id: userId },
      {
        $set: {
          stats: stats,
          updatedAt: new Date(),
        },
      },
    )
  }

  async createStudySession(sessionData: Omit<StudySession, "id">): Promise<StudySession> {
    const session: StudySession = {
      ...sessionData,
      id: new Date().getTime().toString(),
    }

    await this.studySessions.insertOne(session)
    return session
  }

  async getStudySessionsByUser(userId: string, limit = 50): Promise<StudySession[]> {
    return await this.studySessions.find({ userId }).sort({ startTime: -1 }).limit(limit).toArray()
  }

  async updateStudySession(id: string, updates: Partial<StudySession>): Promise<void> {
    await this.studySessions.updateOne({ id }, { $set: updates })
  }

  async getUserProgress(userId: string, subjectId?: string): Promise<UserProgress[]> {
    const filter: any = { userId }
    if (subjectId) filter.subjectId = subjectId

    return await this.userProgress.find(filter).toArray()
  }

  async updateProgress(userId: string, topicId: string, progress: Partial<UserProgress>): Promise<void> {
    await this.userProgress.updateOne(
      { userId, topicId },
      {
        $set: {
          ...progress,
          lastStudied: new Date(),
        },
      },
      { upsert: true },
    )
  }

  async getSubjects(): Promise<Subject[]> {
    return await this.subjects.find({}).toArray()
  }

  async getTopicsBySubject(subjectId: string): Promise<Topic[]> {
    return await this.topics.find({ subjectId }).sort({ order: 1 }).toArray()
  }

  async getTopicContent(topicId: string): Promise<Topic> {
    const topic = await this.topics.findOne({ id: topicId })
    if (!topic) throw new Error(`Topic ${topicId} not found`)
    return topic
  }

  async getQuestionsByTopic(topicId: string, type?: Question["type"]): Promise<Question[]> {
    const filter: any = { topicId }
    if (type) filter.type = type

    return await this.questions.find(filter).toArray()
  }

  async saveUserAnswer(userId: string, questionId: string, answer: string | string[]): Promise<void> {
    // Implementar lógica para salvar resposta do usuário
    const question = await this.questions.findOne({ id: questionId })
    if (!question) throw new Error(`Question ${questionId} not found`)

    const isCorrect = Array.isArray(answer)
      ? JSON.stringify(answer.sort()) === JSON.stringify((question.correctAnswer as string[]).sort())
      : answer === question.correctAnswer

    await this.userProgress.updateOne(
      { userId, topicId: question.topicId },
      {
        $push: {
          answeredQuestions: {
            questionId,
            userAnswer: answer,
            isCorrect,
            attemptedAt: new Date(),
          },
        },
      },
      { upsert: true },
    )
  }

  async createStudyPlan(planData: Omit<StudyPlan, "id">): Promise<StudyPlan> {
    const plan: StudyPlan = {
      ...planData,
      id: new Date().getTime().toString(),
    }

    await this.studyPlans.insertOne(plan)
    return plan
  }

  async getUserStudyPlans(userId: string): Promise<StudyPlan[]> {
    return await this.studyPlans.find({ userId }).toArray()
  }

  async updateStreak(userId: string): Promise<StudyStreak> {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    let streak = await this.studyStreaks.findOne({ userId })

    if (!streak) {
      streak = {
        id: new Date().getTime().toString(),
        userId,
        currentStreak: 1,
        longestStreak: 1,
        lastStudyDate: today,
        streakHistory: [
          {
            date: today,
            minutesStudied: 0,
            subjectsStudied: [],
          },
        ],
      }
    } else {
      const lastStudy = new Date(streak.lastStudyDate)
      lastStudy.setHours(0, 0, 0, 0)

      const daysDiff = Math.floor((today.getTime() - lastStudy.getTime()) / (1000 * 60 * 60 * 24))

      if (daysDiff === 1) {
        // Dia consecutivo
        streak.currentStreak += 1
        streak.longestStreak = Math.max(streak.longestStreak, streak.currentStreak)
      } else if (daysDiff > 1) {
        // Quebrou a sequência
        streak.currentStreak = 1
      }
      // Se daysDiff === 0, já estudou hoje, não altera streak

      streak.lastStudyDate = today
    }

    await this.studyStreaks.replaceOne({ userId }, streak, { upsert: true })
    return streak
  }

  async getStreak(userId: string): Promise<StudyStreak | null> {
    return await this.studyStreaks.findOne({ userId })
  }
}
