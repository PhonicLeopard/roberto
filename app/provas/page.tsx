import { Navbar } from "@/components/navbar"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, ExternalLink, Calendar, Users, Trophy, GraduationCap } from "lucide-react"
import Link from "next/link"

export default function ProvasPage() {
  const vestibulares = [
    // Exames Nacionais
    {
      id: "enem",
      nome: "ENEM",
      descricao: "Exame Nacional do Ensino Médio",
      detalhes: "Acesse todas as provas e gabaritos do ENEM desde 1998",
      cor: "bg-blue-500",
      icone: <GraduationCap className="h-6 w-6" />,
      anos: ["2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016"],
      tipo: "Nacional",
      ativo: true,
      primeiraEdicao: "1998",
    },
    {
      id: "encceja",
      nome: "ENCCEJA",
      descricao: "Exame Nacional para Certificação de Competências de Jovens e Adultos",
      detalhes: "Certificação para quem não concluiu o Ensino Fundamental ou Médio",
      cor: "bg-emerald-500",
      icone: <GraduationCap className="h-6 w-6" />,
      anos: ["2025", "2024", "2023", "2022", "2021", "2020"],
      tipo: "Nacional",
      ativo: true,
      primeiraEdicao: "2002",
    },

    // Vestibulares Estaduais - São Paulo
    {
      id: "fuvest",
      nome: "FUVEST",
      descricao: "Fundação Universitária para o Vestibular - USP",
      detalhes: "Prepare-se com as provas anteriores do vestibular da USP",
      cor: "bg-red-500",
      icone: <Trophy className="h-6 w-6" />,
      anos: ["2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016"],
      tipo: "Estadual",
      ativo: true,
      primeiraEdicao: "1977",
    },
    {
      id: "unicamp",
      nome: "UNICAMP",
      descricao: "Universidade Estadual de Campinas",
      detalhes: "Confira o acervo de provas da UNICAMP",
      cor: "bg-purple-500",
      icone: <BookOpen className="h-6 w-6" />,
      anos: ["2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016"],
      tipo: "Estadual",
      ativo: true,
      primeiraEdicao: "1987",
    },
    {
      id: "unesp",
      nome: "UNESP",
      descricao: "Universidade Estadual Paulista",
      detalhes: "Vestibular unificado da UNESP para todos os campi",
      cor: "bg-orange-500",
      icone: <Users className="h-6 w-6" />,
      anos: ["2026", "2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017"],
      tipo: "Estadual",
      ativo: true,
      primeiraEdicao: "1980",
    },

    // Vestibulares Estaduais - Outros Estados
    {
      id: "uerj",
      nome: "UERJ",
      descricao: "Universidade do Estado do Rio de Janeiro",
      detalhes: "Exame de Qualificação e Exame Discursivo da UERJ",
      cor: "bg-cyan-500",
      icone: <Calendar className="h-6 w-6" />,
      anos: ["2026", "2025", "2024", "2023", "2022", "2021", "2020"],
      tipo: "Estadual",
      ativo: true,
      primeiraEdicao: "2005",
    },
    {
      id: "uece",
      nome: "UECE",
      descricao: "Universidade Estadual do Ceará",
      detalhes: "Vestibular da principal universidade estadual do Ceará",
      cor: "bg-yellow-500",
      icone: <GraduationCap className="h-6 w-6" />,
      anos: ["2025", "2024", "2023", "2022", "2021", "2020"],
      tipo: "Estadual",
      ativo: true,
      primeiraEdicao: "1975",
    },
    {
      id: "upe",
      nome: "UPE",
      descricao: "Universidade de Pernambuco",
      detalhes: "Sistema Seriado de Avaliação da UPE",
      cor: "bg-pink-500",
      icone: <BookOpen className="h-6 w-6" />,
      anos: ["2025", "2024", "2023", "2022", "2021", "2020"],
      tipo: "Estadual",
      ativo: true,
      primeiraEdicao: "1990",
    },

    // Universidades Federais
    {
      id: "ufpr",
      nome: "UFPR",
      descricao: "Universidade Federal do Paraná",
      detalhes: "Principal vestibular do estado do Paraná",
      cor: "bg-green-600",
      icone: <Users className="h-6 w-6" />,
      anos: ["2025", "2024", "2023", "2022", "2021", "2020"],
      tipo: "Federal",
      ativo: true,
      primeiraEdicao: "1912",
    },
    {
      id: "ufrgs",
      nome: "UFRGS",
      descricao: "Universidade Federal do Rio Grande do Sul",
      detalhes: "Concurso Vestibular da UFRGS",
      cor: "bg-blue-600",
      icone: <Trophy className="h-6 w-6" />,
      anos: ["2025", "2024", "2023", "2022", "2021", "2020"],
      tipo: "Federal",
      ativo: true,
      primeiraEdicao: "1934",
    },
    {
      id: "ufsc",
      nome: "UFSC",
      descricao: "Universidade Federal de Santa Catarina",
      detalhes: "Vestibular Unificado UFSC/IFSC/IFC",
      cor: "bg-indigo-600",
      icone: <GraduationCap className="h-6 w-6" />,
      anos: ["2026", "2025", "2024", "2023", "2022", "2021"],
      tipo: "Federal",
      ativo: true,
      primeiraEdicao: "1960",
    },
    {
      id: "unb",
      nome: "UnB",
      descricao: "Universidade de Brasília",
      detalhes: "Vestibular e PAS (Programa de Avaliação Seriada)",
      cor: "bg-purple-600",
      icone: <Calendar className="h-6 w-6" />,
      anos: ["2026", "2025", "2024", "2023", "2022", "2021"],
      tipo: "Federal",
      ativo: true,
      primeiraEdicao: "1962",
    },

    // Vestibulares Militares
    {
      id: "ita",
      nome: "ITA",
      descricao: "Instituto Tecnológico de Aeronáutica",
      detalhes: "Um dos vestibulares mais concorridos e difíceis do país",
      cor: "bg-slate-700",
      icone: <Trophy className="h-6 w-6" />,
      anos: ["2026", "2025", "2024", "2023", "2022", "2021", "2020"],
      tipo: "Militar",
      ativo: true,
      primeiraEdicao: "1950",
    },
    {
      id: "ime",
      nome: "IME",
      descricao: "Instituto Militar de Engenharia",
      detalhes: "Concurso de Admissão do IME",
      cor: "bg-gray-700",
      icone: <Users className="h-6 w-6" />,
      anos: ["2025", "2024", "2023", "2022", "2021", "2020"],
      tipo: "Militar",
      ativo: true,
      primeiraEdicao: "1792",
    },
    {
      id: "afa",
      nome: "AFA",
      descricao: "Academia da Força Aérea",
      detalhes: "Concurso de Admissão à Academia da Força Aérea",
      cor: "bg-sky-700",
      icone: <GraduationCap className="h-6 w-6" />,
      anos: ["2025", "2024", "2023", "2022", "2021", "2020"],
      tipo: "Militar",
      ativo: true,
      primeiraEdicao: "1941",
    },
    {
      id: "escola-naval",
      nome: "Escola Naval",
      descricao: "Escola Naval do Rio de Janeiro",
      detalhes: "Concurso de Admissão à Escola Naval",
      cor: "bg-blue-800",
      icone: <BookOpen className="h-6 w-6" />,
      anos: ["2025", "2024", "2023", "2022", "2021", "2020"],
      tipo: "Militar",
      ativo: true,
      primeiraEdicao: "1808",
    },
    {
      id: "aman",
      nome: "AMAN",
      descricao: "Academia Militar das Agulhas Negras",
      detalhes: "Concurso de Admissão à AMAN",
      cor: "bg-green-800",
      icone: <Trophy className="h-6 w-6" />,
      anos: ["2025", "2024", "2023", "2022", "2021", "2020"],
      tipo: "Militar",
      ativo: true,
      primeiraEdicao: "1811",
    },

    // Universidades Privadas
    {
      id: "fgv",
      nome: "FGV",
      descricao: "Fundação Getulio Vargas",
      detalhes: "Vestibular FGV - Administração, Economia e Direito",
      cor: "bg-red-600",
      icone: <Users className="h-6 w-6" />,
      anos: ["2025", "2024", "2023", "2022", "2021", "2020"],
      tipo: "Privada",
      ativo: true,
      primeiraEdicao: "1944",
    },
    {
      id: "puc",
      nome: "PUC",
      descricao: "Pontifícia Universidade Católica",
      detalhes: "Vestibular PUC - SP, RJ, MG, PR e outras unidades",
      cor: "bg-blue-700",
      icone: <GraduationCap className="h-6 w-6" />,
      anos: ["2025", "2024", "2023", "2022", "2021", "2020"],
      tipo: "Privada",
      ativo: true,
      primeiraEdicao: "1946",
    },
    {
      id: "mackenzie",
      nome: "Mackenzie",
      descricao: "Universidade Presbiteriana Mackenzie",
      detalhes: "Processo Seletivo Mackenzie",
      cor: "bg-red-700",
      icone: <BookOpen className="h-6 w-6" />,
      anos: ["2025", "2024", "2023", "2022", "2021", "2020"],
      tipo: "Privada",
      ativo: true,
      primeiraEdicao: "1870",
    },
    {
      id: "insper",
      nome: "Insper",
      descricao: "Instituto de Ensino e Pesquisa",
      detalhes: "Processo Seletivo Insper - Negócios, Economia e Engenharia",
      cor: "bg-orange-600",
      icone: <Trophy className="h-6 w-6" />,
      anos: ["2025", "2024", "2023", "2022", "2021", "2020"],
      tipo: "Privada",
      ativo: true,
      primeiraEdicao: "2003",
    },

    // Exames de Proficiência
    {
      id: "toefl",
      nome: "TOEFL",
      descricao: "Test of English as a Foreign Language",
      detalhes: "Exame de proficiência em inglês para universidades internacionais",
      cor: "bg-emerald-600",
      icone: <ExternalLink className="h-6 w-6" />,
      anos: ["2025", "2024", "2023", "2022", "2021", "2020"],
      tipo: "Proficiência",
      ativo: true,
      primeiraEdicao: "1964",
    },
    {
      id: "ielts",
      nome: "IELTS",
      descricao: "International English Language Testing System",
      detalhes: "Certificação de inglês reconhecida mundialmente",
      cor: "bg-teal-600",
      icone: <Calendar className="h-6 w-6" />,
      anos: ["2025", "2024", "2023", "2022", "2021", "2020"],
      tipo: "Proficiência",
      ativo: true,
      primeiraEdicao: "1989",
    },
    {
      id: "cambridge",
      nome: "Cambridge",
      descricao: "Exames de Cambridge (FCE, CAE, CPE)",
      detalhes: "Certificações de inglês que não expiram",
      cor: "bg-indigo-700",
      icone: <GraduationCap className="h-6 w-6" />,
      anos: ["2025", "2024", "2023", "2022", "2021", "2020"],
      tipo: "Proficiência",
      ativo: true,
      primeiraEdicao: "1913",
    },
    {
      id: "dele",
      nome: "DELE",
      descricao: "Diploma de Español como Lengua Extranjera",
      detalhes: "Principal certificado de proficiência em espanhol",
      cor: "bg-yellow-600",
      icone: <BookOpen className="h-6 w-6" />,
      anos: ["2025", "2024", "2023", "2022", "2021", "2020"],
      tipo: "Proficiência",
      ativo: true,
      primeiraEdicao: "1988",
    },
    {
      id: "delf-dalf",
      nome: "DELF/DALF",
      descricao: "Diplôme d'Études/Approfondi en Langue Française",
      detalhes: "Certificações oficiais de proficiência em francês",
      cor: "bg-blue-800",
      icone: <Trophy className="h-6 w-6" />,
      anos: ["2025", "2024", "2023", "2022", "2021", "2020"],
      tipo: "Proficiência",
      ativo: true,
      primeiraEdicao: "1985",
    },

    // Exames Internacionais
    {
      id: "sat",
      nome: "SAT",
      descricao: "Scholastic Assessment Test",
      detalhes: "Exame padronizado para admissão em universidades americanas",
      cor: "bg-purple-700",
      icone: <ExternalLink className="h-6 w-6" />,
      anos: ["2025", "2024", "2023", "2022", "2021", "2020"],
      tipo: "Internacional",
      ativo: true,
      primeiraEdicao: "1926",
    },
    {
      id: "act",
      nome: "ACT",
      descricao: "American College Testing",
      detalhes: "Alternativa ao SAT para universidades americanas",
      cor: "bg-red-800",
      icone: <Calendar className="h-6 w-6" />,
      anos: ["2025", "2024", "2023", "2022", "2021", "2020"],
      tipo: "Internacional",
      ativo: true,
      primeiraEdicao: "1959",
    },
    {
      id: "gmat",
      nome: "GMAT",
      descricao: "Graduate Management Admission Test",
      detalhes: "Necessário para programas de MBA no exterior",
      cor: "bg-green-700",
      icone: <Users className="h-6 w-6" />,
      anos: ["2025", "2024", "2023", "2022", "2021", "2020"],
      tipo: "Internacional",
      ativo: true,
      primeiraEdicao: "1953",
    },
    {
      id: "gre",
      nome: "GRE",
      descricao: "Graduate Record Examinations",
      detalhes: "Exigido para pós-graduação nos EUA e outros países",
      cor: "bg-indigo-800",
      icone: <GraduationCap className="h-6 w-6" />,
      anos: ["2025", "2024", "2023", "2022", "2021", "2020"],
      tipo: "Internacional",
      ativo: true,
      primeiraEdicao: "1936",
    },
  ]

  const tiposProva = [
    { tipo: "Nacional", count: 2, cor: "bg-blue-100 text-blue-800" },
    { tipo: "Estadual", count: 5, cor: "bg-purple-100 text-purple-800" },
    { tipo: "Federal", count: 4, cor: "bg-green-100 text-green-800" },
    { tipo: "Militar", count: 5, cor: "bg-gray-100 text-gray-800" },
    { tipo: "Privada", count: 4, cor: "bg-red-100 text-red-800" },
    { tipo: "Proficiência", count: 5, cor: "bg-emerald-100 text-emerald-800" },
    { tipo: "Internacional", count: 4, cor: "bg-indigo-100 text-indigo-800" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6 ml-64">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">Provas e vestibulares</h1>
              <p className="text-muted-foreground text-lg">
                Acesse o acervo completo de provas dos principais vestibulares, processos seletivos e exames de
                proficiência do Brasil e do mundo
              </p>
            </div>

            {/* Estatísticas */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
              {tiposProva.map((item) => (
                <Card key={item.tipo}>
                  <CardContent className="p-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold">{item.count}</p>
                      <p className="text-xs font-medium text-muted-foreground">{item.tipo}</p>
                      <Badge className={`${item.cor} text-xs mt-1`}>{item.count === 1 ? "prova" : "provas"}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Filtros por Categoria */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="cursor-pointer hover:bg-muted">
                  Todas
                </Badge>
                {tiposProva.map((tipo) => (
                  <Badge key={tipo.tipo} variant="outline" className="cursor-pointer hover:bg-muted">
                    {tipo.tipo}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Grid de Vestibulares */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {vestibulares.map((vestibular) => (
                <Card key={vestibular.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-2 rounded-lg ${vestibular.cor} text-white`}>{vestibular.icone}</div>
                      <div className="flex-1">
                        <CardTitle className="text-lg">{vestibular.nome}</CardTitle>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="secondary" className="text-xs">
                            {vestibular.tipo}
                          </Badge>
                          {vestibular.ativo && <Badge className="bg-green-100 text-green-800 text-xs">Ativo</Badge>}
                        </div>
                      </div>
                    </div>
                    <CardDescription className="text-sm font-medium">{vestibular.descricao}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{vestibular.detalhes}</p>

                    <div className="mb-3">
                      <p className="text-xs font-medium text-muted-foreground mb-1">
                        Primeira edição: {vestibular.primeiraEdicao}
                      </p>
                    </div>

                    <div className="mb-4">
                      <p className="text-xs font-medium text-muted-foreground mb-2">Anos disponíveis:</p>
                      <div className="flex flex-wrap gap-1">
                        {vestibular.anos.slice(0, 6).map((ano) => (
                          <Badge key={ano} variant="outline" className="text-xs">
                            {ano}
                          </Badge>
                        ))}
                        {vestibular.anos.length > 6 && (
                          <Badge variant="outline" className="text-xs">
                            +{vestibular.anos.length - 6}
                          </Badge>
                        )}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button asChild className="flex-1">
                        <Link href={`/provas/${vestibular.id}`}>
                          <BookOpen className="h-4 w-4 mr-2" />
                          Acessar
                        </Link>
                      </Button>
                      <Button variant="outline" size="icon">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Programas de Intercâmbio */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Programas de Intercâmbio</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-pink-500 text-white">
                        <Users className="h-5 w-5" />
                      </div>
                      Au Pair
                    </CardTitle>
                    <CardDescription>Intercâmbio cultural com famílias anfitriãs</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Programa ativo desde 1986. More com uma família, cuide das crianças e estude.
                    </p>
                    <Button className="w-full">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Saiba mais
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-green-500 text-white">
                        <Calendar className="h-5 w-5" />
                      </div>
                      Work and Travel
                    </CardTitle>
                    <CardDescription>Trabalhe legalmente durante as férias</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Programa ativo desde 1961. Trabalhe nos EUA durante as férias universitárias.
                    </p>
                    <Button className="w-full">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Saiba mais
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <div className="p-2 rounded-lg bg-blue-500 text-white">
                        <GraduationCap className="h-5 w-5" />
                      </div>
                      High School
                    </CardTitle>
                    <CardDescription>Ensino médio no exterior</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Curse um semestre ou ano do ensino médio em outro país.
                    </p>
                    <Button className="w-full">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Saiba mais
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Dicas de Estudo */}
            <Card className="mt-8 bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900 flex items-center gap-2">
                  <Trophy className="h-5 w-5" />
                  Dicas para usar as provas antigas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-blue-800">
                  <div>
                    <h4 className="font-semibold mb-2">📚 Como estudar:</h4>
                    <ul className="space-y-1 text-blue-700">
                      <li>• Resolva as provas cronometrando o tempo</li>
                      <li>• Analise seus erros e acertos</li>
                      <li>• Identifique padrões nas questões</li>
                      <li>• Foque nos temas mais recorrentes</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">🎯 Estratégia:</h4>
                    <ul className="space-y-1 text-blue-700">
                      <li>• Comece pelas provas mais recentes</li>
                      <li>• Simule o ambiente de prova</li>
                      <li>• Revise o conteúdo após cada simulado</li>
                      <li>• Mantenha regularidade nos estudos</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">🌟 Dica especial:</h4>
                    <ul className="space-y-1 text-blue-700">
                      <li>• Use os filtros por categoria</li>
                      <li>• Compare provas similares</li>
                      <li>• Estude o histórico das instituições</li>
                      <li>• Prepare-se para diferentes formatos</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}
