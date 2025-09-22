'use strict';

var n,l$1,u$1,i$1,r$1,o$1,e$1,f$1,c$1,s$1,a$1,p$1={},v$1=[],y$1=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,w$1=Array.isArray;function d$1(n,l){for(var u in l)n[u]=l[u];return n}function g(n){n&&n.parentNode&&n.parentNode.removeChild(n);}function _(l,u,t){var i,r,o,e={};for(o in u)"key"==o?i=u[o]:"ref"==o?r=u[o]:e[o]=u[o];if(arguments.length>2&&(e.children=arguments.length>3?n.call(arguments,2):t),"function"==typeof l&&null!=l.defaultProps)for(o in l.defaultProps) void 0===e[o]&&(e[o]=l.defaultProps[o]);return m$1(l,e,i,r,null)}function m$1(n,t,i,r,o){var e={type:n,props:t,key:i,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:null==o?++u$1:o,__i:-1,__u:0};return null==o&&null!=l$1.vnode&&l$1.vnode(e),e}function k$1(n){return n.children}function x(n,l){this.props=n,this.context=l;}function S(n,l){if(null==l)return n.__?S(n.__,n.__i+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return "function"==typeof n.type?S(n):null}function C$1(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return C$1(n)}}function M(n){(!n.__d&&(n.__d=true)&&i$1.push(n)&&!$.__r++||r$1!=l$1.debounceRendering)&&((r$1=l$1.debounceRendering)||o$1)($);}function $(){for(var n,u,t,r,o,f,c,s=1;i$1.length;)i$1.length>s&&i$1.sort(e$1),n=i$1.shift(),s=i$1.length,n.__d&&(t=void 0,r=void 0,o=(r=(u=n).__v).__e,f=[],c=[],u.__P&&((t=d$1({},r)).__v=r.__v+1,l$1.vnode&&l$1.vnode(t),O(u.__P,t,r,u.__n,u.__P.namespaceURI,32&r.__u?[o]:null,f,null==o?S(r):o,!!(32&r.__u),c),t.__v=r.__v,t.__.__k[t.__i]=t,N(f,t,c),r.__e=r.__=null,t.__e!=o&&C$1(t)));$.__r=0;}function I(n,l,u,t,i,r,o,e,f,c,s){var a,h,y,w,d,g,_,m=t&&t.__k||v$1,b=l.length;for(f=P(u,l,m,f,b),a=0;a<b;a++)null!=(y=u.__k[a])&&(h=-1==y.__i?p$1:m[y.__i]||p$1,y.__i=a,g=O(n,y,h,i,r,o,e,f,c,s),w=y.__e,y.ref&&h.ref!=y.ref&&(h.ref&&B$1(h.ref,null,y),s.push(y.ref,y.__c||w,y)),null==d&&null!=w&&(d=w),(_=!!(4&y.__u))||h.__k===y.__k?f=A$1(y,f,n,_):"function"==typeof y.type&&void 0!==g?f=g:w&&(f=w.nextSibling),y.__u&=-7);return u.__e=d,f}function P(n,l,u,t,i){var r,o,e,f,c,s=u.length,a=s,h=0;for(n.__k=new Array(i),r=0;r<i;r++)null!=(o=l[r])&&"boolean"!=typeof o&&"function"!=typeof o?(f=r+h,(o=n.__k[r]="string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?m$1(null,o,null,null,null):w$1(o)?m$1(k$1,{children:o},null,null,null):null==o.constructor&&o.__b>0?m$1(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o).__=n,o.__b=n.__b+1,e=null,-1!=(c=o.__i=L(o,u,f,a))&&(a--,(e=u[c])&&(e.__u|=2)),null==e||null==e.__v?(-1==c&&(i>s?h--:i<s&&h++),"function"!=typeof o.type&&(o.__u|=4)):c!=f&&(c==f-1?h--:c==f+1?h++:(c>f?h--:h++,o.__u|=4))):n.__k[r]=null;if(a)for(r=0;r<s;r++)null!=(e=u[r])&&0==(2&e.__u)&&(e.__e==t&&(t=S(e)),D$1(e,e));return t}function A$1(n,l,u,t){var i,r;if("function"==typeof n.type){for(i=n.__k,r=0;i&&r<i.length;r++)i[r]&&(i[r].__=n,l=A$1(i[r],l,u,t));return l}n.__e!=l&&(t&&(l&&n.type&&!l.parentNode&&(l=S(n)),u.insertBefore(n.__e,l||null)),l=n.__e);do{l=l&&l.nextSibling;}while(null!=l&&8==l.nodeType);return l}function L(n,l,u,t){var i,r,o,e=n.key,f=n.type,c=l[u],s=null!=c&&0==(2&c.__u);if(null===c&&null==n.key||s&&e==c.key&&f==c.type)return u;if(t>(s?1:0))for(i=u-1,r=u+1;i>=0||r<l.length;)if(null!=(c=l[o=i>=0?i--:r++])&&0==(2&c.__u)&&e==c.key&&f==c.type)return o;return  -1}function T$1(n,l,u){"-"==l[0]?n.setProperty(l,null==u?"":u):n[l]=null==u?"":"number"!=typeof u||y$1.test(l)?u:u+"px";}function j$1(n,l,u,t,i){var r,o;n:if("style"==l)if("string"==typeof u)n.style.cssText=u;else {if("string"==typeof t&&(n.style.cssText=t=""),t)for(l in t)u&&l in u||T$1(n.style,l,"");if(u)for(l in u)t&&u[l]==t[l]||T$1(n.style,l,u[l]);}else if("o"==l[0]&&"n"==l[1])r=l!=(l=l.replace(f$1,"$1")),o=l.toLowerCase(),l=o in n||"onFocusOut"==l||"onFocusIn"==l?o.slice(2):l.slice(2),n.l||(n.l={}),n.l[l+r]=u,u?t?u.u=t.u:(u.u=c$1,n.addEventListener(l,r?a$1:s$1,r)):n.removeEventListener(l,r?a$1:s$1,r);else {if("http://www.w3.org/2000/svg"==i)l=l.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=l&&"height"!=l&&"href"!=l&&"list"!=l&&"form"!=l&&"tabIndex"!=l&&"download"!=l&&"rowSpan"!=l&&"colSpan"!=l&&"role"!=l&&"popover"!=l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null==u||false===u&&"-"!=l[4]?n.removeAttribute(l):n.setAttribute(l,"popover"==l&&1==u?"":u));}}function F(n){return function(u){if(this.l){var t=this.l[u.type+n];if(null==u.t)u.t=c$1++;else if(u.t<t.u)return;return t(l$1.event?l$1.event(u):u)}}}function O(n,u,t,i,r,o,e,f,c,s){var a,h,p,v,y,_,m,b,S,C,M,$,P,A,H,L,T,j=u.type;if(null!=u.constructor)return null;128&t.__u&&(c=!!(32&t.__u),o=[f=u.__e=t.__e]),(a=l$1.__b)&&a(u);n:if("function"==typeof j)try{if(b=u.props,S="prototype"in j&&j.prototype.render,C=(a=j.contextType)&&i[a.__c],M=a?C?C.props.value:a.__:i,t.__c?m=(h=u.__c=t.__c).__=h.__E:(S?u.__c=h=new j(b,M):(u.__c=h=new x(b,M),h.constructor=j,h.render=E),C&&C.sub(h),h.props=b,h.state||(h.state={}),h.context=M,h.__n=i,p=h.__d=!0,h.__h=[],h._sb=[]),S&&null==h.__s&&(h.__s=h.state),S&&null!=j.getDerivedStateFromProps&&(h.__s==h.state&&(h.__s=d$1({},h.__s)),d$1(h.__s,j.getDerivedStateFromProps(b,h.__s))),v=h.props,y=h.state,h.__v=u,p)S&&null==j.getDerivedStateFromProps&&null!=h.componentWillMount&&h.componentWillMount(),S&&null!=h.componentDidMount&&h.__h.push(h.componentDidMount);else {if(S&&null==j.getDerivedStateFromProps&&b!==v&&null!=h.componentWillReceiveProps&&h.componentWillReceiveProps(b,M),!h.__e&&null!=h.shouldComponentUpdate&&!1===h.shouldComponentUpdate(b,h.__s,M)||u.__v==t.__v){for(u.__v!=t.__v&&(h.props=b,h.state=h.__s,h.__d=!1),u.__e=t.__e,u.__k=t.__k,u.__k.some(function(n){n&&(n.__=u);}),$=0;$<h._sb.length;$++)h.__h.push(h._sb[$]);h._sb=[],h.__h.length&&e.push(h);break n}null!=h.componentWillUpdate&&h.componentWillUpdate(b,h.__s,M),S&&null!=h.componentDidUpdate&&h.__h.push(function(){h.componentDidUpdate(v,y,_);});}if(h.context=M,h.props=b,h.__P=n,h.__e=!1,P=l$1.__r,A=0,S){for(h.state=h.__s,h.__d=!1,P&&P(u),a=h.render(h.props,h.state,h.context),H=0;H<h._sb.length;H++)h.__h.push(h._sb[H]);h._sb=[];}else do{h.__d=!1,P&&P(u),a=h.render(h.props,h.state,h.context),h.state=h.__s;}while(h.__d&&++A<25);h.state=h.__s,null!=h.getChildContext&&(i=d$1(d$1({},i),h.getChildContext())),S&&!p&&null!=h.getSnapshotBeforeUpdate&&(_=h.getSnapshotBeforeUpdate(v,y)),L=a,null!=a&&a.type===k$1&&null==a.key&&(L=V(a.props.children)),f=I(n,w$1(L)?L:[L],u,t,i,r,o,e,f,c,s),h.base=u.__e,u.__u&=-161,h.__h.length&&e.push(h),m&&(h.__E=h.__=null);}catch(n){if(u.__v=null,c||null!=o)if(n.then){for(u.__u|=c?160:128;f&&8==f.nodeType&&f.nextSibling;)f=f.nextSibling;o[o.indexOf(f)]=null,u.__e=f;}else {for(T=o.length;T--;)g(o[T]);z$1(u);}else u.__e=t.__e,u.__k=t.__k,n.then||z$1(u);l$1.__e(n,u,t);}else null==o&&u.__v==t.__v?(u.__k=t.__k,u.__e=t.__e):f=u.__e=q(t.__e,u,t,i,r,o,e,c,s);return (a=l$1.diffed)&&a(u),128&u.__u?void 0:f}function z$1(n){n&&n.__c&&(n.__c.__e=true),n&&n.__k&&n.__k.forEach(z$1);}function N(n,u,t){for(var i=0;i<t.length;i++)B$1(t[i],t[++i],t[++i]);l$1.__c&&l$1.__c(u,n),n.some(function(u){try{n=u.__h,u.__h=[],n.some(function(n){n.call(u);});}catch(n){l$1.__e(n,u.__v);}});}function V(n){return "object"!=typeof n||null==n||n.__b&&n.__b>0?n:w$1(n)?n.map(V):d$1({},n)}function q(u,t,i,r,o,e,f,c,s){var a,h,v,y,d,_,m,b=i.props,k=t.props,x=t.type;if("svg"==x?o="http://www.w3.org/2000/svg":"math"==x?o="http://www.w3.org/1998/Math/MathML":o||(o="http://www.w3.org/1999/xhtml"),null!=e)for(a=0;a<e.length;a++)if((d=e[a])&&"setAttribute"in d==!!x&&(x?d.localName==x:3==d.nodeType)){u=d,e[a]=null;break}if(null==u){if(null==x)return document.createTextNode(k);u=document.createElementNS(o,x,k.is&&k),c&&(l$1.__m&&l$1.__m(t,e),c=false),e=null;}if(null==x)b===k||c&&u.data==k||(u.data=k);else {if(e=e&&n.call(u.childNodes),b=i.props||p$1,!c&&null!=e)for(b={},a=0;a<u.attributes.length;a++)b[(d=u.attributes[a]).name]=d.value;for(a in b)if(d=b[a],"children"==a);else if("dangerouslySetInnerHTML"==a)v=d;else if(!(a in k)){if("value"==a&&"defaultValue"in k||"checked"==a&&"defaultChecked"in k)continue;j$1(u,a,null,d,o);}for(a in k)d=k[a],"children"==a?y=d:"dangerouslySetInnerHTML"==a?h=d:"value"==a?_=d:"checked"==a?m=d:c&&"function"!=typeof d||b[a]===d||j$1(u,a,d,b[a],o);if(h)c||v&&(h.__html==v.__html||h.__html==u.innerHTML)||(u.innerHTML=h.__html),t.__k=[];else if(v&&(u.innerHTML=""),I("template"==t.type?u.content:u,w$1(y)?y:[y],t,i,r,"foreignObject"==x?"http://www.w3.org/1999/xhtml":o,e,f,e?e[0]:i.__k&&S(i,0),c,s),null!=e)for(a=e.length;a--;)g(e[a]);c||(a="value","progress"==x&&null==_?u.removeAttribute("value"):null!=_&&(_!==u[a]||"progress"==x&&!_||"option"==x&&_!=b[a])&&j$1(u,a,_,b[a],o),a="checked",null!=m&&m!=u[a]&&j$1(u,a,m,b[a],o));}return u}function B$1(n,u,t){try{if("function"==typeof n){var i="function"==typeof n.__u;i&&n.__u(),i&&null==u||(n.__u=n(u));}else n.current=u;}catch(n){l$1.__e(n,t);}}function D$1(n,u,t){var i,r;if(l$1.unmount&&l$1.unmount(n),(i=n.ref)&&(i.current&&i.current!=n.__e||B$1(i,null,u)),null!=(i=n.__c)){if(i.componentWillUnmount)try{i.componentWillUnmount();}catch(n){l$1.__e(n,u);}i.base=i.__P=null;}if(i=n.__k)for(r=0;r<i.length;r++)i[r]&&D$1(i[r],u,t||"function"!=typeof n.type);t||g(n.__e),n.__c=n.__=n.__e=void 0;}function E(n,l,u){return this.constructor(n,u)}function G(u,t,i){var r,o,e,f;t==document&&(t=document.documentElement),l$1.__&&l$1.__(u,t),o=(r="function"=="undefined")?null:t.__k,e=[],f=[],O(t,u=(t).__k=_(k$1,null,[u]),o||p$1,p$1,t.namespaceURI,o?null:t.firstChild?n.call(t.childNodes):null,e,o?o.__e:t.firstChild,r,f),N(e,u,f);}n=v$1.slice,l$1={__e:function(n,l,u,t){for(var i,r,o;l=l.__;)if((i=l.__c)&&!i.__)try{if((r=i.constructor)&&null!=r.getDerivedStateFromError&&(i.setState(r.getDerivedStateFromError(n)),o=i.__d),null!=i.componentDidCatch&&(i.componentDidCatch(n,t||{}),o=i.__d),o)return i.__E=i}catch(l){n=l;}throw n}},u$1=0,x.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!=this.state?this.__s:this.__s=d$1({},this.state),"function"==typeof n&&(n=n(d$1({},u),this.props)),n&&d$1(u,n),null!=n&&this.__v&&(l&&this._sb.push(l),M(this));},x.prototype.forceUpdate=function(n){this.__v&&(this.__e=true,n&&this.__h.push(n),M(this));},x.prototype.render=k$1,i$1=[],o$1="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,e$1=function(n,l){return n.__v.__b-l.__v.__b},$.__r=0,f$1=/(PointerCapture)$|Capture$/i,c$1=0,s$1=F(false),a$1=F(true);

var t,r,u,i,o=0,f=[],c=l$1,e=c.__b,a=c.__r,v=c.diffed,l=c.__c,m=c.unmount,s=c.__;function p(n,t){c.__h&&c.__h(r,n,o||t),o=0;var u=r.__H||(r.__H={__:[],__h:[]});return n>=u.__.length&&u.__.push({}),u.__[n]}function d(n){return o=1,h(D,n)}function h(n,u,i){var o=p(t++,2);if(o.t=n,!o.__c&&(o.__=[D(void 0,u),function(n){var t=o.__N?o.__N[0]:o.__[0],r=o.t(t,n);t!==r&&(o.__N=[r,o.__[1]],o.__c.setState({}));}],o.__c=r,!r.__f)){var f=function(n,t,r){if(!o.__c.__H)return  true;var u=o.__c.__H.__.filter(function(n){return !!n.__c});if(u.every(function(n){return !n.__N}))return !c||c.call(this,n,t,r);var i=o.__c.props!==n;return u.forEach(function(n){if(n.__N){var t=n.__[0];n.__=n.__N,n.__N=void 0,t!==n.__[0]&&(i=true);}}),c&&c.call(this,n,t,r)||i};r.__f=true;var c=r.shouldComponentUpdate,e=r.componentWillUpdate;r.componentWillUpdate=function(n,t,r){if(this.__e){var u=c;c=void 0,f(n,t,r),c=u;}e&&e.call(this,n,t,r);},r.shouldComponentUpdate=f;}return o.__N||o.__}function y(n,u){var i=p(t++,3);!c.__s&&C(i.__H,u)&&(i.__=n,i.u=u,r.__H.__h.push(i));}function A(n){return o=5,T(function(){return {current:n}},[])}function T(n,r){var u=p(t++,7);return C(u.__H,r)&&(u.__=n(),u.__H=r,u.__h=n),u.__}function j(){for(var n;n=f.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(z),n.__H.__h.forEach(B),n.__H.__h=[];}catch(t){n.__H.__h=[],c.__e(t,n.__v);}}c.__b=function(n){r=null,e&&e(n);},c.__=function(n,t){n&&t.__k&&t.__k.__m&&(n.__m=t.__k.__m),s&&s(n,t);},c.__r=function(n){a&&a(n),t=0;var i=(r=n.__c).__H;i&&(u===r?(i.__h=[],r.__h=[],i.__.forEach(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0;})):(i.__h.forEach(z),i.__h.forEach(B),i.__h=[],t=0)),u=r;},c.diffed=function(n){v&&v(n);var t=n.__c;t&&t.__H&&(t.__H.__h.length&&(1!==f.push(t)&&i===c.requestAnimationFrame||((i=c.requestAnimationFrame)||w)(j)),t.__H.__.forEach(function(n){n.u&&(n.__H=n.u),n.u=void 0;})),u=r=null;},c.__c=function(n,t){t.some(function(n){try{n.__h.forEach(z),n.__h=n.__h.filter(function(n){return !n.__||B(n)});}catch(r){t.some(function(n){n.__h&&(n.__h=[]);}),t=[],c.__e(r,n.__v);}}),l&&l(n,t);},c.unmount=function(n){m&&m(n);var t,r=n.__c;r&&r.__H&&(r.__H.__.forEach(function(n){try{z(n);}catch(n){t=n;}}),r.__H=void 0,t&&c.__e(t,r.__v));};var k="function"==typeof requestAnimationFrame;function w(n){var t,r=function(){clearTimeout(u),k&&cancelAnimationFrame(t),setTimeout(n);},u=setTimeout(r,35);k&&(t=requestAnimationFrame(r));}function z(n){var t=r,u=n.__c;"function"==typeof u&&(n.__c=void 0,u()),r=t;}function B(n){var t=r;n.__c=n.__(),r=t;}function C(n,t){return !n||n.length!==t.length||t.some(function(t,r){return t!==n[r]})}function D(n,t){return "function"==typeof t?t(n):t}

function convertToNumeric(amountStr) {
  let amount;
  // Handle different number formats
  if (amountStr.includes('.') && amountStr.includes(',')) {
    // Check if it's European format (dots as thousand separators, comma as decimal)
    // European: 1.234.567,89 - last separator is comma
    // American: 1,234,567.89 - last separator is dot
    let lastCommaIndex = amountStr.lastIndexOf(',');
    let lastDotIndex = amountStr.lastIndexOf('.');
    if (lastCommaIndex > lastDotIndex) {
      // European format: dots as thousand separators, comma as decimal
      amount = amountStr.replace(/\./g, '').replace(',', '.');
    } else {
      // American format: commas as thousand separators, dot as decimal
      amount = amountStr.replace(/,/g, "");
    }
  } else if (amountStr.includes("'")) {
    // Swiss format: apostrophes as thousand separators
    amount = amountStr.replace(/'/g, "");
  } else {
    // Standard format: remove commas (thousand separators)
    amount = amountStr.replace(/,/g, "");
  }

  // Convert words like 'billion', 'million' to numeric values
  let multiplier = 1;
  if (amount.match(/billion|b$/i)) {
    multiplier = 1e9;
  } else if (amount.match(/million|m$/i)) {
    multiplier = 1e6;
  } else if (amount.match(/thousand|k$/i)) {
    multiplier = 1e3;
  }
  amount = amount.replace(/(billion|million|thousand|[kmb])$/i, "").trim();

  // Parse the numeric value
  return parseFloat(amount) * multiplier;
}
function convertAmount(amountStr, originalCurrency, targetCurrency, rates) {
  let value = parseFloat(amountStr);
  return value / rates[originalCurrency] * rates[targetCurrency];
}

// https://www.xe.com/symbols/
function getSymbol(currency) {
  return {
    EUR: "€",
    USD: "$",
    CNY: "¥",
    JPY: "¥",
    AFN: "؋",
    EGP: "£",
    PHP: "₱",
    CUP: "₱"
  }[currency];
}
function convertTo2Float(num) {
  return Math.floor(num * 100) / 100;
}
function extractAmount(rawText) {
  // Regex for special currency symbols like A$, CA$, etc.
  let specialSymbolRegex = /((CA\$|A\$|CHF)\s*(\d+(?:,\d{3})*(?:\.\d+)?\s?(?:billion|million|thousand|[kmb])?))/i;
  // Regex for basic currencies starting with a symbol, including commas and European formats  
  let symbolRegex = /([\$¥£€₩]\s*(\d+(?:[,.']\d+)*\s?(?:billion|million|thousand|[kmb])?))/i;
  // Regex for currencies ending with a word, including large number words and Chinese characters
  let wordRegex = /((\d+(?:,\d{3})*(?:\.\d+)?\s?(?:billion|million|thousand|[kmb])?)\s*(euros|euro|dollars|dollar|RMB|元|yen|yuan|pounds|USD|EUR|GBP|CNY|JPY|KRW|CHF|AUD|CAD))/i;
  // Regex for currency codes before numbers (e.g., "RMB 1000", "USD 500")
  let prefixRegex = /((USD|EUR|GBP|CNY|JPY|KRW|CHF|AUD|CAD|RMB)\s+(\d+(?:,\d{3})*(?:\.\d+)?\s?(?:billion|million|thousand|[kmb])?))/i;
  let specialSymbolMatch = rawText.match(specialSymbolRegex);
  let symbolMatch = rawText.match(symbolRegex);
  let wordMatch = rawText.match(wordRegex);
  let prefixMatch = rawText.match(prefixRegex);
  let amountMatched = specialSymbolMatch ? specialSymbolMatch[3] : symbolMatch ? symbolMatch[2] : wordMatch ? wordMatch[2] : prefixMatch ? prefixMatch[3] : null;
  let textMatched = specialSymbolMatch ? specialSymbolMatch[0] : symbolMatch ? symbolMatch[0] : wordMatch ? wordMatch[0] : prefixMatch ? prefixMatch[0] : null;
  if (!textMatched || !amountMatched) {
    return null;
  }

  // console.log("SymbolMatch: ", symbolMatch);
  // console.log("WordMatch: ", wordMatch);
  // console.log("PrefixMatch: ", prefixMatch);
  // console.log("AmountMatch: ", amountMatched);

  let currency = "USD";
  if (textMatched.match(/(CA\$|CAD)/i)) {
    currency = "CAD";
  } else if (textMatched.match(/(A\$|AUD)/i)) {
    currency = "AUD";
  } else if (textMatched.match(/(dollar|dollars|\$|USD)/i)) {
    currency = "USD";
  } else if (textMatched.match(/(euro|euros|€|EUR)/i)) {
    currency = "EUR";
  } else if (textMatched.match(/(yen|¥|JPY)/i)) {
    currency = "JPY";
  } else if (textMatched.match(/(₩|KRW)/i)) {
    currency = "KRW";
  } else if (textMatched.match(/(元|yuan|RMB|CNY)/i)) {
    currency = "CNY";
  } else if (textMatched.match(/(pounds|£|GBP)/i)) {
    currency = "GBP";
  } else if (textMatched.match(/(CHF)/i)) {
    currency = "CHF";
  }
  return {
    currency,
    amount: convertToNumeric(amountMatched)
  };
}

const ITEM_VALUE = [{
  name: "Gold Bar (1kg)",
  id: "goldBar",
  value: 66000
}, {
  name: "iPhone 15",
  id: "iphone",
  value: 5999
}, {
  id: "egg",
  name: "Egg(s)",
  value: 1
}, {
  id: "paper",
  name: "Papers",
  value: 0.1
}];
function estimateValue(amount) {
  let res = {};
  for (let i = 0; i < ITEM_VALUE.length; i++) {
    let item = ITEM_VALUE[i];
    if (item.value < amount) {
      res = {
        name: item.name,
        count: Math.floor(amount / item.value),
        id: item.id
      };
      break;
    }
  }
  return res;
}

function PhoneIcon () {
  return _("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    viewBox: "0 -960 960 960",
    className: "cr-fill-themed",
    width: "24"
  }, _("path", {
    d: "M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-200v120h400v-120H280Zm200 100q17 0 28.5-11.5T520-180q0-17-11.5-28.5T480-220q-17 0-28.5 11.5T440-180q0 17 11.5 28.5T480-140ZM280-320h400v-400H280v400Zm0-480h400v-40H280v40Zm0 560v120-120Zm0-560v-40 40Z"
  }));
}

function CoffeeIcon () {
  return _("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    viewBox: "0 -960 960 960",
    width: "24",
    className: "cr-fill-themed"
  }, _("path", {
    d: "M480-120q-117 0-198.5-81.5T200-400q0-77 25.5-155t66-141.5Q332-760 382-800t98-40q49 0 98.5 40t90 103.5Q709-633 734.5-555T760-400q0 117-81.5 198.5T480-120Zm0-80q83 0 141.5-58.5T680-400q0-57-19.5-120t-49-116.5Q582-690 547-725t-67-35q-31 0-66.5 35t-65 88.5Q319-583 299.5-520T280-400q0 83 58.5 141.5T480-200Zm40-40q17 0 28.5-11.5T560-280q0-17-11.5-28.5T520-320q-50 0-85-35t-35-85q0-17-11.5-28.5T360-480q-17 0-28.5 11.5T320-440q0 83 58.5 141.5T520-240Zm-40-240Z"
  }));
}

function EggIcon () {
  return _("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    viewBox: "0 -960 960 960",
    width: "24",
    className: "cr-fill-themed"
  }, _("path", {
    d: "M480-120q-117 0-198.5-81.5T200-400q0-77 25.5-155t66-141.5Q332-760 382-800t98-40q49 0 98.5 40t90 103.5Q709-633 734.5-555T760-400q0 117-81.5 198.5T480-120Zm0-80q83 0 141.5-58.5T680-400q0-57-19.5-120t-49-116.5Q582-690 547-725t-67-35q-31 0-66.5 35t-65 88.5Q319-583 299.5-520T280-400q0 83 58.5 141.5T480-200Zm40-40q17 0 28.5-11.5T560-280q0-17-11.5-28.5T520-320q-50 0-85-35t-35-85q0-17-11.5-28.5T360-480q-17 0-28.5 11.5T320-440q0 83 58.5 141.5T520-240Zm-40-240Z"
  }));
}

function GoldenIcon () {
  return _("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    viewBox: "0 -960 960 960",
    className: "cr-fill-themed",
    width: "24"
  }, _("path", {
    d: "M520-400H400q-17 0-28.5 11.5T360-360q0 17 11.5 28.5T400-320h40q0 17 11.5 28.5T480-280q17 0 28.5-11.5T520-320h40q17 0 28.5-11.5T600-360v-120q0-17-11.5-28.5T560-520H440v-40h120q17 0 28.5-11.5T600-600q0-17-11.5-28.5T560-640h-40q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640h-40q-17 0-28.5 11.5T360-600v120q0 17 11.5 28.5T400-440h120v40ZM160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm0-80h640v-480H160v480Zm0 0v-480 480Z"
  }));
}

function ItemValue({
  itemValue
}) {
  return _("div", {
    className: "mt-2"
  }, _("div", {
    className: "cr-text-sm cr-text-center cr-text-slate-500 dark:cr-text-gray-500"
  }, "Approximately equals to", _("span", {
    className: "cr-text-themed"
  }, ` ${itemValue.count} ${itemValue.name}`)), _("div", {
    className: "cr-flex cr-py-2 cr-justify-center"
  }, Array(Math.min(itemValue.count, 10)).fill(0).map(_$1 => ({
    egg: _(EggIcon, null),
    goldBar: _(GoldenIcon, null),
    iphone: _(PhoneIcon, null),
    paper: _(CoffeeIcon, null)
  })[itemValue.id])));
}

function Floating() {
  const floatingRef = A(null);
  const [popupVisible, setPopupVisible] = d(false);
  const [rawAmount, setRawAmount] = d(0);
  const [rawCurrency, setRawCurrency] = d("USD");
  const [rates, setRates] = d(null);
  const [priorQueue, setPriorQueue] = d(["USD", "GBP", "EUR", "JPY", "CNY", "PHP"]);

  // Drag state
  const [isDragging, setIsDragging] = d(false);
  const [dragOffset, setDragOffset] = d({
    x: 0,
    y: 0
  });
  const updatePopupPosition = (x, y) => {
    if (floatingRef.current) {
      const popupWidth = 384;
      const popupHeight = 400;
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      // console.log("Window", `${windowWidth} x ${windowHeight}`);
      // console.log("Click", `${x} , ${y}`);
      // console.log("Floating", `${popupWidth} x ${popupHeight}`);

      // Check if the popup goes beyond the right edge of the window
      if (x + popupWidth > windowWidth) {
        x -= x + popupWidth - windowWidth;
      }

      // Check if the popup goes beyond the bottom edge of the window
      if (y + popupHeight > windowHeight) {
        y -= y + popupHeight - windowHeight;
      }
      floatingRef.current.style.left = `${x}px`;
      floatingRef.current.style.top = `${y}px`;
      floatingRef.current.style.display = "block";
      setPopupVisible(true);
    }
  };
  const hidePopup = () => {
    if (floatingRef.current) {
      floatingRef.current.style.display = "none";
      setPopupVisible(false);
    }
  };
  const [convertRes, itemValue] = T(() => {
    if (!rates) {
      return [[], null];
    }
    let res = priorQueue.map(tarCur => {
      return {
        amount: convertAmount(rawAmount, rawCurrency, tarCur, rates),
        currency: tarCur
      };
    });
    let value = estimateValue(res.filter(i => i.currency === "USD")[0].amount);
    console.log(res);
    return [res, value];
  }, [rawAmount, rawCurrency, rates, priorQueue]);
  y(() => {
    chrome.runtime.sendMessage({
      type: "GetRates"
    }, function (data) {
      setRates(data.data);
    });
  }, [rawAmount, rawCurrency]);
  y(() => {
    // Retrieve the stored primary currency array when the component mounts
    chrome.storage.sync.get(["priorQueue"], function (result) {
      if (result.priorQueue && result.priorQueue.length > 0) {
        setPriorQueue(result.priorQueue);
      }
    });
  }, []);
  const handleCurrencyChange = event => {
    const newpriorQueue = event.target.value;
    const updatedCurrencyArray = [newpriorQueue, ...priorQueue.filter(c => c !== newpriorQueue)];
    setPriorQueue(updatedCurrencyArray);
    chrome.storage.sync.set({
      priorQueue: updatedCurrencyArray
    }, function () {
      console.log("Primary currency array updated to", updatedCurrencyArray);
    });
    handleConvertIntention(rawAmount, rawCurrency);
  };
  const handleRawCurrencyChange = event => {
    setRawCurrency(event.target.value);
    handleConvertIntention(rawAmount, event.target.value);
  };
  const handleConvertIntention = (amount, currency) => {
    setRawAmount(amount);
    setRawCurrency(currency);
  };

  // Drag handlers
  const handleDragStart = e => {
    if (e.target.closest("button") || e.target.closest("select")) {
      return; // Don't start drag if clicking on interactive elements
    }
    setIsDragging(true);
    const rect = floatingRef.current.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    e.preventDefault();
  };
  const handleDragMove = e => {
    if (!isDragging || !floatingRef.current) return;
    const popupWidth = 384;
    const popupHeight = 400;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    let newX = e.clientX - dragOffset.x;
    let newY = e.clientY - dragOffset.y;

    // Constrain to viewport bounds
    newX = Math.max(0, Math.min(newX, windowWidth - popupWidth));
    newY = Math.max(0, Math.min(newY, windowHeight - popupHeight));
    floatingRef.current.style.left = `${newX}px`;
    floatingRef.current.style.top = `${newY}px`;
  };
  const handleDragEnd = () => {
    setIsDragging(false);
  };
  y(() => {
    const handleTextSelection = e => {
      let selectedText = window.getSelection().toString();
      if (selectedText && selectedText.length < 50 && e.target.id !== "cr_container") {
        const extractedAmount = extractAmount(selectedText);
        updatePopupPosition(e.clientX, e.clientY);
        handleConvertIntention(extractedAmount.amount, extractedAmount.currency);
      }
    };
    const handleOutsideClick = e => {
      console.log(e.target);
      // Delay handling to ensure it doesn't conflict with the text selection
      setTimeout(() => {
        if (popupVisible && floatingRef.current && e.target.id !== "cr_container") {
          hidePopup();
        }
      }, 0);
    };
    document.addEventListener("mouseup", handleTextSelection);
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("mouseup", handleTextSelection);
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [popupVisible]);

  // Drag event listeners
  y(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleDragMove);
      document.addEventListener("mouseup", handleDragEnd);
      document.body.style.userSelect = "none"; // Prevent text selection during drag
    }
    return () => {
      document.removeEventListener("mousemove", handleDragMove);
      document.removeEventListener("mouseup", handleDragEnd);
      document.body.style.userSelect = ""; // Restore text selection
    };
  }, [isDragging, dragOffset]);
  return _("div", {
    ref: floatingRef,
    className: "cr-z-[999] cr-text-slate-800 dark:cr-text-white cr-fixed cr-w-72 cr-bg-themed cr-rounded-lg cr-shadow-2xl cr-border-themed cr-border-solid cr-border-2",
    style: {
      display: "none"
    }
  }, _("div", {
    className: "cr-bg-themed cr-justify-between cr-px-2 cr-flex cr-items-center cr-cursor-move cr-select-none",
    onMouseDown: handleDragStart
  }, _("div", {
    className: "cr-text-white cr-flex cr-items-center cr-space-x-1"
  }, "Currates"), _("div", {
    className: "cr-flex cr-items-center"
  }, _("button", {
    onClick: hidePopup
  }, _("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "24",
    viewBox: "0 -960 960 960",
    width: "24",
    className: "cr-fill-white hover:cr-fill-slate-200"
  }, _("path", {
    d: "M480-424 284-228q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l196 196 196-196q11-11 28-11t28 11q11 11 11 28t-11 28L536-480l196 196q11 11 11 28t-11 28q-11 11-28 11t-28-11L480-424Z"
  }))))), _("div", {
    className: "cr-p-2 cr-bg-slate-100 dark:cr-bg-slate-800 cr-rounded-md"
  }, _("div", {
    className: "cr-flex cr-justify-between items-center mb-4"
  }, _("span", {
    className: "cr-text-md cr-text-slate-400"
  }, `${getSymbol(rawCurrency)}${rawAmount}`), _("div", {
    className: "cr-flex cr-items-center"
  }, _("select", {
    className: "cr-hide-arrow cr-rounded-sm dark:cr-bg-slate-500 cr-px-1",
    onChange: handleRawCurrencyChange,
    value: rawCurrency
  }, priorQueue.map(currency => _("option", {
    key: currency,
    value: currency
  }, currency))), _("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    height: "20",
    viewBox: "0 -960 960 960",
    width: "20",
    className: "cr-fill-slate-400"
  }, _("path", {
    d: "M420-308q-8 0-14-5.5t-6-14.5v-304q0-9 6-14.5t14-5.5q2 0 14 6l145 145q5 5 7 10t2 11q0 6-2 11t-7 10L434-314q-3 3-6.5 4.5T420-308Z"
  })), _("select", {
    className: "cr-hide-arrow cr-rounded-sm dark:cr-bg-slate-500 cr-px-1",
    onChange: handleCurrencyChange,
    value: priorQueue[0]
  }, priorQueue.map(currency => _("option", {
    key: currency,
    value: currency
  }, currency))))), _("div", {
    className: `${convertRes[0]?.amount > 1000000000 ? "cr-text-2xl" : "cr-text-4xl"} cr-font-bold mb-2`
  }, convertRes.length > 0 ? `${getSymbol(convertRes[0].currency)}${Math.floor(convertRes[0].amount * 100) / 100}` : "---.--"), convertRes.length > 0 && itemValue.count > 0 && _(k$1, null, _("div", {
    className: "cr-bg-slate-200 dark:cr-bg-slate-500 cr-w-full cr-my-2 cr-h-[2px]"
  }), _("div", null, convertRes.slice(1).map(res => _("div", {
    className: "cr-flex cr-justify-between cr-px-1 cr-py-1"
  }, _("div", null, res.currency), _("div", null, convertTo2Float(res.amount))))), _("div", {
    className: "cr-bg-slate-200 dark:cr-bg-slate-500 cr-w-full cr-my-2 cr-h-[2px]"
  }), _(ItemValue, {
    itemValue: itemValue
  }))));
}

function installFloatingService() {
  const floatingContainer = document.createElement("div");
  const shadowRoot = floatingContainer.attachShadow({
    mode: "open"
  });
  floatingContainer.id = "cr_container";

  // Create a container inside the shadow root
  const shadowContainer = document.createElement("div");
  shadowRoot.appendChild(shadowContainer);
  G(_(Floating), shadowContainer);

  // Append the floatingContainer to the document body
  document.body.appendChild(floatingContainer);
  const link = document.createElement("link");
  link.href = chrome.runtime.getURL("css/main.css");
  link.type = "text/css";
  link.rel = "stylesheet";
  shadowRoot.appendChild(link);
}
function main() {
  installFloatingService();
}

main();
