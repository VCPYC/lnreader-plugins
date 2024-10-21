var t=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(a,i){function l(t){try{s(n.next(t))}catch(t){i(t)}}function o(t){try{s(n.throw(t))}catch(t){i(t)}}function s(t){var e;t.done?a(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(l,o)}s((n=n.apply(t,e||[])).next())}))},e=this&&this.__generator||function(t,e){var r,n,a,i,l={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(o){return function(s){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;i&&(i=0,o[0]&&(l=0)),l;)try{if(r=1,n&&(a=2&o[0]?n.return:o[0]?n.throw||((a=n.return)&&a.call(n),0):n.next)&&!(a=a.call(n,o[1])).done)return a;switch(n=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return l.label++,{value:o[1],done:!1};case 5:l.label++,n=o[1],o=[0];continue;case 7:o=l.ops.pop(),l.trys.pop();continue;default:if(!(a=l.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){l=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){l.label=o[1];break}if(6===o[0]&&l.label<a[1]){l.label=a[1],a=o;break}if(a&&l.label<a[2]){l.label=a[2],l.ops.push(o);break}a[2]&&l.ops.pop(),l.trys.pop();continue}o=e.call(t,l)}catch(t){o=[6,t],n=0}finally{r=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}};Object.defineProperty(exports,"__esModule",{value:!0});var r=require("cheerio"),n=require("@libs/fetch"),a=require("@libs/filterInputs"),i=require("urlencode"),l=require("@libs/novelStatus"),o=function(){function o(){this.id="69xinshu",this.name="69书吧",this.icon="src/cn/69xinshu/icon.png",this.site="https://69shuba.cx",this.version="0.1.2",this.filters={class:{label:"分类",value:"0",options:[{label:"全部分类",value:"0"},{label:"言情小说",value:"3"},{label:"玄幻魔法",value:"1"},{label:"修真武侠",value:"2"},{label:"穿越时空",value:"11"},{label:"都市小说",value:"9"},{label:"历史军事",value:"4"},{label:"游戏竞技",value:"5"},{label:"科幻空间",value:"6"},{label:"悬疑惊悚",value:"7"},{label:"同人小说",value:"8"},{label:"官场职场",value:"10"},{label:"青春校园",value:"12"}],type:a.FilterTypes.Picker}}}return o.prototype.popularNovels=function(a,i){return t(this,arguments,void 0,(function(t,a){var i,l,o,s,c=this,u=a.filters;return e(this,(function(e){switch(e.label){case 0:return i="".concat(this.site,"/ajax_novels/class/").concat(u.class.value,"/").concat(t,".htm"),[4,(0,n.fetchText)(i,{},"gbk")];case 1:if(""===(l=e.sent()))throw Error("无法获取小说列表，请检查网络");return o=(0,r.load)(l),s=[],o("li").each((function(t,e){var r=o(e).find("li > div > h3 > a:nth-child(2)").attr("href");if(r){var n={name:o(e).find("li > div > h3 > a:nth-child(2)").text(),cover:o(e).find("li > a > img").attr("data-src"),path:r.replace(c.site,"")};s.push(n)}})),[2,s]}}))}))},o.prototype.parseNovel=function(a){return t(this,void 0,void 0,(function(){var t,i,o,s,c,u,h,f,p,v,d,b=this;return e(this,(function(e){switch(e.label){case 0:return t=this.site+a.replace(this.site,""),[4,(0,n.fetchText)(t,{},"gbk")];case 1:if(""===(i=e.sent()))throw Error("无法获取小说内容，请检查网络");return o=(0,r.load)(i),(s={path:a,chapters:[],name:o("h1 > a").text()}).cover=o("div.bookimg2 > img").attr("src"),s.summary=o("div.navtxt").text().trim(),c=o("div.booknav2").text(),(u=c.match(/作者：(.*)/))&&(s.author=u[1]),s.artist=void 0,s.status=c.includes("连载")?l.NovelStatus.Ongoing:l.NovelStatus.Completed,(h=c.match(/分类：(.*)/))&&(s.genres=h[1]),f=[],(p=o("a.more-btn").attr("href"))?[4,(0,n.fetchText)(p,{},"gbk")]:[3,3];case 2:v=e.sent(),(d=(0,r.load)(v))("li").each((function(t,e){var r=d(e).find("a").attr("href");if(null==r?void 0:r.startsWith("https://")){var n=d(e).find("a").text().trim();f.push({name:n,path:r.replace(b.site,"")})}})),e.label=3;case 3:return s.chapters=f,[2,s]}}))}))},o.prototype.parseChapter=function(a){return t(this,void 0,void 0,(function(){var t,i,l;return e(this,(function(e){switch(e.label){case 0:return[4,(0,n.fetchText)(this.site+a,{},"gbk")];case 1:return t=e.sent(),i=(0,r.load)(t),[2,(null!==(l=i("div.txtnav").prop("innerText"))&&void 0!==l?l:"").split("\n").map((function(t){return t.trim()})).filter((function(t){return""!==t})).slice(2).map((function(t){return"<p>".concat(t,"</p>")})).join("\n")]}}))}))},o.prototype.searchNovels=function(a,l){return t(this,void 0,void 0,(function(){var t,o,s,c,u,h=this;return e(this,(function(e){switch(e.label){case 0:return l>1?[2,[]]:(t="".concat(this.site,"/modules/article/search.php"),(o=new FormData).append("searchkey",(0,i.encode)(a,"gbk")),o.append("submit","Search"),[4,(0,n.fetchText)(t,{method:"post",body:o},"gbk")]);case 1:if(""===(s=e.sent()))throw Error("无法获取搜索结果，请检查网络");return c=(0,r.load)(s),u=[],c("div.newbox > ul > li").each((function(t,e){var r=c(e).find("a").attr("href"),n=c(e).find("div.newnav > h3").text(),a=c(e).find("img").attr("data-src"),i={name:n,path:r.replace(h.site,""),cover:a};u.push(i)})),[2,u]}}))}))},o}();exports.default=new o;