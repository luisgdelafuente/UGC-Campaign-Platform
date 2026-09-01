export const navLinks = [
{ label: 'Marcas', to: '/#audiences' },
{ label: 'Agencias', to: '/#audiences' },
{ label: 'Creadores', to: '/#audiences' },
{ label: 'Casos', to: '/case-studies' },
{ label: 'Nosotros', to: '/about' },
{ label: 'Blog', to: '/blog' }];


export const partnerLogos = [
'SWISS BUTTER',
'Harper & Bone',
'TEMU',
'CASA CARMEN',
'Nordia'];


export const matchedCreators = [
{ name: 'Antonella C.', niche: 'Gastronomía · Madrid', score: 98, tone: '#4FC3E8' },
{ name: 'Iara S.', niche: 'Lifestyle · Madrid', score: 95, tone: '#7FD6F0' },
{ name: 'Martina F.', niche: 'Retail y moda', score: 93, tone: '#26A9D8' },
{ name: 'Guille R.', niche: 'Food reviews', score: 91, tone: '#0A7FA6' }];


export type AudienceKey = 'brands' | 'creators' | 'agencies';

export interface Audience {
  key: AudienceKey;
  tab: string;
  headline: string;
  description: string;
  bullets: {title: string;text: string;}[];
  cta: string;
  metric: {value: string;label: string;};
}

export const audiences: Audience[] = [
{
  key: 'brands',
  tab: 'Marcas',
  headline: 'Nos cuentas el objetivo, ejecutamos la campaña entera',
  description:
  'Visitas, reservas, registros o ventas. Buscamos a los creadores de tu sector, negociamos, producimos y medimos lo que pasa fuera de la pantalla.',
  bullets: [
  {
    title: 'Creadores de tu sector',
    text: 'Perfiles que ya conocen el producto y hablan el idioma de tu categoría.'
  },
  {
    title: 'Un responsable por campaña',
    text: 'Una persona que valida cada pieza, supervisa los tiempos y te responde.'
  },
  {
    title: 'Todo en un sistema',
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
    text: 'Te llegan propuestas de tu sector con briefing, fechas y caché por delante.'
  },
  {
    title: 'Libertad para crear',
    text: 'Se cuida tu estilo: el brief marca el mensaje, no la forma de contarlo.'
  },
  {
    title: 'Pago retenido',
    text: 'El presupuesto queda bloqueado antes de grabar y se libera al publicar.'
  }],

  cta: 'Unirme a la red de creadores',
  metric: { value: '+500', label: 'creadores activos en la red' }
},
{
  key: 'agencies',
  tab: 'Agencias',
  headline: 'Ofrece UGC sin montar un departamento',
  description:
  'Operación en marca blanca bajo tu marca. Tú mantienes la relación y la estrategia; nosotros ponemos la red, la producción y el reporting.',
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
    title: 'Margen controlado',
    text: 'Coste, markup y rentabilidad visibles en cada línea de campaña.'
  }],

  cta: 'Ver el modelo para agencias',
  metric: { value: '+200', label: 'campañas producidas con partners' }
}];


export const workflowSteps = [
{
  step: '01',
  title: 'Brief',
  text: 'Nos cuentas el negocio y el objetivo. Lo convertimos en un brief accionable con mensaje, formatos, fechas y presupuesto cerrado.',
  detail: 'Plan a medida en 48 horas'
},
{
  step: '02',
  title: 'Selección',
  text: 'La IA propone perfiles de tu sector por encaje de audiencia y entrega previa. El equipo decide, negocia y cierra condiciones.',
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
  detail: 'Orgánico + amplificación paid'
}];


export const platformFeatures = {
  primary: {
    title: 'IA que propone, personas que deciden',
    text: 'El autoservicio es la categoría; el servicio gestionado es la diferencia. La tecnología rastrea la red, puntúa el encaje por sector y adelanta el trabajo pesado. La decisión de a quién activar, con qué mensaje y en qué momento la toma un responsable que conoce tu campaña.',
    points: [
    'Encaje por sector y mercado, no por número de seguidores',
    'Historial de entrega y fiabilidad de cada creador',
    'Una persona responsable que valida y responde']

  },
  secondary: [
  {
    title: 'Contratos y pago retenido',
    text: 'Cesión de derechos, usos y plazos firmados antes de grabar. El presupuesto queda retenido y se libera al publicar.'
  },
  {
    title: 'Resultados, no métricas de vanidad',
    text: 'Reservas, visitas físicas, registros y ventas atribuidas. Las views son el medio, nunca el informe final.'
  }]

};

export const caseStudies = {
  featured: {
    brand: 'Swiss Butter',
    sector: 'Hostelería · Madrid',
    title: 'Fila todas las noches con una campaña 100% orgánica',
    text: 'Una apertura sostenida durante semanas con creadores gastronómicos de la ciudad: contenido diario, un evento con 150 creadores y cero inversión en paid.',
    image: "/610758d7-afc6-465b-b0cb-ad07cf2cf1a7.jpg",

    stats: [
    { value: '+1M', label: 'views orgánicas' },
    { value: '+200', label: 'piezas de contenido' },
    { value: '150', label: 'creadores en un evento' }]

  },
  supporting: [
  {
    brand: 'Harper & Bone',
    sector: 'Retail · Barcelona y Madrid',
    title: '+250.000 personas impactadas en 15 días',
    stat: '+150',
    statLabel: 'UGCs producidos'
  },
  {
    brand: 'TEMU',
    sector: 'Ecommerce · España y Argentina',
    title: 'Gestión de UGC a escala en dos países a la vez',
    stat: '+50',
    statLabel: 'creadores recurrentes al mes'
  }]

};

export const expertiseStats = [
{ value: '+500', label: 'creadores en la red' },
{ value: '+200', label: 'campañas producidas' },
{ value: '48h', label: 'para activar una campaña' },
{ value: '2', label: 'mercados: España y LATAM' }];


export const testimonials = [
{
  quote:
  'La comunicación es rápida y clara, entienden nuestro estilo y dan libertad para crear de forma natural. Muy organizados con los briefings y los tiempos: se trabaja con tranquilidad.',
  name: 'Antonella C.',
  role: 'Creadora · @antonellacomino',
  avatar: "/7c7651b3-573f-41a4-a637-7bfaffce56e1.jpg"

},
{
  quote:
  'Contratamos una campaña y recibimos una operación completa. El cliente ve reservas, nosotros mantenemos la relación y la estrategia. Es la parte que antes no podíamos ofrecer.',
  name: 'Tomás Herrera',
  role: 'Socio director, agencia partner',
  avatar: "/f85a11ee-9d16-4b8e-8b2e-1c3da04bb733.jpg"

}];


export const pricingTiers = [
{
  name: 'Piloto',
  price: '1.500 €',
  cadence: 'pago único',
  text: 'Un lanzamiento, una apertura o una acción con fecha.',
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
}];


export const faqs = [
{
  q: '¿Qué es exactamente Locals Club?',
  a: 'Una solución gestionada de campañas con creadores en España y LATAM. No es un marketplace donde buscas perfiles ni una base de datos de influencers: nos cuentas qué quieres conseguir y nos ocupamos del brief, la selección, la negociación, el feedback, la publicación y la medición.'
},
{
  q: '¿Qué diferencia hay entre un creador y un influencer?',
  a: 'El influencer vende alcance; el creador vende contenido. Trabajamos con gente que conoce tu sector y produce piezas que funcionan tanto en su perfil como en tus anuncios, aunque su audiencia sea pequeña.'
},
{
  q: '¿Cuánto cuesta una campaña?',
  a: 'Hay tres planes con precio cerrado: un piloto puntual desde 1.500 €, continuidad mensual desde 2.500 € al mes y campañas a medida. Los precios no incluyen IVA y la inversión en paid (Meta, TikTok) nunca va incluida.'
},
{
  q: '¿Qué resultados puedo esperar?',
  a: 'Medimos lo que ocurre fuera de la pantalla: visitas al local, reservas, registros o ventas. Antes de empezar acordamos el indicador principal y el volumen esperado de piezas y creadores.'
},
{
  q: '¿En qué mercados trabajáis?',
  a: 'España y LATAM, con campañas simultáneas en varios países. El eje es sectorial más que geográfico: hostelería, retail, fintech, industrial y automoción.'
}];