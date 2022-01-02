const t=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,e=Symbol(),i=new Map;class s{constructor(t,i){if(this._$cssResult$=!0,i!==e)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let e=i.get(this.cssText);return t&&void 0===e&&(i.set(this.cssText,e=new CSSStyleSheet),e.replaceSync(this.cssText)),e}toString(){return this.cssText}}const n=(t,...i)=>{const n=1===t.length?t[0]:i.reduce(((e,i,s)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[s+1]),t[0]);return new s(n,e)},r=t?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const e of t.cssRules)i+=e.cssText;return(t=>new s("string"==typeof t?t:t+"",e))(i)})(t):t;var o;const a=window.trustedTypes,l=a?a.emptyScript:"",h=window.reactiveElementPolyfillSupport,d={toAttribute(t,e){switch(e){case Boolean:t=t?l:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},c=(t,e)=>e!==t&&(e==e||t==t),p={attribute:!0,type:String,converter:d,reflect:!1,hasChanged:c};class u extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const s=this._$Eh(i,e);void 0!==s&&(this._$Eu.set(s,i),t.push(s))})),t}static createProperty(t,e=p){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,s=this.getPropertyDescriptor(t,i,e);void 0!==s&&Object.defineProperty(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(s){const n=this[t];this[e]=s,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||p}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Eh(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var e;const i=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,i)=>{t?e.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((t=>{const i=document.createElement("style"),s=window.litNonce;void 0!==s&&i.setAttribute("nonce",s),i.textContent=t.cssText,e.appendChild(i)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$ES(t,e,i=p){var s,n;const r=this.constructor._$Eh(t,i);if(void 0!==r&&!0===i.reflect){const o=(null!==(n=null===(s=i.converter)||void 0===s?void 0:s.toAttribute)&&void 0!==n?n:d.toAttribute)(e,i.type);this._$Ei=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Ei=null}}_$AK(t,e){var i,s,n;const r=this.constructor,o=r._$Eu.get(t);if(void 0!==o&&this._$Ei!==o){const t=r.getPropertyOptions(o),a=t.converter,l=null!==(n=null!==(s=null===(i=a)||void 0===i?void 0:i.fromAttribute)&&void 0!==s?s:"function"==typeof a?a:null)&&void 0!==n?n:d.fromAttribute;this._$Ei=o,this[o]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,i){let s=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||c)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$Ei!==t&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(t,i))):s=!1),!this.isUpdatePending&&s&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$E_&&(this._$E_.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}var g;u.finalized=!0,u.elementProperties=new Map,u.elementStyles=[],u.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:u}),(null!==(o=globalThis.reactiveElementVersions)&&void 0!==o?o:globalThis.reactiveElementVersions=[]).push("1.0.2");const f=globalThis.trustedTypes,v=f?f.createPolicy("lit-html",{createHTML:t=>t}):void 0,m=`lit$${(Math.random()+"").slice(9)}$`,b="?"+m,x=`<${b}>`,w=document,y=(t="")=>w.createComment(t),$=t=>null===t||"object"!=typeof t&&"function"!=typeof t,k=Array.isArray,S=t=>{var e;return k(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},_=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,C=/-->/g,W=/>/g,A=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,U=/'/g,z=/"/g,R=/^(?:script|style|textarea)$/i,P=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),E=Symbol.for("lit-noChange"),I=Symbol.for("lit-nothing"),O=new WeakMap,T=(t,e,i)=>{var s,n;const r=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:e;let o=r._$litPart$;if(void 0===o){const t=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:null;r._$litPart$=o=new D(e.insertBefore(y(),t),t,void 0,null!=i?i:{})}return o._$AI(t),o},j=w.createTreeWalker(w,129,null,!1),M=(t,e)=>{const i=t.length-1,s=[];let n,r=2===e?"<svg>":"",o=_;for(let e=0;e<i;e++){const i=t[e];let a,l,h=-1,d=0;for(;d<i.length&&(o.lastIndex=d,l=o.exec(i),null!==l);)d=o.lastIndex,o===_?"!--"===l[1]?o=C:void 0!==l[1]?o=W:void 0!==l[2]?(R.test(l[2])&&(n=RegExp("</"+l[2],"g")),o=A):void 0!==l[3]&&(o=A):o===A?">"===l[0]?(o=null!=n?n:_,h=-1):void 0===l[1]?h=-2:(h=o.lastIndex-l[2].length,a=l[1],o=void 0===l[3]?A:'"'===l[3]?z:U):o===z||o===U?o=A:o===C||o===W?o=_:(o=A,n=void 0);const c=o===A&&t[e+1].startsWith("/>")?" ":"";r+=o===_?i+x:h>=0?(s.push(a),i.slice(0,h)+"$lit$"+i.slice(h)+m+c):i+m+(-2===h?(s.push(void 0),e):c)}const a=r+(t[i]||"<?>")+(2===e?"</svg>":"");return[void 0!==v?v.createHTML(a):a,s]};class N{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let n=0,r=0;const o=t.length-1,a=this.parts,[l,h]=M(t,e);if(this.el=N.createElement(l,i),j.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(s=j.nextNode())&&a.length<o;){if(1===s.nodeType){if(s.hasAttributes()){const t=[];for(const e of s.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(m)){const i=h[r++];if(t.push(e),void 0!==i){const t=s.getAttribute(i.toLowerCase()+"$lit$").split(m),e=/([.?@])?(.*)/.exec(i);a.push({type:1,index:n,name:e[2],strings:t,ctor:"."===e[1]?q:"?"===e[1]?J:"@"===e[1]?K:L})}else a.push({type:6,index:n})}for(const e of t)s.removeAttribute(e)}if(R.test(s.tagName)){const t=s.textContent.split(m),e=t.length-1;if(e>0){s.textContent=f?f.emptyScript:"";for(let i=0;i<e;i++)s.append(t[i],y()),j.nextNode(),a.push({type:2,index:++n});s.append(t[e],y())}}}else if(8===s.nodeType)if(s.data===b)a.push({type:2,index:n});else{let t=-1;for(;-1!==(t=s.data.indexOf(m,t+1));)a.push({type:7,index:n}),t+=m.length-1}n++}}static createElement(t,e){const i=w.createElement("template");return i.innerHTML=t,i}}function F(t,e,i=t,s){var n,r,o,a;if(e===E)return e;let l=void 0!==s?null===(n=i._$Cl)||void 0===n?void 0:n[s]:i._$Cu;const h=$(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==h&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===h?l=void 0:(l=new h(t),l._$AT(t,i,s)),void 0!==s?(null!==(o=(a=i)._$Cl)&&void 0!==o?o:a._$Cl=[])[s]=l:i._$Cu=l),void 0!==l&&(e=F(t,l._$AS(t,e.values),l,s)),e}class B{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:i},parts:s}=this._$AD,n=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:w).importNode(i,!0);j.currentNode=n;let r=j.nextNode(),o=0,a=0,l=s[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new D(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new V(r,this,t)),this.v.push(e),l=s[++a]}o!==(null==l?void 0:l.index)&&(r=j.nextNode(),o++)}return n}m(t){let e=0;for(const i of this.v)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class D{constructor(t,e,i,s){var n;this.type=2,this._$AH=I,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cg=null===(n=null==s?void 0:s.isConnected)||void 0===n||n}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=F(this,t,e),$(t)?t===I||null==t||""===t?(this._$AH!==I&&this._$AR(),this._$AH=I):t!==this._$AH&&t!==E&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):S(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==I&&$(this._$AH)?this._$AA.nextSibling.data=t:this.S(w.createTextNode(t)),this._$AH=t}T(t){var e;const{values:i,_$litType$:s}=t,n="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=N.createElement(s.h,this.options)),s);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===n)this._$AH.m(i);else{const t=new B(n,this),e=t.p(this.options);t.m(i),this.S(e),this._$AH=t}}_$AC(t){let e=O.get(t.strings);return void 0===e&&O.set(t.strings,e=new N(t)),e}M(t){k(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const n of t)s===e.length?e.push(i=new D(this.A(y()),this.A(y()),this,this.options)):i=e[s],i._$AI(n),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class L{constructor(t,e,i,s,n){this.type=1,this._$AH=I,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=n,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=I}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,s){const n=this.strings;let r=!1;if(void 0===n)t=F(this,t,e,0),r=!$(t)||t!==this._$AH&&t!==E,r&&(this._$AH=t);else{const s=t;let o,a;for(t=n[0],o=0;o<n.length-1;o++)a=F(this,s[i+o],e,o),a===E&&(a=this._$AH[o]),r||(r=!$(a)||a!==this._$AH[o]),a===I?t=I:t!==I&&(t+=(null!=a?a:"")+n[o+1]),this._$AH[o]=a}r&&!s&&this.k(t)}k(t){t===I?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class q extends L{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===I?void 0:t}}const H=f?f.emptyScript:"";class J extends L{constructor(){super(...arguments),this.type=4}k(t){t&&t!==I?this.element.setAttribute(this.name,H):this.element.removeAttribute(this.name)}}class K extends L{constructor(t,e,i,s,n){super(t,e,i,s,n),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=F(this,t,e,0))&&void 0!==i?i:I)===E)return;const s=this._$AH,n=t===I&&s!==I||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,r=t!==I&&(s===I||n);n&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class V{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){F(this,t)}}const Z={P:"$lit$",V:m,L:b,I:1,N:M,R:B,D:S,j:F,H:D,O:L,F:J,B:K,W:q,Z:V},G=window.litHtmlPolyfillSupport;var Y,Q;null==G||G(N,D),(null!==(g=globalThis.litHtmlVersions)&&void 0!==g?g:globalThis.litHtmlVersions=[]).push("2.0.2");class X extends u{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=T(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return E}}X.finalized=!0,X._$litElement$=!0,null===(Y=globalThis.litElementHydrateSupport)||void 0===Y||Y.call(globalThis,{LitElement:X});const tt=globalThis.litElementPolyfillSupport;function et(t,e,i,s){var n,r=arguments.length,o=r<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,i):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,i,s);else for(var a=t.length-1;a>=0;a--)(n=t[a])&&(o=(r<3?n(o):r>3?n(e,i,o):n(e,i))||o);return r>3&&o&&Object.defineProperty(e,i,o),o}null==tt||tt({LitElement:X}),(null!==(Q=globalThis.litElementVersions)&&void 0!==Q?Q:globalThis.litElementVersions=[]).push("3.0.2");const it=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:i,elements:s}=e;return{kind:i,elements:s,finisher(e){window.customElements.define(t,e)}}})(t,e),st=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function nt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):st(t,e)}let rt=new WeakMap,ot=new WeakMap;function at(t,e){rt.set(t,e)}function lt(t,e){if(void 0===t)return;const i=function(t){if(t&&t.constructor)return rt.get(t.constructor)||null}(t);if(!i)return void console.error("Unable to create view model based on given model object.",t);const s=ot.get(t);if(s)return s;const n=new i(t);return ot.set(t,n),void 0!==n&&Promise.resolve().then((()=>n.onReady(e))),n}const ht=n`:host {
    cursor: default;
    margin: 0;
    display: inline-block;
    outline: none;
    position: relative;
    width: 40px;
    height: 20px;
    background: #FFFFFF;
    border: 1px solid #929292;
    border-radius: 20px;
}

:host([selected]) {
    background: #0078D4;
    border-color: #0078D4;
}

:host([disabled]) {
    background: #e1e1e1;
    border-color: #C5C5C5 !important;
}

.thumb {
    position: absolute;
    transition: all .1s ease;
    pointer-events: none;
    top: 5px;
    left: 5px;
    right: unset;
    border-radius: 10px;
    width: 10px;
    height: 10px;
    background: #2B2B2B;
}

:host([selected]) .thumb {
    left: 25px;
    right: unset;
    background: #FFFFFF;
}

:host([disabled]) .thumb {
    background: #A0A0A0 !important;
}`;let dt=class extends X{constructor(){super(...arguments),this.selected=!1,this.disabled=!1}render(){return P`
<div class="thumb"></div>
`}};dt.styles=[ht],et([nt({type:Boolean,reflect:!0})],dt.prototype,"selected",void 0),et([nt({type:Boolean,reflect:!0})],dt.prototype,"disabled",void 0),dt=et([it("toggle-button")],dt);class ct extends X{constructor(){super(),this._invalidateRender=this._invalidateRender.bind(this)}willUpdate(t){super.willUpdate(t),t.has("context")&&this._onContextChanged(t.get("context"))}_onContextChanged(t){void 0!==t&&t.offChanged(this._invalidateRender),void 0!==this.context&&this.context.onChanged(this._invalidateRender)}_invalidateRender(t){this.requestUpdate()}}et([nt()],ct.prototype,"context",void 0);const pt=n`#itemWrapper {
    position: relative;
    display: grid;
    grid-template-columns: auto 1fr auto auto;
    background: #fff;
    border: 1px solid rgba(0,0,0,.1);
    border-radius: .33rem;
    margin: 5px 0;
    padding: 9px 0;
    padding-right: 16px;
    min-height: 48px;
    cursor: default;
}

    #itemWrapper:hover {
        background: hsla(0,0%,100%,.33);
    }

#itemIcon {
    grid-row: 1/2 span;
    font-size: 24px;
    padding-right: 16px;
    line-height: 48px;
    padding-left: 16px;
}

p {
    margin: 0;
    padding: 0;
}

#itemWrapper p.title {
    grid-column: 2;
    font-size: 14px;
    line-height: 16px;
    white-space: nowrap;
    align-self: end;
}

#itemWrapper p.desc {
    grid-column: 2;
    grid-row: 2;
    color: rgba(0,0,0,.66);
    font-size: 12px;
    line-height: 16px;
    align-self: center;
}

#itemWrapper toggle-button {
    grid-row: 1/2 span;
    grid-column: 3;
    align-self: center;
    vertical-align: text-top;
    margin-right: 8px;
}

#itemWrapper #openIcon {
    grid-row: 1/2 span;
    grid-column: 4;
    align-self: center;
    margin-left: 8px;
    font-size: 20px;
}

code {
    padding: .2em .4em;
    margin: 0;
    font-size: 85%;
    background-color: rgba(0, 0, 0, 0.03);
    border-radius: 6px;
}`;let ut=class extends ct{render(){const t=this.context;return t?P`
<link href="https://soul-master.github.io/fa-light/style.css" rel="stylesheet" />
<div id="itemWrapper">
    <span id="itemIcon" class="fa-${t.icon}"></span>
    <p class="title">${t.name}</p>
    <p class="desc">${function(t){if(void 0===t)return I;const e=[],i=t.split("`");for(let t=0;t<i.length&&(e.push(i[t]),!(t+1>=i.length||""===i[t+1]));t+=2)e.push(P`<code>${i[t+1]}</code>`);return e}(t.description)}</p>
    <toggle-button ?selected=${t.isEnabled} ?disabled=${t.isUpdating} @click=${this.t}></toggle-button>
    <span id="openIcon" class="fa-angle-right"></span>
</div>
`:I}async t(t){t.defaultPrevented||void 0===this.context||(t.preventDefault(),this.context.isUpdating||await this.context.toggle())}};ut.styles=[pt],ut=et([it("auto-responder-item")],ut);const gt=2;const{H:ft}=Z,vt=()=>document.createComment(""),mt=(t,e,i)=>{var s;const n=t._$AA.parentNode,r=void 0===e?t._$AB:e._$AA;if(void 0===i){const e=n.insertBefore(vt(),r),s=n.insertBefore(vt(),r);i=new ft(e,s,t,t.options)}else{const e=i._$AB.nextSibling,o=i._$AM,a=o!==t;if(a){let e;null===(s=i._$AQ)||void 0===s||s.call(i,t),i._$AM=t,void 0!==i._$AP&&(e=t._$AU)!==o._$AU&&i._$AP(e)}if(e!==r||a){let t=i._$AA;for(;t!==e;){const e=t.nextSibling;n.insertBefore(t,r),t=e}}}return i},bt=(t,e,i=t)=>(t._$AI(e,i),t),xt={},wt=t=>{var e;null===(e=t._$AP)||void 0===e||e.call(t,!1,!0);let i=t._$AA;const s=t._$AB.nextSibling;for(;i!==s;){const t=i.nextSibling;i.remove(),i=t}},yt=(t,e,i)=>{const s=new Map;for(let n=e;n<=i;n++)s.set(t[n],n);return s},$t=(t=>(...e)=>({_$litDirective$:t,values:e}))(class extends class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}{constructor(t){if(super(t),t.type!==gt)throw Error("repeat() can only be used in text expressions")}dt(t,e,i){let s;void 0===i?i=e:void 0!==e&&(s=e);const n=[],r=[];let o=0;for(const e of t)n[o]=s?s(e,o):o,r[o]=i(e,o),o++;return{values:r,keys:n}}render(t,e,i){return this.dt(t,e,i).values}update(t,[e,i,s]){var n;const r=(t=>t._$AH)(t),{values:o,keys:a}=this.dt(e,i,s);if(!Array.isArray(r))return this.ct=a,o;const l=null!==(n=this.ct)&&void 0!==n?n:this.ct=[],h=[];let d,c,p=0,u=r.length-1,g=0,f=o.length-1;for(;p<=u&&g<=f;)if(null===r[p])p++;else if(null===r[u])u--;else if(l[p]===a[g])h[g]=bt(r[p],o[g]),p++,g++;else if(l[u]===a[f])h[f]=bt(r[u],o[f]),u--,f--;else if(l[p]===a[f])h[f]=bt(r[p],o[f]),mt(t,h[f+1],r[p]),p++,f--;else if(l[u]===a[g])h[g]=bt(r[u],o[g]),mt(t,r[p],r[u]),u--,g++;else if(void 0===d&&(d=yt(a,g,f),c=yt(l,p,u)),d.has(l[p]))if(d.has(l[u])){const e=c.get(a[g]),i=void 0!==e?r[e]:null;if(null===i){const e=mt(t,r[p]);bt(e,o[g]),h[g]=e}else h[g]=bt(i,o[g]),mt(t,r[p],i),r[e]=null;g++}else wt(r[u]),u--;else wt(r[p]),p++;for(;g<=f;){const e=mt(t,h[f+1]);bt(e,o[g]),h[g++]=e}for(;p<=u;){const t=r[p++];null!==t&&wt(t)}return this.ct=a,((t,e=xt)=>{t._$AH=e})(t,h),E}}),kt=n`#itemWrapper {
    position: relative;
    display: grid;
    grid-template-columns: auto 1fr auto auto;
    background: #fff;
    border: 1px solid rgba(0,0,0,.1);
    border-radius: .33rem;
    margin: 5px 0;
    padding: 9px 0;
    padding-right: 16px;
    min-height: 48px;
    cursor: default;
}

:host([open]) #itemWrapper {
    margin-bottom: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}

#itemWrapper:hover {
    background: hsla(0,0%,100%,.33);
}

#itemIcon {
    grid-row: 1/2 span;
    font-size: 24px;
    padding-right: 16px;
    line-height: 48px;
    padding-left: 16px;
}

p {
    margin: 0;
    padding: 0;
}

#itemWrapper p.title {
    grid-column: 2;
    font-size: 14px;
    line-height: 16px;
    white-space: nowrap;
    align-self: end;
}

#itemWrapper p.desc {
    grid-column: 2;
    grid-row: 2;
    color: rgba(0,0,0,.66);
    font-size: 12px;
    line-height: 16px;
    align-self: center;
}

#itemWrapper toggle-button {
    grid-row: 1/2 span;
    grid-column: 3;
    align-self: center;
    vertical-align: text-top;
    margin-right: 8px;
}

#itemWrapper #openIcon {
    grid-row: 1/2 span;
    grid-column: 4;
    align-self: center;
    margin-left: 8px;
    font-size: 20px;
}

#contentWrapper {
    display: none;
    padding-left: 56px;
    border: 1px solid rgba(0,0,0,.1);
    border-radius: .33rem;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    background: #fff;
}

:host([open]) #contentWrapper {
    display: block;
}

#contentWrapper > div:first-child {
    margin-top: 35px;
}

#contentWrapper > div:last-child {
    margin-bottom: 35px;
}

#contentWrapper > div {
    display: grid;
    grid-template-columns: 100px 1fr;
    line-height: 25px;
}

    #contentWrapper > div + div {
        margin-top: 10px;
    }

    #contentWrapper > div > input {
        grid-column: 2;
        margin: 0 16px;
    }
`;let St=class extends ct{constructor(){super(...arguments),this.open=!0,this.i=t=>{t.defaultPrevented||void 0===this.context||this.context.toggleParameter()}}willUpdate(t){super.willUpdate(t),void 0!==this.context&&(this.open=this.context.isParameterOpened)}render(){const t=this.context;if(!t)return I;const e=t.isParameterOpened?"fa-angle-up":"fa-angle-down",i=void 0!==t.parameter?Object.entries(t.parameter):[];return P`
<link href="https://soul-master.github.io/fa-light/style.css" rel="stylesheet" />
<div id="itemWrapper" @click=${this.i}>
    <span id="itemIcon" class="fa-sliders-h"></span>
    <p class="title">Configuration Parameter</p>
    <p class="desc">
        Initial object for resolving url. It might be overrided by Regex named groups.
    </p>
    <span id="openIcon" class="${e}"></span>
</div>
<div id="contentWrapper">
    ${$t(i,(t=>t[0]),(e=>function(t,[e,i]){const s=i=>{if(i.defaultPrevented)return;const s=i.target;t.updateParameter(e,s.value.trim())};return P`
<div>
    <label>${e}</label>
    <input type="text" value="${i}" @change=${s} />
</div>
`}(t,e)))}
</div>
`}};St.styles=[kt],et([nt({type:Boolean,reflect:!0})],St.prototype,"open",void 0),St=et([it("response-parameter")],St);const _t=n`#itemWrapper {
    position: relative;
    display: grid;
    grid-template-columns: 1fr auto auto auto;
    background: #fff;
    border: 1px solid rgba(0,0,0,.1);
    border-radius: .33rem;
    margin: 5px 0;
    padding: 9px 16px;
    min-height: 48px;
    cursor: default;
}

:host([open]) #itemWrapper {
    margin-bottom: 0;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
}

#itemWrapper:hover {
    background: hsla(0,0%,100%,.33);
}

p {
    margin: 0;
    padding: 0;
}

#itemWrapper p.title {
    line-height: 16px;
    font-size: 14px;
    white-space: nowrap;
    align-self: end;
}

:host([open]) #itemWrapper {
    grid-row: 1/2 span;
}

#itemWrapper p.desc {
    grid-row: 2;
    padding-bottom: 8px;
    color: rgba(0,0,0,.66);
    font-size: 12px;
    line-height: 16px;
    align-self: center;
}

:host([open]) #itemWrapper p.desc {
    display: none;
}

#itemWrapper toggle-button {
    grid-row: 1/2 span;
    grid-column: 2;
    align-self: center;
    vertical-align: text-top;
    margin-right: 8px;
}

#itemWrapper #openIcon {
    grid-row: 1/2 span;
    grid-column: 4;
    align-self: center;
    margin-left: 8px;
    font-size: 20px;
}

#contentWrapper {
    display: none;
    padding-left: 56px;
    border: 1px solid rgba(0,0,0,.1);
    border-radius: .33rem;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    background: #fff;
}

:host([open]) #contentWrapper {
    display: block;
}

#contentWrapper > div:first-child {
    margin-top: 35px;
}

#contentWrapper > div:last-child {
    margin-bottom: 35px;
}

#contentWrapper > div {
    display: grid;
    grid-template-columns: 100px 1fr;
    line-height: 25px;
}

    #contentWrapper > div + div {
        margin-top: 10px;
    }

    #contentWrapper > div > label {
        display: inline-block;
        width: 120px;
    }

    #contentWrapper > div > input {
        grid-column: 2;
        margin: 0 16px;
    }`;let Ct=class extends ct{constructor(){super(...arguments),this.open=!0}willUpdate(t){super.willUpdate(t),void 0!==this.context&&(this.open=this.context.isOpened)}render(){const t=this.context;if(!t)return I;const e=t.isOpened?"fa-angle-up":"fa-angle-down";return P`
<link href="https://soul-master.github.io/fa-light/style.css" rel="stylesheet" />
<div id="itemWrapper" @click=${this.u}>
    <p class="title">${t.comment}</p>
    <p class="desc">${t.source}</p>
    <toggle-button ?selected=${t.isEnabled} @click=${this.g}></toggle-button>
    <span id="openIcon" class="${e}"></span>
</div>
<div id="contentWrapper">
    <div>
        <label>Source</label>
        <input type="text" value="${t.source}" @change=${this._} />
    </div>
    <div>
        <label>Pattern</label>
        <input type="text" value="${t.pattern}" @change=${this.C} />
    </div>
</div>
`}g(t){t.defaultPrevented||void 0===this.context||(t.preventDefault(),this.context.toggle())}u(t){t.defaultPrevented||void 0===this.context||(t.preventDefault(),this.context.toggleOpen())}_(t){if(t.defaultPrevented||void 0===this.context||!t.target)return;const e=t.target;this.context.updateSource(e.value.trim())}C(t){if(t.defaultPrevented||void 0===this.context||!t.target)return;const e=t.target;this.context.updatePattern(e.value.trim())}};Ct.styles=[_t],et([nt({type:Boolean,reflect:!0})],Ct.prototype,"open",void 0),Ct=et([it("response-rule")],Ct);const Wt=n`:host {
    display: block;
    padding: 5px 0;
}

h2 {
    margin: 14px 0;
    padding: 0;
    font-size: 28px;
    font-weight: 500;
}

h2 a {
    text-decoration: none;
    color: inherit;
}

    h2 a:hover {
        text-decoration: underline;
    }

    h2 span {
        font-size: 24px;
        margin-left: 6px;
        margin-right: 8px;
        color: #5C5C5C;
        vertical-align: middle;
    }

    h2 a {
        color: #5C5C5C;
    }

p {
    margin: 0;
    padding: 0;
}

h2 + p {
    margin: 20px 0;
    line-height: 16px;
    color: #5C5C5C;
}

h4 {
    margin-top: 34px;
    margin-bottom: 11px;
    padding: 0px;
    line-height: 16px;
    font-weight: 500;
    font-size: 15px;
}`;let At=class extends ct{render(){const t=this.context;return void 0===t?I:P`
<link href="https://soul-master.github.io/fa-light/style.css" rel="stylesheet" />
${function(t){if(void 0===t.selectedItem)return P`<h2>${t.name}</h2>`;const e=async e=>{e.defaultPrevented||await t.selectItem(void 0)};return P`
<h2>
    <a href="javascript:void(0)" @click=${e}>${t.name}</a>
    <span class="fa-angle-right"></span>${t.selectedItem.name}
</h2>
`}(t)}
${function(t){return void 0!==t.selectedItem?function(t){if(void 0===t)return I;const e=[P`
<p>
    You need to manually re-install configuration to update running proxy.
</p>
`];let i;for(let s=0;s<t.rules.length;s++){const n=t.rules[s];n.group&&n.group!==i&&(e.push(P`<h4>${n.group}</h4>`),i=n.group),e.push(P`<response-rule .context=${lt(n)}></response-rule>`)}return e.push(P`
<h4>Parameters</h4>
<response-parameter .context=${lt(t)}></response-parameter>
    `),e}(t.selectedConfig):function(t){const e=t.autoResponders,i=t.selectItem;if(!e.length)return I;const s=[P`
<p>
    Select AutoResponder to be installed. Only one configuration can be active at the same time.
</p>
`];let n;const r={scope:t.scope};for(let t=0;t<e.length;t++){const o=e[t],a=async t=>{if(t.defaultPrevented)return;window.getSelection()?.toString().length||i(o)};o.group&&o.group!==n&&(s.push(P`
<h4>${o.group}</h4>
`),n=o.group),s.push(P`
<auto-responder-item .context=${lt(o,r)} @click=${a}></auto-responder-item>
`)}return s}(t)}(t)}
`}};At.styles=[Wt],At=et([it("setting-page")],At);const Ut=n`:host {
    display: block;
    width: 240px;
    cursor: default;
    padding: 5px;
}

header {
    height: 75px;
    padding: 8px 11px 7px 11px;
    display: grid;
    grid-template-columns: 60px 11px auto;
    grid-template-rows: 33px 27px;
    margin-bottom: 17px;
    box-sizing: border-box;
    border-radius: 6px;
}

/*
    header:hover {
        background: rgba(0, 0, 0, 0.03);
    }
*/

div.logo {
    display: inline-block;
    border-radius: 30px;
    background: #e7e7e7;
    text-align: center;
    grid-row: 1/span 2;
}

    div.logo > span {
        margin-left: 5px;
        font-size: 32px;
        line-height: 60px;
    }

header > h1 {
    grid-column: 3;
    margin: 0;
    padding: 0;
    font-size: 16px;
    font-weight: 700;
    line-height: 24px;
    align-self: end;
}

header > p[role="doc-subtitle"] {
    grid-row: 2;
    grid-column: 3;
    margin: 0;
    padding: 0;
    font-size: 14px;
    line-height: 20px;
    align-self: start;
    white-space: nowrap;
}

div.content {
    padding: 0 11px;
}

button {
    position: relative;
    display: block;
    width: 100%;
    height: 36px;
    margin: 0;
    padding: 0 16px;
    border: 0;
    border-radius: 5px;
    line-height: 36px;
    background: transparent;
    text-align: left;
}

    button:hover,
    button.selected {
        background: rgba(0, 0, 0, 0.03);
    }

    button > span {
        display: inline-block;
        width: 16px;
        height: 16px;
        font-size: 16px;
        line-height: 36px !important;
        vertical-align: top;
    }

        button > span:first-child {
            margin-right: 8px;
        }

    button .selected {
        background: rgba(0, 0, 0, 0.03);
    }

        button.selected::after {
            width: 3px;
            content: '';
            display: block;
            position: absolute;
            top: 10px;
            height: 16px;
            background: #0055A1;
            left: 0;
            border-radius: 2px;
        }

    button + button {
        margin-top: 4px;
    }
`;let zt=class extends ct{render(){const t=this.context;return P`
<link href="https://soul-master.github.io/fa-light/style.css" rel="stylesheet" />
<header>
    <div class="logo">
        <span class="fa-code-branch"></span>
    </div>
   <h1>App Proxy</h1>
   <p role="doc-subtitle">Gateway for App Dev</p>
</header>
<div class="content">
    ${function(t){return void 0!==t&&t.scopes.length?$t(t.scopes,(t=>t.scope),(e=>function(t,e){let i=[];e.scope===t.selectedScopeName&&i.push("selected");const s=()=>t.changeTemplate(e);return P`
<button class=${i.join(" ")} @click=${s}>
    <span class="fa-${e.icon}"></span>${e.name}
</button>
`}(t,e))):I}(t)}
</div>
`}};zt.styles=[Ut],zt=et([it("setting-sidebar")],zt);const Rt=n`:host {
    display: grid;
    height: 100vh;
    min-height: 100vh;
    grid-template-columns: auto 30px 1fr 24px;
    overflow-y: auto;
    overflow-y: overlay;
    background: #eff4f9;
}

setting-page {
    grid-column: 3;
}
`;let Pt=class extends ct{render(){const t=this.context;return void 0===t?I:P`
<setting-sidebar .context=${t}></setting-sidebar>
<setting-page .context=${lt(t.selectedScope)}></setting-page>
`}};Pt.styles=[Rt],Pt=et([it("installation-window")],Pt);let Et=1;class It{constructor(t){this.U=Et++,this.name=t.name,this.icon=t.icon,this.path=t.path,this.group=t.group,this.description=t.description}}let Ot=1;class Tt{constructor(t){this.U=Ot++,this.scope=t.scope,this.name=t.name,this.icon=t.icon,this.autoResponders=t.autoResponders.map((t=>new It(t)))}}let jt=1;class Mt{constructor(t){this.U=jt++;const e=this.scopes=t.scopes.map((t=>new Tt(t))),i=this.selectedScopeName=t.selectedScopeName;let s=e.find((t=>t.scope===i));void 0===s&&e.length&&(s=e[0]),this.selectedScopeName=void 0!==s?s.scope:void 0}}let Nt=1;class Ft{constructor(t){this.U=Nt++,this.group=t.group,this.comment=t.comment,this.source=t.source,this.pattern=t.pattern,this.patternFlag=t.patternFlag,this.customReferrerHeader=t.customReferrerHeader,this.isEnabled=t.isEnabled??!0}}let Bt=1;class Dt{constructor(t){this.U=Bt++,this.scope=t.scope,this.rules=t.rules.map((t=>new Ft(t))),this.parameter={...t.parameter}}}class Lt{constructor(t,e={}){this._changeHandlers=[];const i=this._onModelChanged=this._onModelChanged.bind(this),s=this._onStateChanged=this._onStateChanged.bind(this);this.model=t,this._model=new Proxy(t,{set(e,s,n){const r=s;return t[r]===n||(t[r]=n,i(r)),!0}}),this._state=new Proxy(e,{set(t,i,n){const r=i;return e[r]===n||(e[r]=n,s(r)),!0}})}onChanged(t){return!this._changeHandlers.includes(t)&&(this._changeHandlers.push(t),!0)}offChanged(t){const e=this._changeHandlers.indexOf(t);return-1!==e&&(this._changeHandlers.splice(e,1),!0)}async onReady(t){}async onDestroy(){}_onModelChanged(t){t in this&&this._onPropertyChanged(t)}_onStateChanged(t){t in this&&this._onPropertyChanged(t)}_onPropertyChanged(t){this._changeHandlers.forEach((e=>e(t)))}}class qt extends Lt{get selectedScopeName(){return this.model.selectedScopeName}get scopes(){return this.model.scopes}get selectedScope(){return this._state.selectedScope}constructor(t){super(t,{selectedScope:t.scopes.find((e=>e.scope===t.selectedScopeName))})}changeTemplate(t){const{_model:e,_state:i}=this;void 0!==t?(e.selectedScopeName=t.scope,i.selectedScope=t):e.selectedScopeName=i.selectedScope=void 0}}async function Ht(t,e,i){t="string"==typeof t?await caches.open(t):t,await t.put(new Request(e),function(t){const e=new Blob([JSON.stringify(t)],{type:"application/json"});return new Response(e,{status:200,statusText:"OK"})}(i))}const Jt=new Map,Kt=new class{constructor(t){const e=this.q=[];t=t||this,this.invoke=function(){const i=e.length;if(0===i)return!0;if(1===i){return!1!==e[0].apply(t,arguments)}const s=e.slice(0).map((e=>e.apply(t,arguments)));return s.every((t=>!1!==t))}.bind(this)}get length(){return this.q.length}add(t){this.q.includes(t)||this.q.push(t)}remove(t){const e=this.q.indexOf(t);-1!==e&&this.q.splice(e,1)}clear(){this.q.length=0}hasSubscriber(){return!!this.q.length}},Vt=new URL("/Apps/AppProxy/",location.href).href,Zt=Vt+"config",Gt=Vt+"install";async function Yt(t){const e=Zt+t;return await async function(t,e){t="string"==typeof t?await caches.open(t):t;const i=await t.match(new Request(e));if(void 0!==i)return i.json()}("AppProxy",e)}async function Qt(t,e){const i=Zt+t.scope,s=await async function(t){return(await navigator.serviceWorker.getRegistrations()).find((e=>null!==e.active&&!!e.scope.includes(t)))}(t.scope);if(void 0!==s){if(!await s.unregister())throw"Error while unregister active worker"}const n=await caches.open("AppProxy"),r=void 0===await Yt(t.scope)||await n.delete(new Request(i));return r&&Kt.invoke({isInstall:!1,scope:t.scope,path:e}),r}async function Xt(t){if(Jt.has(t))return Jt.get(t);let e;e=await async function(t){const e=new URL("./rules/"+t,window.indexUrl).href,i=await fetch(e).then((t=>t.json()));return i}(t.path);const i=new Dt(e);return Jt.set(t,i),i}function te(t){const e={comment:t.comment,source:t.source,pattern:t.pattern};return void 0!==t.group&&(e.group=t.group),void 0!==t.group&&(e.patternFlag=t.patternFlag),void 0!==t.customReferrerHeader&&(e.customReferrerHeader=t.customReferrerHeader),e}class ee extends Lt{get name(){return this.model.name}get icon(){return this.model.icon}get path(){return this.model.path}get group(){return this.model.group}get description(){return this.model.description}get isEnabled(){return this._state.isEnabled}get isUpdating(){return this._state.isUpdating}get scope(){return this._state.scope}constructor(t){super(t,{isEnabled:!1,isUpdating:!1,scope:void 0}),this.onProxyChanged=this.onProxyChanged.bind(this)}async onReady(t){this._state.scope=t?.scope,Kt.add(this.onProxyChanged)}async onDestroy(){Kt.remove(this.onProxyChanged)}async toggle(){if(void 0===this.scope)return!1;let t,e;this._state.isUpdating=!0;try{t=await Xt(this.model)}catch{return alert("Unable to load  config"),void(this._state.isUpdating=!1)}try{e=this.isEnabled?await Qt(t,this.path):await async function(t,e){const i=Zt+t.scope,s=t.rules.filter((t=>t.isEnabled)).map(te),n={path:e,scope:t.scope,rules:s};if(void 0!==t.parameter&&(n.parameter={...t.parameter}),await Ht("AppProxy",i,n),void 0===await navigator.serviceWorker.register(`${Gt}${t.scope}`,{scope:t.scope,updateViaCache:"none"}))throw"Unable to install";return Kt.invoke({isInstall:!0,scope:t.scope,path:e}),!0}(t,this.path)}catch(t){"string"==typeof t&&alert(t),t instanceof Error&&alert(t.message),e=!1}return this._state.isUpdating=!1,e||(alert("Unable to install/uninstall"),e)}onProxyChanged(t){if(t.scope!==this.scope)return;let e;if(t.path===this.path)e=t.isInstall;else{if(!t.isInstall)return;e=!1}this._state.isEnabled=e}_onStateChanged(t){super._onStateChanged(t),"scope"===t&&this.J()}async J(){const{_state:t,scope:e,model:i}=this;if(void 0===e)return void(t.isEnabled=!1);const s=await async function(t,e){return(await Yt(t))?.path===e.path}(e,i);t.isEnabled=s}}class ie extends Lt{get parameter(){return this.model.parameter}get isParameterOpened(){return this._state.isParameterOpened}constructor(t){super(t,{isParameterOpened:!0})}toggleParameter(){this._state.isParameterOpened=!this.isParameterOpened}updateParameter(t,e){const i=this._model.parameter;for(const s in i)if(i.hasOwnProperty(s)&&s===t){i[s]=e;break}}}class se extends Lt{get group(){return this.model.group}get comment(){return this.model.comment}get pattern(){return this.model.pattern}get source(){return this.model.source}get isEnabled(){return this.model.isEnabled}get isOpened(){return this._state.isOpened}constructor(t){super(t,{isOpened:!1})}toggle(){this._model.isEnabled=!this.isEnabled}toggleOpen(){this._state.isOpened=!this._state.isOpened}updateSource(t){this._model.source=t}updatePattern(t){this._model.pattern=t}}class ne extends Lt{get scope(){return this.model.scope}get name(){return this.model.name}get icon(){return this.model.icon}get autoResponders(){return this.model.autoResponders}get selectedItem(){return this._state.selectedItem}get selectedConfig(){return this._state.selectedConfig}constructor(t){super(t),this.selectItem=this.selectItem.bind(this)}async selectItem(t){const e=this._state;if(void 0!==t)try{e.selectedConfig=await Xt(t),e.selectedItem=t}catch{return void alert("Unable to load  config")}else e.selectedConfig=this._state.selectedItem=void 0}}async function re(){const t=location.href.includes("//cdn.")?"cdn.json":"legacy.json",e=new URL("./rules/"+t,import.meta.url).href,i=await fetch(e).then((t=>t.json()));!async function(t){T(P`<installation-window .context=${lt(t)}></installation-window>`,document.body)}(new Mt({scopes:i,selectedScopeName:void 0}))}function oe(t){const e=document.createElement("link");e.rel="stylesheet",e.href=new URL(t,window.indexUrl).href,document.head.appendChild(e)}window.indexUrl=import.meta.url,oe("https://soul-master.github.io/fa-light/style.css"),oe("./css/index.css"),at(Mt,qt),at(Tt,ne),at(It,ee),at(Dt,ie),at(Ft,se),EikonNow.init({noEval:!0}),window.addEventListener("load",re);
