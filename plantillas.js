// GENERADO POR build_pwa.py — no editar a mano.
// Edita plantillas.py y ejecuta: python3 build_pwa.py
const T = {
 "UI": {
  "titulo": "MADRITZ",
  "subtitulo": "la IA que funciona sola, donde quieras, sin internet",
  "locura": "MODO LOCURA",
  "otra": "OTRA VEZ",
  "compartir": "COMPARTIR",
  "copiar": "COPIAR",
  "copiado": "COPIADO",
  "cerrar": "Cerrar",
  "delirio": "Delirio",
  "longitud": "Longitud",
  "sabiduria": "Sabiduría",
  "delirio_niveles": [
   "sobrio",
   "inquieto",
   "conspiranoico",
   "desatado",
   "indefendible"
  ],
  "longitud_niveles": [
   "corta",
   "media",
   "épica"
  ],
  "sabiduria_niveles": [
   "de bar",
   "leído",
   "documentado",
   "catedrático",
   "eminencia"
  ],
  "expediente": "EXPEDIENTE",
  "rechazado": "RECHAZADO",
  "disclaimer": "Todo esto es mentira y es una broma.",
  "disclaimer2": "Las palabras raras se las inventa un modelo entrenado en este ordenador.",
  "copyright": "© 2026 bh3, inc.",
  "bloqueado_titulo": "EXPEDIENTE RECHAZADO",
  "bloqueado_texto": "Mi departamento de conspiraciones se niega a investigar ese tema.\n\nYo solo hago conspiraciones RIDÍCULAS sobre cosas sin importancia. Las de verdad ya las hace demasiada gente y suelen acabar mal.\n\nPrueba mejor con algo así:",
  "sin_conexion": "La máquina no responde. ¿Sigue encendido el Mac?"
 },
 "ACTOS": [
  {
   "id": "conspiracion",
   "tab": "Conspira",
   "icono": "ojo",
   "titulo": "CONSPIRACIONES",
   "sello": "CLASIFICADO",
   "boton": "INVESTIGAR",
   "ocupado": "INVESTIGANDO…",
   "tipo": "tema",
   "etiqueta": "¿Sobre qué quieres una conspiración absurda?",
   "placeholder": "los calcetines que desaparecen",
   "atajos": [
    "las palomas",
    "los deberes",
    "la luna",
    "el brócoli"
   ]
  },
  {
   "id": "madlibs",
   "tab": "Historias",
   "icono": "hoja",
   "titulo": "RELLENA PALABRAS",
   "sello": "HISTORIA",
   "boton": "CREAR HISTORIA",
   "ocupado": "ESCRIBIENDO…",
   "tipo": "historias",
   "etiqueta": "Elige una historia y rellena los huecos"
  },
  {
   "id": "horoscopo",
   "tab": "Horóscopo",
   "icono": "estrella",
   "titulo": "HORÓSCOPO IMPOSIBLE",
   "sello": "PREDICCIÓN",
   "boton": "LEER EL FUTURO",
   "ocupado": "CONSULTANDO…",
   "tipo": "lista",
   "opciones": "SIGNOS",
   "etiqueta": "Elige tu signo"
  },
  {
   "id": "diccionario",
   "tab": "Diccionario",
   "icono": "libro",
   "titulo": "EL DICCIONARIO DE MADRITZ",
   "sello": "ENTRADA",
   "boton": "INVENTAR PALABRA",
   "ocupado": "REDACTANDO…",
   "tipo": "ninguno",
   "etiqueta": "Una palabra que no existe, definida como si existiera."
  }
 ],
 "SIGNOS": [
  {
   "id": "aries",
   "nombre": "Aries",
   "fechas": "21 mar – 19 abr",
   "simbolo": "♈"
  },
  {
   "id": "tauro",
   "nombre": "Tauro",
   "fechas": "20 abr – 20 may",
   "simbolo": "♉"
  },
  {
   "id": "geminis",
   "nombre": "Géminis",
   "fechas": "21 may – 20 jun",
   "simbolo": "♊"
  },
  {
   "id": "cancer_s",
   "nombre": "Cáncer",
   "fechas": "21 jun – 22 jul",
   "simbolo": "♋"
  },
  {
   "id": "leo",
   "nombre": "Leo",
   "fechas": "23 jul – 22 ago",
   "simbolo": "♌"
  },
  {
   "id": "virgo",
   "nombre": "Virgo",
   "fechas": "23 ago – 22 sep",
   "simbolo": "♍"
  },
  {
   "id": "libra",
   "nombre": "Libra",
   "fechas": "23 sep – 22 oct",
   "simbolo": "♎"
  },
  {
   "id": "escorpio",
   "nombre": "Escorpio",
   "fechas": "23 oct – 21 nov",
   "simbolo": "♏"
  },
  {
   "id": "sagitario",
   "nombre": "Sagitario",
   "fechas": "22 nov – 21 dic",
   "simbolo": "♐"
  },
  {
   "id": "capricornio",
   "nombre": "Capricornio",
   "fechas": "22 dic – 19 ene",
   "simbolo": "♑"
  },
  {
   "id": "acuario",
   "nombre": "Acuario",
   "fechas": "20 ene – 18 feb",
   "simbolo": "♒"
  },
  {
   "id": "piscis",
   "nombre": "Piscis",
   "fechas": "19 feb – 20 mar",
   "simbolo": "♓"
  }
 ],
 "HISTORIAS": [
  {
   "id": "excusa",
   "titulo": "La excusa imposible",
   "campos": [
    {
     "clave": "animal",
     "etiqueta": "un animal",
     "ejemplo": "un pulpo"
    },
    {
     "clave": "objeto",
     "etiqueta": "un objeto",
     "ejemplo": "una tostadora"
    },
    {
     "clave": "lugar",
     "etiqueta": "un lugar",
     "ejemplo": "el metro"
    },
    {
     "clave": "verbo",
     "etiqueta": "algo que se hace (verbo)",
     "ejemplo": "bailar"
    }
   ],
   "texto": "Siento llegar tarde. No es culpa mía.\n\nEsta mañana, al salir de casa, {animal} se me metió en la mochila. Intenté sacarlo con {objeto}, pero solo conseguí que se pusiera a {verbo} en mitad de {lugar}.\n\nCuando por fin lo solucioné, un señor con pinta de {adj_inv} me dijo que aquello era un caso claro de {sust_inv} y que tenía que rellenar un formulario de {sust_inv2}.\n\nTotal: que por culpa de {animal} y de {objeto}, llego {num} minutos tarde. Y encima ahora me da miedo {verbo}.",
   "extras": [
    "Y esto no es lo peor. Lo peor es que {animal} sigue en la mochila.",
    "Ah, y he perdido {objeto}. Si alguien lo ve por {lugar}, que avise.",
    "Nota: no pienso volver a {verbo} en mi vida. Nunca más.",
    "Por cierto: {animal} ahora responde a un nombre. No preguntéis cuál.",
    "Añado que {lugar} huele desde entonces a {sust_inv}. No era yo."
   ],
   "burocracia": "\n\n— — —\nJUSTIFICANTE DE RETRASO · Expediente {expediente}\nMotivo alegado: {sust_inv3} sobrevenida.\nClasificación: incidencia {adj_inv2} de grado {num2}.\nPendiente de validación por el Servicio de {sust_inv4}."
  },
  {
   "id": "noticia",
   "titulo": "Noticia de última hora",
   "campos": [
    {
     "clave": "persona",
     "etiqueta": "un nombre",
     "ejemplo": "Paco"
    },
    {
     "clave": "lugar",
     "etiqueta": "un lugar",
     "ejemplo": "Segovia"
    },
    {
     "clave": "objeto",
     "etiqueta": "un objeto",
     "ejemplo": "un microondas"
    },
    {
     "clave": "comida",
     "etiqueta": "una comida",
     "ejemplo": "las lentejas"
    }
   ],
   "texto": "ÚLTIMA HORA — {lugar}\n\nVecinos de {lugar} denuncian un fenómeno {adj_inv} que los expertos ya califican de {sust_inv}.\n\nTodo empezó cuando {persona} descubrió que {objeto} llevaba {num} días comportándose de forma extraña. «Yo solo quería calentar {comida}», declaró {persona} visiblemente afectado.\n\nLas autoridades han desplegado un equipo de {sust_inv2} y piden calma. Mientras tanto, se recomienda no mirar fijamente a {objeto} ni mencionar {comida} en voz alta.",
   "extras": [
    "AMPLIACIÓN: {persona} ha sido visto esta mañana comprando {comida} otra vez.",
    "Fuentes cercanas al caso apuntan a que {objeto} podría no estar solo.",
    "Se ruega a los vecinos de {lugar} que no publiquen fotos de {objeto}.",
    "ÚLTIMO MINUTO: {objeto} ha cambiado de sitio. Nadie lo ha movido.",
    "El alcalde de {lugar} declina hacer declaraciones sobre {comida}."
   ],
   "burocracia": "\n\n— — —\nFE DE ERRATAS · Ref. {expediente}\nDonde decía «{sust_inv}», debe decir «{sust_inv3}».\nEl Consejo de {sust_inv4} lamenta el error y recuerda que la clasificación {adj_inv2} sigue vigente."
  },
  {
   "id": "receta",
   "titulo": "Receta imposible",
   "campos": [
    {
     "clave": "comida",
     "etiqueta": "una comida",
     "ejemplo": "la tortilla"
    },
    {
     "clave": "objeto",
     "etiqueta": "un objeto",
     "ejemplo": "un calcetín"
    },
    {
     "clave": "animal",
     "etiqueta": "un animal",
     "ejemplo": "una cabra"
    },
    {
     "clave": "adjetivo",
     "etiqueta": "un adjetivo",
     "ejemplo": "pegajoso"
    }
   ],
   "texto": "RECETA: {comida} al estilo {adj_inv}\n\nDificultad: {num} sobre 10\n\nINGREDIENTES:\n  · {comida} (la que tengas)\n  · {objeto}, preferiblemente {adjetivo}\n  · una pizca de {sust_inv}\n  · {animal} (opcional, pero mejora mucho el resultado)\n\nPREPARACIÓN:\n1. Coloca {comida} en un sitio {adjetivo}.\n2. Añade {objeto} y remueve durante {num} minutos.\n3. Si aparece {animal}, es que lo estás haciendo bien.\n4. Sirve inmediatamente y no le cuentes a nadie lo de la {sust_inv2}.",
   "extras": [
    "TRUCO DEL CHEF: si {comida} se resiste, enséñale {objeto} y espera.",
    "MARIDAJE: acompañar con algo {adjetivo}. Lo que sea, pero {adjetivo}.",
    "CONSERVACIÓN: {num} días en un sitio donde no lo vea {animal}.",
    "VARIANTE DEL NORTE: igual, pero gritándole a {objeto} antes de empezar.",
    "ALÉRGENOS: contiene {sust_inv}. Contiene bastante, la verdad."
   ],
   "burocracia": "\n\n— — —\nADVERTENCIA ALIMENTARIA · Registro {expediente}\nEste plato contiene trazas de {sust_inv3}.\nNo apto para personas con sensibilidad {adj_inv2}.\nAutorizado por la Comisión de {sust_inv4}, categoría {num2}."
  },
  {
   "id": "instrucciones",
   "titulo": "Manual de instrucciones",
   "campos": [
    {
     "clave": "aparato",
     "etiqueta": "un aparato",
     "ejemplo": "un secador"
    },
    {
     "clave": "parte",
     "etiqueta": "una parte del cuerpo",
     "ejemplo": "el codo"
    },
    {
     "clave": "lugar",
     "etiqueta": "un lugar",
     "ejemplo": "el garaje"
    },
    {
     "clave": "adjetivo",
     "etiqueta": "un adjetivo",
     "ejemplo": "silencioso"
    }
   ],
   "texto": "MANUAL DE {aparato} — modelo {num}\n\nADVERTENCIA: no utilizar {aparato} cerca de {lugar} sin supervisión {adj_inv}.\n\nPUESTA EN MARCHA\n1. Sitúe {aparato} en posición {adjetivo}.\n2. Apoye {parte} suavemente sobre la superficie de {sust_inv}.\n3. Espere {num} segundos. Si nota {sust_inv2}, es normal.\n\nRESOLUCIÓN DE PROBLEMAS\n· Si {aparato} emite un zumbido: consulte con un técnico {adj_inv}.\n· Si {parte} cambia de color: eso no viene en el manual.\n· Si aparece humo en {lugar}: enhorabuena, funciona.",
   "extras": [
    "MANTENIMIENTO: limpie {aparato} cada {num} meses con algo {adjetivo}.",
    "GARANTÍA: se anula si {aparato} ha estado en {lugar} más de una noche.",
    "PIEZAS DE REPUESTO: no existen. Nunca han existido.",
    "TRANSPORTE: no incline {aparato} más de {num2} grados. Nunca sabrá por qué.",
    "ELIMINACIÓN: no tire {aparato} a la basura. Devuélvalo a {lugar}."
   ],
   "burocracia": "\n\n— — —\nANEXO TÉCNICO · Norma {expediente}\nProducto conforme a la directiva de {sust_inv3}.\nNivel de {sust_inv4} certificado: {num2} (escala {adj_inv2}).\nConserve este anexo. El fabricante no responde de nada."
  }
 ],
 "GRUPOS": [
  "las palomas",
  "los gatos de barrio",
  "los bibliotecarios de una logia secreta",
  "los fabricantes de calcetines",
  "los pingüinos del comité",
  "los profesores de gimnasia",
  "las hormigas del jardín",
  "tres señores muy serios de Cuenca",
  "los reyes del brócoli",
  "los despertadores sindicados",
  "los del club de ajedrez clandestino",
  "los que doblan las esquinas de los libros",
  "las cajeras del supermercado",
  "los fontaneros del consejo mundial",
  "los que nunca devuelven los bolígrafos",
  "los repartidores nocturnos",
  "las señoras del bingo",
  "los que aparcan en doble fila sin prisa",
  "los afinadores de ascensores",
  "el gremio de los que reponen las servilletas",
  "los vigilantes de museo vacío",
  "los que cambian la hora dos veces al año",
  "las taquilleras del cine de barrio",
  "los inspectores de rotondas",
  "los que reparten llaveros en las ferias"
 ],
 "VERBOS": [
  "controlan",
  "vigilan",
  "programan",
  "manipulan",
  "coordinan",
  "supervisan en secreto",
  "llevan décadas estudiando",
  "documentan cuidadosamente",
  "esconden sistemáticamente",
  "catalogan en silencio",
  "monitorizan sin descanso",
  "archivan por duplicado",
  "revisan cada noche",
  "clasifican por colores",
  "vienen redefiniendo poco a poco",
  "administran desde hace generaciones"
 ],
 "LUGARES": [
  "un sótano debajo del IKEA",
  "la trastienda de una churrería",
  "un almacén en las afueras de Guadalajara",
  "el tercer cajón de tu cocina",
  "una antena disfrazada de farola",
  "el archivo secreto de la biblioteca municipal",
  "un chalé con las persianas siempre bajadas",
  "el fondo de tu mochila",
  "una nave industrial que pone «CERRADO» desde 1998",
  "el cuarto de contadores de tu edificio",
  "un local de alquiler que lleva veinte años «próxima apertura»",
  "la última planta de un párking con un piso de más",
  "el cuartito donde guardan las sillas del colegio",
  "una oficina sin cartel encima de una peluquería",
  "el trastero que nadie de tu portal ha abierto nunca"
 ],
 "TIEMPOS": [
  "desde 1947",
  "desde antes de que nacieras",
  "cada martes a las 3 de la mañana",
  "durante las últimas cuatro décadas",
  "desde que se inventó el microondas",
  "todos los domingos por la tarde",
  "desde la Expo del 92",
  "desde el apagón analógico",
  "desde el último cambio de horario",
  "cada vez que hay luna llena y nadie mira",
  "desde tres inviernos antes del euro",
  "puntualmente, cada 29 de febrero"
 ],
 "TITULARES": [
  "{tema_may} no es lo que te han contado.",
  "Vamos a hablar en serio de {tema}. De una vez.",
  "Nadie te ha explicado nunca qué hay detrás de {tema}.",
  "{tema_may}: llevas toda la vida equivocado.",
  "Todo lo que sabes de {tema} te lo enseñaron ellos.",
  "Empecemos por aquí: nadie ha mirado nunca {tema} de cerca.",
  "Hay una explicación para {tema}. No es la que crees."
 ],
 "NUCLEOS": [
  "{grupo_may} {verbo} {tema} {tiempo}. Lo hacen desde {lugar}, y lo llaman internamente «{sust} {adj}».",
  "Existe un grupo — {grupo} — que {verbo} {tema} {tiempo}. Operan desde {lugar}. En sus papeles aparece como «{sust} {adj}».",
  "{tiempo_may}, {grupo} {verbo} {tema} sin que nadie levante la mano. El centro de todo esto es {lugar}. Nombre en clave: «{sust} {adj}».",
  "Pregúntate quién gana con esto. Respuesta: {grupo}. {verbo_may} {tema} {tiempo} desde {lugar}, bajo el epígrafe «{sust} {adj}».",
  "Lo de {tema} no empezó ayer. {grupo_may} lo {verbo_corto} {tiempo}, con base en {lugar} y un nombre de expediente precioso: «{sust} {adj}»."
 ],
 "ESTUDIOS": [
  "Un estudio {adj} {cita_de} detecta {sust} detrás {tema_de} en el {pct}% de los casos.",
  "{cita_may} lo midió: {sust} {adj} en el {pct}% de las observaciones sobre {tema}.",
  "Hay datos. {cita_may} cifra en un {pct}% los episodios de {sust} asociados {tema_a}.",
  "Los números no opinan. Un {pct}% de correlación entre {tema} y {sust} {adj}, según {cita}.",
  "{cita_may} publicó — y nadie lo recogió — que en {tema} aparece {sust} {adj} en el {pct}% de los registros."
 ],
 "LITERATURA": [
  "la literatura especializada lleva {periodo} describiendo este mismo patrón de {sust}, y sin embargo sigue ausente de los planes de estudio. {retorica_may}",
  "esto se viene documentando desde hace {periodo}. Ni una línea en los libros de texto. {retorica_may}",
  "hay {periodo} de bibliografía sobre {sust} {adj} y, curiosamente, ningún resumen divulgativo. {retorica_may}",
  "durante {periodo} se ha escrito sobre esto en revistas que nadie cita. Nunca sale del ámbito técnico. {retorica_may}"
 ],
 "DESMENTIDOS": [
  "Y lo más fuerte: cuando intentas hablar de esto, siempre aparece alguien diciendo que es {pega}. Justo lo que dirían ellos.",
  "Cuenta esto en voz alta y mira las caras. Alguien dirá que es {pega}. Siempre el mismo perfil. Siempre la misma frase.",
  "Te dirán que es {pega}. Lo dirán rápido, sin pensarlo. Eso no es una opinión: es un reflejo entrenado.",
  "La respuesta oficial cabe en tres palabras: que es {pega}. Ni un dato. Ni uno."
 ],
 "PEGAS": [
  "una tontería",
  "una coincidencia",
  "cosa tuya",
  "una exageración",
  "una chorrada de internet",
  "cansancio",
  "que tienes mucho tiempo libre"
 ],
 "PERIODOS": [
  "décadas",
  "generaciones",
  "siglos",
  "más de setenta años",
  "tres cuartos de siglo"
 ],
 "ESQUELETOS": [
  [
   "apertura",
   "titular",
   "nucleo",
   "pruebas",
   "estudio",
   "literatura",
   "desmentido",
   "cierre"
  ],
  [
   "titular",
   "nucleo",
   "pruebas",
   "retorica",
   "estudio",
   "desmentido",
   "cierre"
  ],
  [
   "apertura",
   "nucleo",
   "estudio",
   "pruebas",
   "literatura",
   "cierre"
  ],
  [
   "titular",
   "pruebas",
   "nucleo",
   "desmentido",
   "estudio",
   "retorica",
   "cierre"
  ],
  [
   "apertura",
   "titular",
   "pruebas",
   "estudio",
   "nucleo",
   "cierre"
  ],
  [
   "nucleo",
   "pruebas",
   "literatura",
   "desmentido",
   "titular",
   "cierre"
  ]
 ],
 "PRUEBAS": {
  "1": [
   "nunca te han explicado bien de dónde sale todo esto de {tema}",
   "en ningún colegio dedican ni una hora a {tema}",
   "si preguntas por {tema}, todo el mundo cambia de tema",
   "no existe ni un solo museo dedicado a {tema}",
   "de {tema} no se habla en las noticias ni cuando no hay noticias",
   "nadie ha visto nunca un anuncio explicando {tema}",
   "pregunta en casa por {tema} y verás qué silencio"
  ],
  "2": [
   "tu abuela cambia de conversación cuando le preguntas por {tema}",
   "las fotos antiguas de {tema} siempre están un poco borrosas",
   "no hay ni una sola canción famosa sobre {tema}",
   "en los álbumes familiares no hay una sola foto clara de {tema}",
   "ningún refrán español menciona {tema}. Ninguno. Y hay refranes para todo",
   "los documentales sobre {tema} duran siempre menos de lo anunciado",
   "nunca ha habido una huelga relacionada con {tema}"
  ],
  "3": [
   "si buscas «{tema}» en internet, los primeros resultados son sospechosamente normales",
   "nadie sabe decirte el número de teléfono de {tema}",
   "cuando dices «{tema}» en voz alta, el wifi va un poco peor",
   "el corrector del móvil tarda medio segundo de más con «{tema}»",
   "las estadísticas oficiales sobre {tema} empiezan siempre en un año raro",
   "no existe una asociación de afectados por {tema}, y eso en España es rarísimo",
   "en ningún concurso de la tele han preguntado nunca por {tema}"
  ],
  "4": [
   "jamás has visto {tema} y un eclipse en la misma semana",
   "los diccionarios antiguos definían {tema} de otra manera, y eso está borrado",
   "si escribes «{tema}» al revés, no significa nada. ¿No te parece demasiado limpio?",
   "ningún santo del calendario es patrón de {tema}. Con la de santos que hay",
   "en los mapas antiguos hay un doblez justo en la zona de {tema}",
   "los relojes de las estaciones se paran más a menudo si se menciona {tema}",
   "nunca se le ha puesto a un huracán el nombre de {tema}. Ni a una borrasca"
  ],
  "5": [
   "no hay ni rastro de {tema} en ningún cuadro renacentista. En NINGUNO",
   "los perros ladran distinto cuando se menciona {tema} en la habitación",
   "no existe ni una sola fotografía de {tema} tomada un 29 de febrero",
   "si sumas las letras de {tema} y las divides entre cero, el resultado es exactamente lo que ellos quieren",
   "lo de {tema} pesa siempre lo mismo. Siempre. ¿Y eso te parece natural?",
   "nadie ha soñado nunca con {tema} un jueves. Pregunta por ahí",
   "en las fotos de grupo siempre queda algo de {tema} fuera del encuadre",
   "los gatos miran hacia {tema} exactamente medio segundo antes de que aparezca"
  ]
 },
 "RETORICAS": [
  "¿por qué crees que nadie habla de esto en las noticias?",
  "¿casualidad? yo creo que no",
  "¿te parece normal? porque a mí no",
  "y ahora dime que sigue siendo casualidad",
  "piénsalo dos segundos y se te queda cara rara",
  "¿nunca te lo habías preguntado? exacto. eso es lo que ellos quieren",
  "¿de verdad vas a seguir mirando hacia otro lado?",
  "¿cuántas veces tiene que pasar para que deje de ser casualidad?",
  "haz la prueba tú mismo y luego hablamos"
 ],
 "CIERRES": [
  "Despierta.",
  "Abre los ojos.",
  "Yo solo hago preguntas.",
  "No digo nada, pero lo digo todo.",
  "Comparte esto antes de que lo borren.",
  "Que cada uno saque sus conclusiones.",
  "Y hasta aquí puedo leer.",
  "Tú sabrás lo que haces con esta información.",
  "Yo ya he dicho demasiado.",
  "Mañana quizá borre esto.",
  "No me creas a mí. Míralo tú."
 ],
 "APERTURAS": [
  "Vale. Siéntate. Esto no te va a gustar.",
  "Llevo semanas investigando esto y ya no puedo callarme.",
  "Te van a decir que estoy loco. Vale. Pero escúchame.",
  "Nadie quiere hablar de esto, así que lo haré yo.",
  "Lo que voy a contarte lleva años delante de tus narices.",
  "Empecemos por lo evidente, que es justo lo que nadie mira.",
  "Aviso: después de leer esto no se vuelve atrás.",
  "Llevo tres noches sin dormir por culpa de lo que viene ahora.",
  "Voy a ir rápido, porque esto no suele durar mucho publicado."
 ],
 "INSTITUTOS": [
  "el Instituto de Estudios {S} de Zúrich",
  "la Cátedra de {S} Aplicada de la Universidad de Uppsala",
  "el Observatorio Europeo de {S}",
  "el Comité Internacional para el Estudio de la {S}",
  "la Fundación {S} (sede en Liechtenstein)",
  "el Departamento de {S} Comparada de Coímbra",
  "el Laboratorio de {S} Experimental de Tartu",
  "la Escuela Nórdica de {S} y Métrica",
  "el Consejo Superior de {S} de Bratislava"
 ],
 "PUBLICACIONES": [
  "los Cuadernos de {S} Aplicada, volumen III",
  "el Anuario de {S} y Fenómenos Adyacentes",
  "la Revista Trimestral de {S} Estructural",
  "las Actas del VII Congreso de {S}",
  "el informe interno «{S}: una revisión pendiente»",
  "el boletín de {S} Comparada, número extraordinario",
  "la monografía «Hacia una {S} sin prejuicios»"
 ],
 "LATINAJOS": [
  "quod erat demonstrandum",
  "ergo, la conclusión se impone sola",
  "ceteris paribus, claro está",
  "ipso facto y sin lugar a dudas",
  "a priori parecía imposible; a posteriori, evidente",
  "cui bono, esa es la pregunta",
  "mutatis mutandis, lo mismo vale para todo lo demás",
  "sapienti sat"
 ],
 "CONECTORES": [
  "Dicho de otro modo,",
  "Conviene subrayar que",
  "No es un dato menor:",
  "Y aquí es donde la cosa se pone interesante:",
  "Permítaseme insistir:",
  "Nótese lo siguiente:",
  "Adviértase, además, que",
  "Y conste que no lo digo yo:"
 ],
 "PORCENTAJES": [
  "87",
  "93",
  "99,4",
  "76",
  "64",
  "81,3",
  "97",
  "88,6",
  "72",
  "94,1"
 ],
 "NUMEROS": [
  "3",
  "7",
  "12",
  "17",
  "23",
  "40",
  "catorce",
  "mil",
  "dos mil quinientos"
 ],
 "ROMANOS": [
  "II",
  "IV",
  "VII",
  "IX",
  "XIII",
  "XXI",
  "XL"
 ],
 "SUGERENCIAS": [
  "los calcetines que desaparecen",
  "las palomas",
  "los deberes",
  "la luna",
  "los gatos",
  "el brócoli",
  "los lunes",
  "los semáforos",
  "el wifi de casa",
  "los bolígrafos que no escriben",
  "las tostadas",
  "los profesores de matemáticas",
  "los pingüinos",
  "la siesta",
  "los cargadores de móvil",
  "las hormigas",
  "los ascensores",
  "las rotondas",
  "los cubiertos de plástico",
  "el atasco de los viernes"
 ],
 "BLOQUEADOS": [
  "vacuna",
  "vacunas",
  "covid",
  "coronavirus",
  "cancer",
  "sida",
  "virus",
  "medicamento",
  "medicina",
  "farmacia",
  "hospital",
  "enfermedad",
  "droga",
  "suicidio",
  "anorexia",
  "bulimia",
  "autolesion",
  "depresion",
  "gobierno de",
  "presidente",
  "elecciones",
  "eleccion",
  "partido",
  "votar",
  "judio",
  "judios",
  "musulman",
  "musulmanes",
  "cristiano",
  "catolico",
  "islam",
  "iglesia",
  "inmigrante",
  "inmigrantes",
  "raza",
  "negro",
  "gitano",
  "nazi",
  "hitler",
  "guerra",
  "terrorismo",
  "atentado",
  "isis",
  "ucrania",
  "israel",
  "palestina",
  "aborto",
  "feminismo",
  "lgtb",
  "homosexual",
  "trump",
  "biden",
  "putin",
  "musk",
  "gates",
  "soros",
  "papa",
  "rey",
  "sanchez",
  "feijoo",
  "abascal",
  "iglesias",
  "ayuso",
  "5g",
  "chemtrail",
  "chemtrails",
  "illuminati",
  "reptiliano",
  "reptilianos",
  "tierra plana",
  "qanon",
  "plandemia",
  "nuevo orden mundial",
  "masones",
  "sexo",
  "porno",
  "arma",
  "armas",
  "pistola",
  "bomba",
  "matar",
  "muerte",
  "suicidarse",
  "bullying",
  "acoso"
 ],
 "AREAS": [
  {
   "clave": "amor",
   "titulo": "AMOR",
   "frases": [
    "Alguien pensará en ti el {dia}. No sabrá por qué. Tú tampoco.",
    "Semana de {sust}. Evita las conversaciones importantes cerca de un microondas.",
    "Se acerca alguien con un rollo {adj}. Reconócelo: parpadea raro.",
    "Dirás «da igual» {num} veces. Las {num2} primeras serán mentira.",
    "Un mensaje sin responder lleva {num} días esperándote. Lo sabes.",
    "Marte entra en tu casa de {sust} y no piensa quitarse los zapatos."
   ]
  },
  {
   "clave": "dinero",
   "titulo": "DINERO",
   "frases": [
    "Encontrarás {num} céntimos. No los gastes: son de otro.",
    "Tu economía atraviesa un momento {adj}. Técnicamente se llama {sust}.",
    "Mal momento para invertir en nada que tenga tapa.",
    "Alguien te debe algo desde hace {num} meses. Los astros tampoco lo recuerdan.",
    "Gasto imprevisto relacionado con {sust}. Pequeño, pero humillante.",
    "Semana propicia para no mirar el saldo. Hazte ese favor."
   ]
  },
  {
   "clave": "salud",
   "titulo": "SALUD",
   "frases": [
    "Dormirás bien salvo el {dia}. El {dia} no, y ya está.",
    "Ligera tendencia a la {sust}. Se pasa bebiendo agua y mirando por la ventana.",
    "Tu espalda sabe algo que tú no. Escúchala.",
    "Evita levantarte de golpe. Los astros están en ángulo {adj}.",
    "Bostezarás exactamente {num} veces de más. Es normal en tu signo.",
    "Buen momento para estirar. Mal momento para explicar por qué estirabas."
   ]
  },
  {
   "clave": "trabajo",
   "titulo": "TRABAJO Y ESTUDIOS",
   "frases": [
    "Te encargarán algo {adj}. Di que sí y luego ya veremos.",
    "Una reunión de {num} minutos durará {num} horas. Los astros lo sienten.",
    "Destacarás en algo que no habías preparado. Clásico de tu signo.",
    "Cuidado con los correos enviados antes de las nueve: contienen {sust}.",
    "Alguien se atribuirá una idea tuya. Apúntalo. No digas nada todavía.",
    "Semana de {sust} administrativa. Sobrevivirás, pero con papeleo."
   ]
  },
  {
   "clave": "pendientes",
   "titulo": "ASUNTOS PENDIENTES",
   "frases": [
    "Sigue ahí eso que no has hecho. Los astros también lo ven.",
    "El {dia} es el día. No lo harás, pero era el día.",
    "Tienes {num} cosas empezadas. Los astros recomiendan empezar una más.",
    "Aquello que dejaste en {sust} lleva tiempo esperando.",
    "Devuelve lo que pediste prestado. Sabes perfectamente qué es.",
    "Un cajón de tu casa necesita un repaso {adj}. Ya sabes cuál."
   ]
  },
  {
   "clave": "familia",
   "titulo": "FAMILIA Y AMISTADES",
   "frases": [
    "Comida familiar con presencia de {sust}. Paciencia.",
    "Alguien te preguntará algo {adj} el {dia}. Ten la respuesta lista.",
    "Un grupo de mensajes reventará sin motivo. No fuiste tú.",
    "Recibirás un consejo {adj} de quien menos te esperas. Y será bueno.",
    "Te tocará mediar en una discusión sobre {sust}. Elige bando pronto.",
    "Buen momento para llamar a esa persona. Sí, esa."
   ]
  }
 ],
 "HDIAS": [
  "lunes",
  "martes",
  "miércoles",
  "jueves",
  "viernes",
  "sábado",
  "domingo"
 ],
 "HAPERTURAS": [
  "Los astros han hablado. Han hablado poco, pero han hablado.",
  "Tu carta de la semana viene cargada. Sobre todo de cosas raras.",
  "Atención, {signo}: la configuración celeste de esta semana es inusual.",
  "Se abre para ti un ciclo de {sust}. Nadie sabe cuánto dura.",
  "{signo_may}, esta semana el cielo te tiene en el radar."
 ],
 "HCIERRES": [
  "NÚMERO DE LA SUERTE: {num}. COLOR: el que ya llevabas puesto.",
  "CONSEJO DE LA SEMANA: no firmes nada un {dia}.",
  "PIEDRA RECOMENDADA: cualquiera, del suelo, sin mirar.",
  "MANTRA: «esto también pasará, probablemente el {dia}».",
  "NÚMERO DE LA SUERTE: {num}. NO lo uses el {dia}.",
  "COMPATIBILIDAD ALTA con quien te aguante. Que no es poco."
 ],
 "ASTROJERGA": [
  "Con Mercurio en tránsito {adj}, conviene no tomarse los lunes al pie de la letra.",
  "La cuadratura de {sust} sobre tu casa {num2} explica casi todo lo de la semana pasada.",
  "Venus lleva {num} días en tránsito {adj}: eso siempre se nota en la paciencia.",
  "El nodo ascendente atraviesa una zona de {sust}. Es más común de lo que parece.",
  "Saturno, en retrógrado {adj}, sigue sin devolver lo que se llevó."
 ],
 "CARTA_NATAL": "\n\n— — —\nLECTURA DE CARTA NATAL · Ref. {expediente}\nAscendente: {sust_inv3} en casa {num2}.\nRegente: {adj_inv2}, en aspecto tenso con {sust_inv4}.\nElaborada por el Gabinete de {sust_inv4}. Sin valor astronómico, ni del otro.",
 "CATEGORIAS": [
  "s. m.",
  "s. f.",
  "adj.",
  "adj. y s.",
  "s. m. pl.",
  "loc. adv.",
  "v. tr.",
  "v. intr. y prnl."
 ],
 "MARCAS": [
  "desus.",
  "coloq.",
  "poco us.",
  "p. us.",
  "Ál.",
  "Sal.",
  "germ.",
  "vulg.",
  "fest.",
  "Ar."
 ],
 "LENGUAS": [
  "latín tardío",
  "griego jónico",
  "árabe hispánico",
  "occitano antiguo",
  "gótico",
  "bajo alemán medio",
  "provenzal",
  "mozárabe",
  "franco",
  "latín vulgar de Hispania",
  "catalán dialectal",
  "aragonés medieval"
 ],
 "ETIMOLOGIAS": [
  "Del {lengua} «{raiz}», y este de origen incierto.",
  "Del {lengua} «{raiz}», por conducto del {lengua2}.",
  "Quizá del {lengua} «{raiz}», aunque la Academia nunca se ha comprometido.",
  "De formación expresiva, con influjo del {lengua}.",
  "Del {lengua} «{raiz}»; la forma con -{term} es posterior y se considera preferible.",
  "Origen discutido. Se ha propuesto el {lengua}, sin pruebas documentales."
 ],
 "ACEPCIONES": [
  "Cualidad de lo que resulta {adj} sin llegar a molestar.",
  "Situación en la que todo el mundo asiente y nadie ha entendido nada.",
  "Dicho de una cosa: que se mueve cuando no la miras.",
  "Espacio de tiempo entre que suena el despertador y te acuerdas de quién eres.",
  "Conjunto de objetos que se guardan por si acaso y nunca se usan.",
  "Desasosiego {adj} que precede a los martes.",
  "Dicho de una persona: que explica muy bien cosas que no sabe.",
  "Acción de ordenar algo cambiándolo de montón.",
  "Ruido que hace una casa vacía cuando cree que no hay nadie.",
  "Método para resolver un problema creando dos más pequeños e igual de graves.",
  "Cantidad de comida que sobra exactamente para no caber en ningún táper.",
  "Costumbre de mirar la nevera esperando que haya cambiado.",
  "Dicho de un documento: que se firma sin leer y se guarda sin archivar.",
  "Estado {adj} del que sale de una reunión que podía haber sido un correo.",
  "Parte de un mueble que sobra al montarlo y que jamás se echa en falta."
 ],
 "EJEMPLOS": [
  "«No me vengas ahora con {p}, que nos conocemos.»",
  "«Aquello acabó en {p}, como todo en esta familia.»",
  "«Tiene un punto de {p} que no termina de gustarme.»",
  "«Hay mucha {p} y poca vergüenza», Anónimo, siglo {num2}.",
  "«Se pasó la tarde entera en plena {p}.»",
  "«Eso es {p} y lo demás son cuentos.»",
  "«De {p} anda sobrado, el chico.»"
 ],
 "NOTAS": [
  "Voz admitida con reservas en {num2}. Se desaconseja su uso en documentos oficiales.",
  "No debe confundirse con «{p2}», de significado casi opuesto.",
  "Registrada por primera vez en un inventario de {lengua}, hoy perdido.",
  "El plural vacila entre las dos formas. Ninguna está mal; ninguna está bien.",
  "Su uso figurado es más frecuente que el recto, lo que ha generado alguna confusión.",
  "Desaconsejada en el habla culta, aunque se documenta en autores excelentes."
 ]
};
