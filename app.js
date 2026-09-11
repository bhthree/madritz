// GENERADO POR build_pwa.py — motor local + interfaz compartida.
// El MOTOR es el gemelo de madritz.py; la interfaz (montaUI, la hoja
// modal, los mandos) es literalmente plantillas.UI_JS, la misma que
// usa el servidor. Si cambias la COMPOSICIÓN aquí, cámbiala también
// en madritz.py — y al revés.

// ---- utilidades de español (gemelas de plantillas.py) ----
function normaliza(t){return t.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");}

// MISMA expresión que _RE_CONTRAE en plantillas.py. Se captura el carácter
// anterior en vez de usar lookbehind, que Safari no soportó hasta la 16.4.
const RE_CONTRAE=/(^|[^A-Za-zÁÉÍÓÚÜÑáéíóúüñ])(de|De|DE|a|A) (el|El|EL) /g;
function contraerTexto(f){
  for(let i=0;i<2;i++){
    const n=f.replace(RE_CONTRAE,function(m,ini,prep,art){
      let base=(prep.toLowerCase()==="de")?"del":"al";
      if(prep===prep.toUpperCase()&&(prep.length>1||art===art.toUpperCase()))
        base=base.toUpperCase();
      else if(prep[0]===prep[0].toUpperCase())
        base=base[0].toUpperCase()+base.slice(1);
      return ini+base+" ";
    });
    if(n===f)break;
    f=n;
  }
  return f;
}
function contraer(prep,tema){
  const t=(tema||"").trim(),tl=t.toLowerCase();
  if(prep==="de"&&tl.startsWith("el ")&&!tl.startsWith("el la"))return "del "+t.slice(3);
  if(prep==="a"&&tl.startsWith("el "))return "al "+t.slice(3);
  return prep+" "+t;
}
function mayuscula(f){
  if(!f)return f;
  for(let i=0;i<f.length;i++)
    if(/[a-záéíóúñ]/i.test(f[i]))return f.slice(0,i)+f[i].toUpperCase()+f.slice(i+1);
  return f;
}
function puntuar(f){
  f=(f||"").replace(/\s+$/,"");
  return ".!?…".includes(f.slice(-1))?f:f+".";
}
function rellena(txt,datos){
  for(const k in datos)txt=txt.split("{"+k+"}").join(String(datos[k]));
  return txt;
}
function expediente(){
  return (100+Math.floor(Math.random()*900))+"-"+"ABCDEFGX"[Math.floor(Math.random()*8)];
}
function bloqueado(tema){
  const n=normaliza(tema||"");
  for(const mala of T.BLOQUEADOS){
    const m=normaliza(mala);
    if(m.includes(" ")){ if(n.includes(m))return true; }
    else if(new RegExp("\\b"+m.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"\\b").test(n))return true;
  }
  return false;
}

// ---- Memoria: gemela de plantillas.Memoria ----
// No repetir lo salido hace poco ENTRE tiradas, no solo dentro de una.
class Memoria{
  constructor(n=4){this.n=n;this.vistos={};}
  _tope(l){return Math.max(0,Math.min(this.n,l.length-1));}
  elegir(lista,clave){
    if(!lista||!lista.length)return null;
    const v=this.vistos[clave]||(this.vistos[clave]=[]);
    let pool=lista.filter(x=>v.indexOf(x)<0);
    if(!pool.length){pool=lista.slice();v.length=0;}
    const x=pool[Math.floor(Math.random()*pool.length)];
    v.push(x);
    while(v.length>this._tope(lista))v.shift();
    return x;
  }
  muestra(lista,k,clave){
    const out=[];
    const n=Math.min(k,lista.length);
    for(let i=0;i<n;i++){
      const v=this.vistos[clave]||(this.vistos[clave]=[]);
      const pool=lista.filter(x=>out.indexOf(x)<0);
      const frescos=pool.filter(x=>v.indexOf(x)<0);
      const cand=frescos.length?frescos:pool;
      if(!cand.length)break;
      const x=cand[Math.floor(Math.random()*cand.length)];
      out.push(x); v.push(x);
      while(v.length>this._tope(lista))v.shift();
    }
    return out;
  }
}

let INV=null;
const MEM=new Memoria(4);
const el=(lista,clave)=>MEM.elegir(lista,clave);
const sustI=d=>INV.sustantivo(d);
const adjI=d=>INV.adjetivo(d);

function cita(s,d){
  let inst=el(T.INSTITUTOS,"inst").replace("{S}",mayuscula(sustI(d)));
  if(s>=4)inst+=", en "+el(T.PUBLICACIONES,"pub").replace("{S}",mayuscula(sustI(d)));
  return inst;
}

// ---- ACTO 1: conspiración, montada por ESQUELETO ----
function conspiracion(tema,delirio,longitud,sabiduria){
  const d=Math.max(1,Math.min(5,delirio)),
        l=Math.max(1,Math.min(3,longitud)),
        s=Math.max(1,Math.min(5,sabiduria));
  tema=(tema||"").trim().slice(0,60);
  if(!tema)tema=el(T.SUGERENCIAS,"sug");
  if(bloqueado(tema)){
    const sug=[...T.SUGERENCIAS].sort(()=>Math.random()-.5).slice(0,3);
    return {sello:T.UI.rechazado,titulo:T.UI.bloqueado_titulo,
      texto:T.UI.bloqueado_texto+"\n  · "+sug.join("\n  · "),expediente:"000"};
  }
  const base={tema:tema,tema_may:tema.toUpperCase(),
              tema_de:contraer("de",tema),tema_a:contraer("a",tema)};
  const partes=[];
  const bloque=t=>{partes.push(contraerTexto(t));partes.push("");};
  const mezcla=extra=>Object.assign({},base,extra);

  for(const nombre of el(T.ESQUELETOS,"esqueleto")){
    if(nombre==="apertura"){ bloque(el(T.APERTURAS,"apertura")); }

    else if(nombre==="titular"){ bloque(rellena(el(T.TITULARES,"titular"),base)); }

    else if(nombre==="nucleo"){
      const grupo=el(T.GRUPOS,"grupo"),verbo=el(T.VERBOS,"verbo"),
            tiempo=el(T.TIEMPOS,"tiempo");
      // «lo {verbo}» solo funciona con verbos de una palabra.
      const simples=T.VERBOS.filter(v=>v.indexOf(" ")<0);
      bloque(rellena(el(T.NUCLEOS,"nucleo"),mezcla({
        grupo:grupo,grupo_may:mayuscula(grupo),
        verbo:verbo,verbo_may:mayuscula(verbo),
        verbo_corto:el(simples,"verbo_corto"),
        tiempo:tiempo,tiempo_may:mayuscula(tiempo),
        lugar:el(T.LUGARES,"lugar"),sust:sustI(d),adj:adjI(d)})));
    }

    else if(nombre==="pruebas"){
      const n={1:1,2:2,3:4}[l];
      // POZO ACUMULATIVO: el nivel d hereda 1..d.
      let pozo=[];
      for(let k=1;k<=d;k++)pozo=pozo.concat(T.PRUEBAS[String(k)]);
      MEM.muestra(pozo,n,"prueba").forEach(function(pr,i){
        // puntuar(), no un "." fijo: hay pruebas que ya acaban en «?».
        bloque((i===0?"LA PRUEBA":"PRUEBA "+(i+1))+": "+puntuar(rellena(pr,base)));
      });
    }

    else if(nombre==="estudio"){
      if(s<2)continue;
      const c=cita(s,d);
      let est=rellena(el(T.ESTUDIOS,"estudio"),mezcla({
        adj:adjI(d),sust:sustI(d),cita:c,cita_may:mayuscula(c),
        cita_de:contraer("de",c),pct:el(T.PORCENTAJES,"pct")}));
      if(s>=3)est=el(T.CONECTORES,"con")+" "+est[0].toLowerCase()+est.slice(1);
      if(s>=5)est+=" "+mayuscula(el(T.LATINAJOS,"latin"))+".";
      bloque(est);
    }

    else if(nombre==="literatura"){
      if(s<4)continue;
      bloque(el(T.CONECTORES,"con")+" "+rellena(el(T.LITERATURA,"lit"),mezcla({
        sust:sustI(d),adj:adjI(d),periodo:el(T.PERIODOS,"periodo"),
        retorica_may:puntuar(mayuscula(el(T.RETORICAS,"ret")))})));
    }

    else if(nombre==="retorica"){ bloque(puntuar(mayuscula(el(T.RETORICAS,"ret")))); }

    else if(nombre==="desmentido"){
      bloque(rellena(el(T.DESMENTIDOS,"desm"),mezcla({pega:el(T.PEGAS,"pega")})));
    }

    else if(nombre==="cierre"){ partes.push(el(T.CIERRES,"cierre")); }
  }
  while(partes.length&&partes[partes.length-1]==="")partes.pop();

  return {sello:"CLASIFICADO",titulo:T.UI.expediente+": "+tema.toUpperCase(),
          texto:partes.join("\n"),expediente:expediente()};
}

// ---- ACTO 2: rellena-palabras ----
function madlibs(hid,palabras,delirio,longitud,sabiduria){
  const d=Math.max(1,Math.min(5,delirio)),
        l=Math.max(1,Math.min(3,longitud)),
        s=Math.max(1,Math.min(5,sabiduria));
  const h=T.HISTORIAS.filter(x=>x.id===hid)[0]||
          T.HISTORIAS[Math.floor(Math.random()*T.HISTORIAS.length)];
  const datos={};
  h.campos.forEach(function(c){
    let v=((palabras||{})[c.clave]||"").trim();
    // v2: las palabras del usuario también pasan por el filtro.
    if(v&&bloqueado(v))v="";
    datos[c.clave]=v?v.slice(0,40):c.ejemplo;
  });
  datos.adj_inv=adjI(d);    datos.adj_inv2=adjI(d);
  datos.sust_inv=sustI(d);  datos.sust_inv2=sustI(d);
  datos.sust_inv3=sustI(d); datos.sust_inv4=sustI(d);
  datos.num=el(T.NUMEROS,"num");
  datos.num2=el(T.ROMANOS,"num2");
  datos.expediente=expediente();

  let txt=h.texto;
  if(l>=2&&h.extras&&h.extras.length)
    txt+="\n\n"+MEM.muestra(h.extras,(l===2?1:3),"extra_"+h.id).join("\n\n");
  if(s>=3&&h.burocracia){
    txt+=h.burocracia;
    if(s>=5)txt+="\n(Documento sujeto a revisión por el Tribunal de "+
                 mayuscula(datos.sust_inv3)+".)";
  }
  // OJO al orden: contraer DESPUÉS de rellenar.
  return {sello:"HISTORIA",titulo:h.titulo,
          texto:contraerTexto(rellena(txt,datos)),expediente:datos.expediente};
}

// ---- ACTO 3: horóscopo imposible ----
function horoscopo(signoId,delirio,longitud,sabiduria){
  const d=Math.max(1,Math.min(5,delirio)),
        l=Math.max(1,Math.min(3,longitud)),
        s=Math.max(1,Math.min(5,sabiduria));
  const signo=T.SIGNOS.filter(x=>x.id===signoId)[0]||
              T.SIGNOS[Math.floor(Math.random()*T.SIGNOS.length)];
  const df=()=>({sust:sustI(d),adj:adjI(d),num:el(T.NUMEROS,"num"),
                 num2:el(T.ROMANOS,"num2"),dia:el(T.HDIAS,"dia"),
                 signo:signo.nombre,signo_may:signo.nombre.toUpperCase()});

  const partes=[signo.simbolo+"  "+signo.nombre.toUpperCase()+"  ·  "+signo.fechas,""];
  partes.push(rellena(el(T.HAPERTURAS,"hap"),df())); partes.push("");

  const n={1:2,2:4,3:6}[l];
  const elegidas=MEM.muestra(T.AREAS,n,"area");
  T.AREAS.filter(a=>elegidas.indexOf(a)>=0).forEach(function(a){
    partes.push(a.titulo);
    partes.push(rellena(el(a.frases,"fr_"+a.clave),df()));
    partes.push("");
  });
  if(s>=2){ partes.push(rellena(el(T.ASTROJERGA,"astro"),df())); partes.push(""); }

  let cierre=rellena(el(T.HCIERRES,"hcie"),df());
  if(s>=5)cierre+=" "+mayuscula(el(T.LATINAJOS,"latin"))+".";
  partes.push(cierre);

  const exp=expediente();
  let texto=partes.join("\n");
  if(s>=3)texto+=rellena(T.CARTA_NATAL,{expediente:exp,num2:el(T.ROMANOS,"num2"),
    sust_inv3:sustI(d),sust_inv4:sustI(d),adj_inv2:adjI(d)});

  return {sello:"PREDICCIÓN",titulo:signo.nombre,
          texto:contraerTexto(texto),expediente:exp};
}

// ---- ACTO 4: el diccionario ----
function diccionario(delirio,longitud,sabiduria){
  const d=Math.max(1,Math.min(5,delirio)),
        l=Math.max(1,Math.min(3,longitud)),
        s=Math.max(1,Math.min(5,sabiduria));
  const cat=el(T.CATEGORIAS,"cat");
  const palabra=cat.indexOf("adj")===0?adjI(d):sustI(d);

  let ficha=cat;
  if(s>=2)ficha+="   ·   "+el(T.MARCAS,"marca");
  const partes=[palabra,ficha,""];

  if(s>=2){
    partes.push("("+rellena(el(T.ETIMOLOGIAS,"etim"),{
      lengua:el(T.LENGUAS,"leng"),lengua2:el(T.LENGUAS,"leng2"),
      raiz:INV.raiz(d),term:el(["ción","miento","anza","ura"],"term")})+")");
    partes.push("");
  }
  const n={1:1,2:2,3:4}[l];
  MEM.muestra(T.ACEPCIONES,n,"acep").forEach(function(ac,i){
    partes.push((i+1)+". "+rellena(ac,{adj:adjI(d)}));
    if(s>=2||i===0)
      partes.push("   "+rellena(el(T.EJEMPLOS,"ejem"),
                  {p:palabra,num2:el(T.ROMANOS,"num2")}));
    partes.push("");
  });
  if(s>=3){
    partes.push("— — —");
    partes.push("NOTA: "+rellena(el(T.NOTAS,"nota"),{
      num2:el(T.ROMANOS,"num2"),lengua:el(T.LENGUAS,"leng"),p2:sustI(d)}));
    if(s>=5)partes.push(mayuscula(el(T.LATINAJOS,"latin"))+".");
  }
  return {sello:"ENTRADA",titulo:palabra,
          texto:contraerTexto(partes.join("\n").replace(/\s+$/,"")),
          expediente:expediente()};
}

// ---- MOTOR: la única puerta que ve la interfaz ----
const MOTOR={
  generar:function(acto,datos,m){
    const d=m.delirio,l=m.longitud,s=m.sabiduria;
    if(acto==="conspiracion")return conspiracion(datos.tema,d,l,s);
    if(acto==="madlibs")return madlibs(datos.historia,datos.palabras,d,l,s);
    if(acto==="horoscopo")return horoscopo(datos.opcion,d,l,s);
    if(acto==="diccionario")return diccionario(d,l,s);
    throw new Error("acto desconocido: "+acto);
  }
};


// ---- estado ----
var ACTO=null, SEL={}, MANDOS={delirio:3,longitud:2,sabiduria:2}, ULTIMO=null;
var $=function(s){return document.querySelector(s);};
var $$=function(s){return Array.prototype.slice.call(document.querySelectorAll(s));};

// ---- mandos: controles segmentados ----
function pintaMandos(){
  ["delirio","longitud","sabiduria"].forEach(function(k){
    var seg=document.getElementById("seg_"+k);
    var max=+seg.dataset.max, val=MANDOS[k];
    seg.innerHTML="";
    for(var i=1;i<=max;i++){
      var b=document.createElement("button");
      b.type="button"; b.textContent=i; b.dataset.val=i;
      if(i===val)b.className="on";
      seg.appendChild(b);
    }
    document.getElementById("v_"+k).textContent=T.UI[k+"_niveles"][val-1];
  });
}
function montaMandos(){
  ["delirio","longitud","sabiduria"].forEach(function(k){
    document.getElementById("seg_"+k).addEventListener("click",function(e){
      var b=e.target.closest("button"); if(!b)return;
      MANDOS[k]=+b.dataset.val; pintaMandos();
    });
  });
}

// ---- pestañas ----
function ver(id){
  ACTO=id;
  $$(".acto").forEach(function(s){s.classList.toggle("hide",s.dataset.acto!==id);});
  $$("#tabbar button").forEach(function(b){b.classList.toggle("on",b.dataset.tab===id);});
  try{window.scrollTo({top:0,behavior:"smooth"});}catch(e){window.scrollTo(0,0);}
}

// ---- paneles de entrada ----
function pintaLista(a){
  var caja=document.getElementById("lista_"+a.id);
  if(!caja)return;
  var items = a.tipo==="historias" ? T.HISTORIAS
            : (T[a.opciones]||[]);
  caja.innerHTML=items.map(function(o){
    var et = o.titulo || (o.simbolo? o.simbolo+" "+o.nombre : o.nombre);
    var sub = o.fechas ? "<small>"+o.fechas+"</small>" : "";
    return '<button class="mini" data-op="'+o.id+'">'+et+sub+'</button>';
  }).join("");
  if(!SEL[a.id] && items.length) SEL[a.id]=items[0].id;
  marcaLista(a);
  caja.addEventListener("click",function(e){
    var b=e.target.closest("button"); if(!b)return;
    SEL[a.id]=b.dataset.op; marcaLista(a);
    if(a.tipo==="historias")pintaCampos(a);
  });
}
function marcaLista(a){
  $$("#lista_"+a.id+" button").forEach(function(b){
    b.className=(b.dataset.op===SEL[a.id])?"mini on":"mini";});
}
function pintaCampos(a){
  var caja=document.getElementById("campos_"+a.id); if(!caja)return;
  var h=T.HISTORIAS.filter(function(x){return x.id===SEL[a.id];})[0]; if(!h)return;
  caja.innerHTML=h.campos.map(function(c){
    return '<label for="c_'+c.clave+'">'+c.etiqueta+'</label>'
      +'<input type="text" id="c_'+c.clave+'" placeholder="'+c.ejemplo
      +'" autocomplete="off" maxlength="40">';
  }).join("");
}

// ---- recogida de datos por tipo de acto ----
function datosDe(a){
  if(a.tipo==="tema"){
    var e=document.getElementById("tema_"+a.id);
    return {tema:e?e.value:""};
  }
  if(a.tipo==="historias"){
    var h=T.HISTORIAS.filter(function(x){return x.id===SEL[a.id];})[0];
    var pal={};
    if(h)h.campos.forEach(function(c){
      var e=document.getElementById("c_"+c.clave); pal[c.clave]=e?e.value:"";});
    return {historia:SEL[a.id],palabras:pal};
  }
  if(a.tipo==="lista")return {opcion:SEL[a.id]};
  return {};
}

// ---- generar + hoja modal ----
function actoPorId(id){
  return T.ACTOS.filter(function(x){return x.id===id;})[0];
}
function generar(id){
  var a=actoPorId(id); if(!a)return;
  var b=document.querySelector('[data-generar="'+id+'"]');
  var txt=b?b.textContent:""; if(b){b.disabled=true;b.textContent=a.ocupado;}
  ULTIMO=id;
  Promise.resolve(MOTOR.generar(id,datosDe(a),MANDOS)).then(function(d){
    abreHoja(d.sello||a.sello,d.expediente,d.texto);
  }).catch(function(e){
    abreHoja("AVERÍA","000",(T.UI.sin_conexion||"")+"\n\n"+String((e&&e.message)||e));
  }).then(function(){
    if(b){b.disabled=false;b.textContent=txt;}
  });
}
function abreHoja(sello,exp,texto){
  $("#h_sello").textContent=sello;
  $("#h_exp").textContent=T.UI.expediente+" "+exp;
  $("#h_out").textContent=texto;
  var h=$("#hoja");
  if(!h.open){ if(h.showModal)h.showModal(); else h.setAttribute("open",""); }
  $(".cuerpo").scrollTop=0;
}
function cierraHoja(){var h=$("#hoja"); if(h.close)h.close(); else h.removeAttribute("open");}

// ---- compartir: la hoja de compartir REAL de iOS ----
// Tres líneas y es lo que más acerca esto a una app nativa. Si el
// dispositivo no la trae, copiamos al portapapeles y lo decimos.
function compartir(){
  var t=$("#h_out").textContent;
  var b=$("#h_comp");
  if(navigator.share){
    navigator.share({title:"MADRITZ",text:t}).catch(function(){});
    return;
  }
  if(navigator.clipboard){
    navigator.clipboard.writeText(t).then(function(){
      b.textContent=T.UI.copiado;
      setTimeout(function(){b.textContent=T.UI.compartir;},1400);
    });
  }
}

// ---- arranque de la interfaz ----
function montaUI(){
  montaMandos(); pintaMandos();
  T.ACTOS.forEach(function(a){
    if(a.tipo==="historias"||a.tipo==="lista")pintaLista(a);
    if(a.tipo==="historias")pintaCampos(a);
    var pane=document.getElementById("a_"+a.id);
    if(pane)pane.addEventListener("click",function(e){
      var at=e.target.closest("[data-atajo]");
      if(at){var i=document.getElementById("tema_"+a.id);
             if(i)i.value=at.dataset.atajo; generar(a.id); return;}
      var g=e.target.closest("[data-generar]");
      if(g)generar(g.dataset.generar);
    });
    var inp=document.getElementById("tema_"+a.id);
    if(inp)inp.addEventListener("keydown",function(e){
      if(e.key==="Enter"){e.preventDefault();inp.blur();generar(a.id);}});
  });
  $("#tabbar").addEventListener("click",function(e){
    var b=e.target.closest("button"); if(b)ver(b.dataset.tab);});
  $("#bloca").addEventListener("click",function(){
    MANDOS={delirio:5,longitud:3,sabiduria:5}; pintaMandos();
    if(ACTO)generar(ACTO);});
  $("#h_otra").addEventListener("click",function(){if(ULTIMO)generar(ULTIMO);});
  $("#h_comp").addEventListener("click",compartir);
  $("#h_cerrar").addEventListener("click",cierraHoja);
  // cerrar tocando fuera del panel
  $("#hoja").addEventListener("click",function(e){if(e.target===$("#hoja"))cierraHoja();});
  ver(T.ACTOS[0].id);
  $("#cargando").className="hide";
  $("#app").className="";
  $("#tabbar").className="tabbar";
}
function averia(titulo,detalle,ayuda){
  try{$("#cargando").className="hide";}catch(e){}
  var d=document.getElementById("error");
  d.className="card";
  d.innerHTML='<div class="stamp">AVERÍA</div><div class="out"></div>';
  d.querySelector(".out").textContent=titulo+"\n\n"+detalle+(ayuda?"\n\n"+ayuda:"");
}


// ---- ARRANQUE ----
// Nada de pantallas en blanco. Si algo falla, se EXPLICA en pantalla.

// EL FALLO DE LA PANTALLA EN BLANCO EN EL IPHONE:
// navigator.serviceWorker SOLO existe en «contexto seguro»: https:// o
// localhost. Por http://192.168.x.x el navegador ni siquiera lo expone, así
// que la app NO se guarda para uso sin red. Antes fallaba en silencio.
function sinOffline(motivo){
  const d=document.getElementById("aviso");
  d.className="card aviso";
  d.innerHTML='<b>⚠ Modo sin conexión NO disponible</b><br>'+motivo+
    '<br><br>Madritz necesitará el Mac encendido cada vez que la abras. '+
    'Para que funcione de verdad sin red, publícala en HTTPS (GitHub Pages) '+
    'y añádela a la pantalla de inicio desde ahí.';
}
(async function(){
  try{
    if(typeof T==="undefined")throw new Error("plantillas.js no se ha cargado");
    if(typeof Inventor==="undefined")throw new Error("inventor.js no se ha cargado");
    let corpus=await cargarCorpus();
    if(!corpus){
      corpus=T.GRUPOS.concat(T.LUGARES,T.TIEMPOS,T.RETORICAS,T.CIERRES).join(" ")
        .toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
    }
    INV=new Inventor(corpus,3);
    montaUI();
  }catch(e){
    averia("Madritz no ha podido arrancar.",
           String((e&&e.message)||e),
           "Vuelve a generar la PWA:   python3 build_pwa.py");
    return;
  }
  if(!("serviceWorker" in navigator)){
    sinOffline("Esta dirección no es «segura» (no es https:// ni localhost), "+
               "así que el navegador no permite guardar la app para uso sin red.");
  }else{
    try{ await navigator.serviceWorker.register("sw.js"); }
    catch(e){ sinOffline("No se pudo registrar el service worker: "+
                         String((e&&e.message)||e)); }
  }
})();
