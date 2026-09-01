export interface UgcClip {
  id: string;
  creator: string;
  niche: string;
  platform: 'TikTok' | 'Reels' | 'Shorts';
  metric: string;
  metricLabel: string;
  poster: string;
  src: string;
}

const VIDEOS = {
  blazes:
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  escapes:
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
  fun: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
  joyrides:
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
  meltdowns:
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
  bunny:
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  elephants:
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4'
};

const POSTERS = {
  skincare: "/27856742-0d58-40b0-92c7-eccb8a9c38fd.jpg",

  fitness: "/1231581e-0ed6-48fe-aa81-58333818cfbc.jpg",

  unboxing: "/7fcf5c4d-0632-43f0-a649-fb8edc54d3ba.jpg",

  coffee: "/4a8f42e9-7e48-4c5b-9797-8fda1b4b6572.jpg",

  sneakers: "/435249f6-a2d0-4171-8f9c-a9a2fff0e0a3.jpg"

};

export const ugcClips: UgcClip[] = [
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
  metricLabel: 'UGCs',
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


export interface CaseStudy {
  slug: string;
  brand: string;
  sector: string;
  title: string;
  summary: string;
  challenge: string;
  approach: string;
  outcome: string;
  cover: string;
  stats: {value: string;label: string;}[];
  quote: {text: string;name: string;role: string;};
  clips: UgcClip[];
}

export const caseStudyList: CaseStudy[] = [
{
  slug: 'swiss-butter',
  brand: 'Swiss Butter',
  sector: 'Hostelería · Madrid',
  title: 'Fila todas las noches con una campaña 100% orgánica',
  summary:
  'Una apertura sostenida durante semanas con creadores gastronómicos de la ciudad: contenido diario, un evento con 150 creadores y cero inversión en paid.',
  challenge:
  'Un restaurante recién abierto, sin base de clientes y con la necesidad de llenar de martes a jueves, no solo el fin de semana.',
  approach:
  'Selección de creadores gastronómicos de Madrid por encaje real de audiencia, calendario de visitas escalonado durante seis semanas y un evento de apertura con 150 perfiles publicando el mismo día.',
  outcome:
  'Más de un millón de views orgánicas y una cola sostenida en horarios que antes estaban vacíos. El contenido sigue usándose como biblioteca de la marca.',
  cover: "/610758d7-afc6-465b-b0cb-ad07cf2cf1a7.jpg",

  stats: [
  { value: '+1M', label: 'views orgánicas' },
  { value: '+200', label: 'piezas de contenido' },
  { value: '150', label: 'creadores en un evento' },
  { value: '0 €', label: 'inversión en paid' }],

  quote: {
    text: 'Pasamos de llenar solo los fines de semana a tener lista de espera entre semana. El contenido lo hizo gente de aquí, no una campaña que parecía un anuncio.',
    name: 'Dirección de sala',
    role: 'Swiss Butter, Madrid'
  },
  clips: [ugcClips[3], ugcClips[0], ugcClips[2]]
},
{
  slug: 'harper-and-bone',
  brand: 'Harper & Bone',
  sector: 'Retail · Barcelona y Madrid',
  title: '+250.000 personas impactadas en 15 días',
  summary:
  'Dos ciudades, quince días y una red de creadores de moda produciendo contenido de tienda y producto para orgánico y paid.',
  challenge:
  'La marca necesitaba volumen de creatividades para sostener paid en dos ciudades sin montar una producción de estudio por cada colección.',
  approach:
  'Roster paralelo en Barcelona y Madrid con un mismo brief, entrega escalonada y derechos de uso cerrados desde el inicio para poder amplificar.',
  outcome:
  'Más de 150 piezas en dos semanas, tres mil nuevos seguidores y una biblioteca reutilizable para las siguientes campañas.',
  cover: "/9eff03c5-9ab5-4d04-9c62-cb9bbbe7ff87.jpg",

  stats: [
  { value: '+250.000', label: 'personas impactadas' },
  { value: '+150', label: 'UGCs producidos' },
  { value: '+3K', label: 'nuevos seguidores' },
  { value: '15', label: 'días de campaña' }],

  quote: {
    text: 'Necesitábamos creatividades a ritmo de retail. En dos semanas teníamos más material del que producíamos en un trimestre.',
    name: 'Equipo de marca',
    role: 'Harper & Bone'
  },
  clips: [ugcClips[4], ugcClips[2], ugcClips[0]]
},
{
  slug: 'temu',
  brand: 'TEMU',
  sector: 'Ecommerce · España y Argentina',
  title: 'Gestión de UGC a escala en dos países a la vez',
  summary:
  'Más de cincuenta creadores recurrentes al mes produciendo contenido en dos mercados en paralelo, con amplificación orgánica y de pago.',
  challenge:
  'Escalar el volumen de contenido sin perder control de calidad, contratos ni plazos en dos países con dinámicas distintas.',
  approach:
  'Un mismo sistema operativo para los dos mercados: roster recurrente, briefs localizados, revisiones centralizadas y pago retenido por pieza.',
  outcome:
  'Cadencia mensual estable, coste por pieza previsible y contenido listo para orgánico y paid desde el primer mes.',
  cover: "/de5242f3-4079-47cb-805a-c4a0daf6fe0d.jpg",

  stats: [
  { value: '+50', label: 'creadores recurrentes/mes' },
  { value: '2', label: 'países en paralelo' },
  { value: '100%', label: 'piezas con derechos cerrados' },
  { value: 'Org + paid', label: 'amplificación' }],

  quote: {
    text: 'Lo difícil no era encontrar creadores, era sostener el ritmo mes a mes en dos países. Eso es exactamente lo que se resolvió.',
    name: 'Responsable de contenido',
    role: 'TEMU España y Argentina'
  },
  clips: [ugcClips[2], ugcClips[1], ugcClips[4]]
}];


export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: {name: string;role: string;avatar: string;};
  cover: string;
  clip?: UgcClip;
  body: {heading?: string;text: string;}[];
}

export const blogPosts: BlogPost[] = [
{
  slug: 'creador-especializado-leads-mas-baratos',
  title: '¿Por qué un creador especializado genera leads más baratos?',
  excerpt:
  'Un creador de tu sector reduce el coste por lead porque su audiencia ya está cualificada: menos impactos, más conversión y menor gasto total.',
  category: 'Artículos',
  date: '31 ago 2026',
  readTime: '5 min de lectura',
  author: {
    name: 'Delfina Ruiz',
    role: 'Dirección de campañas',
    avatar: "/7c7651b3-573f-41a4-a637-7bfaffce56e1.jpg"

  },
  cover: "/ecf5df21-32ed-4e40-a7d0-05a0bb13fea4.jpg",

  clip: ugcClips[0],
  body: [
  {
    text: 'Comparar creadores por número de seguidores es la forma más rápida de pagar de más. Lo que mueve el coste por lead no es el alcance, sino cuánta de esa audiencia entra realmente en tu categoría.'
  },
  {
    heading: 'Menos impactos, mejor cualificados',
    text: 'Un perfil generalista con cien mil seguidores puede tener un puñado de personas interesadas en tu producto. Uno especializado con diez mil puede tener a la mitad. El coste por impacto sube, el coste por lead baja.'
  },
  {
    heading: 'El contenido también cambia',
    text: 'Quien conoce el sector explica el producto sin que se lo tengas que escribir. Necesita menos rondas de revisión y produce piezas que se sostienen como anuncio, no solo como publicación orgánica.'
  },
  {
    heading: 'Cómo aplicarlo al brief',
    text: 'Define primero el sector y el momento de consumo, después el volumen. Es más rentable activar a doce creadores del nicho durante tres meses que a uno grande una sola vez.'
  }]

},
{
  slug: 'ia-para-lanzar-campanas-con-creadores',
  title: 'Cómo usar la IA para lanzar una campaña con creadores',
  excerpt:
  'La IA acelera la búsqueda y el primer contacto, pero el encaje de audiencia y la relación a largo plazo siguen decidiendo el resultado.',
  category: 'Artículos',
  date: '28 ago 2026',
  readTime: '5 min de lectura',
  author: {
    name: 'Guillermina Sanz',
    role: 'Operaciones y red de creadores',
    avatar: "/f85a11ee-9d16-4b8e-8b2e-1c3da04bb733.jpg"

  },
  cover: "/68cfefbf-d201-4b18-9dff-8216ebd872dd.jpg",

  clip: ugcClips[1],
  body: [
  {
    text: 'La parte automatizable de una campaña con creadores es más grande de lo que parece, y también más aburrida: rastrear perfiles, cruzar audiencias, preparar propuestas y hacer seguimiento.'
  },
  {
    heading: 'Lo que conviene automatizar',
    text: 'Búsqueda, puntuación de encaje, primer contacto y recordatorios. Ahí la IA gana tiempo real y evita que una campaña dependa de la agenda de una persona.'
  },
  {
    heading: 'Lo que no',
    text: 'Elegir a quién activar, escribir el mensaje y sostener la relación. Un creador que se siente tratado por un sistema deja de proponer ideas, y ahí es donde se pierde el rendimiento.'
  }]

},
{
  slug: 'ugc-para-b2b-y-servicios',
  title: '¿Funciona el UGC en B2B y servicios profesionales?',
  excerpt:
  'Sí funciona, pero los formatos son distintos a los del gran consumo: menos producto y más criterio, proceso y personas.',
  category: 'Artículos',
  date: '25 ago 2026',
  readTime: '5 min de lectura',
  author: {
    name: 'Delfina Ruiz',
    role: 'Dirección de campañas',
    avatar: "/7c7651b3-573f-41a4-a637-7bfaffce56e1.jpg"

  },
  cover: "/6316f1cf-198b-4477-ba53-77e4ee18ff71.jpg",

  clip: ugcClips[2],
  body: [
  {
    text: 'En B2B la recomendación pesa más que el anuncio, pero el contenido que funciona no se parece al de gran consumo. Nadie hace unboxing de un software industrial.'
  },
  {
    heading: 'Formatos que sí funcionan',
    text: 'Demostraciones de proceso, comparativas honestas, opiniones de profesionales del sector y explicaciones de por qué se toma una decisión de compra. Autoridad antes que espectáculo.'
  },
  {
    heading: 'Quién lo cuenta',
    text: 'Técnicos, consultores y profesionales con audiencia pequeña pero muy concreta. El alcance importa poco cuando el ticket es alto y el ciclo de venta largo.'
  }]

}];


export const teamMembers = [
{
  name: 'Delfina Ruiz',
  role: 'Cofundadora · Campañas',
  bio: 'Años gestionando creadores en hostelería y retail antes de convertir ese método en un sistema con contratos, pagos y medición.',
  avatar: "/7c7651b3-573f-41a4-a637-7bfaffce56e1.jpg"

},
{
  name: 'Guillermina Sanz',
  role: 'Cofundadora · Red de creadores',
  bio: 'Responsable de la relación con los más de 500 creadores de la red en España y LATAM, y de que las condiciones se cumplan siempre.',
  avatar: "/f85a11ee-9d16-4b8e-8b2e-1c3da04bb733.jpg"

}];


export const timeline = [
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
  title: 'La IA entra a proponer',
  text: 'El encaje por sector empieza a calcularse sobre nuestro propio histórico de entregas, no sobre seguidores.'
},
{
  year: '2026',
  title: '+200 campañas producidas',
  text: 'Más de 500 creadores en la red, campañas en España y LATAM y un responsable humano en cada una.'
}];


export const values = [
{
  title: 'Resultados físicos, no métricas de vanidad',
  text: 'Reservas, visitas, registros y ventas. Las views son un medio para llegar ahí, nunca el titular del informe.'
},
{
  title: 'El eje es sectorial, no geográfico',
  text: 'Hostelería, retail, fintech, industrial o automoción: cada sector tiene su propia gente, y esa es la que activamos.'
},
{
  title: 'IA que propone, personas que deciden',
  text: 'La tecnología adelanta el trabajo pesado. Un responsable valida cada campaña y responde por ella.'
}];