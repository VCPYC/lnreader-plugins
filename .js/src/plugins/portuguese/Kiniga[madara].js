var e=this&&this.__awaiter||function(e,a,t,r){return new(t||(t=Promise))((function(i,l){function n(e){try{s(r.next(e))}catch(e){l(e)}}function o(e){try{s(r.throw(e))}catch(e){l(e)}}function s(e){var a;e.done?i(e.value):(a=e.value,a instanceof t?a:new t((function(e){e(a)}))).then(n,o)}s((r=r.apply(e,a||[])).next())}))},a=this&&this.__generator||function(e,a){var t,r,i,l,n={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return l={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function o(o){return function(s){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;l&&(l=0,o[0]&&(n=0)),n;)try{if(t=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return n.label++,{value:o[1],done:!1};case 5:n.label++,r=o[1],o=[0];continue;case 7:o=n.ops.pop(),n.trys.pop();continue;default:if(!(i=n.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){n=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){n.label=o[1];break}if(6===o[0]&&n.label<i[1]){n.label=i[1],i=o;break}if(i&&n.label<i[2]){n.label=i[2],n.ops.push(o);break}i[2]&&n.ops.pop(),n.trys.pop();continue}o=a.call(e,n)}catch(e){o=[6,e],r=0}finally{t=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},t=this&&this.__spreadArray||function(e,a,t){if(t||2===arguments.length)for(var r,i=0,l=a.length;i<l;i++)!r&&i in a||(r||(r=Array.prototype.slice.call(a,0,i)),r[i]=a[i]);return e.concat(r||Array.prototype.slice.call(a))},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var i=require("@libs/fetch"),l=require("cheerio"),n=require("@libs/defaultCover"),o=require("@libs/novelStatus"),s=r(require("dayjs")),u=function(e,a){return new RegExp(a.join("|")).test(e)},c=new(function(){function r(e){var a;this.parseData=function(e){var a,t=(0,s.default)(),r=(null===(a=e.match(/\d+/))||void 0===a?void 0:a[0])||"",i=parseInt(r,10);if(!r)return e;if(u(e,["detik","segundo","second","วินาที"]))t=t.subtract(i,"second");else if(u(e,["menit","dakika","min","minute","minuto","นาที","دقائق"]))t=t.subtract(i,"minute");else if(u(e,["jam","saat","heure","hora","hour","ชั่วโมง","giờ","ore","ساعة","小时"]))t=t.subtract(i,"hours");else if(u(e,["hari","gün","jour","día","dia","day","วัน","ngày","giorni","أيام","天"]))t=t.subtract(i,"days");else if(u(e,["week","semana"]))t=t.subtract(i,"week");else if(u(e,["month","mes"]))t=t.subtract(i,"month");else{if(!u(e,["year","año"]))return"Invalid Date"!==(0,s.default)(e).format("LL")?(0,s.default)(e).format("LL"):e;t=t.subtract(i,"year")}return t.format("LL")},this.id=e.id,this.name=e.sourceName,this.icon="multisrc/madara/".concat(e.id.toLowerCase(),"/icon.png"),this.site=e.sourceSite;var t=(null===(a=e.options)||void 0===a?void 0:a.versionIncrements)||0;this.version="1.0.".concat(3+t),this.options=e.options,this.filters=e.filters}return r.prototype.translateDragontea=function(e){if("dragontea"===this.id){var a=(0,l.load)(e.html()||""),r=a.html()||"";r=(r=r.replace("\n","")).replace(/<br\s*\/?>/g,"\n"),e.html(r),e.find(":not(:has(*))").each((function(e,r){var i,l=a(r),n="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),o="zyxwvutsrqponmlkjihgfedcbaZYXWVUTSRQPONMLKJIHGFEDCBA".split(""),s=l.text().normalize("NFD").split(""),u=t([],s,!0).map((function(e){var a=e.normalize("NFC"),t=n.indexOf(a);return-1!==t?o[t]+e.slice(a.length):e})).join("");l.html((null===(i=l.html())||void 0===i?void 0:i.replace(l.text(),u).replace("\n","<br>"))||"")}))}return e},r.prototype.getHostname=function(e){var a=(e=e.split("/")[2]).split(".");return a.pop(),a.join(".")},r.prototype.getCheerio=function(t,r){return e(this,void 0,void 0,(function(){var e,n,o,s;return a(this,(function(a){switch(a.label){case 0:return[4,(0,i.fetchApi)(t)];case 1:if(!(e=a.sent()).ok&&1!=r)throw new Error("Could not reach site ("+e.status+") try to open in webview.");return o=l.load,[4,e.text()];case 2:if(n=o.apply(void 0,[a.sent()]),s=n("title").text().trim(),this.getHostname(t)!=this.getHostname(e.url)||"Bot Verification"==s||"You are being redirected..."==s||"Un instant..."==s||"Just a moment..."==s||"Redirecting..."==s)throw new Error("Captcha error, please open in webview");return[2,n]}}))}))},r.prototype.parseNovels=function(e){var a=[];return e(".manga-title-badges").remove(),e(".page-item-detail, .c-tabs-item__content").each((function(t,r){var i=e(r).find(".post-title").text().trim(),l=e(r).find(".post-title").find("a").attr("href")||"";if(i&&l){var o=e(r).find("img"),s={name:i,cover:o.attr("data-src")||o.attr("src")||o.attr("data-lazy-srcset")||n.defaultCover,path:l.replace(/https?:\/\/.*?\//,"/")};a.push(s)}})),a},r.prototype.popularNovels=function(t,r){return e(this,arguments,void 0,(function(e,t){var r,i,l,n,o,s,u=t.filters,c=t.showLatestNovels;return a(this,(function(a){switch(a.label){case 0:for(i in r=this.site+"/page/"+e+"/?s=&post_type=wp-manga",u||(u=this.filters||{}),c&&(r+="&m_orderby=latest"),u)if("object"==typeof u[i].value)for(l=0,n=u[i].value;l<n.length;l++)o=n[l],r+="&".concat(i,"=").concat(o);else u[i].value&&(r+="&".concat(i,"=").concat(u[i].value));return[4,this.getCheerio(r,!1)];case 1:return s=a.sent(),[2,this.parseNovels(s)]}}))}))},r.prototype.parseNovel=function(t){return e(this,void 0,void 0,(function(){var e,r,u,c,p,v,h,d,m,b=this;return a(this,(function(a){switch(a.label){case 0:return[4,this.getCheerio(this.site+t,!1)];case 1:return(e=a.sent())(".manga-title-badges, #manga-title span").remove(),(r={path:t,name:e(".post-title h1").text().trim()||e("#manga-title h1").text()}).cover=e(".summary_image > a > img").attr("data-lazy-src")||e(".summary_image > a > img").attr("data-src")||e(".summary_image > a > img").attr("src")||n.defaultCover,e(".post-content_item, .post-content").each((function(){var a=e(this).find("h5").text().trim(),t=e(this).find(".summary-content").text().trim();switch(a){case"Genre(s)":case"Genre":case"Tags":case"Género(s)":case"التصنيفات":r.genres?r.genres+=", "+t:r.genres=t;break;case"Author(s)":case"Author":case"Autor(es)":case"المؤلف":case"المؤلف (ين)":r.author=t;break;case"Status":case"Novel":case"Estado":r.status=t.includes("OnGoing")||t.includes("مستمرة")?o.NovelStatus.Ongoing:o.NovelStatus.Completed}})),e("div.summary__content .code-block,script,noscript").remove(),u=e("div.summary__content")||e("#tab-manga-about")||e('.post-content_item h5:contains("Summary")').next(),r.summary=this.translateDragontea(u).text().trim(),c=[],p="",(null===(m=this.options)||void 0===m?void 0:m.useNewChapterEndpoint)?[4,(0,i.fetchApi)(this.site+t+"ajax/chapters/",{method:"POST"}).then((function(e){return e.text()}))]:[3,3];case 2:return p=a.sent(),[3,5];case 3:return v=e(".rating-post-id").attr("value")||e("#manga-chapters-holder").attr("data-id")||"",(h=new FormData).append("action","manga_get_chapters"),h.append("manga",v),[4,(0,i.fetchApi)(this.site+"wp-admin/admin-ajax.php",{method:"POST",body:h}).then((function(e){return e.text()}))];case 4:p=a.sent(),a.label=5;case 5:return"0"!==p&&(e=(0,l.load)(p)),d=e(".wp-manga-chapter").length,e(".wp-manga-chapter").each((function(a,t){var r=e(t).find("a").text().trim(),i=e(t).find("span.chapter-release-date").text().trim();i=i?b.parseData(i):(0,s.default)().format("LL");var l=e(t).find("a").attr("href")||"";l&&"#"!=l&&c.push({name:r,path:l.replace(/https?:\/\/.*?\//,"/"),releaseTime:i||null,chapterNumber:d-a})})),r.chapters=c.reverse(),[2,r]}}))}))},r.prototype.parseChapter=function(t){return e(this,void 0,void 0,(function(){var e,r;return a(this,(function(a){switch(a.label){case 0:return[4,this.getCheerio(this.site+t,!1)];case 1:return e=a.sent(),r=e(".text-left")||e(".text-right")||e(".entry-content")||e(".c-blog-post > div > div:nth-child(2)"),"riwyat"===this.id&&r.find('span[style*="opacity: 0; position: fixed;"]').remove(),r.find("div.text-right").attr("style","text-align: right;"),[2,this.translateDragontea(r).html()||""]}}))}))},r.prototype.searchNovels=function(t,r){return e(this,void 0,void 0,(function(){var e,i;return a(this,(function(a){switch(a.label){case 0:return e=this.site+"/page/"+r+"/?s="+t+"&post_type=wp-manga",[4,this.getCheerio(e,!0)];case 1:return i=a.sent(),[2,this.parseNovels(i)]}}))}))},r}())({id:"kiniga",sourceSite:"https://kiniga.com/",sourceName:"Kiniga",options:{lang:"Portuguese"},filters:{"genre[]":{type:"Checkbox",label:"Genre",value:[],options:[{label:"Ação",value:"action"},{label:"Artes Marciais",value:"artes-marciais"},{label:"Aventura",value:"aventura"},{label:"Comédia",value:"comedia"},{label:"Contemporâneo",value:"contemporaneo"},{label:"Contos",value:"contos-originais"},{label:"Crime",value:"crime"},{label:"Cyberpunk",value:"cyberpunk"},{label:"Destaque",value:"destaque"},{label:"Distopia",value:"distopia"},{label:"Drama",value:"drama"},{label:"Ecchi",value:"ecchi"},{label:"Espacial",value:"espacial"},{label:"Esportes",value:"esportes"},{label:"Fanfic",value:"fanfic"},{label:"Fantasia",value:"fantasia"},{label:"Ficção Científica",value:"ficcao-cientifica"},{label:"Gastronomia",value:"gastronomia"},{label:"Harém",value:"harem"},{label:"Histórico",value:"historico"},{label:"Horror",value:"horror"},{label:"Infantil",value:"infantil"},{label:"Isekai",value:"isekai"},{label:"Jogos",value:"jogos"},{label:"LGBT+",value:"lgbt"},{label:"Magia",value:"magia"},{label:"Mecha",value:"mecha"},{label:"Medieval",value:"medieval"},{label:"Militar",value:"militar"},{label:"Mistério",value:"misterio"},{label:"Mitologia",value:"mitologia"},{label:"Moderno",value:"moderno"},{label:"Pós-apocalíptico",value:"pos-apocaliptico"},{label:"Psicológico",value:"psicologico"},{label:"Realidade Virtual",value:"realidade-virtual"},{label:"Recomendado",value:"recomendado"},{label:"Romance",value:"romance"},{label:"RPG",value:"rpg"},{label:"Sci-fi",value:"sci-fi"},{label:"Seinen",value:"seinen"},{label:"Shounen",value:"shounen"},{label:"Sistema de Jogo",value:"sistema-de-jogo"},{label:"Slice of Life",value:"slice-of-life"},{label:"snkhome",value:"snkhome"},{label:"Sobrenatural",value:"sobrenatural"},{label:"Somente na Kiniga",value:"somente-na-kiniga"},{label:"Suspense",value:"suspense"},{label:"Terror",value:"terror"},{label:"Terror Psicológico",value:"terror-psicologico"},{label:"Traduções",value:"traducoes"},{label:"Tragédia",value:"tragedia"},{label:"Urbano",value:"urbano"},{label:"Vida Escolar",value:"vida-escolar"}]},op:{type:"Switch",label:"Ter todos gêneros selecionados",value:!1},author:{type:"Text",label:"Autor",value:""},artist:{type:"Text",label:"Artista",value:""},release:{type:"Text",label:"Ano",value:""},adult:{type:"Picker",label:"Conteúdo",value:"",options:[{label:"Ambas opções",value:""},{label:"Para todas idades",value:"0"},{label:"Para maiores de idade",value:"1"}]},"status[]":{type:"Checkbox",label:"Status",value:[],options:[{label:"Completo",value:"complete"},{label:"Ativo",value:"on-going"},{label:"Cancelado",value:"canceled"},{label:"Pausado",value:"on-hold"}]},m_orderby:{type:"Picker",label:"Ordem por",value:"",options:[{label:"Relevância",value:""},{label:"Mais antigo",value:"latest"},{label:"A-Z",value:"alphabet"},{label:"Avaliação",value:"rating"},{label:"Tendência",value:"trending"},{label:"Mais Visualizado",value:"views"},{label:"Novo",value:"new-manga"}]}}});exports.default=c;