(function(e){function t(t){for(var a,n,i=t[0],u=t[1],c=t[2],s=0,f=[];s<i.length;s++)n=i[s],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&f.push(o[n][0]),o[n]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);d&&d(t);while(f.length)f.shift()();return l.push.apply(l,c||[]),r()}function r(){for(var e,t=0;t<l.length;t++){for(var r=l[t],a=!0,n=1;n<r.length;n++){var i=r[n];0!==o[i]&&(a=!1)}a&&(l.splice(t--,1),e=u(u.s=r[0]))}return e}var a={},n={app:0},o={app:0},l=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-175fb74f":"2d579e5c","chunk-14041234":"4d5e8e0f","chunk-ae821e7a":"7a329be6","chunk-b7d27d08":"bbd4c4d2","chunk-09928920":"6df21e4a","chunk-666ac18d":"9cbee1b9","chunk-230bc98e":"6b2b03c5","chunk-45f4d698":"a2536138","chunk-74f8001c":"4a6edafd"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.e=function(e){var t=[],r={"chunk-175fb74f":1,"chunk-14041234":1,"chunk-ae821e7a":1,"chunk-b7d27d08":1,"chunk-09928920":1,"chunk-666ac18d":1,"chunk-230bc98e":1,"chunk-45f4d698":1,"chunk-74f8001c":1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=new Promise((function(t,r){for(var a="css/"+({}[e]||e)+"."+{"chunk-175fb74f":"e0cd8492","chunk-14041234":"6a336c05","chunk-ae821e7a":"9081a028","chunk-b7d27d08":"4d66e60e","chunk-09928920":"bdd43870","chunk-666ac18d":"45d09b8d","chunk-230bc98e":"65de9f89","chunk-45f4d698":"e76b81eb","chunk-74f8001c":"a05914b8"}[e]+".css",o=u.p+a,l=document.getElementsByTagName("link"),i=0;i<l.length;i++){var c=l[i],s=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(s===a||s===o))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){c=f[i],s=c.getAttribute("data-href");if(s===a||s===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||o,l=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");l.code="CSS_CHUNK_LOAD_FAILED",l.request=a,delete n[e],d.parentNode.removeChild(d),r(l)},d.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){n[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var l=new Promise((function(t,r){a=o[e]=[t,r]}));t.push(a[2]=l);var c,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(e);var f=new Error;c=function(t){s.onerror=s.onload=null,clearTimeout(d);var r=o[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+a+": "+n+")",f.name="ChunkLoadError",f.type=a,f.request=n,r[1](f)}o[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:s})}),12e4);s.onerror=s.onload=c,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(r,a,function(t){return e[t]}.bind(null,a));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/food-app/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var d=s;l.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("a4d3"),r("e01a"),r("d28b"),r("d3b7"),r("6062"),r("3ca3"),r("ddb0");var a=r("2909"),n=(r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("2b0e")),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("NavBar"),r("SideMenu"),r("v-content",[r("v-container",{staticClass:"full_height"},[r("vue-page-transition",{staticClass:"full_height",attrs:{name:"fade"}},[r("router-view")],1)],1)],1)],1)},l=[],i={components:{NavBar:function(){return Promise.all([r.e("chunk-175fb74f"),r.e("chunk-b7d27d08"),r.e("chunk-09928920")]).then(r.bind(null,"d000"))},SideMenu:function(){return Promise.all([r.e("chunk-175fb74f"),r.e("chunk-14041234")]).then(r.bind(null,"4d94"))}}},u=i,c=(r("5c0b"),r("2877")),s=r("6544"),f=r.n(s),d=r("7496"),h=r("a523"),m=r("a75b"),v=Object(c["a"])(u,o,l,!1,null,null,null),p=v.exports;f()(v,{VApp:d["a"],VContainer:h["a"],VContent:m["a"]});var g=r("8c4f");n["a"].use(g["a"]);var b=[{path:"/",name:"mainPage",component:function(){return Promise.all([r.e("chunk-175fb74f"),r.e("chunk-ae821e7a")]).then(r.bind(null,"4385"))}},{path:"/favourites",name:"favourites",component:function(){return Promise.all([r.e("chunk-175fb74f"),r.e("chunk-b7d27d08"),r.e("chunk-666ac18d")]).then(r.bind(null,"0e0d"))}}],y=new g["a"]({mode:"history",base:"/food-app/",routes:b}),S=y,w=(r("caad"),r("c975"),r("a434"),r("2532"),r("159b"),r("2f62"));n["a"].use(w["a"]);var k=new w["a"].Store({state:{showSideMenu:!1,showFilterDialog:!1,links:[{title:"Home",name:"mainPage"},{title:"Favourites",name:"favourites"}],meals:[],mealsToShow:[],filters:{category:{filterName:"Category",filterItems:[]},area:{filterName:"Area",filterItems:[]},tags:{filterName:"Tags",filterItems:[]}},activeFilters:{category:[],area:[],tags:[]},searchText:null,favourites:[],selectedMeal:null,selectedMealId:null},mutations:{changeSideMenuStatus:function(e){e.showSideMenu=!e.showSideMenu},changeFilterDialogStatus:function(e){e.showFilterDialog=!e.showFilterDialog},changeSearchText:function(e,t){e.searchText=t},addMealAndFiltersToStore:function(e,t){var r,n;(r=e.meals).push.apply(r,Object(a["a"])(t)),(n=e.mealsToShow).push.apply(n,Object(a["a"])(t)),t.forEach((function(t){null!=t.strCategory&&e.filters.category.filterItems.push(t.strCategory),null!=t.strArea&&e.filters.area.filterItems.push(t.strArea),null!=t.strTags&&e.filters.tags.filterItems.push(t.strTags)})),e.filters.category.filterItems=Object(a["a"])(new Set(e.filters.category.filterItems)),e.filters.area.filterItems=Object(a["a"])(new Set(e.filters.area.filterItems)),e.filters.tags.filterItems=Object(a["a"])(new Set(e.filters.tags.filterItems))},changeMealsToShow:function(e,t){e.mealsToShow=Object(a["a"])(t)},clearActiveFilters:function(e){e.activeFilters={category:[],area:[],tags:[]}},toogleFavourite:function(e,t){e.favourites.includes(t)?(e.favourites.splice(e.favourites.indexOf(t),1),localStorage.setItem("favourites",JSON.stringify(e.favourites))):(e.favourites.push(t),localStorage.setItem("favourites",JSON.stringify(e.favourites)))},addFavouritesFromLocalStorage:function(e,t){e.favourites=t},selectMeal:function(e,t){e.selectedMeal=t},changeSelectedMealId:function(e,t){e.selectedMealId=t}},actions:{removeMealInfo:function(){document.getElementById("showed_meal_info")&&document.getElementById("showed_meal_info").parentNode.removeChild(document.getElementById("showed_meal_info"))}},modules:{}}),O=r("f309");n["a"].use(O["a"]);var I=new O["a"]({}),j=r("bc3a"),T=r.n(j),F=r("f0eb"),M=r("2ef0");n["a"].use(F["default"]),n["a"].prototype.$axios=T.a,n["a"].config.productionTip=!1,new n["a"]({router:S,store:k,vuetify:I,mounted:function(){if(localStorage.getItem("meals"))k.commit("addMealAndFiltersToStore",JSON.parse(localStorage.getItem("meals")));else for(var e=0;e<=9;e++)this.$axios.get("https://www.themealdb.com/api/json/v1/1/random.php").then((function(e){k.commit("addMealAndFiltersToStore",[e.data.meals[0]]),localStorage.setItem("meals",JSON.stringify(k.state.meals))}));localStorage.getItem("favourites")&&k.commit("addFavouritesFromLocalStorage",JSON.parse(localStorage.getItem("favourites")))},watch:{activeFilters:{handler:Object(M["debounce"])((function(e,t){var r=[],n=[],o=[],l=[];for(var i in e){if("category"==i){var u=!0,c=!1,s=void 0;try{for(var f,d=k.state.meals[Symbol.iterator]();!(u=(f=d.next()).done);u=!0){var h=f.value,m=!0,v=!1,p=void 0;try{for(var g,b=k.state.activeFilters[i][Symbol.iterator]();!(m=(g=b.next()).done);m=!0){var y=g.value;h.strCategory==y&&r.push(h)}}catch(U){v=!0,p=U}finally{try{m||null==b.return||b.return()}finally{if(v)throw p}}}}catch(U){c=!0,s=U}finally{try{u||null==d.return||d.return()}finally{if(c)throw s}}}if("area"==i){var S=!0,w=!1,O=void 0;try{for(var I,j=k.state.meals[Symbol.iterator]();!(S=(I=j.next()).done);S=!0){var T=I.value,F=!0,M=!1,x=void 0;try{for(var _,E=k.state.activeFilters[i][Symbol.iterator]();!(F=(_=E.next()).done);F=!0){var C=_.value;T.strArea==C&&n.push(T)}}catch(U){M=!0,x=U}finally{try{F||null==E.return||E.return()}finally{if(M)throw x}}}}catch(U){w=!0,O=U}finally{try{S||null==j.return||j.return()}finally{if(w)throw O}}}if("tags"==i){var N=!0,P=!1,A=void 0;try{for(var B,J=k.state.meals[Symbol.iterator]();!(N=(B=J.next()).done);N=!0){var L=B.value,D=!0,$=!1,V=void 0;try{for(var q,H=k.state.activeFilters[i][Symbol.iterator]();!(D=(q=H.next()).done);D=!0){var K=q.value;L.strTags==K&&o.push(L)}}catch(U){$=!0,V=U}finally{try{D||null==H.return||H.return()}finally{if($)throw V}}}}catch(U){P=!0,A=U}finally{try{N||null==J.return||J.return()}finally{if(P)throw A}}}}r.forEach((function(e){return l.push(e)})),n.forEach((function(e){return l.push(e)})),o.forEach((function(e){return l.push(e)})),k.commit("changeMealsToShow",Object(a["a"])(new Set(l)).length>0?Object(a["a"])(new Set(l)):k.state.meals)}),500),deep:!0}},computed:Object(w["b"])(["activeFilters"]),render:function(e){return e(p)}}).$mount("#app")},"5c0b":function(e,t,r){"use strict";var a=r("7694"),n=r.n(a);n.a},7694:function(e,t,r){}});
//# sourceMappingURL=app.cd064d94.js.map