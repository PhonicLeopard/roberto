import { Navbar } from "@/components/navbar"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, ExternalLink, Calendar, Clock, FileText } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

const conteudosEnem2025 = {
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
  portugues: {
    morfologia: [
      "Substantivo",
      "Artigo",
      "Adjetivo",
      "Numeral",
      "Pronome",
      "Funções Pronome Se",
      "Conectivos",
      "Interjeição",
      "Verbo",
      "Advérbio",
      "Funções da Palavra Que",
      "Análise Morfológica",
    ],
    palavras: ["Formação de Palavras", "Colocação Pronominal"],
    sintaxe: ["Sujeito e Predicado", "Vocativo", "Termos Associados ao Verbo", "Termos Associados ao Nome"],
    concordancia: ["Verbal", "Nominal"],
    regencia: ["Regência"],
    oracoes: [
      "Subordinadas Substantivas",
      "Subordinadas Adjetivas",
      "Subordinadas Adverbiais",
      "Subordinadas Reduzidas",
      "Coordenadas",
      "Intercaladas",
    ],
    regras: ["Ortografia", "Pontuação", "Acentuação", "Crase", "Variantes Linguísticas"],
  },
  literatura: {
    teoria: ["Prosa e Poesia", "Gêneros e Eras Literárias", "Figuras de Linguagem"],
    escolasLiterarias: [
      "Trovadorismo",
      "Humanismo",
      "Classicismo (Quinhentismo)",
      "Barroco",
      "Neoclassicismo (Arcadismo)",
      "Romantismo",
      "Realismo",
      "Parnasianismo",
      "Simbolismo",
      "Pré-Modernismo",
      "Modernismo em Portugal",
      "Modernismo Brasileiro - 1ª Fase",
      "Modernismo Brasileiro - 2ª Fase",
      "Modernismo Brasileiro - 3ª Fase",
      "Literatura Contemporânea",
    ],
  },
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
      "Pré-Socrático",
      "Sofistas",
      "Socráticos - Sócrates",
      "Socráticos - Platão",
      "Socráticos - Aristóteles",
    ],
    transicaoIdadeMedia: ["Filosofia Helenística"],
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

interface ProvaDetalhes {
  id: string
  nome: string
  descricao: string
  cor: string
  conteudos?: any
  provas: {
    ano: string
    edicoes: {
      nome: string
      descricao: string
      data?: string
      duracao?: string
      questoes?: number
      areas?: string[]
    }[]
  }[]
}

const provasData: Record<string, ProvaDetalhes> = {
  enem: {
    id: "enem",
    nome: "ENEM",
    descricao: "Exame Nacional do Ensino Médio",
    cor: "bg-blue-500",
    conteudos: conteudosEnem2025, // Adicionando conteúdos do ENEM 2025
    provas: [
      {
        ano: "2025", // Atualizando para 2025
        edicoes: [
          {
            nome: "1º Dia",
            descricao: "Linguagens, Códigos e suas Tecnologias / Redação / Ciências Humanas e suas Tecnologias",
            data: "2 de novembro",
            duracao: "5h30min",
            questoes: 90,
            areas: [
              "Português",
              "Literatura",
              "Língua Estrangeira",
              "Artes",
              "Educação Física",
              "História",
              "Geografia",
              "Filosofia",
              "Sociologia",
            ],
          },
          {
            nome: "2º Dia",
            descricao: "Ciências da Natureza e suas Tecnologias / Matemática e suas Tecnologias",
            data: "9 de novembro",
            duracao: "5h",
            questoes: 90,
            areas: ["Matemática", "Física", "Química", "Biologia"],
          },
        ],
      },
      {
        ano: "2024",
        edicoes: [
          {
            nome: "1º Dia",
            descricao: "Linguagens, Códigos e suas Tecnologias / Redação / Ciências Humanas e suas Tecnologias",
            data: "3 de novembro",
            duracao: "5h30min",
            questoes: 90,
            areas: [
              "Português",
              "Literatura",
              "Língua Estrangeira",
              "Artes",
              "Educação Física",
              "História",
              "Geografia",
              "Filosofia",
              "Sociologia",
            ],
          },
          {
            nome: "2º Dia",
            descricao: "Ciências da Natureza e suas Tecnologias / Matemática e suas Tecnologias",
            data: "10 de novembro",
            duracao: "5h",
            questoes: 90,
            areas: ["Matemática", "Física", "Química", "Biologia"],
          },
        ],
      },
      {
        ano: "2023",
        edicoes: [
          {
            nome: "1º Dia",
            descricao: "Linguagens, Códigos e suas Tecnologias / Redação / Ciências Humanas e suas Tecnologias",
            questoes: 90,
          },
          {
            nome: "2º Dia",
            descricao: "Ciências da Natureza e suas Tecnologias / Matemática e suas Tecnologias",
            questoes: 90,
          },
        ],
      },
    ],
  },
  fuvest: {
    id: "fuvest",
    nome: "FUVEST",
    descricao: "Fundação Universitária para o Vestibular - USP",
    cor: "bg-red-500",
    provas: [
      {
        ano: "2024",
        edicoes: [
          {
            nome: "1ª Fase",
            descricao: "Prova de Conhecimentos Gerais com 90 questões de múltipla escolha",
            questoes: 90,
          },
          {
            nome: "2ª Fase - 1º Dia",
            descricao: "Prova com 10 questões de Português e uma Redação",
            questoes: 10,
          },
          {
            nome: "2ª Fase - 2º Dia",
            descricao: "Prova com 12 questões de Conhecimentos Específicos",
            questoes: 12,
          },
        ],
      },
    ],
  },
  unicamp: {
    id: "unicamp",
    nome: "UNICAMP",
    descricao: "Universidade Estadual de Campinas",
    cor: "bg-purple-500",
    provas: [
      {
        ano: "2024",
        edicoes: [
          {
            nome: "1ª Fase",
            descricao: "Prova de Conhecimentos Gerais",
            questoes: 72,
          },
          {
            nome: "2ª Fase - 1º Dia",
            descricao: "Redação e Língua Portuguesa e Literaturas",
            questoes: 12,
          },
          {
            nome: "2ª Fase - 2º Dia",
            descricao: "Conhecimentos Específicos por área",
            questoes: 12,
          },
        ],
      },
    ],
  },
  univest: {
    id: "univest",
    nome: "UNIVEST",
    descricao: "Processo Seletivo Seriado",
    cor: "bg-green-500",
    provas: [
      {
        ano: "2024",
        edicoes: [
          {
            nome: "Prova Única",
            descricao: "Processo Seletivo Seriado - Todas as áreas",
            questoes: 60,
          },
        ],
      },
    ],
  },
  "universidades-federais": {
    id: "universidades-federais",
    nome: "Universidades Federais",
    descricao: "UFMG, UFRJ, UFSC, UFPR e outras",
    cor: "bg-yellow-500",
    provas: [
      {
        ano: "2024",
        edicoes: [
          {
            nome: "UFMG",
            descricao: "Universidade Federal de Minas Gerais",
            questoes: 75,
          },
          {
            nome: "UFRJ",
            descricao: "Universidade Federal do Rio de Janeiro",
            questoes: 60,
          },
          {
            nome: "UFSC",
            descricao: "Universidade Federal de Santa Catarina",
            questoes: 72,
          },
        ],
      },
    ],
  },
  "institutos-federais": {
    id: "institutos-federais",
    nome: "Institutos Federais",
    descricao: "IFSP, IFRJ, IFMG e outros IFs",
    cor: "bg-indigo-500",
    provas: [
      {
        ano: "2024",
        edicoes: [
          {
            nome: "IFSP",
            descricao: "Instituto Federal de São Paulo",
            questoes: 50,
          },
          {
            nome: "IFRJ",
            descricao: "Instituto Federal do Rio de Janeiro",
            questoes: 50,
          },
          {
            nome: "IFMG",
            descricao: "Instituto Federal de Minas Gerais",
            questoes: 50,
          },
        ],
      },
    ],
  },
}

export default function ProvaDetalhePage({ params }: { params: { id: string } }) {
  const prova = provasData[params.id]

  if (!prova) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 ml-64">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <Button variant="ghost" asChild className="mb-4">
                <Link href="/provas">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar para provas
                </Link>
              </Button>

              <div className="flex items-center gap-4 mb-4">
                <div className={`p-3 rounded-lg ${prova.cor} text-white`}>
                  <FileText className="h-8 w-8" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-foreground">Provas do {prova.nome}</h1>
                  <p className="text-muted-foreground text-lg">{prova.descricao}</p>
                </div>
              </div>
            </div>

            {prova.id === "enem" && prova.conteudos && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                  📋 Conteúdos programáticos ENEM 2025
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {Object.entries(prova.conteudos).map(([materia, conteudo]) => (
                    <Card key={materia} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg capitalize flex items-center gap-2">
                          {materia === "fisica" && "⚡ Física"}
                          {materia === "portugues" && "📝 Português"}
                          {materia === "literatura" && "📚 Literatura"}
                          {materia === "matematica" && "🔢 Matemática"}
                          {materia === "quimica" && "🧪 Química"}
                          {materia === "biologia" && "🧬 Biologia"}
                          {materia === "historia" && "🏛️ História"}
                          {materia === "geografia" && "🌍 Geografia"}
                          {materia === "filosofia" && "🤔 Filosofia"}
                          {materia === "sociologia" && "👥 Sociologia"}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {Object.entries(conteudo as Record<string, string[]>).map(([topico, itens]) => (
                            <div key={topico}>
                              <h4 className="font-medium text-sm text-muted-foreground mb-2 uppercase tracking-wide">
                                {topico.replace(/([A-Z])/g, " $1").trim()}
                              </h4>
                              <div className="space-y-1">
                                {itens.map((item, index) => (
                                  <div key={index} className="flex items-center gap-2 text-sm">
                                    <input
                                      type="checkbox"
                                      className="w-3 h-3 text-blue-600 rounded focus:ring-blue-500"
                                      id={`${materia}-${topico}-${index}`}
                                    />
                                    <label
                                      htmlFor={`${materia}-${topico}-${index}`}
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
                  ))}
                </div>
              </div>
            )}

            {/* Lista de Provas por Ano */}
            <div className="space-y-8">
              {prova.provas.map((anoData) => (
                <div key={anoData.ano}>
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                    <Calendar className="h-6 w-6" />
                    {prova.nome} {anoData.ano}
                  </h2>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {anoData.edicoes.map((edicao, index) => (
                      <Card key={index} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex items-start justify-between">
                            <div>
                              <CardTitle className="text-lg">{edicao.nome}</CardTitle>
                              <CardDescription className="mt-1">{edicao.descricao}</CardDescription>
                            </div>
                            <Badge variant="secondary">{anoData.ano}</Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            {/* Informações da Prova */}
                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                              {edicao.data && (
                                <div className="flex items-center gap-1">
                                  <Calendar className="h-4 w-4" />
                                  {edicao.data}
                                </div>
                              )}
                              {edicao.duracao && (
                                <div className="flex items-center gap-1">
                                  <Clock className="h-4 w-4" />
                                  {edicao.duracao}
                                </div>
                              )}
                              {edicao.questoes && (
                                <div className="flex items-center gap-1">
                                  <FileText className="h-4 w-4" />
                                  {edicao.questoes} questões
                                </div>
                              )}
                            </div>

                            {/* Áreas de Conhecimento */}
                            {edicao.areas && (
                              <div>
                                <p className="text-xs font-medium text-muted-foreground mb-2">Áreas de conhecimento:</p>
                                <div className="flex flex-wrap gap-1">
                                  {edicao.areas.map((area) => (
                                    <Badge key={area} variant="outline" className="text-xs">
                                      {area}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Botões de Ação */}
                            <div className="flex gap-2 pt-2">
                              <Button className="flex-1">
                                <Download className="h-4 w-4 mr-2" />
                                Baixar prova
                              </Button>
                              <Button variant="outline" className="flex-1 bg-transparent">
                                <FileText className="h-4 w-4 mr-2" />
                                Ver gabarito
                              </Button>
                              <Button variant="outline" size="icon">
                                <ExternalLink className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Dica de Estudo */}
            <Card className="mt-8 bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">💡 Dica de estudo para {prova.nome}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-800 text-sm">
                  {prova.id === "enem" &&
                    "O ENEM valoriza a interpretação de texto e a contextualização. Foque em conectar os conteúdos com situações do cotidiano e questões sociais atuais. Use o checklist acima para acompanhar seu progresso nos estudos."}
                  {prova.id === "fuvest" &&
                    "A FUVEST é conhecida por questões que exigem conhecimento aprofundado. Estude os clássicos da literatura e domine bem os conceitos fundamentais de cada matéria."}
                  {prova.id === "unicamp" &&
                    "A UNICAMP prioriza questões dissertativas e interdisciplinares. Pratique a escrita e desenvolva a capacidade de relacionar diferentes áreas do conhecimento."}
                  {!["enem", "fuvest", "unicamp"].includes(prova.id) &&
                    "Analise o padrão das questões desta instituição e foque nos temas mais recorrentes. Pratique com as provas anteriores para se familiarizar com o estilo."}
                </p>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
