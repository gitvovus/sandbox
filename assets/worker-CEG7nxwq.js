(function(){"use strict";function k(t,e,o){const a=new ImageData(t,e),r=a.data;for(let f=0;f<e;++f)for(let l=0;l<t;++l){const g=4*(f*t+l);[r[g],r[g+1],r[g+2],r[g+3]]=o(l,f)}return a}function I(t,e,o){return Math.min(Math.max(t,e),o)}function x(t,e,o){const a=I((o-t)/(e-t),0,1);return a*a*(3-2*a)}function u(t){const e=.5*t;return Math.abs(e-Math.floor(e)-.5)*2}async function P(t,e,o,a,r,f){return createImageBitmap(k(2*t,2*t,(l,g)=>{const b=l+.5-t,w=g+.5-t,M=Math.hypot(b,w),m=Math.atan2(w,b),q=e*m/Math.PI+.2,T=e*m/Math.PI+1.2,j=e*m/Math.PI+1.2,h=[(u(q)**.3+.5)*t*.65,(u(T)**(.2+.5*o)+.5)*t*(4+o)*.13,(2-u(j)**(1+3*o))*t*(3+o)*.08],s=[[a.r/255,a.g/255,a.b/255,0],[r.r/255,r.g/255,r.b/255,0],[f.r/255,f.g/255,f.b/255,0]];for(let n=0;n<h.length;++n)M>h[n]?s[n][3]=x(h[n]+3,h[n],M):s[n][3]=M/h[n];for(let n=1;n<h.length;++n){for(let i=0;i<3;++i)s[0][i]=s[0][i]*(1-s[n][3])+s[n][i]*s[n][3];s[0][3]=1-(1-s[0][3])*(1-s[n][3])}for(let n=0;n<4;++n)s[0][n]*=255;return s[0]}))}const c=[],p=self;p.onmessage=async t=>{const e=t.data;switch(e.type){case"flower":c.push(e);break;case"stop":c.length=0,c.push({type:"stop"});break;default:console.log("[worker] unknown request:",e)}c.length===1&&setTimeout(y)};async function y(){if(c.length===0)return;const t=c.shift();switch(t.type){case"stop":c.length=0,p.postMessage({type:"stop"});break;case"flower":{const e=await P(t.radius,t.petals,t.t,t.bottom,t.middle,t.top);p.postMessage({...t,image:e},[e])}break}c.length>0&&setTimeout(y)}})();
