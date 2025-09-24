import { contentService, type PhilosophyContent } from "./content-service"

const philosophyContents: Omit<PhilosophyContent, "_id" | "createdAt" | "updatedAt">[] = [
  {
    subject: "filosofia",
    period: "antiguidade",
    title: "Filosofia na Antiguidade - Panorama Geral",
    description:
      "Transição do pensamento mítico para o racional, desde o Oriente Médio até os grandes filósofos gregos",
    difficulty: "medium",
    estimatedMinutes: 60,
    content: {
      theory: {
        sections: [
          {
            title: "Introdução: Do Mito ao Logos",
            content:
              "A filosofia na Antiguidade representa a transição do pensamento mítico (explicações baseadas em deuses e mitos) para o pensamento racional (explicações baseadas na razão, lógica e observação). Esse movimento não ocorreu apenas na Grécia, mas teve precursores importantes em outras civilizações.",
            keyPoints: [
              "Transição do pensamento mítico para o racional",
              "Não foi exclusivo da Grécia",
              "Precursores em outras civilizações",
              "Base para toda filosofia posterior",
            ],
            examples: [
              "Mito: Zeus causa os raios vs Logos: fenômenos elétricos naturais",
              "Explicações religiosas vs explicações baseadas na observação",
            ],
          },
          {
            title: "Civilizações Precursoras",
            content:
              "Antes dos gregos, várias civilizações do Oriente Médio desenvolveram sistemas complexos de pensamento sobre o cosmos, a divindade, a ética e a vida após a morte.",
            keyPoints: [
              "Egípcios: Conceito de Maat (ordem cósmica)",
              "Mesopotâmicos: Epopeia de Gilgamesh, Código de Hamurábi",
              "Hebreus: Monoteísmo ético, história linear",
              "Influência na filosofia grega posterior",
            ],
            examples: [
              "Maat egípcia influenciou conceitos de justiça em Platão",
              "Monoteísmo hebraico vs politeísmo grego",
              "Código de Hamurábi como precursor da ética",
            ],
          },
          {
            title: "Pré-Socráticos: A Busca da Arché",
            content:
              "Primeira tentativa de explicar a origem (arché) e a estrutura do universo (cosmos) com base na razão e não nos mitos.",
            keyPoints: [
              "Tales: Água como princípio primordial",
              'Heráclito: "Tudo flui" - mudança constante',
              "Parmênides: Ser uno e imutável",
              "Demócrito: Teoria atômica",
            ],
            examples: [
              "Tales observou que tudo precisa de água para viver",
              'Heráclito: "Não se pode entrar duas vezes no mesmo rio"',
              "Parmênides vs Heráclito: ser vs devir",
            ],
          },
          {
            title: "Sofistas: O Foco no Homem",
            content: "Volta-se do cosmos para o homem e a vida na pólis. Relativismo e ênfase na retórica.",
            keyPoints: [
              'Protágoras: "O homem é a medida de todas as coisas"',
              "Relativismo: não existe verdade absoluta",
              "Retórica: arte da persuasão",
              "Convenção vs Natureza",
            ],
            examples: [
              "Diferentes culturas têm diferentes conceitos de justiça",
              "Um discurso pode ser mais persuasivo que outro sem ser mais verdadeiro",
            ],
          },
          {
            title: "Sócrates: O Conhecimento de Si",
            content: "Reação aos sofistas. Busca da verdade universal através do autoconhecimento.",
            keyPoints: [
              '"Só sei que nada sei" - humildade intelectual',
              "Método socrático (maiêutica)",
              "Intelectualismo moral: conhecer o bem é praticá-lo",
              "Mártir da filosofia",
            ],
            examples: [
              'Diálogo sobre "O que é coragem?" levando à reflexão',
              'Parteira de ideias: ajuda outros a "dar à luz" conhecimentos',
            ],
          },
          {
            title: "Platão: O Mundo das Ideias",
            content:
              "Desenvolveu o pensamento de Sócrates em um sistema filosófico completo, fundamentado na Teoria das Ideias.",
            keyPoints: [
              "Mundo sensível vs Mundo inteligível",
              "Teoria das Ideias: realidade perfeita e eterna",
              "Mito da Caverna: jornada do conhecimento",
              "República: Estado ideal governado por filósofos",
            ],
            examples: [
              "Caverna: sombras na parede vs realidade exterior",
              "Ideia de Justiça vs atos justos particulares",
              "Alma imortal que já conheceu as Ideias",
            ],
          },
          {
            title: "Aristóteles: A Síntese Empírica",
            content:
              "Discípulo de Platão que criticou a Teoria das Ideias, desenvolvendo um sistema baseado na observação empírica e na lógica.",
            keyPoints: [
              "Crítica às Ideias: forma inerente à coisa",
              "Lógica formal: silogismo",
              "Quatro causas: material, formal, eficiente, final",
              "Ética: eudaimonia através da virtude como meio-termo",
            ],
            examples: [
              "Silogismo: Todo homem é mortal; Sócrates é homem; Logo, Sócrates é mortal",
              "Coragem como meio-termo entre covardia e temeridade",
              "Estudo empírico dos animais e plantas",
            ],
          },
        ],
      },
      practice: {
        exercises: [
          {
            title: "Análise Comparativa: Mito vs Logos",
            statement:
              "Compare uma explicação mítica e uma explicação racional para o mesmo fenômeno natural. Analise as diferenças metodológicas.",
            type: "comparative",
            difficulty: "medium",
            hints: [
              "Pense em fenômenos como terremotos, eclipses ou doenças",
              "Considere as fontes de autoridade em cada tipo de explicação",
              "Analise qual permite maior previsibilidade",
            ],
          },
          {
            title: "Aplicação do Método Socrático",
            statement:
              'Crie um diálogo socrático sobre o conceito de "amizade". Use perguntas sucessivas para levar à reflexão.',
            type: "conceptual",
            difficulty: "hard",
            hints: [
              'Comece com "O que é amizade?"',
              "Use contra-exemplos para questionar definições simples",
              "Leve o interlocutor a descobrir contradições em suas próprias ideias",
            ],
          },
          {
            title: "Interpretação do Mito da Caverna",
            statement: "Explique como o Mito da Caverna de Platão representa a jornada do conhecimento filosófico.",
            type: "analytical",
            difficulty: "medium",
            hints: [
              "Identifique o que representa cada elemento: correntes, sombras, fogo, sol",
              "Relacione com os níveis de conhecimento em Platão",
              "Considere a resistência à mudança e ao novo conhecimento",
            ],
          },
        ],
      },
    },
    questions: [
      {
        type: "multiple_choice",
        statement: "Qual a principal diferença entre o pensamento mítico e o pensamento racional (logos)?",
        options: [
          "O pensamento mítico é mais antigo que o racional",
          "O pensamento racional busca explicações baseadas na razão e observação, enquanto o mítico se baseia em narrativas sobrenaturais",
          "O pensamento mítico é mais complexo que o racional",
          "Não há diferença significativa entre eles",
        ],
        correctAnswer:
          "O pensamento racional busca explicações baseadas na razão e observação, enquanto o mítico se baseia em narrativas sobrenaturais",
        explanation:
          "A transição do mito ao logos marca o nascimento da filosofia, substituindo explicações sobrenaturais por investigação racional.",
        difficulty: "easy",
      },
      {
        type: "multiple_choice",
        statement: "Segundo Sócrates, qual é o ponto de partida para o verdadeiro conhecimento?",
        options: [
          "A observação dos fenômenos naturais",
          "O estudo dos textos antigos",
          "O reconhecimento da própria ignorância",
          "A memorização de conceitos",
        ],
        correctAnswer: "O reconhecimento da própria ignorância",
        explanation:
          'A frase "só sei que nada sei" expressa a humildade intelectual necessária para buscar o verdadeiro conhecimento.',
        difficulty: "medium",
      },
      {
        type: "true_false",
        statement: "Para Platão, o mundo sensível é mais real que o mundo das Ideias.",
        correctAnswer: false,
        explanation:
          "Para Platão, o mundo das Ideias é a verdadeira realidade, eterna e perfeita, enquanto o mundo sensível é apenas uma cópia imperfeita.",
        difficulty: "medium",
      },
      {
        type: "essay",
        statement: "Explique como Aristóteles criticou a Teoria das Ideias de Platão e qual alternativa ele propôs.",
        explanation:
          "Aristóteles argumentou que as formas não existem em um mundo separado, mas são imanentes às próprias coisas. Ele desenvolveu uma filosofia baseada na observação empírica e na análise das quatro causas.",
        difficulty: "hard",
      },
    ],
  },
  {
    subject: "filosofia",
    period: "medieval",
    title: "Filosofia Medieval e Pensamento Cristão",
    description: "A síntese entre fé cristã e razão filosófica, da Patrística à Escolástica",
    difficulty: "medium",
    estimatedMinutes: 50,
    content: {
      theory: {
        sections: [
          {
            title: "Características Gerais da Filosofia Medieval",
            content:
              "A Filosofia Medieval desenvolveu-se ao longo de aproximadamente mil anos, desde a queda do Império Romano do Ocidente (século V) até o início do Renascimento (século XV). O grande tema que norteou este período foi a relação entre Fé e Razão.",
            keyPoints: [
              "Duração: aproximadamente mil anos (séc. V-XV)",
              "Tema central: relação entre Fé e Razão",
              'Filosofia como "serva da teologia" (ancilla theologiae)',
              "Dois grandes períodos: Patrística e Escolástica",
            ],
            examples: [
              "Uso da lógica aristotélica para provar dogmas cristãos",
              "Conciliação entre revelação bíblica e filosofia grega",
            ],
          },
          {
            title: "Patrística: Santo Agostinho",
            content:
              "Santo Agostinho (354-430) é a figura mais importante da Patrística. Sua filosofia é uma síntese do pensamento cristão com o neoplatonismo.",
            keyPoints: [
              "Teoria da Iluminação Divina",
              "Credo ut intelligam / Intelligo ut credam",
              "Problema do mal: mal como ausência do bem",
              'Concepção do tempo como "distensão da alma"',
            ],
            examples: [
              "Assim como o Sol ilumina os olhos, Deus ilumina a mente",
              "Mal como sombra: ausência da luz (bem)",
              "Tempo existe na alma: passado (memória), presente (percepção), futuro (expectativa)",
            ],
          },
          {
            title: "Escolástica: Santo Tomás de Aquino",
            content:
              "Tomás de Aquino (1225-1274) é o maior expoente da Escolástica, realizando a síntese entre cristianismo e filosofia aristotélica.",
            keyPoints: [
              "Distinção clara entre Fé e Razão",
              "Cinco Vias para provar a existência de Deus",
              "Harmonia entre filosofia e teologia",
              "Empirismo aristotélico aplicado à teologia",
            ],
            examples: [
              "Razão pode provar que Deus existe, mas não pode explicar a Trindade",
              "Observação do movimento leva ao Motor Imóvel",
              "Graus de perfeição apontam para a Perfeição Suprema",
            ],
          },
        ],
      },
      practice: {
        exercises: [
          {
            title: "As Cinco Vias de Tomás de Aquino",
            statement: "Escolha uma das Cinco Vias e explique detalhadamente como ela prova a existência de Deus.",
            type: "analytical",
            difficulty: "hard",
            hints: [
              "Comece com a observação empírica",
              "Mostre a necessidade de uma causa primeira",
              "Explique por que essa causa deve ser Deus",
            ],
          },
          {
            title: "Comparação: Agostinho vs Tomás de Aquino",
            statement:
              "Compare as abordagens de Santo Agostinho e Santo Tomás de Aquino sobre a relação entre fé e razão.",
            type: "comparative",
            difficulty: "medium",
            hints: [
              "Agostinho: fé e razão inseparáveis",
              "Tomás: distinção clara mas harmoniosa",
              "Influências: Platão vs Aristóteles",
            ],
          },
        ],
      },
    },
    questions: [
      {
        type: "multiple_choice",
        statement: "Qual é o tema central da Filosofia Medieval?",
        options: [
          "A investigação da natureza",
          "A relação entre fé e razão",
          "O estudo da política",
          "A análise da linguagem",
        ],
        correctAnswer: "A relação entre fé e razão",
        explanation:
          "O grande desafio medieval foi conciliar a revelação cristã com a filosofia grega, especialmente Platão e Aristóteles.",
        difficulty: "easy",
      },
      {
        type: "multiple_choice",
        statement: "Segundo Santo Agostinho, como conhecemos as verdades eternas?",
        options: [
          "Através dos sentidos",
          "Por meio da iluminação divina",
          "Pela experiência empírica",
          "Através da tradição",
        ],
        correctAnswer: "Por meio da iluminação divina",
        explanation:
          "Agostinho defendia que Deus ilumina nossa mente para que possamos conhecer verdades eternas, assim como o Sol ilumina nossos olhos.",
        difficulty: "medium",
      },
      {
        type: "essay",
        statement: "Explique uma das Cinco Vias de Tomás de Aquino para provar a existência de Deus.",
        explanation:
          "As Cinco Vias partem da observação empírica (movimento, causação, contingência, graus de perfeição, finalidade) para demonstrar racionalmente a necessidade de um Ser Supremo.",
        difficulty: "hard",
      },
    ],
  },
]

export async function seedPhilosophyContent() {
  console.log("Seeding philosophy content...")

  for (const content of philosophyContents) {
    try {
      const id = await contentService.createPhilosophyContent(content)
      console.log(`Created content: ${content.title} with ID: ${id}`)
    } catch (error) {
      console.error(`Error creating content ${content.title}:`, error)
    }
  }

  console.log("Philosophy content seeding completed!")
}
