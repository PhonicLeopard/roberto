// Ponto de entrada principal para operações do banco
import { MongoDBAdapter } from "./mongodb-adapter"
import type { DatabaseOperations } from "./schemas"

let dbInstance: DatabaseOperations | null = null

export async function getDatabase(): Promise<DatabaseOperations> {
  if (!dbInstance) {
    // Configurar baseado nas variáveis de ambiente
    const connectionString = process.env.MONGODB_URI || "mongodb://localhost:27017"
    const databaseName = process.env.MONGODB_DB_NAME || "plataforma_estudos"

    const adapter = new MongoDBAdapter(connectionString, databaseName)
    await adapter.connect()

    dbInstance = adapter
  }

  return dbInstance
}

// Funções de conveniência para uso nos componentes
export async function createStudySession(userId: string, subjectId: string, topicId?: string) {
  const db = await getDatabase()
  return await db.createStudySession({
    userId,
    subjectId,
    topicId,
    startTime: new Date(),
    endTime: new Date(),
    duration: 0,
    type: "theory",
    completed: false,
  })
}

export async function updateStudyProgress(userId: string, topicId: string, progressPercentage: number) {
  const db = await getDatabase()
  await db.updateProgress(userId, topicId, {
    progressPercentage,
    status: progressPercentage >= 100 ? "completed" : "in_progress",
  })
}

export async function getUserDashboardData(userId: string) {
  const db = await getDatabase()

  const [user, progress, sessions, streak] = await Promise.all([
    db.getUserById(userId),
    db.getUserProgress(userId),
    db.getStudySessionsByUser(userId, 7), // Últimas 7 sessões
    db.getStreak(userId),
  ])

  return {
    user,
    progress,
    recentSessions: sessions,
    streak,
  }
}
