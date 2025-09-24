// Schemas para o banco de dados da plataforma de estudos

export interface User {
  id: string
  name: string
  email: string
  createdAt: Date
  updatedAt: Date
  preferences: {
    studyGoalHours: number // Meta diária de horas
    reminderTime: string // Horário de lembrete
    favoriteSubjects: string[]
  }
  stats: {
    totalStudyHours: number
    currentStreak: number
    longestStreak: number
    completedTopics: number
    totalTopics: number
  }
}

export interface StudySession {
  id: string
  userId: string
  subjectId: string
  topicId?: string
  startTime: Date
  endTime: Date
  duration: number // em minutos
  type: "theory" | "practice" | "review" | "exam"
  completed: boolean
  notes?: string
}

export interface Subject {
  id: string
  name: string
  slug: string
  description: string
  color: string
  icon: string
  totalTopics: number
  estimatedHours: number
  difficulty: "beginner" | "intermediate" | "advanced"
  category: "enem" | "vestibular" | "concurso" | "geral"
}

export interface Topic {
  id: string
  subjectId: string
  title: string
  slug: string
  description: string
  order: number
  estimatedMinutes: number
  difficulty: "easy" | "medium" | "hard"
  prerequisites: string[] // IDs de tópicos pré-requisitos
  content: {
    theory: TheoryContent
    practice: PracticeContent
    assessment: AssessmentContent
  }
}

export interface TheoryContent {
  id: string
  topicId: string
  sections: {
    title: string
    content: string
    examples: string[]
    keyPoints: string[]
    visualAids?: {
      type: "image" | "diagram" | "video"
      url: string
      caption: string
    }[]
  }[]
  summary: string
  relatedTopics: string[]
}

export interface PracticeContent {
  id: string
  topicId: string
  exercises: Exercise[]
  simulatedQuestions: Question[]
  practicalApplications: {
    title: string
    description: string
    steps: string[]
    expectedResult: string
  }[]
}

export interface Exercise {
  id: string
  title: string
  description: string
  difficulty: "easy" | "medium" | "hard"
  type: "calculation" | "conceptual" | "application"
  statement: string
  solution: {
    steps: string[]
    finalAnswer: string
    explanation: string
  }
  hints: string[]
  relatedFormulas?: string[]
}

export interface Question {
  id: string
  topicId: string
  type: "multiple_choice" | "true_false" | "open_ended" | "fill_blank"
  difficulty: "easy" | "medium" | "hard"
  statement: string
  options?: string[] // Para múltipla escolha
  correctAnswer: string | string[]
  explanation: string
  tags: string[]
  source?: string // ENEM 2023, FUVEST 2024, etc.
}

export interface AssessmentContent {
  id: string
  topicId: string
  preTest: Question[] // Teste antes de estudar
  postTest: Question[] // Teste após estudar
  reviewQuestions: Question[] // Questões de revisão
  masteryThreshold: number // % para considerar dominado
}

export interface UserProgress {
  id: string
  userId: string
  subjectId: string
  topicId: string
  status: "not_started" | "in_progress" | "completed" | "mastered"
  progressPercentage: number
  timeSpent: number // em minutos
  lastStudied: Date
  masteryScore?: number // 0-100
  completedSections: string[]
  completedExercises: string[]
  answeredQuestions: {
    questionId: string
    userAnswer: string | string[]
    isCorrect: boolean
    attemptedAt: Date
  }[]
}

export interface StudyPlan {
  id: string
  userId: string
  name: string
  description: string
  targetExam?: string // ENEM, FUVEST, etc.
  startDate: Date
  targetDate: Date
  dailyGoalMinutes: number
  subjects: {
    subjectId: string
    priority: "high" | "medium" | "low"
    allocatedHours: number
    topics: string[] // IDs dos tópicos selecionados
  }[]
  schedule: {
    dayOfWeek: number // 0-6 (domingo-sábado)
    timeSlots: {
      startTime: string // "09:00"
      endTime: string // "10:30"
      subjectId: string
      topicId?: string
    }[]
  }[]
  isActive: boolean
}

export interface StudyStreak {
  id: string
  userId: string
  currentStreak: number
  longestStreak: number
  lastStudyDate: Date
  streakHistory: {
    date: Date
    minutesStudied: number
    subjectsStudied: string[]
  }[]
}

export interface Exam {
  id: string
  name: string
  slug: string
  description: string
  type: "enem" | "vestibular" | "concurso"
  institution: string
  years: number[]
  subjects: string[] // IDs das matérias
  format: {
    totalQuestions: number
    timeLimit: number // em minutos
    sections: {
      name: string
      questions: number
      subjects: string[]
    }[]
  }
  pastExams: {
    year: number
    questions: Question[]
    cutoffScore?: number
  }[]
}

// Tipos para operações do banco
export interface DatabaseOperations {
  // Usuários
  createUser(user: Omit<User, "id" | "createdAt" | "updatedAt">): Promise<User>
  getUserById(id: string): Promise<User | null>
  updateUserStats(userId: string, stats: Partial<User["stats"]>): Promise<void>

  // Sessões de estudo
  createStudySession(session: Omit<StudySession, "id">): Promise<StudySession>
  getStudySessionsByUser(userId: string, limit?: number): Promise<StudySession[]>
  updateStudySession(id: string, updates: Partial<StudySession>): Promise<void>

  // Progresso
  getUserProgress(userId: string, subjectId?: string): Promise<UserProgress[]>
  updateProgress(userId: string, topicId: string, progress: Partial<UserProgress>): Promise<void>

  // Conteúdos
  getSubjects(): Promise<Subject[]>
  getTopicsBySubject(subjectId: string): Promise<Topic[]>
  getTopicContent(topicId: string): Promise<Topic>

  // Questões
  getQuestionsByTopic(topicId: string, type?: Question["type"]): Promise<Question[]>
  saveUserAnswer(userId: string, questionId: string, answer: string | string[]): Promise<void>

  // Planos de estudo
  createStudyPlan(plan: Omit<StudyPlan, "id">): Promise<StudyPlan>
  getUserStudyPlans(userId: string): Promise<StudyPlan[]>

  // Sequências
  updateStreak(userId: string): Promise<StudyStreak>
  getStreak(userId: string): Promise<StudyStreak | null>
}
