const C=function(){const m=document.createElement("link").relList;if(m&&m.supports&&m.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const h of o.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&c(h)}).observe(document,{childList:!0,subtree:!0});function d(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(s){if(s.ep)return;s.ep=!0;const o=d(s);fetch(s.href,o)}};C();var z=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function O(f){return f&&f.__esModule&&Object.prototype.hasOwnProperty.call(f,"default")?f.default:f}var E={exports:{}};(function(f,m){(function(d,c){f.exports=c()})(typeof self!="undefined"?self:z,function(){return function(d){var c={};function s(o){if(c[o])return c[o].exports;var h=c[o]={i:o,l:!1,exports:{}};return d[o].call(h.exports,h,h.exports,s),h.l=!0,h.exports}return s.m=d,s.c=c,s.d=function(o,h,a){s.o(o,h)||Object.defineProperty(o,h,{enumerable:!0,get:a})},s.r=function(o){typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},s.t=function(o,h){if(1&h&&(o=s(o)),8&h||4&h&&typeof o=="object"&&o&&o.__esModule)return o;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:o}),2&h&&typeof o!="string")for(var u in o)s.d(a,u,function(w){return o[w]}.bind(null,u));return a},s.n=function(o){var h=o&&o.__esModule?function(){return o.default}:function(){return o};return s.d(h,"a",h),h},s.o=function(o,h){return Object.prototype.hasOwnProperty.call(o,h)},s.p="",s(s.s=17)}({0:function(d,c,s){function o(){return typeof navigator!="undefined"?/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<600:null}s.d(c,"e",function(){return o}),s.d(c,"i",function(){return h}),s.d(c,"h",function(){return a}),s.d(c,"g",function(){return u}),s.d(c,"f",function(){return w}),s.d(c,"b",function(){return e}),s.d(c,"c",function(){return t}),s.d(c,"d",function(){return i}),s.d(c,"a",function(){return r}),Number.prototype.clamp=function(n,l){return Math.min(Math.max(this,n),l)};const h=n=>n[Math.floor(Math.random()*n.length)];function a(n,l){return n==null&&(n=0),l==null&&(l=1),n+Math.random()*(l-n)}function u(n,l){return n==null&&(n=0),l==null&&(l=1),Math.floor(n+Math.random()*(l-n+1))}const w=n=>document.querySelector(n),e=n=>typeof n=="number"?"#"+("00000"+n.toString(16)).slice(-6):n,t=(n,l=1)=>{const g=e(n),p=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(g),y=p?{r:parseInt(p[1],16),g:parseInt(p[2],16),b:parseInt(p[3],16)}:null;return"rgba("+y.r+","+y.g+","+y.b+","+l+")"},i=n=>.299*n.r+.587*n.g+.114*n.b;function r(n){for(;n.children&&n.children.length>0;)r(n.children[0]),n.remove(n.children[0]);n.geometry&&n.geometry.dispose(),n.material&&(Object.keys(n.material).forEach(l=>{n.material[l]&&n.material[l]!==null&&typeof n.material[l].dispose=="function"&&n.material[l].dispose()}),n.material.dispose())}},1:function(d,c,s){s.d(c,"a",function(){return u});var o=s(0);const h=typeof window=="object";let a=h&&window.THREE||{};h&&!window.VANTA&&(window.VANTA={});const u=h&&window.VANTA||{};u.register=(e,t)=>u[e]=i=>new t(i),u.version="0.5.22";const w=function(){return Array.prototype.unshift.call(arguments,"[VANTA]"),console.error.apply(this,arguments)};u.VantaBase=class{constructor(e={}){if(!h)return!1;u.current=this,this.windowMouseMoveWrapper=this.windowMouseMoveWrapper.bind(this),this.windowTouchWrapper=this.windowTouchWrapper.bind(this),this.windowGyroWrapper=this.windowGyroWrapper.bind(this),this.resize=this.resize.bind(this),this.animationLoop=this.animationLoop.bind(this),this.restart=this.restart.bind(this);const t=typeof this.getDefaultOptions=="function"?this.getDefaultOptions():this.defaultOptions;if(this.options=Object.assign({mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1},t),(e instanceof HTMLElement||typeof e=="string")&&(e={el:e}),Object.assign(this.options,e),this.options.THREE&&(a=this.options.THREE),this.el=this.options.el,this.el==null)w('Instance needs "el" param!');else if(!(this.options.el instanceof HTMLElement)){const r=this.el;if(this.el=Object(o.f)(r),!this.el)return void w("Cannot find element",r)}this.prepareEl(),this.initThree(),this.setSize();try{this.init()}catch(r){return w("Init error",r),this.renderer&&this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),void(this.options.backgroundColor&&(console.log("[VANTA] Falling back to backgroundColor"),this.el.style.background=Object(o.b)(this.options.backgroundColor)))}this.initMouse(),this.resize(),this.animationLoop();const i=window.addEventListener;i("resize",this.resize),window.requestAnimationFrame(this.resize),this.options.mouseControls&&(i("scroll",this.windowMouseMoveWrapper),i("mousemove",this.windowMouseMoveWrapper)),this.options.touchControls&&(i("touchstart",this.windowTouchWrapper),i("touchmove",this.windowTouchWrapper)),this.options.gyroControls&&i("deviceorientation",this.windowGyroWrapper)}setOptions(e={}){Object.assign(this.options,e),this.triggerMouseMove()}prepareEl(){let e,t;if(typeof Node!="undefined"&&Node.TEXT_NODE)for(e=0;e<this.el.childNodes.length;e++){const i=this.el.childNodes[e];if(i.nodeType===Node.TEXT_NODE){const r=document.createElement("span");r.textContent=i.textContent,i.parentElement.insertBefore(r,i),i.remove()}}for(e=0;e<this.el.children.length;e++)t=this.el.children[e],getComputedStyle(t).position==="static"&&(t.style.position="relative"),getComputedStyle(t).zIndex==="auto"&&(t.style.zIndex=1);getComputedStyle(this.el).position==="static"&&(this.el.style.position="relative")}applyCanvasStyles(e,t={}){Object.assign(e.style,{position:"absolute",zIndex:0,top:0,left:0,background:""}),Object.assign(e.style,t),e.classList.add("vanta-canvas")}initThree(){a.WebGLRenderer?(this.renderer=new a.WebGLRenderer({alpha:!0,antialias:!0}),this.el.appendChild(this.renderer.domElement),this.applyCanvasStyles(this.renderer.domElement),isNaN(this.options.backgroundAlpha)&&(this.options.backgroundAlpha=1),this.scene=new a.Scene):console.warn("[VANTA] No THREE defined on window")}getCanvasElement(){return this.renderer?this.renderer.domElement:this.p5renderer?this.p5renderer.canvas:void 0}getCanvasRect(){const e=this.getCanvasElement();return!!e&&e.getBoundingClientRect()}windowMouseMoveWrapper(e){const t=this.getCanvasRect();if(!t)return!1;const i=e.clientX-t.left,r=e.clientY-t.top;i>=0&&r>=0&&i<=t.width&&r<=t.height&&(this.mouseX=i,this.mouseY=r,this.options.mouseEase||this.triggerMouseMove(i,r))}windowTouchWrapper(e){const t=this.getCanvasRect();if(!t)return!1;if(e.touches.length===1){const i=e.touches[0].clientX-t.left,r=e.touches[0].clientY-t.top;i>=0&&r>=0&&i<=t.width&&r<=t.height&&(this.mouseX=i,this.mouseY=r,this.options.mouseEase||this.triggerMouseMove(i,r))}}windowGyroWrapper(e){const t=this.getCanvasRect();if(!t)return!1;const i=Math.round(2*e.alpha)-t.left,r=Math.round(2*e.beta)-t.top;i>=0&&r>=0&&i<=t.width&&r<=t.height&&(this.mouseX=i,this.mouseY=r,this.options.mouseEase||this.triggerMouseMove(i,r))}triggerMouseMove(e,t){e===void 0&&t===void 0&&(this.options.mouseEase?(e=this.mouseEaseX,t=this.mouseEaseY):(e=this.mouseX,t=this.mouseY)),this.uniforms&&(this.uniforms.iMouse.value.x=e/this.scale,this.uniforms.iMouse.value.y=t/this.scale);const i=e/this.width,r=t/this.height;typeof this.onMouseMove=="function"&&this.onMouseMove(i,r)}setSize(){this.scale||(this.scale=1),Object(o.e)()&&this.options.scaleMobile?this.scale=this.options.scaleMobile:this.options.scale&&(this.scale=this.options.scale),this.width=Math.max(this.el.offsetWidth,this.options.minWidth),this.height=Math.max(this.el.offsetHeight,this.options.minHeight)}initMouse(){(!this.mouseX&&!this.mouseY||this.mouseX===this.options.minWidth/2&&this.mouseY===this.options.minHeight/2)&&(this.mouseX=this.width/2,this.mouseY=this.height/2,this.triggerMouseMove(this.mouseX,this.mouseY))}resize(){this.setSize(),this.camera&&(this.camera.aspect=this.width/this.height,typeof this.camera.updateProjectionMatrix=="function"&&this.camera.updateProjectionMatrix()),this.renderer&&(this.renderer.setSize(this.width,this.height),this.renderer.setPixelRatio(window.devicePixelRatio/this.scale)),typeof this.onResize=="function"&&this.onResize()}isOnScreen(){const e=this.el.offsetHeight,t=this.el.getBoundingClientRect(),i=window.pageYOffset||(document.documentElement||document.body.parentNode||document.body).scrollTop,r=t.top+i;return r-window.innerHeight<=i&&i<=r+e}animationLoop(){return this.t||(this.t=0),this.t+=1,this.t2||(this.t2=0),this.t2+=this.options.speed||1,this.uniforms&&(this.uniforms.iTime.value=.016667*this.t2),this.options.mouseEase&&(this.mouseEaseX=this.mouseEaseX||this.mouseX||0,this.mouseEaseY=this.mouseEaseY||this.mouseY||0,Math.abs(this.mouseEaseX-this.mouseX)+Math.abs(this.mouseEaseY-this.mouseY)>.1&&(this.mouseEaseX+=.05*(this.mouseX-this.mouseEaseX),this.mouseEaseY+=.05*(this.mouseY-this.mouseEaseY),this.triggerMouseMove(this.mouseEaseX,this.mouseEaseY))),(this.isOnScreen()||this.options.forceAnimate)&&(typeof this.onUpdate=="function"&&this.onUpdate(),this.scene&&this.camera&&(this.renderer.render(this.scene,this.camera),this.renderer.setClearColor(this.options.backgroundColor,this.options.backgroundAlpha)),this.fps&&this.fps.update&&this.fps.update(),typeof this.afterRender=="function"&&this.afterRender()),this.req=window.requestAnimationFrame(this.animationLoop)}restart(){if(this.scene)for(;this.scene.children.length;)this.scene.remove(this.scene.children[0]);typeof this.onRestart=="function"&&this.onRestart(),this.init()}init(){typeof this.onInit=="function"&&this.onInit()}destroy(){typeof this.onDestroy=="function"&&this.onDestroy();const e=window.removeEventListener;e("touchstart",this.windowTouchWrapper),e("touchmove",this.windowTouchWrapper),e("scroll",this.windowMouseMoveWrapper),e("mousemove",this.windowMouseMoveWrapper),e("deviceorientation",this.windowGyroWrapper),e("resize",this.resize),window.cancelAnimationFrame(this.req);const t=this.scene;t&&t.children&&Object(o.a)(t),this.renderer&&(this.renderer.domElement&&this.el.removeChild(this.renderer.domElement),this.renderer=null,this.scene=null),u.current===this&&(u.current=null)}},c.b=u.VantaBase},17:function(d,c,s){s.r(c);var o=s(1),h=s(0);let a=typeof window=="object"&&window.THREE;class u extends o.b{static initClass(){this.prototype.ww=100,this.prototype.hh=80,this.prototype.waveNoise=4}constructor(e){a=e.THREE||a,super(e)}getMaterial(){const e={color:this.options.color,shininess:this.options.shininess,flatShading:!0,vertexColors:a.FaceColors,side:a.DoubleSide};return new a.MeshPhongMaterial(e)}onInit(){let e,t;const i=this.getMaterial(),r=new a.Geometry;for(this.gg=[],e=0;e<=this.ww;e++)for(this.gg[e]=[],t=0;t<=this.hh;t++){const g=r.vertices.length,p=new a.Vector3(18*(e-.5*this.ww),Object(h.h)(0,this.waveNoise)-10,18*(.5*this.hh-t));r.vertices.push(p),this.gg[e][t]=g}for(e=1;e<=this.ww;e++)for(t=1;t<=this.hh;t++){let g,p;const y=this.gg[e][t],v=this.gg[e][t-1],M=this.gg[e-1][t],b=this.gg[e-1][t-1];Object(h.g)(0,1)?(g=new a.Face3(b,v,M),p=new a.Face3(v,M,y)):(g=new a.Face3(b,v,y),p=new a.Face3(b,M,y)),r.faces.push(g,p)}this.plane=new a.Mesh(r,i),this.scene.add(this.plane);const n=new a.AmbientLight(16777215,.9);this.scene.add(n);const l=new a.PointLight(16777215,.9);l.position.set(-100,250,-100),this.scene.add(l),this.camera=new a.PerspectiveCamera(35,this.width/this.height,50,1e4),this.cameraPosition=new a.Vector3(240,200,390),this.cameraTarget=new a.Vector3(140,-30,190),this.camera.position.copy(this.cameraPosition),this.scene.add(this.camera)}onUpdate(){let e;this.plane.material.color.set(this.options.color),this.plane.material.shininess=this.options.shininess,this.camera.ox=this.cameraPosition.x/this.options.zoom,this.camera.oy=this.cameraPosition.y/this.options.zoom,this.camera.oz=this.cameraPosition.z/this.options.zoom,this.controls!=null&&this.controls.update();const t=this.camera;Math.abs(t.tx-t.position.x)>.01&&(e=t.tx-t.position.x,t.position.x+=.02*e),Math.abs(t.ty-t.position.y)>.01&&(e=t.ty-t.position.y,t.position.y+=.02*e),Math.abs(t.tz-t.position.z)>.01&&(e=t.tz-t.position.z,t.position.z+=.02*e),t.lookAt(this.cameraTarget);for(let i=0;i<this.plane.geometry.vertices.length;i++){const r=this.plane.geometry.vertices[i];if(r.oy){const n=this.options.waveSpeed,l=Math.sqrt(n)*Math.cos(-r.x-.7*r.z),g=Math.sin(n*this.t*.02-n*r.x*.025+n*r.z*.015+l),p=Math.pow(g+1,2)/4;r.y=r.oy+p*this.options.waveHeight}else r.oy=r.y}this.plane.geometry.dynamic=!0,this.plane.geometry.computeFaceNormals(),this.plane.geometry.verticesNeedUpdate=!0,this.plane.geometry.normalsNeedUpdate=!0,this.wireframe&&(this.wireframe.geometry.fromGeometry(this.plane.geometry),this.wireframe.geometry.computeFaceNormals())}onMouseMove(e,t){const i=this.camera;return i.oy||(i.oy=i.position.y,i.ox=i.position.x,i.oz=i.position.z),i.tx=i.ox+100*(e-.5)/this.options.zoom,i.ty=i.oy+-100*(t-.5)/this.options.zoom,i.tz=i.oz+-50*(e-.5)/this.options.zoom}}u.prototype.defaultOptions={color:21896,shininess:30,waveHeight:15,waveSpeed:1,zoom:1},u.initClass(),c.default=o.a.register("WAVES",u)}})})})(E);var x=O(E.exports);document.addEventListener("DOMContentLoaded",()=>{(m=>{if(!window.matchMedia)return;const d=window.matchMedia("(prefers-color-scheme: dark)");m(d.matches),d.addEventListener("change",c=>m(c.matches))})(m=>{const d=m?7712:34952;m?(console.log("dark mode"),document.documentElement.classList.add("dark"),console.log(document.documentElement)):document.documentElement.classList.remove("dark"),x({el:"#vanta",mouseControls:!0,touchControls:!0,gyroControls:!1,minHeight:200,minWidth:200,scale:1,scaleMobile:1,color:d,shininess:3,waveHeight:8.5,waveSpeed:.5,zoom:.65})})});