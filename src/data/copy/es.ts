import { VIDEOS, POSTERS, IMAGES, CREATOR_TONES } from '../media';
import { Audience, BlogPost, CaseStudy, UgcClip } from '../../types/content';
import { SiteCopy } from './en';

const clips: UgcClip[] = [
{
  id: 'clip-skincare',
  creator: '@antonellacomino',
  niche: 'Producto y cuidado personal',
  platform: 'TikTok',
  metric: '+320k',
  metricLabel: 'views',
  poster: POSTERS.skincare,
  src: VIDEOS.blazes
},
{
  id: 'clip-fitness',
  creator: '@guille.moves',
  niche: 'Fitness y bienestar',
  platform: 'Reels',
  metric: '+180',
  metricLabel: 'altas',
  poster: POSTERS.fitness,
  src: VIDEOS.escapes
},
{
  id: 'clip-unboxing',
  creator: '@marti_fuscaldo',
  niche: 'Retail y producto',
  platform: 'Shorts',
  metric: '+150',
  metricLabel: 'piezas UGC',
  poster: POSTERS.unboxing,
  src: VIDEOS.fun
},
{
  id: 'clip-coffee',
  creator: '@iarasekzer',
  niche: 'Hostelería · Madrid',
  platform: 'TikTok',
  metric: '+120',
  metricLabel: 'reservas',
  poster: POSTERS.coffee,
  src: VIDEOS.joyrides
},
{
  id: 'clip-sneakers',
  creator: '@ln.streets',
  niche: 'Moda y streetwear',
  platform: 'Reels',
  metric: '+3K',
  metricLabel: 'seguidores',
  poster: POSTERS.sneakers,
  src: VIDEOS.meltdowns
}];


const audiences: Audience[] = [
{
  key: 'brands',
  tab: 'Marcas',
  headline: 'Nos cuentas el objetivo y ejecutamos la campaña entera',
  description:
  'Visitas, reservas, registros o ventas. Buscamos a los creadores de tu sector, negociamos, producimos y medimos lo que pasa fuera de la pantalla.',
  bullets: [
  {
    title: 'Creadores de tu sector',
    text: 'Gente que ya conoce el producto y habla el idioma de tu categoría.'
  },
  {
    title: 'Un responsable por campaña',
    text: 'Una persona que valida cada pieza, sostiene los tiempos y te responde.'
  },
  {
    title: 'Un solo sistema',
    text: 'Brief, contrato, revisiones, publicación y medición sin salir de la plataforma.'
  }],

  cta: 'Ver cómo trabajamos con marcas',
  metric: { value: '48h', label: 'para activar la primera campaña' }
},
{
  key: 'creators',
  tab: 'Creadores',
  headline: 'Marcas que te interesan, condiciones claras y pago seguro',
  description:
  'Briefs concretos, libertad creativa real y un equipo que responde. Sabes qué se pide, cuánto se paga y cuándo cobras antes de aceptar.',
  bullets: [
  {
    title: 'Sin perseguir marcas',
    text: 'Las propuestas de tu sector llegan con brief, fechas y caché por delante.'
  },
  {
    title: 'Libertad para crear',
    text: 'El brief marca el mensaje, nunca la forma de contarlo. Tu estilo sigue siendo tuyo.'
  },
  {
    title: 'Pago retenido',
    text: 'El presupuesto se bloquea antes de grabar y se libera al publicar.'
  }],

  cta: 'Unirme a la red de creadores',
  metric: { value: '+500', label: 'creadores activos en la red' }
},
{
  key: 'agencies',
  tab: 'Agencias',
  headline: 'Ofrece UGC sin montar un departamento',
  description:
  'Una operación en marca blanca bajo tu nombre. Tú mantienes la relación con el cliente y la estrategia; nosotros ponemos la red, la producción y el reporting.',
  bullets: [
  {
    title: 'Marca blanca',
    text: 'Entregables y reporting con tu identidad. El cliente sigue siendo tuyo.'
  },
  {
    title: 'Varios clientes a la vez',
    text: 'Espacios separados por cuenta, con presupuestos y rosters independientes.'
  },
  {
    title: 'Margen bajo control',
    text: 'Coste, markup y rentabilidad visibles en cada línea de campaña.'
  }],

  cta: 'Ver el modelo para agencias',
  metric: { value: '+200', label: 'campañas producidas con partners' }
}];


const caseStudies: CaseStudy[] = [
{
  slug: 'swiss-butter',
  brand: 'Swiss Butter',
  sector: 'Hostelería · Madrid',
  title: 'Cola cada noche con una campaña 100% orgánica',
  summary:
  'Una apertura sostenida durante semanas con los creadores gastronómicos de la ciudad: contenido diario, un evento con 150 creadores y cero inversión en paid.',
  challenge:
  'Un restaurante recién abierto, sin base de clientes, que necesitaba llenar de martes a jueves y no solo el fin de semana.',
  approach:
  'Creadores gastronómicos de Madrid elegidos por encaje real de audiencia, un calendario de visitas escalonado durante seis semanas y un evento de apertura con 150 perfiles publicando el mismo día.',
  outcome:
  'Más de un millón de views orgánicas y cola sostenida en noches que antes estaban vacías. El contenido sigue funcionando como biblioteca de la marca.',
  cover: IMAGES.caseSkincare,
  stats: [
  { value: '+1M', label: 'views orgánicas' },
  { value: '+200', label: 'piezas de contenido' },
  { value: '150', label: 'creadores en un evento' },
  { value: '0 €', label: 'invertidos en paid' }],

  quote: {
    text: 'Pasamos de llenar solo los fines de semana a tener lista de espera entre semana. El contenido lo hizo gente de aquí, no algo que parecía un anuncio.',
    name: 'Dirección de sala',
    role: 'Swiss Butter, Madrid'
  },
  clipIds: ['clip-coffee', 'clip-skincare', 'clip-unboxing']
},
{
  slug: 'harper-and-bone',
  brand: 'Harper & Bone',
  sector: 'Retail · Barcelona y Madrid',
  title: '250.000 personas impactadas en 15 días',
  summary:
  'Dos ciudades, quince días y un roster de creadores de moda produciendo contenido de tienda y producto para orgánico y paid.',
  challenge:
  'La marca necesitaba volumen de creatividades para sostener paid en dos ciudades sin montar una producción de estudio por cada colección.',
  approach:
  'Rosters paralelos en Barcelona y Madrid trabajando con un mismo brief, entrega escalonada y derechos de uso cerrados desde el inicio para poder amplificar.',
  outcome:
  'Más de 150 piezas en dos semanas, tres mil nuevos seguidores y una biblioteca reutilizable para las campañas siguientes.',
  cover: IMAGES.caseFitness,
  stats: [
  { value: '250.000', label: 'personas impactadas' },
  { value: '+150', label: 'piezas UGC producidas' },
  { value: '+3K', label: 'nuevos seguidores' },
  { value: '15', label: 'días de campaña' }],

  quote: {
    text: 'Necesitábamos creatividades a ritmo de retail. En dos semanas teníamos más material del que producíamos en un trimestre.',
    name: 'Equipo de marca',
    role: 'Harper & Bone'
  },
  clipIds: ['clip-sneakers', 'clip-unboxing', 'clip-skincare']
},
{
  slug: 'temu',
  brand: 'TEMU',
  sector: 'Ecommerce · España y Argentina',
  title: 'Gestión de UGC a escala en dos países a la vez',
  summary:
  'Más de cincuenta creadores recurrentes al mes produciendo contenido en dos mercados en paralelo, amplificado en orgánico y en paid.',
  challenge:
  'Escalar el volumen de contenido sin perder control de calidad, contratos ni plazos en dos países con dinámicas muy distintas.',
  approach:
  'Un mismo sistema operativo para los dos mercados: roster recurrente, briefs localizados, revisiones centralizadas y pago retenido por pieza.',
  outcome:
  'Cadencia mensual estable, coste por pieza previsible y contenido listo para orgánico y paid desde el primer mes.',
  cover: IMAGES.team,
  stats: [
  { value: '+50', label: 'creadores recurrentes/mes' },
  { value: '2', label: 'países en paralelo' },
  { value: '100%', label: 'piezas con derechos cerrados' },
  { value: 'Org + paid', label: 'amplificación' }],

  quote: {
    text: 'Encontrar creadores nunca fue lo difícil. Sostener el ritmo mes a mes en dos países sí lo era, y es justo lo que se resolvió.',
    name: 'Responsable de contenido',
    role: 'TEMU España y Argentina'
  },
  clipIds: ['clip-unboxing', 'clip-fitness', 'clip-sneakers']
}];


const posts: BlogPost[] = [
{
  slug: 'specialist-creators-cheaper-leads',
  title: '¿Por qué un creador especializado genera leads más baratos?',
  excerpt:
  'Un creador de tu sector reduce el coste por lead porque su audiencia ya está cualificada: menos impactos, más conversión y menor gasto total.',
  category: 'Artículos',
  date: '31 de agosto de 2026',
  readTime: '5 min de lectura',
  author: {
    name: 'Delfina Ruiz',
    role: 'Dirección de campañas',
    avatar: IMAGES.avatarDelfina
  },
  cover: IMAGES.blog1,
  clipId: 'clip-skincare',
  body: [
  {
    text: 'Comparar creadores por número de seguidores es la forma más rápida de pagar de más. Lo que mueve el coste por lead no es el alcance, sino cuánta de esa audiencia está realmente dentro de tu categoría.'
  },
  {
    heading: 'Menos impactos, mejor cualificados',
    text: 'Un perfil generalista con cien mil seguidores puede tener un puñado de personas interesadas en tu producto. Uno especializado con diez mil puede tener a la mitad. El coste por impacto sube y el coste por lead baja.'
  },
  {
    heading: 'El contenido también cambia',
    text: 'Quien conoce el sector explica el producto sin que se lo tengas que escribir. Necesita menos rondas de revisión y produce piezas que se sostienen como anuncio, no solo como publicación orgánica.'
  },
  {
    heading: 'Cómo aplicarlo al brief',
    text: 'Define primero el sector y el momento de consumo, y después el volumen. Activar a doce creadores de nicho durante tres meses rinde más que a un perfil grande una sola vez.'
  }]

},
{
  slug: 'using-ai-to-launch-creator-campaigns',
  title: 'Cómo usar la IA para lanzar una campaña con creadores',
  excerpt:
  'La IA acelera la búsqueda y el primer contacto, pero el encaje de audiencia y la relación a largo plazo siguen decidiendo el resultado.',
  category: 'Artículos',
  date: '28 de agosto de 2026',
  readTime: '5 min de lectura',
  author: {
    name: 'Guillermina Sanz',
    role: 'Operaciones y red de creadores',
    avatar: IMAGES.avatarGuille
  },
  cover: IMAGES.blog2,
  clipId: 'clip-fitness',
  body: [
  {
    text: 'La parte automatizable de una campaña con creadores es más grande de lo que parece, y también más aburrida: rastrear perfiles, cruzar audiencias, preparar propuestas y hacer seguimiento.'
  },
  {
    heading: 'Lo que conviene automatizar',
    text: 'Búsqueda, puntuación de encaje, primer contacto y recordatorios. Ahí la automatización gana tiempo real y evita que la campaña dependa de la agenda de una sola persona.'
  },
  {
    heading: 'Lo que no',
    text: 'Elegir a quién activar, escribir el mensaje y sostener la relación. Un creador que se siente tratado por un sistema deja de proponer ideas, y ahí es donde se pierde el rendimiento.'
  }]

},
{
  slug: 'does-ugc-work-for-b2b',
  title: '¿Funciona el UGC en B2B y servicios profesionales?',
  excerpt:
  'Sí funciona, pero los formatos no se parecen a los del gran consumo: menos producto y más criterio, proceso y personas.',
  category: 'Artículos',
  date: '25 de agosto de 2026',
  readTime: '5 min de lectura',
  author: {
    name: 'Delfina Ruiz',
    role: 'Dirección de campañas',
    avatar: IMAGES.avatarDelfina
  },
  cover: IMAGES.blog3,
  clipId: 'clip-unboxing',
  body: [
  {
    text: 'En B2B la recomendación pesa más que el anuncio, pero el contenido que funciona no se parece al del gran consumo. Nadie hace unboxing de un software industrial.'
  },
  {
    heading: 'Formatos que sí funcionan',
    text: 'Demostraciones de proceso, comparativas honestas, opiniones de profesionales del sector y explicaciones de por qué se toma una decisión de compra. Autoridad antes que espectáculo.'
  },
  {
    heading: 'Quién lo cuenta',
    text: 'Técnicos, consultores y profesionales con audiencias pequeñas pero muy concretas. El alcance importa poco cuando el ticket es alto y el ciclo de venta es largo.'
  }]

}];


export const es: SiteCopy = {
  label: 'Español',
  short: 'ES',
  nav: [
  { label: 'Marcas', to: '/#audiences' },
  { label: 'Agencias', to: '/#audiences' },
  { label: 'Creadores', to: '/#audiences' },
  { label: 'Casos', to: '/case-studies' },
  { label: 'Nosotros', to: '/about' },
  { label: 'Blog', to: '/blog' }],

  header: {
    pricing: 'Precios',
    cta: 'Contactar',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
    languageLabel: 'Idioma',
    themeLabel: 'Apariencia',
    themeDark: 'Modo oscuro',
    themeLight: 'Modo claro',
    mobileNote: '+500 creadores · España y LATAM · activación en 48h.'
  },
  hero: {
    badge: 'Creator marketing gestionado',
    titleStart: 'La plataforma que te conecta con creadores dentro de tu',
    titleAccent: 'sector',
    lede: 'Cada sector tiene su propia gente. Los encontramos, los activamos y ejecutamos la campaña completa: contrato, entrega, pago retenido y medición en un solo sistema.',
    primaryCta: 'Cuéntanos tu negocio',
    secondaryCta: 'Ver cómo funciona',
    proofValue: '+500',
    proofLabel: 'creadores en la red'
  },
  frame: {
    ariaLabel: 'Ejemplo de plan de campaña con creadores propuestos',
    title: '✦ Tu plan de campaña',
    tag: 'Ejemplo',
    caseLabel: '✦ Caso real · Restaurante, Madrid',
    briefLabel: 'El brief que nos dieron →',
    briefQuote:
    '«Somos un restaurante en Malasaña y queremos llenar mesas de martes a jueves…»',
    chips: ['Visitas 24K', 'Reservas/mes +120', 'Coste 1.480 €'],
    creatorsTitle: 'Creadores propuestos',
    creatorsTag: 'IA + equipo',
    fitSuffix: 'encaje',
    creators: [
    { name: 'Antonella C.', niche: 'Gastronomía · Madrid', score: 98, tone: CREATOR_TONES[0] },
    { name: 'Iara S.', niche: 'Lifestyle · Madrid', score: 95, tone: CREATOR_TONES[1] },
    { name: 'Martina F.', niche: 'Retail y moda', score: 93, tone: CREATOR_TONES[2] },
    { name: 'Guille R.', niche: 'Reseñas gastronómicas', score: 91, tone: CREATOR_TONES[3] }],

    activationValue: '48',
    activationUnit: 'h',
    activationLabel: 'para activar la campaña',
    networkValue: '+500',
    networkLabel: 'creadores en la red'
  },
  logoStrip: {
    label: 'Marcas que confían',
    logos: ['SWISS BUTTER', 'Harper & Bone', 'TEMU', 'CASA CARMEN', 'Nordia']
  },
  contentWall: {
    eyebrow: 'Contenido de la red',
    heading: 'El trabajo real, y lo que pasó fuera de la pantalla',
    lede: 'Una muestra de piezas producidas este mes. El dato de cada clip es el que reportó el negocio, no una métrica de vanidad.',
    footNoteStrong: '+200 campañas',
    footNote: 'producidas en España y LATAM desde 2019.',
    link: 'Ver las campañas que hay detrás'
  },
  audiencesSection: {
    eyebrow: 'Una red, tres partes',
    heading: 'Marcas, agencias y creadores en el mismo sistema',
    lede: 'Cada parte trabaja en su propio espacio, pero el brief, las revisiones y los pagos ocurren sobre la misma información.',
    tablistLabel: 'Elegir un perfil',
    whatChanges: 'Lo que cambia',
    items: audiences
  },
  workflow: {
    eyebrow: 'Cómo funciona',
    heading: 'Del brief al resultado medido, sin salir del sistema',
    steps: [
    {
      step: '01',
      title: 'Brief',
      text: 'Nos cuentas el negocio y el objetivo. Lo convertimos en un brief accionable con mensaje, formatos, fechas y presupuesto cerrado.',
      detail: 'Plan a medida en 48 horas'
    },
    {
      step: '02',
      title: 'Selección',
      text: 'El modelo propone perfiles de tu sector por encaje de audiencia y entrega previa. El equipo decide, negocia y cierra condiciones.',
      detail: '+500 creadores en la red'
    },
    {
      step: '03',
      title: 'Producción',
      text: 'Contrato, guion, revisiones y publicación en un solo hilo. Un responsable valida cada pieza antes de que salga.',
      detail: 'Pago retenido hasta publicar'
    },
    {
      step: '04',
      title: 'Medición',
      text: 'Medimos lo que pasa fuera de la pantalla: visitas, reservas, registros y ventas. El resultado alimenta la siguiente campaña.',
      detail: 'Orgánico más amplificación paid'
    }]

  },
  platform: {
    eyebrow: 'Qué es Locals Club',
    heading: 'Solución gestionada, no autoservicio',
    primary: {
      title: 'La tecnología propone, las personas deciden',
      text: 'El autoservicio es la categoría; el servicio gestionado es la diferencia. La tecnología rastrea la red, puntúa el encaje por sector y adelanta el trabajo pesado. A quién se activa, con qué mensaje y en qué momento lo decide una persona que responde por tu campaña.',
      points: [
      'Encaje por sector y mercado, no por número de seguidores',
      'Historial de entrega y fiabilidad de cada creador',
      'Un responsable con nombre que valida y responde']

    },
    secondary: [
    {
      title: 'Contratos y pago retenido',
      text: 'Derechos de uso, territorios y plazos firmados antes de grabar. El presupuesto queda retenido y se libera al publicar.'
    },
    {
      title: 'Resultados, no métricas de vanidad',
      text: 'Reservas, visitas, registros y ventas atribuidas. Las views son el medio para llegar ahí, nunca el titular del informe.'
    }]

  },
  casesSection: {
    eyebrow: 'Casos',
    heading: 'Campañas medidas por lo que pasa fuera de la pantalla',
    link: 'Ver todos los casos',
    featuredImageAlt: 'Producto junto a un móvil reproduciendo contenido de creador'
  },
  expertise: {
    eyebrow: 'Experiencia',
    heading: 'Años activando creadores, convertidos en un sistema',
    body: 'Empezamos gestionando campañas a mano para restaurantes y tiendas, no montando un marketplace. Cada regla del sistema —cómo se escribe un brief, cómo se cierran los derechos, cómo se puntúa a un creador— viene de campañas que ejecutamos nosotros. Sigue habiendo un responsable en cada cuenta.',
    imageAlt: 'El equipo revisando contenido de creadores en el estudio'
  },
  stats: [
  { value: '+500', label: 'creadores en la red' },
  { value: '+200', label: 'campañas producidas' },
  { value: '48h', label: 'para activar una campaña' },
  { value: '2', label: 'mercados: España y LATAM' }],

  testimonials: [
  {
    quote:
    'La comunicación es rápida y clara, entienden nuestro estilo y dan margen para crear de forma natural. Los briefings y los tiempos están organizados, así que se trabaja con tranquilidad.',
    name: 'Antonella C.',
    role: 'Creadora · @antonellacomino',
    avatar: IMAGES.avatarDelfina
  },
  {
    quote:
    'Contratamos una campaña y recibimos una operación completa. El cliente ve reservas, nosotros mantenemos la relación y la estrategia. Esa es la parte que antes no podíamos ofrecer.',
    name: 'Tomás Herrera',
    role: 'Socio director, agencia partner',
    avatar: IMAGES.avatarGuille
  }],

  pricing: {
    eyebrow: 'Precios',
    heading: 'Nuestra oferta para marcas',
    note: 'Tres planes con precio cerrado. Los precios no incluyen IVA y la inversión en paid (Meta, TikTok) nunca va incluida.',
    mostChosen: 'El más elegido',
    tiers: [
    {
      name: 'Piloto',
      price: '1.500 €',
      cadence: 'pago único',
      text: 'Un lanzamiento, una apertura o una acción concreta con fecha.',
      features: [
      'Restauración y producto',
      'Hasta 50 creadores',
      'Duración de 6 semanas',
      'Contrato y pago retenido incluidos'],

      cta: 'Empezar con el piloto',
      featured: false
    },
    {
      name: 'Campaña',
      price: '2.500 €',
      cadence: 'al mes',
      text: 'Contenido cada mes y presencia sostenida, no un pico y a otra cosa.',
      features: [
      'Restauración y producto',
      'Hasta 50 creadores al mes',
      'Permanencia de 3 meses',
      'Responsable de campaña asignado',
      'Informe mensual de resultados'],

      cta: 'Quiero mi plan',
      featured: true
    },
    {
      name: 'A medida',
      price: 'Según necesidad',
      cadence: 'presupuesto cerrado',
      text: 'Multi-ciudad, varios mercados o un brief que no entra en un pack.',
      features: [
      'Cualquier sector',
      'Los creadores que pida el objetivo',
      'La duración que pida la campaña',
      'Amplificación con paid',
      'Operación en marca blanca'],

      cta: 'Hablar con el equipo',
      featured: false
    }]

  },
  faq: {
    eyebrow: 'Preguntas frecuentes',
    heading: 'Lo que nos preguntan antes de empezar',
    lede: 'Cualquier otra duda la resolvemos en la primera llamada.',
    items: [
    {
      q: '¿Qué es exactamente Locals Club?',
      a: 'Una solución gestionada de campañas con creadores en España y LATAM. No es un marketplace donde buscas perfiles ni una base de datos de influencers: nos cuentas qué quieres conseguir y nos ocupamos del brief, la selección, la negociación, el feedback, la publicación y la medición.'
    },
    {
      q: '¿Qué diferencia hay entre un creador y un influencer?',
      a: 'El influencer vende alcance; el creador vende contenido. Trabajamos con gente que conoce tu sector y produce piezas que funcionan tanto en su perfil como dentro de tus anuncios, aunque su audiencia sea pequeña.'
    },
    {
      q: '¿Cuánto cuesta una campaña?',
      a: 'Tres planes con precio cerrado: un piloto puntual desde 1.500 €, continuidad mensual desde 2.500 € y campañas a medida. Los precios no incluyen IVA y la inversión en paid (Meta, TikTok) nunca va incluida.'
    },
    {
      q: '¿Qué resultados puedo esperar?',
      a: 'Medimos lo que pasa fuera de la pantalla: visitas al local, reservas, registros o ventas. Antes de empezar acordamos el indicador principal y el volumen esperado de piezas y creadores.'
    },
    {
      q: '¿En qué mercados trabajáis?',
      a: 'España y LATAM, con campañas simultáneas en varios países. Nuestro eje es sectorial más que geográfico: hostelería, retail, fintech, industrial y automoción.'
    }]

  },
  blogTeaser: {
    eyebrow: 'Últimas noticias',
    heading: 'Lo último que hemos publicado',
    link: 'Ver todo el blog'
  },
  demo: {
    eyebrow: 'Empieza por aquí',
    heading: 'Cuéntanos tu negocio y te preparamos el plan',
    lede: 'Sin formularios eternos y sin compromiso. Analizamos tu marca, proponemos creadores de tu sector y te devolvemos volumen, duración y presupuesto estimado.',
    bullets: [
    'Plan a medida y gratuito',
    'Activación en 48 horas',
    'Precio cerrado, sin sorpresas'],

    formTitle: 'Quiero mi plan',
    roleLegend: 'Soy',
    roles: ['Marca', 'Agencia', 'Creador'],
    emailLabel: 'Email de contacto',
    emailPlaceholder: 'tu@negocio.com',
    emailError: 'Introduce un email válido.',
    submit: 'Hablar con el equipo',
    submitting: 'Enviando…',
    disclaimer: 'Plan a medida · Gratis y sin compromiso.',
    successTitle: 'Solicitud recibida',
    successBefore: 'Te escribimos a',
    successAfter:
    'en menos de 24 horas con una propuesta de creadores y un presupuesto estimado.'
  },
  footer: {
    tagline:
    'Campañas con creadores de tu sector, gestionadas de principio a fin. España y LATAM.',
    rights: 'Todos los derechos reservados.',
    legal: ['Privacidad', 'Términos', 'Política de cookies'],
    columns: [
    {
      title: 'Servicio',
      links: [
      { label: 'Cómo funciona', to: '/#how-it-works' },
      { label: 'Solución gestionada', to: '/#platform' },
      { label: 'Contratos y pagos', to: '/#platform' },
      { label: 'Medición', to: '/#platform' }]

    },
    {
      title: 'Para quién',
      links: [
      { label: 'Marcas', to: '/#audiences' },
      { label: 'Agencias', to: '/#audiences' },
      { label: 'Creadores', to: '/#audiences' },
      { label: 'Precios', to: '/#pricing' }]

    },
    {
      title: 'Locals',
      links: [
      { label: 'Nosotros', to: '/about' },
      { label: 'Casos', to: '/case-studies' },
      { label: 'Blog', to: '/blog' },
      { label: 'Contactar', to: '/#demo' }]

    },
    {
      title: 'Recursos',
      links: [
      { label: 'Creadores y CPL', to: '/blog/specialist-creators-cheaper-leads' },
      { label: 'IA y campañas', to: '/blog/using-ai-to-launch-creator-campaigns' },
      { label: 'UGC en B2B', to: '/blog/does-ugc-work-for-b2b' },
      { label: 'Todos los artículos', to: '/blog' }]

    }]

  },
  about: {
    eyebrow: 'Nosotros',
    title: 'Ejecutábamos las campañas antes de construir el sistema',
    lede: 'Locals Club empezó gestionando creadores a mano para negocios de barrio, no montando un marketplace. Cada regla del sistema viene de una campaña que tuvimos que resolver nosotros.',
    primaryCta: 'Cuéntanos tu negocio',
    secondaryCta: 'Leer nuestra historia',
    clipsNote:
    'Un día de trabajo entregado por la red. Después de +200 campañas, sigue siendo lo único que nos interesa enseñar.',
    storyEyebrow: 'Nuestra historia',
    storyHeading: 'Cuatro momentos que nos trajeron hasta aquí',
    storyImageAlt: 'El equipo revisando vídeos de creadores',
    timeline: [
    {
      year: '2019',
      title: 'Campañas de barrio',
      text: 'Empezamos activando creadores para restaurantes de Madrid, con hojas de cálculo y mucho trabajo manual.'
    },
    {
      year: '2022',
      title: 'El primer sistema',
      text: 'Brief estructurado, contrato y pago retenido en un mismo flujo. El tiempo de activación bajó a días.'
    },
    {
      year: '2024',
      title: 'El modelo empieza a proponer',
      text: 'El encaje por sector pasó a calcularse sobre nuestro propio histórico de entregas, no sobre seguidores.'
    },
    {
      year: '2026',
      title: '+200 campañas producidas',
      text: 'Más de 500 creadores en la red, campañas en España y LATAM y un responsable humano en cada una.'
    }],

    valuesEyebrow: 'Cómo trabajamos',
    valuesHeading: 'Tres cosas que no negociamos',
    values: [
    {
      title: 'Resultados físicos, no métricas de vanidad',
      text: 'Reservas, visitas, registros y ventas. Las views son un medio para llegar ahí, nunca el titular del informe.'
    },
    {
      title: 'El eje es sectorial, no geográfico',
      text: 'Hostelería, retail, fintech, industrial o automoción: cada sector tiene su propia gente, y esa es la que activamos.'
    },
    {
      title: 'La tecnología propone, las personas deciden',
      text: 'La automatización adelanta el trabajo pesado. Un responsable valida cada campaña y responde por ella.'
    }],

    teamEyebrow: 'Quién está detrás',
    teamHeading: 'Un responsable con nombre en cada campaña',
    teamLede:
    'Un equipo entre Madrid, Barcelona y Buenos Aires. Todo el que gestiona campañas ha trabajado antes con creadores en marca o en agencia.',
    team: [
    {
      name: 'Delfina Ruiz',
      role: 'Cofundadora · Campañas',
      bio: 'Años gestionando creadores en hostelería y retail antes de convertir ese método en un sistema con contratos, pagos y medición.',
      avatar: IMAGES.avatarDelfina
    },
    {
      name: 'Guillermina Sanz',
      role: 'Cofundadora · Red de creadores',
      bio: 'Cuida la relación con los más de 500 creadores de España y LATAM y se asegura de que las condiciones acordadas se cumplan siempre.',
      avatar: IMAGES.avatarGuille
    }]

  },
  casesPage: {
    eyebrow: 'Casos',
    title: 'Campañas medidas por lo que pasa fuera de la pantalla',
    lede: 'Tres campañas gestionadas de principio a fin. En cada una verás el problema, lo que ejecutamos, el contenido que salió y los números que reportó el negocio.',
    cta: 'Cuéntanos tu negocio',
    tablistLabel: 'Elegir un caso',
    blocks: {
      problem: 'El problema',
      approach: 'Lo que ejecutamos',
      outcome: 'Dónde acabó'
    },
    clipsTitle: 'Contenido de esta campaña',
    clipsNote: 'Vista previa sin sonido · toca para reproducir'
  },
  blogPage: {
    eyebrow: 'Blog',
    title: 'Lo que aprendemos campaña tras campaña',
    lede: 'Criterio sobre creadores, sectores y medición, escrito por el equipo que ejecuta las campañas cada semana.',
    readLink: 'Leer el artículo',
    moreTitle: 'Más del equipo'
  },
  postPage: {
    back: 'Todos los artículos',
    exampleAsset: 'Pieza de ejemplo',
    ctaText:
    '¿Quieres aplicarlo a tu próxima campaña? Te preparamos un plan a medida, gratis y sin compromiso.',
    ctaButton: 'Quiero mi plan',
    keepReading: 'Seguir leyendo',
    notFoundTitle: 'Ese artículo ya no está aquí',
    notFoundText: 'La pieza que buscas no está publicada en esta dirección.',
    notFoundCta: 'Volver al blog'
  },
  videoTile: { play: 'Reproducir', pause: 'Pausar', from: 'el vídeo de' },
  clips,
  caseStudies,
  posts
};