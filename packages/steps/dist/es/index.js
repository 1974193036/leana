var e={name:"ssyySteps",inheritAttrs:!1,props:{count:{type:Number,default:4},active:{type:Number,default:0},activeColor:{type:String,default:"red"},defaultColor:{type:String,default:"green"}}};function t(e,t,n,i,s,o,a,l,d,r){"boolean"!=typeof a&&(d=l,l=a,a=!1);const c="function"==typeof n?n.options:n;let p;if(e&&e.render&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0,s&&(c.functional=!0)),i&&(c._scopeId=i),o?(p=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,d(e)),e&&e._registeredComponents&&e._registeredComponents.add(o)},c._ssrRegister=p):t&&(p=a?function(e){t.call(this,r(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,l(e))}),p)if(c.functional){const e=c.render;c.render=function(t,n){return p.call(n),e(t,n)}}else{const e=c.beforeCreate;c.beforeCreate=e?[].concat(e,p):[p]}return n}const n="undefined"!=typeof navigator&&/msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());function i(e){return(e,t)=>function(e,t){const i=n?t.media||"default":e,a=o[i]||(o[i]={ids:new Set,styles:[]});if(!a.ids.has(e)){a.ids.add(e);let n=t.source;if(t.map&&(n+="\n/*# sourceURL="+t.map.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t.map))))+" */"),a.element||(a.element=document.createElement("style"),a.element.type="text/css",t.media&&a.element.setAttribute("media",t.media),void 0===s&&(s=document.head||document.getElementsByTagName("head")[0]),s.appendChild(a.element)),"styleSheet"in a.element)a.styles.push(n),a.element.styleSheet.cssText=a.styles.filter(Boolean).join("\n");else{const e=a.ids.size-1,t=document.createTextNode(n),i=a.element.childNodes;i[e]&&a.element.removeChild(i[e]),i.length?a.element.insertBefore(t,i[e]):a.element.appendChild(t)}}}(e,t)}let s;const o={};const a=t({render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"lg-steps"},[e._l(e.count,(function(t){return[n("div",{key:t,class:[t<e.count?"lg-step-item":"lg-step-item-last",t<=e.active?"lg-step-item-finshed":t-1===e.active?"lg-step-item-actived":"lg-step-item-wait"]},[n("div",{staticClass:"lg-step"},[e._v(e._s(t))])])]}))],2)},staticRenderFns:[]},(function(e){e&&e("data-v-094c0673_0",{source:".lg-steps[data-v-094c0673]{position:relative;display:flex}.lg-step-item[data-v-094c0673]{position:relative;display:inline-block;flex:1;overflow:hidden;vertical-align:top;white-space:nowrap;margin-right:12px}.lg-step[data-v-094c0673]{border:2px solid;border-radius:50%;height:32px;width:32px;display:flex;justify-content:center;align-items:center;font-weight:700;z-index:2;background-color:#fff;box-sizing:border-box}.lg-step-item[data-v-094c0673]:after{position:absolute;top:16px;left:44px;display:block;width:9999px;height:1px;background:rgba(0,0,0,.45);content:''}.lg-step-item-finshed[data-v-094c0673]:after{background:#1890ff}.lg-step-item-finshed .lg-step[data-v-094c0673]{color:#1890ff}.lg-step-item-actived .lg-step[data-v-094c0673]{color:rgba(0,0,0,.85);font-weight:700}.lg-step-item-wait .lg-step[data-v-094c0673]{color:rgba(0,0,0,.45)}",map:void 0,media:void 0})}),e,"data-v-094c0673",false,undefined,!1,i,void 0,void 0);a.install=e=>{e.component(a.name,a)};export default a;