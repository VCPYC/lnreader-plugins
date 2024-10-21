var e=this&&this.__awaiter||function(e,t,a,n){return new(a||(a=Promise))((function(o,i){function r(e){try{s(n.next(e))}catch(e){i(e)}}function l(e){try{s(n.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(r,l)}s((n=n.apply(e,t||[])).next())}))},t=this&&this.__generator||function(e,t){var a,n,o,i,r={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(l){return function(s){return function(l){if(a)throw new TypeError("Generator is already executing.");for(;i&&(i=0,l[0]&&(r=0)),r;)try{if(a=1,n&&(o=2&l[0]?n.return:l[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,l[1])).done)return o;switch(n=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return r.label++,{value:l[1],done:!1};case 5:r.label++,n=l[1],l=[0];continue;case 7:l=r.ops.pop(),r.trys.pop();continue;default:if(!(o=r.trys,(o=o.length>0&&o[o.length-1])||6!==l[0]&&2!==l[0])){r=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){r.label=l[1];break}if(6===l[0]&&r.label<o[1]){r.label=o[1],o=l;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(l);break}o[2]&&r.ops.pop(),r.trys.pop();continue}l=t.call(e,r)}catch(e){l=[6,e],n=0}finally{a=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,s])}}};Object.defineProperty(exports,"__esModule",{value:!0});var a=require("@libs/fetch"),n=require("@libs/filterInputs"),o=require("@libs/novelStatus"),i=new(function(){function n(e){var t,a=this;this.resolveUrl=function(e){return a.site+"/"+e},this.id=e.id,this.name=e.sourceName,this.icon="multisrc/hotnovelpub/".concat(e.id.toLowerCase(),"/icon.png"),this.site=e.sourceSite,this.apiSite=e.sourceSite.replace("://","://api."),this.version="1.0.1",this.filters=e.filters,this.lang=(null===(t=e.options)||void 0===t?void 0:t.lang)||"en"}return n.prototype.popularNovels=function(n,o){return e(this,arguments,void 0,(function(e,n){var o,i,r,l,s,u,c=this,h=n.filters,p=n.showLatestNovels;return t(this,(function(t){switch(t.label){case 0:return o=this.apiSite+"/books/",o+=p?"new":(null===(l=null==h?void 0:h.sort)||void 0===l?void 0:l.value)||"hot",(null===(s=null==h?void 0:h.category)||void 0===s?void 0:s.value)&&(o=this.apiSite+"/category/"+h.category.value),o+="/?page="+(e-1)+"&limit=20",[4,(0,a.fetchApi)(o,{headers:{lang:this.lang}}).then((function(e){return e.json()}))];case 1:return i=t.sent(),r=[],i.status&&(null===(u=i.data.books.data)||void 0===u?void 0:u.length)&&i.data.books.data.forEach((function(e){return r.push({name:e.name,cover:c.site+e.image,path:e.slug})})),[2,r]}}))}))},n.prototype.parseNovel=function(n){return e(this,void 0,void 0,(function(){var e,i,r,l,s;return t(this,(function(t){switch(t.label){case 0:return[4,(0,a.fetchApi)(this.apiSite+"/book/"+n,{headers:{lang:this.lang}}).then((function(e){return e.json()}))];case 1:return e=t.sent(),i={name:e.data.book.name,path:n,cover:this.site+e.data.book.image,summary:e.data.book.authorize.description,author:e.data.book.authorize.name,status:"updating"===e.data.book.status?o.NovelStatus.Ongoing:o.NovelStatus.Completed},(null===(l=e.data.tags.tags_name)||void 0===l?void 0:l.length)&&(i.genres=e.data.tags.tags_name.join(",")),(null===(s=e.data.chapters)||void 0===s?void 0:s.length)&&(r=[],e.data.chapters.forEach((function(e,t){return r.push({name:e.title,path:e.slug,releaseTime:void 0,chapterNumber:(e.index||t)+1})})),i.chapters=r),[2,i]}}))}))},n.prototype.parseChapter=function(n){return e(this,void 0,void 0,(function(){var e,o,i,r;return t(this,(function(t){switch(t.label){case 0:return[4,(0,a.fetchApi)(this.resolveUrl(n)).then((function(e){return e.text()}))];case 1:return e=t.sent(),(o=(null===(r=e.match(/<div id="content-item" ([\s\S]*?)<\/div>/))||void 0===r?void 0:r[0])||"")?[4,(0,a.fetchApi)(this.site+"/server/getContent?slug="+n)]:[3,4];case 2:return[4,t.sent().json()];case 3:(i=t.sent()).data&&(o+=i.data.map((function(e){return"<p>"+e+"</p>"})).join("").replace(/\n/g,"</p><p>").replace(/\s/g," ")),t.label=4;case 4:return[2,o.replace(/\.copy right hot novel pub/g,"")]}}))}))},n.prototype.searchNovels=function(n){return e(this,void 0,void 0,(function(){var e,o,i;return t(this,(function(t){switch(t.label){case 0:return[4,(0,a.fetchApi)(this.apiSite+"/search",{headers:{"Content-Type":"application/json;charset=utf-8",Referer:this.site,Origin:this.site,lang:this.lang},method:"POST",body:JSON.stringify({key_search:n})}).then((function(e){return e.json()}))];case 1:return e=t.sent(),o=[],e.status&&(null===(i=e.data.books)||void 0===i?void 0:i.length)&&e.data.books.forEach((function(e){return o.push({name:e.name,path:e.slug})})),[2,o]}}))}))},n}())({id:"lightnoveldaily",sourceSite:"https://lightnoveldaily.com",sourceName:"LightNovelDaily",filters:{sort:{type:n.FilterTypes.Picker,label:"Order",value:"hot",options:[{label:"Historia caliente",value:"hot"},{label:"Nuevas cuentos",value:"new"},{label:"Historia completa",value:"full"}]},category:{type:n.FilterTypes.Picker,label:"Categoría",value:"",options:[{label:"NONE",value:""},{label:"Acción/Aventura",value:"accinaventura"},{label:"Fantasía",value:"fantasa"},{label:"Ficción adolescente",value:"ficcin-adolescente"},{label:"Hombre lobo/Vampiro",value:"hombre-lobovampiro"},{label:"LGBTQ+",value:"lgbtq"},{label:"Mafia",value:"mafia"},{label:"Nuevo Adulto",value:"nuevo-adulto"},{label:"Pornografía",value:"pornografa"},{label:"Romántico",value:"romntico"},{label:"Urbano",value:"urbano"}]}},options:{lang:"es"}});exports.default=i;