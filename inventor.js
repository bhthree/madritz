// GENERADO POR build_pwa.py — el inventor de palabras, en JavaScript.
//
// MISMO algoritmo que inventor.py: n-grama de orden 3 que cuenta qué letras
// siguen a qué letras y muestrea. Literalmente mLLM v0-v2.
//   · ORDEN 3: con 4 reproduce el corpus (aburrido); con 3 recombina.
//   · RECHAZA PALABRAS REALES: si existe, no tiene gracia.
//   · RECHAZA RECIENTES (v2): si acaba de salir, tampoco tiene gracia.
//   · ACENTÚA: sin tildes «investigacion» parece errata.
const CORPUS_B64 = "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";
const LETRAS = "abcdefghijklmnopqrstuvwxyzñ";
const FIN = " \n.,;:!?";
const SUF_SUST = ["cion","miento","ismo","ancia","logia","idad","encia"];
const SUF_ADJ  = ["ico","oso","al","ante","ivo","ario"];
const VOC_SIN = "aeiou", VOC_CON = "áéíóú";
const SUF_TILDE = [["aciones","aciones"],["ciones","ciones"],["cion","ción"],
 ["sion","sión"],["logia","logía"],["grafia","grafía"],["nomia","nomía"],
 ["sofia","sofía"],["tria","tría"],["bilidad","bilidad"]];
const SUF_ESD = ["ico","ica","icos","icas"];

function tildar(v){const i=VOC_SIN.indexOf(v);return i>=0?VOC_CON[i]:v;}
function ultimaVocal(s){for(let i=s.length-1;i>=0;i--)if(VOC_SIN.includes(s[i]))return i;return -1;}
function acentuar(p){
  if(!p||p.length<4)return p;
  p=p.toLowerCase();
  for(const v of VOC_CON)if(p.includes(v))return p;
  for(const [fin,rep] of SUF_TILDE)if(p.endsWith(fin))return p.slice(0,-fin.length)+rep;
  for(const fin of SUF_ESD){
    if(p.endsWith(fin)&&p.length>fin.length+2){
      const cuerpo=p.slice(0,-fin.length),i=ultimaVocal(cuerpo);
      if(i>=0)return cuerpo.slice(0,i)+tildar(cuerpo[i])+cuerpo.slice(i+1)+fin;
    }
  }
  return p;
}
function b64ToBytes(b64){
  const bin=atob(b64),a=new Uint8Array(bin.length);
  for(let i=0;i<bin.length;i++)a[i]=bin.charCodeAt(i);
  return a;
}
async function cargarCorpus(){
  try{
    const bytes=b64ToBytes(CORPUS_B64);
    if(typeof DecompressionStream!=="undefined"){
      const ds=new DecompressionStream("deflate");
      const stream=new Blob([bytes]).stream().pipeThrough(ds);
      return await new Response(stream).text();
    }
  }catch(e){}
  return null;
}
class Inventor{
  constructor(texto,orden=3){
    this.orden=orden; this.tablas={};
    const low=texto.toLowerCase();
    for(let k=1;k<=orden;k++){
      const t=new Map();
      for(let i=k;i<low.length;i++){
        const ctx=low.slice(i-k,i),ch=low[i];
        let m=t.get(ctx); if(!m){m=new Map();t.set(ctx,m);}
        m.set(ch,(m.get(ch)||0)+1);
      }
      this.tablas[k]=t;
    }
    this.inicios=(low.match(/[a-zñ]{5,}/g)||[]).map(w=>w.slice(0,2));
    if(!this.inicios.length)this.inicios=["co","de","in","ex","pa"];
    this.reales=new Set(low.match(/[a-zñ]+/g)||[]);
    // MEMORIA (v2): gemela de Inventor.recientes en inventor.py
    this.recientes=[]; this.topeRecientes=24;
  }
  _pick(a){return a[Math.floor(Math.random()*a.length)];}
  _recordar(w){
    this.recientes.push(String(w).toLowerCase());
    while(this.recientes.length>this.topeRecientes)this.recientes.shift();
    return w;
  }
  _siguiente(ctx,temp){
    for(let k=Math.min(this.orden,ctx.length);k>=1;k--){
      const m=this.tablas[k].get(ctx.slice(-k));
      if(m&&m.size){
        const chs=[...m.keys()];
        const pesos=chs.map(c=>Math.pow(m.get(c),1/Math.max(temp,1e-6)));
        const tot=pesos.reduce((a,b)=>a+b,0);
        let r=Math.random()*tot;
        for(let i=0;i<chs.length;i++){r-=pesos[i];if(r<=0)return chs[i];}
        return chs[chs.length-1];
      }
    }
    return this._pick(LETRAS.split(""));
  }
  _crudo(prefijo,minL,maxL,temp){
    let w=(prefijo||this._pick(this.inicios)).toLowerCase();
    for(let i=0;i<maxL*3;i++){
      const ch=this._siguiente(w,temp);
      if(FIN.includes(ch)){ if(w.length>=minL)break; continue; }
      if(!LETRAS.includes(ch))continue;
      w+=ch; if(w.length>=maxL)break;
    }
    return w.slice(0,maxL);
  }
  palabra(prefijo="",minL=7,maxL=15,temp=1.15,tilde=true){
    let vista=null;
    for(let i=0;i<12;i++){
      const w=this._crudo(prefijo,minL,maxL,temp+0.12*i);
      if(w.length<Math.max(6,minL-1))continue;
      vista=vista||w;
      if(!this.reales.has(w)&&this.recientes.indexOf(w)<0)
        return this._recordar(tilde?acentuar(w):w);
    }
    const base=vista||this._crudo(prefijo,minL,maxL,temp);
    const corte=Math.max(4,base.length-(1+Math.floor(Math.random()*3)));
    const w=(base.slice(0,corte)+this._pick(SUF_ADJ)).slice(0,maxL);
    return this._recordar(tilde?acentuar(w):w);
  }
  sustantivo(d=3){
    let w=this.palabra("",7+d,11+d*2,0.95+d*0.12,false);
    if(!SUF_SUST.some(s=>w.endsWith(s)))w+=this._pick(SUF_SUST);
    return acentuar(w);
  }
  adjetivo(d=3){
    let w=this.palabra("",6+d,10+d*2,0.95+d*0.12,false);
    if(!SUF_ADJ.concat(["o","a","e"]).some(s=>w.endsWith(s)))w+=this._pick(SUF_ADJ);
    return acentuar(w);
  }
  // v2: raíz corta y SIN sufijo, para las etimologías falsas del Diccionario.
  raiz(d=3){
    let w=this.palabra("",4,6+d,1.05+d*0.1,false);
    for(const s of SUF_SUST.concat(SUF_ADJ)){
      if(w.endsWith(s)&&w.length>s.length+2){w=w.slice(0,-s.length);break;}
    }
    return w.slice(0,8);
  }
}
