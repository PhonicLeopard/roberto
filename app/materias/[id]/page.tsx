import { Navbar } from "@/components/navbar"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, BookOpen, Clock, Target, Play, CheckCircle, Circle } from "lucide-react"
import Link from "next/link"

const conteudosEnem2025 = {
  matematica: {
    basicaI: [
      "Operações Básicas",
      "Potenciação e Radiciação",
      "Expressões Numéricas",
      "Múltiplos, Divisores, MDC e MMC",
      "Operações Básicas com Polinômios",
      "Frações, Decimais e Dízimas",
    ],
    basicaII: [
      "Expressões Algébricas e Fatoração Algébrica",
      "Equações do 1º Grau",
      "Equações do 2º Grau",
      "Sistemas de Equações Lineares",
      "Inequações do 1º Grau",
      "Inequações do 2º Grau",
      "Progressões Aritméticas",
      "Progressões Geométricas",
      "Conjuntos Numéricos",
      "Matrizes",
      "Determinantes",
      "Adição e Subtração de Matrizes",
      "Multiplicação de Matrizes",
      "Cálculo de Determinantes",
      "Sistemas Lineares",
    ],
    funcoes: [
      "Introdução às Funções",
      "Funções do 1º Grau",
      "Funções do 2º Grau",
      "Funções Exponenciais e Logarítmicas",
      "Transformações Geométricas",
      "Equações e Inequações Exponenciais",
      "Equações e Inequações Logarítmicas",
      "Matemática Financeira",
    ],
    trigonometria: [
      "Trigonometria no Triângulo Retângulo",
      "Funções Trigonométricas",
      "Equações Trigonométricas",
      "Transformações Trigonométricas",
      "Funções Trigonométricas Inversas",
    ],
    geometriaPlana: [
      "Triângulos",
      "Quadriláteros",
      "Polígonos Regulares",
      "Circunferência e Círculo",
      "Estudo de Geometria Plana",
    ],
    geometriaEspacial: ["Geometria Espacial de Posição"],
    geometriaAnalitica: [
      "Introdução",
      "Circunferência",
      "Retas",
      "Cálculo de Distância e Área",
      "Equação da Reta",
      "Cônicas",
    ],
  },
  fisica: {
    termologia: ["Calorimetria", "Termometria", "Expansão Térmica", "Gases Ideais", "Leis dos Gases"],
    optica: ["Reflexão e Espelhos Planos", "Refração e Lentes"],
    ondulatoria: ["Propagação de Ondas", "Fenômenos Ondulatórios e Efeito Doppler"],
    eletricidadeMagnetismo: [
      "Cargas Elétricas",
      "Lei de Coulomb",
      "Campo Elétrico e Potencial Elétrico",
      "Capacitores",
      "Eletrodinâmica e Potência Elétrica",
      "Magnetismo",
    ],
    ferramentasGerais: ["Unidades de Grandeza", "Vetores", "Cinemática", "Conceitos de Vetor"],
    hidrostatica: ["Movimento Uniforme", "Forças", "Trabalho, Energia e Potência", "Energia Mecânica"],
  },
  quimica: {
    atomica: [
      "Teoria Atômica",
      "Classificação Periódica dos Elementos",
      "Propriedades Periódicas",
      "Ligações Químicas",
      "Radioatividade",
      "Estudo de Moléculas",
    ],
    geralInorganica: [
      "Substâncias Puras e Misturas",
      "Funções Inorgânicas",
      "Química Descritiva",
      "Reações Inorgânicas",
      "Reações e Propriedades da Água",
      "Soluções",
    ],
    fisicoQuimica: [
      "Soluções - Conceitos Gerais",
      "Soluções - Concentrações",
      "Termoquímica",
      "Cinética Química",
      "Equilíbrios Químicos",
      "Propriedades Coligativas",
    ],
    organica: [
      "Introdução e Conceitos Gerais",
      "Funções Orgânicas",
      "Reações Orgânicas",
      "Compostos Orgânicos no Cotidiano",
    ],
  },
  biologia: {
    introducao: ["Introdução à Biologia", "Bioquímica"],
    citologia: [
      "Introdução ao Estudo da Célula",
      "Envoltórios Celulares",
      "Citoplasma",
      "Estudo do Núcleo",
      "Ciclo Celular, Divisão Celular e Gametogênese",
    ],
    bioenergetica: ["Fermentação e Respiração Celular", "Fotossíntese e Quimiossíntese"],
    controleInformacao: ["Visão Geral e Código Genético", "Mutações Gênicas e suas Consequências"],
    histologiaAnimal: ["Visão Geral e Tecido Epitelial", "Tecido Conjuntivo", "Tecido Muscular", "Tecido Nervoso"],
    fisiologiaAnimal: [
      "Visão Geral e Sistema Digestório",
      "Sistema Respiratório",
      "Sistema Cardiovascular ou Circulatório",
      "Sistema Excretor",
      "Sistema Nervoso",
      "Sistema Tegumentar e Mento",
      "Sistema Sensorial",
      "Sistema Endócrino",
      "Sistema Reprodutor",
    ],
    sexualidade: ["Sexualidade, DSTs e Contraceptivos", "Embriologia"],
    virus: ["Classificação dos Seres Vivos", "Vírus e Príons"],
    reinoAnimal: [
      "Visão Geral e Estudo Comparativo",
      "Poríferos",
      "Cnidários",
      "Platelmintos",
      "Nematelmintos",
      "Moluscos",
      "Anelídeos",
      "Artrópodes",
      "Equinodermos",
      "Cordados",
      "Resumo Geral do Reino Metazoa",
    ],
    reinoVegetal: ["Visão Geral, Briófitas e Pteridófitas", "Gimnospermas e Angiospermas"],
    morfofisiologia: [
      "Visão Geral, Raiz, Caule e Folha",
      "Tecidos Vegetais",
      "Nutrição Vegetal e Trocas Gasosas",
      "Transporte Vegetal",
      "Hormônios Vegetais e Fotoperiodismo",
      "Germinação e Movimentos Vegetais",
    ],
    genetica: [
      "1ª Lei de Mendel e suas Variações",
      "Polialelia e Grupos Sanguíneos",
      "Herança e Sexo",
      "2ª Lei de Mendel",
      "Linkage",
      "Interação Gênica",
      "Citogenética",
      "Genética de Populações",
      "Biotecnologia e Engenharia Genética",
    ],
    origemVida: ["Origem da Vida", "Evolução"],
    ecologia: [
      "Visão Geral e Conceitos",
      "Matéria e Energia de Ecossistemas",
      "Dinâmica das Populações e Comunidades",
      "Biomas Terrestres e Aquáticos",
      "Impactos e Problemas Ambientais",
    ],
    programaSaude: ["Conceitos Básicos", "Parasitismo", "Problemas Fisiológicos", "Drogas"],
  },
  historia: {
    introducao: ["Linha do tempo"],
    preHistoria: ["Pré-História"],
    idadeAntiga: ["Antiguidade Oriental", "Antiguidade Clássica - Grécia", "Antiguidade Clássica - Roma"],
    altaIdadeMedia: [
      "Império Bizantino",
      "Reinos Bárbaros",
      "Império dos Francos",
      "Civilização Islâmica",
      "Feudalismo",
    ],
    baixaIdadeMedia: [
      "Cruzadas",
      "Renascimento Comercial e Urbano",
      "Crise do Século XIV",
      "Monarquias Nacionais",
      "Aspectos Culturais",
    ],
    idadeModerna: [
      "Renascimento Cultural",
      "Reforma Protestante e Contrarreforma",
      "Absolutismo",
      "Mercantilismo",
      "Expansão Marítima",
      "Civilizações Pré-Colombianas",
    ],
    brasilColonia: [
      "Período Pré-Colonial",
      "Início da Colonização",
      "Economia Açucareira",
      "Pecuária e Lavouras de Subsistência",
      "União Ibérica e Invasões Holandesas",
      "Expansão Territorial",
      "Economia Mineradora",
      "Revoltas Nativistas",
      "Movimentos Emancipacionistas",
      "A Família Real Portuguesa no Brasil",
      "Independência do Brasil",
    ],
    brasilImperio: ["Primeiro Reinado", "Período Regencial", "Segundo Reinado"],
    brasilRepublica: [
      "República da Espada",
      "República das Oligarquias",
      "Economia na República das Oligarquias",
      "Movimentos Sociais na Rep. das Olig.",
      "A Crise na Rep. das Oligarquias",
      "Era Vargas",
      "Governo Dutra",
      "Segundo Governo Vargas",
      "Governo JK",
      "Governo Jânio Quadros",
      "Governo João Goulart",
      "Regime Militar",
      "Nova República",
    ],
    idadeContemporanea: [
      "Colonização Espanhola na América",
      "Colonização Inglesa na América",
      "Revoluções Inglesas do Século XVII",
      "Iluminismo",
      "Marquês de Pombal",
      "Revolução Industrial",
      "EUA - Independência",
      "Revolução Francesa",
      "Era Napoleônica",
      "Independência do Haiti",
      "Congresso de Viena",
      "EUA - Expansão Territorial",
      "EUA - Guerra de Secessão",
      "Revoluções de 1830 e 1848",
      "Ideias Sociais e Políticas do Século XIX",
      "Unificações",
      "Segunda Revolução Industrial",
      "Neocolonialismo (Imperialismo)",
      "1ª Guerra Mundial",
      "Revolução Russa e Stalinismo",
      "Período Entre Guerras (Nazifascismo)",
      "2ª Guerra Mundial",
      "Guerra Fria",
      "Revolução Cubana",
      "Populismo na América Latina",
      "Reformas na América Latina",
      "Descolonização Afro-Asiática",
      "Revolução Chinesa",
    ],
  },
  geografia: {
    geografiaFisica: ["Astronomia", "Geologia e Relevo", "Cartografia", "Clima", "Vegetação", "Hidrografia"],
    geografiaTematica: ["Recursos Minerais", "Energia", "Agropecuária", "Indústria", "Transporte"],
    geografiaHumana: ["População", "Migrações", "Urbanização", "Comércio", "Brasil no Mundo", "Questões Ambientais"],
    geografiaRegional: [
      "Divisões Regionais",
      "Amazônia e Região Norte",
      "Região Nordeste",
      "Centro-Oeste",
      "Sudeste",
      "Sul",
    ],
    geografiaAmerica: [
      "América do Sul - Países Andinos",
      "América do Sul - Países Platinos",
      "México",
      "América Central e Caribe",
      "EUA",
      "Canadá",
    ],
    geografiaAfricaEuropaAsia: [
      "África",
      "Europa",
      "Rússia",
      "Oriente Médio",
      "Ásia de Monções",
      "Tigres Asiáticos",
      "Japão",
    ],
    geografiaOceania: ["Austrália", "Nova Zelândia e Ilhas do Pacífico"],
    globalizacao: ["Fases do Capitalismo", "Órgãos Internacionais", "Blocos Supranacionais"],
    conflitosInternacionais: [
      "EUA - Guerra do Terror",
      "Conflitos na Ex-Iugoslávia",
      "Conflitos na Rússia",
      "Índia X Paquistão",
      "Israel X Palestina",
    ],
    conflitosRegionais: [
      "Conflitos na Espanha",
      "Conflitos na Irlanda",
      "Conflitos na África",
      "Tensões no Oriente Médio",
      "Conflitos na China",
    ],
  },
  filosofia: {
    filosofiaAntiguidade: [
      "Introdução da Filosofia do Oriente Médio",
      "Os Egípcios",
      "Os Mesopotâmicos",
      "Os Hebreus",
      "Introdução ao Mundo Grego",
      "Pré-Socráticos",
      "Sofistas",
      "Socráticos - Sócrates",
      "Socráticos - Platão",
      "Socráticos - Aristóteles",
    ],
    filosofiaMedieval: ["Pensamento Cristão"],
    filosofiaModernaContemporanea: ["Ciência Moderna", "Ética e Moral", "Verdade"],
  },
  sociologia: {
    introducao: ["O Conhecimento e a Ciência"],
    naturezaCultura: ["O que é o Homem?", "Natureza e Cultura", "Trabalho"],
    fundamentos: ["A Modernidade", "O Nascimento da Sociologia", "O Estudo da Antropologia", "O Poder da Política"],
    classicos: ["Auguste Comte", "Émile Durkheim", "Max Weber", "Karl Marx"],
  },
}

const subjects = [
  {
    id: 1,
    name: "Matemática",
    slug: "matematica",
    color: "bg-blue-500",
    topics: 12,
    progress: 75,
    description: "Álgebra, geometria e cálculo básico",
    totalHours: 28,
    completedTopics: 9,
    contents: [
      { id: 1, title: "Equações do primeiro grau", completed: true, duration: "45 min" },
      { id: 2, title: "Equações do segundo grau", completed: true, duration: "60 min" },
      { id: 3, title: "Sistemas lineares", completed: true, duration: "90 min" },
      { id: 4, title: "Funções", completed: false, duration: "75 min" },
      { id: 5, title: "Geometria plana", completed: false, duration: "120 min" },
      { id: 6, title: "Trigonometria", completed: false, duration: "90 min" },
    ],
  },
  {
    id: 2,
    name: "História",
    slug: "historia",
    color: "bg-green-500",
    topics: 8,
    progress: 60,
    description: "História do Brasil e mundial",
    totalHours: 22,
    completedTopics: 5,
    contents: [
      { id: 1, title: "Brasil colonial", completed: true, duration: "60 min" },
      { id: 2, title: "Independência do Brasil", completed: true, duration: "45 min" },
      { id: 3, title: "República velha", completed: true, duration: "90 min" },
      { id: 4, title: "Era Vargas", completed: false, duration: "75 min" },
      { id: 5, title: "Ditadura militar", completed: false, duration: "120 min" },
    ],
  },
  {
    id: 3,
    name: "Física",
    slug: "fisica",
    color: "bg-purple-500",
    topics: 15,
    progress: 40,
    description: "Mecânica, termodinâmica e eletricidade",
    totalHours: 18,
    completedTopics: 6,
    contents: [
      { id: 1, title: "Cinemática", completed: true, duration: "90 min" },
      { id: 2, title: "Dinâmica", completed: true, duration: "120 min" },
      { id: 3, title: "Energia e trabalho", completed: false, duration: "75 min" },
      { id: 4, title: "Termodinâmica", completed: false, duration: "90 min" },
    ],
  },
  {
    id: 4,
    name: "Química",
    slug: "quimica",
    color: "bg-orange-500",
    topics: 10,
    progress: 85,
    description: "Química orgânica e inorgânica",
    totalHours: 12,
    completedTopics: 8,
    contents: [
      { id: 1, title: "Tabela periódica", completed: true, duration: "60 min" },
      { id: 2, title: "Ligações químicas", completed: true, duration: "90 min" },
      { id: 3, title: "Reações químicas", completed: true, duration: "75 min" },
      { id: 4, title: "Química orgânica", completed: false, duration: "120 min" },
    ],
  },
  {
    id: 5,
    name: "Literatura",
    slug: "literatura",
    color: "bg-pink-500",
    topics: 6,
    progress: 90,
    description: "Literatura brasileira e portuguesa",
    totalHours: 15,
    completedTopics: 5,
    contents: [
      { id: 1, title: "Barroco", completed: true, duration: "45 min" },
      { id: 2, title: "Romantismo", completed: true, duration: "60 min" },
      { id: 3, title: "Realismo", completed: true, duration: "75 min" },
      { id: 4, title: "Modernismo", completed: false, duration: "90 min" },
    ],
  },
  {
    id: 6,
    name: "Geografia",
    slug: "geografia",
    color: "bg-teal-500",
    topics: 9,
    progress: 55,
    description: "Geografia física e humana",
    totalHours: 20,
    completedTopics: 5,
    contents: [
      { id: 1, title: "Cartografia", completed: true, duration: "60 min" },
      { id: 2, title: "Clima", completed: true, duration: "90 min" },
      { id: 3, title: "Relevo", completed: false, duration: "75 min" },
      { id: 4, title: "População", completed: false, duration: "120 min" },
    ],
  },
  {
    id: 7,
    name: "Inglês",
    slug: "ingles",
    color: "bg-indigo-500",
    topics: 11,
    progress: 70,
    description: "Gramática, vocabulário e conversação",
    totalHours: 25,
    completedTopics: 8,
    contents: [
      { id: 1, title: "Present tenses", completed: true, duration: "60 min" },
      { id: 2, title: "Past tenses", completed: true, duration: "75 min" },
      { id: 3, title: "Future tenses", completed: true, duration: "60 min" },
      { id: 4, title: "Modal verbs", completed: false, duration: "90 min" },
      { id: 5, title: "Phrasal verbs", completed: false, duration: "120 min" },
    ],
  },
  {
    id: 8,
    name: "Biologia",
    slug: "biologia",
    color: "bg-emerald-500",
    topics: 13,
    progress: 45,
    description: "Biologia celular, genética e ecologia",
    totalHours: 16,
    completedTopics: 6,
    contents: [
      { id: 1, title: "Citologia", completed: true, duration: "90 min" },
      { id: 2, title: "Genética", completed: true, duration: "120 min" },
      { id: 3, title: "Evolução", completed: false, duration: "75 min" },
      { id: 4, title: "Ecologia", completed: false, duration: "90 min" },
    ],
  },
  {
    id: 9,
    name: "Artes",
    slug: "artes",
    color: "bg-rose-500",
    topics: 7,
    progress: 80,
    description: "História da arte e movimentos artísticos",
    totalHours: 10,
    completedTopics: 6,
    contents: [
      { id: 1, title: "Arte clássica", completed: true, duration: "45 min" },
      { id: 2, title: "Renascimento", completed: true, duration: "60 min" },
      { id: 3, title: "Arte moderna", completed: true, duration: "75 min" },
      { id: 4, title: "Arte contemporânea", completed: false, duration: "60 min" },
    ],
  },
  {
    id: 10,
    name: "Redação",
    slug: "redacao",
    color: "bg-amber-500",
    topics: 5,
    progress: 65,
    description: "Técnicas de escrita e tipos textuais",
    totalHours: 14,
    completedTopics: 3,
    contents: [
      { id: 1, title: "Dissertação argumentativa", completed: true, duration: "90 min" },
      { id: 2, title: "Coesão e coerência", completed: true, duration: "75 min" },
      { id: 3, title: "Argumentação", completed: false, duration: "60 min" },
      { id: 4, title: "Revisão textual", completed: false, duration: "45 min" },
    ],
  },
  {
    id: 11,
    name: "Sociologia",
    slug: "sociologia",
    color: "bg-violet-500",
    topics: 8,
    progress: 50,
    description: "Sociedade, cultura e movimentos sociais",
    totalHours: 8,
    completedTopics: 4,
    contents: [
      { id: 1, title: "Teorias sociológicas", completed: true, duration: "60 min" },
      { id: 2, title: "Estratificação social", completed: true, duration: "75 min" },
      { id: 3, title: "Movimentos sociais", completed: false, duration: "90 min" },
      { id: 4, title: "Globalização", completed: false, duration: "60 min" },
    ],
  },
  {
    id: 12,
    name: "Espanhol",
    slug: "espanhol",
    color: "bg-cyan-500",
    topics: 10,
    progress: 35,
    description: "Gramática e cultura hispânica",
    totalHours: 12,
    completedTopics: 4,
    contents: [
      { id: 1, title: "Verbos regulares", completed: true, duration: "60 min" },
      { id: 2, title: "Verbos irregulares", completed: true, duration: "90 min" },
      { id: 3, title: "Subjuntivo", completed: false, duration: "75 min" },
      { id: 4, title: "Cultura hispânica", completed: false, duration: "60 min" },
    ],
  },
  {
    id: 13,
    name: "Filosofia",
    slug: "filosofia",
    color: "bg-slate-500",
    topics: 9,
    progress: 60,
    description: "Filosofia antiga, moderna e contemporânea",
    totalHours: 18,
    completedTopics: 5,
    contents: [
      { id: 1, title: "Filosofia antiga", completed: true, duration: "90 min" },
      { id: 2, title: "Filosofia medieval", completed: true, duration: "75 min" },
      { id: 3, title: "Filosofia moderna", completed: false, duration: "120 min" },
      { id: 4, title: "Ética", completed: false, duration: "60 min" },
    ],
  },
  {
    id: 14,
    name: "Educação Física",
    slug: "educacao-fisica",
    color: "bg-lime-500",
    topics: 6,
    progress: 95,
    description: "Esportes, saúde e qualidade de vida",
    totalHours: 6,
    completedTopics: 6,
    contents: [
      { id: 1, title: "Anatomia básica", completed: true, duration: "45 min" },
      { id: 2, title: "Fisiologia do exercício", completed: true, duration: "60 min" },
      { id: 3, title: "Modalidades esportivas", completed: true, duration: "90 min" },
      { id: 4, title: "Saúde e bem-estar", completed: true, duration: "75 min" },
    ],
  },
]

export default function MateriaPage({ params }: { params: { id: string } }) {
  const subject = subjects.find((s) => s.id === Number.parseInt(params.id))

  if (!subject) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-6 ml-64">
            <div className="text-center">
              <h1 className="text-2xl font-bold">Matéria não encontrada</h1>
              <Link href="/materias">
                <Button className="mt-4">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar para matérias
                </Button>
              </Link>
            </div>
          </main>
        </div>
      </div>
    )
  }

  if (subject.slug === "historia" || subject.slug === "filosofia") {
    if (typeof window !== "undefined") {
      window.location.href = `/materias/${subject.slug}`
    }
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-6 ml-64">
            <div className="text-center">
              <p>Redirecionando...</p>
            </div>
          </main>
        </div>
      </div>
    )
  }

  const conteudosEnemMateria = conteudosEnem2025[subject.slug as keyof typeof conteudosEnem2025]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 ml-64">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Link href="/materias">
                <Button variant="outline" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar
                </Button>
              </Link>
              <div className="flex items-center gap-3">
                <div className={`w-6 h-6 rounded-full ${subject.color}`}></div>
                <div>
                  <h1 className="text-3xl font-bold text-foreground">{subject.name}</h1>
                  <p className="text-muted-foreground">{subject.description}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                {conteudosEnemMateria && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">📋 Conteúdos ENEM 2025 - {subject.name}</CardTitle>
                      <CardDescription>Checklist completo dos tópicos que podem aparecer no ENEM 2025</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {Object.entries(conteudosEnemMateria).map(([categoria, itens]) => (
                          <div key={categoria} className="border rounded-lg p-4">
                            <h4 className="font-medium text-sm text-muted-foreground mb-3 uppercase tracking-wide">
                              {categoria.replace(/([A-Z])/g, " $1").trim()}
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                              {itens.map((item, index) => (
                                <div key={index} className="flex items-center gap-2 text-sm">
                                  <input
                                    type="checkbox"
                                    className="w-3 h-3 text-blue-600 rounded focus:ring-blue-500"
                                    id={`${subject.slug}-${categoria}-${index}`}
                                  />
                                  <label
                                    htmlFor={`${subject.slug}-${categoria}-${index}`}
                                    className="text-muted-foreground hover:text-foreground cursor-pointer"
                                  >
                                    {item}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}

                <Card>
                  <CardHeader>
                    <CardTitle>Conteúdos da matéria</CardTitle>
                    <CardDescription>
                      {subject.completedTopics} de {subject.topics} tópicos concluídos
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {subject.contents.map((content) => (
                        <div
                          key={content.id}
                          className="flex items-center justify-between p-4 border rounded-lg hover:bg-accent/50 transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            {content.completed ? (
                              <CheckCircle className="h-5 w-5 text-green-500" />
                            ) : (
                              <Circle className="h-5 w-5 text-muted-foreground" />
                            )}
                            <div>
                              <h3
                                className={`font-medium ${content.completed ? "text-muted-foreground line-through" : ""}`}
                              >
                                {content.title}
                              </h3>
                              <p className="text-sm text-muted-foreground">Duração estimada: {content.duration}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            {content.completed ? (
                              <Badge variant="secondary">Concluído</Badge>
                            ) : (
                              <Button size="sm">
                                <Play className="h-4 w-4 mr-2" />
                                Estudar
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Próximos tópicos</CardTitle>
                    <CardDescription>Continue seus estudos com estes tópicos</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {subject.contents
                        .filter((c) => !c.completed)
                        .slice(0, 3)
                        .map((content) => (
                          <div
                            key={content.id}
                            className="flex items-center justify-between p-3 bg-accent/30 rounded-lg"
                          >
                            <div className="flex items-center gap-3">
                              <BookOpen className="h-4 w-4 text-primary" />
                              <div>
                                <h4 className="font-medium">{content.title}</h4>
                                <p className="text-sm text-muted-foreground">{content.duration}</p>
                              </div>
                            </div>
                            <Button size="sm" variant="outline">
                              Começar
                            </Button>
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
                      <Target className="h-5 w-5" />
                      Progresso geral
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary">{subject.progress}%</div>
                      <p className="text-sm text-muted-foreground">Concluído</p>
                    </div>
                    <Progress value={subject.progress} className="h-3" />
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Tópicos concluídos</span>
                        <span className="font-medium">
                          {subject.completedTopics}/{subject.topics}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Horas estudadas</span>
                        <span className="font-medium">{subject.totalHours}h</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      Sessão de estudo
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full">
                      <Play className="h-4 w-4 mr-2" />
                      Iniciar sessão
                    </Button>
                    <Button variant="outline" className="w-full bg-transparent">
                      <Target className="h-4 w-4 mr-2" />
                      Definir meta
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Estatísticas</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Última sessão</span>
                      <span className="font-medium">Ontem</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Sequência atual</span>
                      <span className="font-medium">5 dias</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Tempo médio/sessão</span>
                      <span className="font-medium">45 min</span>
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
