import type { SiteContent } from "../types";

const es: SiteContent = {
  home: {
    title:
      "Convertidor de PDF a blanco y negro y escala de grises — Herramienta online gratis",
    description:
      "Convierte PDF en color a PDF en escala de grises o PDF en blanco y negro online. Convertidor de PDF a escala de grises gratis que limpia páginas fotografiadas y las deja como escaneos nítidos, de forma privada, en tu navegador.",
    keywords:
      "pdf en blanco y negro, pdf en escala de grises, convertidor de pdf a escala de grises, convertir a pdf en escala de grises, convertir pdf en escala de grises a blanco y negro, pdf en color a escala de grises, pdf a blanco y negro, convertidor de pdf a blanco y negro",
  },
  aboutMeta: {
    title: "Acerca de BlackWhitePDF — Quiénes somos y cómo contactarnos",
    description:
      "Quién crea BlackWhitePDF, por qué procesa cada archivo en tu navegador y cómo ponerte en contacto. Una herramienta PDF privada y sin cuenta para quienes cuidan sus documentos.",
    keywords:
      "acerca de blackwhitepdf, convertidor de pdf a escala de grises, convertidor de pdf a blanco y negro",
  },
  nav: {
    converter: "Convertidor",
    about: "Nosotros",
    privacy: "Privacidad",
    terms: "Términos",
    contact: "Contacto",
  },
  languageLabel: "Idioma",
  hero: {
    eyebrow: "PDF en escala de grises · PDF en blanco y negro",
    h1: "Convierte PDF en color a PDF en escala de grises o blanco y negro.",
    subLead:
      "Convertidor online y gratuito de PDF a escala de grises y a blanco y negro. Sube un PDF fotografiado o en color, limpia cada página hasta lograr un escaneo nítido y descárgalo — procesado ",
    privacyLinkText: "de forma privada en tu navegador",
    imageAlt:
      "Página de PDF en color convertida en PDF en escala de grises y escaneo en blanco y negro — foto original frente al resultado limpio",
    caption: "Original → Escaneado",
    dropTitleBold: "Suelta tu PDF aquí",
    dropTitleRest: " o haz clic para buscar",
    dropSub:
      "Escaneos de libros combinados y PDF de varias páginas: todas las páginas se filtran juntas.",
  },
  ui: {
    fileNameDefault: "documento.pdf",
    pagesSingular: "página",
    pagesPlural: "páginas",
    mode: "Modo",
    modeBw: "Blanco y negro",
    modeGray: "Escala de grises",
    resolution: "Resolución",
    dpi120: "120 PPP — archivo más pequeño",
    dpi150: "150 PPP",
    dpi200: "200 PPP — recomendado",
    dpi300: "300 PPP — más nítido",
    inkThreshold: "Umbral de tinta",
    inkThresholdHelp:
      "Más bajo = texto más marcado (más motas). Más alto = más limpio (puede adelgazar el texto tenue).",
    detailSize: "Tamaño de detalle",
    detailSizeHelp:
      "Vecindario usado para la iluminación local. Más grande tolera sombras más suaves.",
    contrast: "Contraste",
    despeckle: "Quitar motas",
    crop: "Recortar y enderezar (arrastra las esquinas)",
    cropHintLead: "Arrastra las 4 esquinas en el ",
    cropHintOriginal: "Original",
    cropHintTail:
      " hasta los bordes de la página. El mismo recorte se aplica a todas las páginas.",
    cropReset: "Restablecer esquinas",
    cropCorner: "Esquina de recorte",
    previewPage: "Página de vista previa",
    prevPage: "Página anterior",
    nextPage: "Página siguiente",
    convert: "Convertir y descargar PDF",
    chooseAnother: "Elegir otro archivo",
    original: "Original",
    scanned: "Escaneado",
    processing: "Procesando…",
    starting: "Empezando…",
    processingPage: "Procesando la página {page} de {total}…",
    done: "Listo: la descarga ha comenzado.",
    error: "Algo salió mal. Prueba con menos PPP u otro PDF.",
    invalidFile: "Elige un archivo PDF.",
  },
  about: {
    eyebrow: "Sobre esta herramienta",
    h2: "Convertidor gratuito de PDF a escala de grises y a blanco y negro.",
    p1: "Si necesitas un PDF en escala de grises limpio o un verdadero PDF en blanco y negro, esta herramienta online y gratuita está hecha para eso. Funciona por completo en tu navegador: subes un archivo, ajustas la vista previa y descargas un resultado listo para imprimir sin enviar documentos a un servidor remoto.",
    p2: "La gente la usa cuando un archivo en color cuesta leer, es caro de imprimir o tiene demasiado ruido para archivarlo, y cuando necesita pasar de color a blanco y negro para formularios, contratos o libros escaneados. El convertidor cubre ambos caminos: una limpieza suave en escala de grises para páginas naturales y un modo de alto contraste en blanco y negro cuando quieres tinta sólida sobre papel blanco.",
    steps: {
      h3: "PDF en color a escala de grises en unos pasos",
      p: "Suelta tu archivo en la zona de carga, deja seleccionado Escala de grises y observa cómo se actualiza la vista previa en vivo mientras ajustas el umbral de tinta, el tamaño de detalle, el contraste y la resolución. Cuando la página se vea bien, convierte todas las páginas a la vez y descarga un nuevo PDF en escala de grises. El mismo proceso también remata exportaciones de otras apps, para que sombras, tono amarillo del papel y transparencias desaparezcan antes de imprimir o compartir.",
    },
    bw: {
      h3: "Convertir PDF en escala de grises a blanco y negro",
      p: "¿Prefieres tinta pura? Cambia a Blanco y negro para convertir con umbral adaptativo, ideal para fotocopiar, preparar OCR o imprimir en monocromo a bajo coste. También puedes partir de la foto de la página de un libro, enderezarla con la herramienta de recorte de cuatro esquinas y exportar un escaneo limpio que parece hecho con un escáner plano y no con la cámara del móvil.",
    },
    private: {
      h3: "Privado por diseño",
      p: "El procesamiento se queda en tu dispositivo, así que borradores, escaneos de documentos de identidad y archivos de clientes nunca salen de tu equipo. Los ajustes de resolución de 120 a 300 PPP te permiten equilibrar tamaño de archivo y nitidez, y puedes aplicar un único recorte a todo un libro cuando las páginas comparten el mismo encuadre.",
    },
    cards: [
      {
        title: "PDF en escala de grises",
        desc: "Convierte PDF en color a escala de grises con fondos blancos.",
      },
      {
        title: "PDF en blanco y negro",
        desc: "Convierte color o escala de grises en tinta negra sólida sobre blanco.",
      },
      {
        title: "Recortar y enderezar",
        desc: "Endereza páginas de libros fotografiadas con cuatro esquinas arrastrables.",
      },
      {
        title: "Privado por diseño",
        desc: "Sin servidores de subida: la conversión se queda en tu navegador.",
      },
    ],
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    h2: "Cómo convertir un PDF a escala de grises o a blanco y negro.",
    subhead:
      "Respuestas rápidas para crear un PDF en escala de grises o en blanco y negro online con este convertidor gratuito.",
    items: [
      {
        question: "¿Cómo convierto un PDF a escala de grises?",
        answer:
          "Abre esta página, suelta tu PDF y deja el Modo en Escala de grises. Ajusta el umbral de tinta, el tamaño de detalle y el contraste hasta que la vista previa se vea limpia y pulsa Convertir y descargar PDF. Cada página se reduce a tonos de gris neutros sobre un fondo blanco brillante y se guarda como un nuevo PDF en escala de grises, sin tocar tu archivo original.",
      },
      {
        question: "¿Cómo hago un PDF en blanco y negro?",
        answer:
          "Sube tu archivo y cambia el Modo a Blanco y negro. El umbral adaptativo convierte el texto en tinta negra sólida sobre papel blanco, ideal para fotocopiar, preparar OCR o imprimir en monocromo a bajo coste. Sube el umbral para páginas más limpias o bájalo para texto más marcado y descarga el PDF en blanco y negro.",
      },
      {
        question: "¿Puedo recortar y enderezar páginas de libros fotografiadas?",
        answer:
          "Sí. Activa Recortar y enderezar y arrastra las cuatro esquinas hasta los bordes de la página en la vista previa Original. La herramienta corrige la perspectiva de cada página para que una foto del móvil parezca un escaneo plano. El mismo recorte se aplica a todas las páginas, útil para un libro entero fotografiado con el mismo encuadre.",
      },
      {
        question: "¿Qué resolución (PPP) debo elegir?",
        answer:
          "120 PPP genera el archivo más pequeño y sirve para leer en pantalla, 200 PPP es el equilibrio recomendado para la mayoría de documentos y 300 PPP ofrece el texto más nítido para imprimir a cambio de un archivo más grande. Puedes cambiar los PPP antes de exportar sin volver a subir el PDF.",
      },
      {
        question: "¿Se sube mi PDF a un servidor?",
        answer:
          "No. La representación y el filtrado se realizan por completo en tu navegador usando tu propio dispositivo, así que tu documento nunca sale de tu equipo y no se necesita cuenta. Por eso el convertidor es seguro para borradores, escaneos de identidad y archivos confidenciales de clientes.",
      },
    ],
  },
  footer: {
    eyebrow: "Privado por diseño",
    blurb:
      "Cada página se representa, filtra y vuelve a ensamblar por completo en tu navegador. Tu PDF nunca sale de tu dispositivo.",
    converter: "Convertidor",
    about: "Nosotros",
    privacy: "Política de privacidad",
    terms: "Términos y condiciones",
    contact: "Contacto",
    copyrightTail: "· convertidor de PDF a escala de grises y blanco y negro",
  },
  aboutPage: {
    eyebrow: "Acerca de",
    h1: "Acerca de BlackWhitePDF.",
    subhead:
      "BlackWhitePDF es una herramienta pequeña e independiente para limpiar documentos directamente en tu navegador. Sin cuentas, sin subidas, sin rastreo: solo una utilidad centrada que hace bien una sola cosa.",
    whyBuilt: {
      h2: "Por qué la creamos",
      p: "Las fotos de páginas de libros y las diapositivas exportadas se ven desordenadas al imprimir, archivar o compartir, y la mayoría de las soluciones exigían subir archivos privados a un servidor desconocido. Queríamos una herramienta que nunca te pidiera eso. Por eso BlackWhitePDF funciona por completo en tu dispositivo y mantiene la experiencia deliberadamente simple.",
    },
    privacyStance: {
      h2: "Nuestra postura sobre la privacidad",
      p: "Borradores sensibles, libros escaneados y archivos de clientes no deberían necesitar una subida a terceros solo para limpiarlos. Cada conversión ocurre localmente en tu navegador, tus archivos nunca se nos envían y no se necesita cuenta.",
    },
    contact: {
      h2: "Contáctanos",
      lead: "Preguntas, informes de errores o ideas de funciones son bienvenidos. Escríbenos a ",
      email: "hello@blackwhitepdf.com",
      tail: " y normalmente respondemos en unos días hábiles.",
    },
    tryIt: {
      h2: "Pruébalo",
      lead: "¿Listo para limpiar un archivo? Ve al ",
      homeLinkText: "convertidor",
      tail: " para convertir un PDF a escala de grises o blanco y negro en unos clics.",
    },
  },
};

export default es;
