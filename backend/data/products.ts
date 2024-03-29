const products = [
  {
    name: 'Coliseu',
    imageSmall: '/images/sample.jpg',
    imageMedium: '/images/sample.jpg',
    imageLarge: '/images/sample.jpg',
    imageWatermark: '/images/sample.jpg',
    description:
      'O Coliseu, em Roma, é um antigo anfiteatro romano construído no século I d.C. Famoso por suas grandiosas exibições de gladiadores e lutas de animais selvagens, o Coliseu é um marco histórico icônico e uma das principais atrações turísticas do mundo. Sua arquitetura impressionante e significado cultural o tornam um símbolo importante da antiguidade romana.',
    country: 'Itália',
    city: 'Roma',
    price: 89.99,
    countInStock: 1,
    rating: 0,
    numReviews: 0,
    tags: '#Coliseu #Roma #Anfiteatro #HistóriaAntiga #Gladiadores #TurismoCultural #PatrimônioMundial #ArquiteturaRomana #MonumentoHistórico #Itália',
  },
  {
    name: 'Torre Eifell',
    imageSmall: '/images/sample.jpg',
    imageMedium: '/images/sample.jpg',
    imageLarge: '/images/sample.jpg',
    imageWatermark: '/images/sample.jpg',
    description:
      'A Torre Eiffel é uma icônica estrutura de ferro localizada em Paris, França. Projetada pelo engenheiro Gustave Eiffel, foi construída para a Exposição Universal de 1889 e se tornou um símbolo mundial da cidade e do país. Com seus 324 metros de altura, oferece vistas panorâmicas deslumbrantes da cidade e é uma das atrações turísticas mais visitadas do mundo.',
    country: 'França',
    city: 'Paris',
    price: 89.99,
    countInStock: 1,
    rating: 0,
    numReviews: 0,
    tags: '#TorreEiffel #Paris #França #GustaveEiffel #ExposiçãoUniversal #Arquitetura #Monumento #AtraçãoTurística #VistaPanorâmica #SímboloMundial',
  },
  {
    name: 'Portões de Brandemburgo',
    imageSmall: '/images/sample.jpg',
    imageMedium: '/images/sample.jpg',
    imageLarge: '/images/sample.jpg',
    imageWatermark: '/images/sample.jpg',
    description:
      'Os Portões de Brandemburgo são um histórico monumento localizado em Berlim, Alemanha. Construído no final do século XVIII, o Portão de Brandemburgo foi originalmente uma das entradas para a cidade e agora é um símbolo icônico da unificação alemã e da história do país. Com seu impressionante design neoclássico, os Portões de Brandemburgo são um destino turístico popular e um testemunho significativo da rica herança cultural de Berlim.',
    country: 'Alemanha',
    city: 'Berlim',
    price: 89.99,
    countInStock: 1,
    rating: 0,
    numReviews: 0,
    tags: '#PortõesdeBrandemburgo #Berlim #Alemanha #História #UnificaçãoAlemã #MonumentoHistórico #Neoclássico #HerançaCultural #AtraçãoTurística #SímboloNacional',
  },
  {
    name: 'Catedral de Barcelona',
    imageSmall: '/images/sample.jpg',
    imageMedium: '/images/sample.jpg',
    imageLarge: '/images/sample.jpg',
    imageWatermark: '/images/sample.jpg',
    description:
      'A Catedral de Barcelona, também conhecida como Catedral da Santa Cruz e Santa Eulália, é uma majestosa catedral gótica localizada no coração da cidade de Barcelona, Espanha. Construída ao longo de vários séculos, a catedral é dedicada a Santa Eulália, a padroeira de Barcelona. Seu impressionante design gótico, com torres imponentes e detalhes intrincados, torna-a uma joia arquitetônica. A Catedral de Barcelona é uma importante atração turística e um marco histórico que reflete a rica herança cultural e religiosa da cidade.',
    country: 'Espanha',
    city: 'Barcelona',
    price: 89.99,
    countInStock: 1,
    rating: 0,
    numReviews: 0,
    tags: '#CatedraldeBarcelona #Barcelona #Espanha #ArquiteturaGótica #SantaEulália #PatrimônioHistórico #Majestosa #AtraçãoTurística #HerançaCultural #PadroeiraDeBarcelona',
  },
  {
    name: 'Torre de Belém',
    imageSmall: '/images/sample.jpg',
    imageMedium: '/images/sample.jpg',
    imageLarge: '/images/sample.jpg',
    imageWatermark: '/images/sample.jpg',
    description:
      'A Torre de Belém é um magnífico monumento histórico situado em Lisboa, Portugal. Construída no século XVI, a torre é uma notável representação da arquitetura manuelina, caracterizada por detalhes intrincados e elementos marítimos. Originalmente, a Torre de Belém serviu como uma fortaleza defensiva e um importante ponto de partida para as expedições marítimas portuguesas durante a Era dos Descobrimentos. Hoje, a torre é uma atração turística popular e um símbolo emblemático da rica história e influência de Portugal no mundo.',
    country: 'Portugal',
    city: 'Lisboa',
    price: 89.99,
    countInStock: 1,
    rating: 0,
    numReviews: 0,
    tags: '#TorreDeBelém #Lisboa #Portugal #ArquiteturaManuelina #EraDosDescobrimentos #MonumentoHistórico #FortalezaDefensiva #AtraçãoTurística #HerançaCultural #SímboloEmblemático'
  },
  {
    name: 'Palácio de Buckingham',
    imageSmall: '/images/sample.jpg',
    imageMedium: '/images/sample.jpg',
    imageLarge: '/images/sample.jpg',
    imageWatermark: '/images/sample.jpg',
    description:
      'O Palácio de Buckingham é a residência oficial da monarquia britânica localizada em Londres, Reino Unido. Construído no século XVIII, o palácio é um marco icônico e um importante símbolo da monarquia britânica. É usado para cerimônias oficiais, eventos reais e recepções, e também é conhecido por sua famosa troca da guarda. O Palácio de Buckingham atrai milhões de visitantes todos os anos e é um testemunho da rica história e tradição do Reino Unido.',
    country: 'Inglaterra',
    city: 'Londres',
    price: 89.99,
    countInStock: 1,
    rating: 0,
    numReviews: 0,
    tags: '#PalácioDeBuckingham #Londres #ReinoUnido #ResidênciaReal #MonarquiaBritânica #TrocaDaGuarda #História #Tradição #SímboloNacional #AtraçãoTurística',
  },
  {
    name: 'Partenon',
    imageSmall: '/images/sample.jpg',
    imageMedium: '/images/sample.jpg',
    imageLarge: '/images/sample.jpg',
    imageWatermark: '/images/sample.jpg',
    description:
      'O Partenon é um antigo templo localizado na Acrópole de Atenas, Grécia. Construído no século V a.C., é uma das obras-primas da arquitetura clássica grega. Originalmente dedicado à deusa Atena, o Partenon é famoso por suas colunas dóricas e suas esculturas elaboradas. É um símbolo proeminente da democracia, cultura e história da Grécia Antiga, e continua sendo uma das principais atrações turísticas do país.',
    country: 'Grécia',
    city: 'Atenas',
    price: 89.99,
    countInStock: 1,
    rating: 0,
    numReviews: 0,
    tags: '#Partenon #Grécia #Atenas #Acropóle #TemploAntigo #ArquiteturaClássica #DeusaAtena #HistóriaAntiga #AtraçãoTurística #PatrimônioCultural',
  },
  {
    name: 'Dam square',
    imageSmall: '/images/sample.jpg',
    imageMedium: '/images/sample.jpg',
    imageLarge: '/images/sample.jpg',
    imageWatermark: '/images/sample.jpg',
    description:
      'A Dam Square é uma praça histórica no centro de Amsterdã e serve como o coração da cidade. Ela é cercada por edifícios significativos, como o Palácio Real de Amsterdã, que é frequentemente utilizado para eventos reais e cerimônias oficiais. Outros pontos de interesse próximos à Dam Square incluem a Nieuwe Kerk (Igreja Nova) e o Monumento Nacional.',
    country: 'Paises baixos',
    city: 'Amsterdã',
    price: 89.99,
    countInStock: 1,
    rating: 0,
    numReviews: 0,
    tags: '#DamSquare #Amsterdã #Holanda #PalácioReal #NieuweKerk #MonumentoNacional #História #AtraçãoTurística #VidaNoturna #PontoDeEncontro',
  },
  
];

export default products;