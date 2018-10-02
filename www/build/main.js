webpackJsonp([16],{100:function(t,e,n){"use strict";n.d(e,"a",function(){return a});n(3),n(43);var a=function(){function t(t,e){this.storage=t,this.SETTINGS_KEY="_settings",this._defaults=e}return t.prototype.load=function(){var t=this;return this.storage.get(this.SETTINGS_KEY).then(function(e){return e?(t.settings=e,t._mergeDefaults(t._defaults)):t.setAll(t._defaults).then(function(e){t.settings=e})})},t.prototype._mergeDefaults=function(t){for(var e in t)e in this.settings||(this.settings[e]=t[e]);return this.setAll(this.settings)},t.prototype.merge=function(t){for(var e in t)this.settings[e]=t[e];return this.save()},t.prototype.setValue=function(t,e){return this.settings[t]=e,this.storage.set(this.SETTINGS_KEY,this.settings)},t.prototype.setAll=function(t){return this.storage.set(this.SETTINGS_KEY,t)},t.prototype.getValue=function(t){return this.storage.get(this.SETTINGS_KEY).then(function(e){return e[t]})},t.prototype.save=function(){return this.setAll(this.settings)},Object.defineProperty(t.prototype,"allSettings",{get:function(){return this.settings},enumerable:!0,configurable:!0}),t}()},146:function(t,e,n){"use strict";n.d(e,"a",function(){return o});n(3);var a=n(202),o=(n.n(a),n(43),n(79),n(80),function(){function t(t,e,n){this.api=t,this.storage=e,this.menu=n}return t.prototype.login=function(t){var e=this,n=this.api.post("login",t).share();return n.subscribe(function(t){if(t.success)return e._loggedIn(t)},function(t){console.error("ERROR",t)}),n},t.prototype.signup=function(t){var e=this,n=this.api.post("signup",t).share();return n.subscribe(function(t){t.success&&e.storage.set("_email",t.email)},function(t){console.error("ERROR",t)}),n},t.prototype.verifypayment=function(t){var e=this.api.post("matches/verifypayment",t).share();return e.subscribe(function(t){console.log(t)},function(t){console.error("ERROR",t)}),e},t.prototype.participate=function(t){var e=this.api.post("paytm/matches/entry",t).share();return e.subscribe(function(t){},function(t){console.error("ERROR",t)}),e},t.prototype.profile=function(){var t=this.api.get("player/profile").share();return t.subscribe(function(t){},function(t){console.error("ERROR",t)}),t},t.prototype.forgotPassword=function(t){var e=this.api.post("changepasswordemail",t).share();return e.subscribe(function(t){},function(t){console.error("ERROR",t)}),e},t.prototype.logout=function(){var t=this;return this._token=null,this.menu.logout(),this.storage.remove("_token").then(function(){t.api.setAPIHeaders()})},t.prototype._loggedIn=function(t){var e=this;return console.log(t),this.menu.login(),this._token=t.token,this.storage.set("_token",t.token).then(function(){e.api.setAPIHeaders()})},t}())},147:function(t,e,n){"use strict";n.d(e,"a",function(){return a});n(3),n(79);var a=function(){function t(t){this.api=t}return t.prototype.query=function(t){var e=this.api.get("matches/listing",t);return console.log("api call"),e.subscribe(function(t){console.log(t)},function(t){console.error("ERROR",t)}),e},t.prototype.add=function(t){},t.prototype.delete=function(t){},t}()},177:function(t,e){function n(t){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+t+"'.")})}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=177},201:function(t,e,n){function a(t){var e=o[t];return e?n.e(e[1]).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}var o={"../pages/card-detail/card-detail.module.ngfactory":[291,12],"../pages/cards/cards.module.ngfactory":[292,11],"../pages/content/content.module.ngfactory":[293,10],"../pages/forgot-password/forgot-password.module.ngfactory":[294,4],"../pages/item-create/item-create.module.ngfactory":[295,3],"../pages/item-detail/item-detail.module.ngfactory":[296,9],"../pages/list-master/list-master.module.ngfactory":[297,8],"../pages/login/login.module.ngfactory":[298,2],"../pages/menu/menu.module.ngfactory":[299,15],"../pages/profile/profile.module.ngfactory":[301,7],"../pages/search/search.module.ngfactory":[300,6],"../pages/settings/settings.module.ngfactory":[302,1],"../pages/signup/signup.module.ngfactory":[303,0],"../pages/tabs/tabs.module.ngfactory":[304,14],"../pages/tutorial/tutorial.module.ngfactory":[305,5],"../pages/welcome/welcome.module.ngfactory":[306,13]};a.keys=function(){return Object.keys(o)},a.id=201,t.exports=a},230:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return o}),n.d(e,"c",function(){return l}),n.d(e,"d",function(){return r}),n.d(e,"e",function(){return i});var a="TutorialPage",o="CardsPage",l="ListMasterPage",r="SearchPage",i="SettingsPage"},233:function(t,e,n){"use strict";function a(t){return new h.a(t,{option1:!0,option2:"Ionitron J. Framework",option3:"3",option4:"Hello"})}function o(t){return i._21(0,[(t()(),i.Z(0,0,null,null,7,"button",[["class","transparent list-item item item-block"],["ion-item",""],["menuClose",""]],null,[[null,"click"]],function(t,e,n){var a=!0,o=t.component;if("click"===e){a=!1!==i._11(t,6).close()&&a}if("click"===e){a=!1!==o.openPage(t.context.$implicit)&&a}return a},N.b,N.a)),i.Y(1,1097728,null,3,S.a,[E.a,R.a,i.j,i.z,[2,F.a]],null,null),i._17(335544320,6,{contentLabel:0}),i._17(603979776,7,{_buttons:1}),i._17(603979776,8,{_icons:1}),i.Y(5,16384,null,0,Y.a,[],null,null),i.Y(6,16384,null,0,z.a,[I.a],{menuClose:[0,"menuClose"]},null),(t()(),i._19(7,2,["\n          ","\n        "]))],function(t,e){t(e,6,0,"")},function(t,e){t(e,7,0,e.context.$implicit.title)})}function l(t){return i._21(0,[i._17(402653184,1,{nav:0}),(t()(),i._19(-1,null,["\n  "])),(t()(),i.Z(2,0,null,null,48,"ion-split-pane",[["when","sm"]],null,null,null,null,null)),i.Y(3,4341760,null,1,O.b,[i.u,A.a,R.a,i.j,i.z],{when:[0,"when"]},null),i._17(603979776,2,{_setchildren:1}),i._15(2048,[[2,4]],O.a,null,[O.b]),(t()(),i._19(-1,null,["\n  "])),(t()(),i.Z(7,0,null,null,38,"ion-menu",[["role","navigation"]],null,null,null,B.b,B.a)),i.Y(8,245760,null,2,L.a,[I.a,i.j,R.a,A.a,i.z,Z.a,D.l,K.a,q.a],{content:[0,"content"]},null),i._17(335544320,3,{menuContent:0}),i._17(335544320,4,{menuNav:0}),i._15(2048,[[2,4]],O.a,null,[L.a]),(t()(),i._19(-1,0,["\n    "])),(t()(),i.Z(13,0,null,0,20,"ion-header",[],null,null,null,null,null)),i.Y(14,16384,null,0,G.a,[R.a,i.j,i.z,[2,W.a]],null,null),(t()(),i._19(-1,null,["\n      "])),(t()(),i.Z(16,0,null,null,16,"ion-toolbar",[["class","toolbar"]],[[2,"statusbar-padding",null]],null,null,X.b,X.a)),i.Y(17,49152,null,0,x.a,[R.a,i.j,i.z],null,null),(t()(),i._19(-1,3,["\n        "])),(t()(),i.Z(19,0,null,0,8,"button",[["ion-button",""],["left",""],["menuToggle",""]],[[8,"hidden",0]],[[null,"click"]],function(t,e,n){var a=!0;if("click"===e){a=!1!==i._11(t,21).toggle()&&a}return a},U.b,U.a)),i.Y(20,1097728,[[5,4]],0,V.a,[[8,""],R.a,i.j,i.z],null,null),i.Y(21,1064960,null,0,J.a,[I.a,[2,W.a],[2,V.a],[2,$.a]],{menuToggle:[0,"menuToggle"]},null),i.Y(22,16384,null,1,Q.a,[R.a,i.j,i.z,[2,x.a],[2,$.a]],null,null),i._17(603979776,5,{_buttons:1}),(t()(),i._19(-1,0,["\n          "])),(t()(),i.Z(25,0,null,0,1,"ion-icon",[["name","menu"],["role","img"]],[[2,"hide",null]],null,null,null,null)),i.Y(26,147456,null,0,tt.a,[R.a,i.j,i.z],{name:[0,"name"]},null),(t()(),i._19(-1,0,["\n        "])),(t()(),i._19(-1,3,["\n        "])),(t()(),i.Z(29,0,null,3,2,"ion-title",[],null,null,null,et.b,et.a)),i.Y(30,49152,null,0,nt.a,[R.a,i.j,i.z,[2,x.a],[2,$.a]],null,null),(t()(),i._19(-1,0,["Pages"])),(t()(),i._19(-1,3,["\n      "])),(t()(),i._19(-1,null,["\n    "])),(t()(),i._19(-1,0,["\n\n    "])),(t()(),i.Z(35,0,null,0,9,"ion-content",[["class","menu-container"]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,at.b,at.a)),i.Y(36,4374528,[[3,4]],0,ot.a,[R.a,A.a,K.a,i.j,i.z,q.a,Z.a,i.u,[2,W.a],[2,lt.a]],null,null),(t()(),i._19(-1,1,["\n      "])),(t()(),i.Z(38,0,null,1,5,"ion-list",[["no-lines",""]],null,null,null,null,null)),i.Y(39,16384,null,0,rt.a,[R.a,i.j,i.z,A.a,D.l,K.a],null,null),(t()(),i._19(-1,null,["\n        "])),(t()(),i.U(16777216,null,null,1,null,o)),i.Y(42,802816,null,0,it.h,[i.I,i.F,i.p],{ngForOf:[0,"ngForOf"]},null),(t()(),i._19(-1,null,["\n      "])),(t()(),i._19(-1,1,["\n    "])),(t()(),i._19(-1,0,["\n\n  "])),(t()(),i._19(-1,null,["\n  "])),(t()(),i.Z(47,0,null,null,2,"ion-nav",[["main",""],["swipeBackEnabled","false"]],null,null,null,st.b,st.a)),i.Y(48,4374528,[[1,4],["content",4]],0,ut.a,[[2,W.a],[2,lt.a],q.a,R.a,A.a,i.j,i.u,i.z,i.i,D.l,ct.a,[2,gt.a],K.a,i.k],{swipeBackEnabled:[0,"swipeBackEnabled"],root:[1,"root"]},null),i._15(2048,[[2,4]],O.a,null,[ut.a]),(t()(),i._19(-1,null,["\n  "])),(t()(),i._19(-1,null,["\n  "]))],function(t,e){var n=e.component;t(e,3,0,"sm");t(e,8,0,i._11(e,48));t(e,21,0,"");t(e,26,0,"menu");t(e,42,0,n.menu.pages);t(e,48,0,"false",n.menu.rootPage)},function(t,e){t(e,16,0,i._11(e,17)._sbPadding);t(e,19,0,i._11(e,21).isHidden);t(e,25,0,i._11(e,26)._hidden);t(e,35,0,i._11(e,36).statusbarPadding,i._11(e,36)._hasRefresher)})}Object.defineProperty(e,"__esModule",{value:!0});var r=n(36),i=n(0),s=(n(3),n(113)),u=n(150),c=n(66),g=n(67),p=n(43),f=n(86),d=n(284),h=(n(141),n(89)),m=function(){function t(t,e,n,a,o,l,r){var i=this;this.menu=t,this.translate=e,this.config=o,this.statusBar=l,this.splashScreen=r,n.ready().then(function(){i.statusBar.styleDefault(),i.splashScreen.hide()}),this.initTranslate()}return t.prototype.initTranslate=function(){var t=this;this.translate.setDefaultLang("en");var e=this.translate.getBrowserLang();if(e)if("zh"===e){var n=this.translate.getBrowserCultureLang();n.match(/-CN|CHS|Hans/i)?this.translate.use("zh-cmn-Hans"):n.match(/-TW|CHT|Hant/i)&&this.translate.use("zh-cmn-Hant")}else this.translate.use(this.translate.getBrowserLang());else this.translate.use("en");this.translate.get(["BACK_BUTTON_TEXT"]).subscribe(function(e){t.config.set("ios","backButtonText",e.BACK_BUTTON_TEXT)})},t.prototype.openPage=function(t){var e=this;this.nav.setRoot(t.component).then(function(t){t||e.nav.setRoot("WelcomePage")})},t}(),_=function(t){return new d.a(t,"./assets/i18n/",".json")},y=function(){return function(){}}(),b=n(51),P=n(219),w=n(220),v=n(221),C=n(222),k=n(223),T=n(224),j=n(225),H=n(226),M=n(227),N=n(145),S=n(16),E=n(14),R=n(1),F=n(42),Y=n(61),z=n(99),I=n(23),O=n(29),A=n(4),B=n(231),L=n(62),Z=n(25),D=n(6),K=n(10),q=n(9),G=n(88),W=n(5),X=n(290),x=n(35),U=n(39),V=n(20),J=n(92),$=n(34),Q=n(90),tt=n(40),et=n(229),nt=n(60),at=n(228),ot=n(22),lt=n(21),rt=n(46),it=n(12),st=n(232),ut=n(48),ct=n(28),gt=n(15),pt=n(80),ft=n(27),dt=n(100),ht=i.X({encapsulation:2,styles:[],data:{}}),mt=i.V("ng-component",m,function(t){return i._21(0,[(t()(),i.Z(0,0,null,null,1,"ng-component",[],null,null,null,l,ht)),i.Y(1,49152,null,0,m,[pt.a,ft.a,A.a,dt.a,R.a,g.a,c.a],null,null)],null,null)},{},{},[]),_t=n(128),yt=n(18),bt=n(56),Pt=n(57),wt=n(59),vt=n(58),Ct=n(87),kt=n(121),Tt=n(93),jt=n(127),Ht=n(30),Mt=n(91),Nt=n(142),St=n(53),Et=n(41),Rt=n(94),Ft=n(73),Yt=n(133),zt=n(130),It=n(97),Ot=n(148),At=n(79),Bt=n(147),Lt=n(146),Zt=n(218),Dt=n(129),Kt=n(126),qt=n(131),Gt=i.W(y,[b.b],function(t){return i._7([i._8(512,i.i,i.S,[[8,[P.a,w.a,v.a,C.a,k.a,T.a,j.a,H.a,M.a,mt]],[3,i.i],i.s]),i._8(5120,i.r,i._16,[[3,i.r]]),i._8(4608,it.k,it.j,[i.r,[2,it.s]]),i._8(5120,i.b,i._1,[]),i._8(5120,i.p,i._9,[]),i._8(5120,i.q,i._12,[]),i._8(4608,r.c,r.q,[it.c]),i._8(6144,i.D,null,[r.c]),i._8(4608,r.f,_t.a,[]),i._8(5120,r.d,function(t,e,n,a,o){return[new r.k(t,e),new r.o(n),new r.n(a,o)]},[it.c,i.u,it.c,it.c,r.f]),i._8(4608,r.e,r.e,[r.d,i.u]),i._8(135680,r.m,r.m,[it.c]),i._8(4608,r.l,r.l,[r.e,r.m]),i._8(6144,i.B,null,[r.l]),i._8(6144,r.p,null,[r.m]),i._8(4608,i.G,i.G,[i.u]),i._8(4608,r.h,r.h,[it.c]),i._8(4608,r.i,r.i,[it.c]),i._8(4608,s.j,s.p,[it.c,i.w,s.n]),i._8(4608,s.q,s.q,[s.j,s.o]),i._8(5120,s.a,function(t){return[t]},[s.q]),i._8(4608,s.m,s.m,[]),i._8(6144,s.k,null,[s.m]),i._8(4608,s.i,s.i,[s.k]),i._8(6144,s.b,null,[s.i]),i._8(4608,s.f,s.l,[s.b,i.o]),i._8(4608,s.c,s.c,[s.f]),i._8(4608,yt.r,yt.r,[]),i._8(4608,yt.d,yt.d,[]),i._8(5120,bt.b,_,[s.c]),i._8(4608,Pt.a,Pt.b,[]),i._8(4608,wt.b,wt.a,[]),i._8(4608,vt.b,vt.a,[]),i._8(4608,Ct.a,Ct.a,[]),i._8(4608,ft.a,ft.a,[Ct.a,bt.b,Pt.a,wt.b,vt.b,ft.b,ft.c]),i._8(4608,kt.a,kt.a,[q.a,R.a]),i._8(4608,Tt.a,Tt.a,[q.a,R.a]),i._8(4608,jt.a,jt.a,[]),i._8(4608,E.a,E.a,[]),i._8(4608,Ht.a,Ht.a,[A.a]),i._8(4608,Z.a,Z.a,[R.a,A.a,i.u,K.a]),i._8(4608,Mt.a,Mt.a,[q.a,R.a]),i._8(5120,it.f,Nt.c,[it.q,[2,it.a],R.a]),i._8(4608,it.e,it.e,[it.f]),i._8(5120,St.b,St.d,[q.a,St.a]),i._8(5120,gt.a,gt.b,[q.a,St.b,it.e,Et.b,i.i]),i._8(4608,Rt.a,Rt.a,[q.a,R.a,gt.a]),i._8(4608,Ft.a,Ft.a,[q.a,R.a]),i._8(4608,Yt.a,Yt.a,[q.a,R.a,gt.a]),i._8(4608,zt.a,zt.a,[R.a,A.a,K.a,q.a,D.l]),i._8(4608,It.a,It.a,[q.a,R.a]),i._8(4608,ct.a,ct.a,[A.a,R.a]),i._8(5120,Ot.a,Ot.c,[Ot.b]),i._8(4608,At.a,At.a,[s.c,Ot.a]),i._8(4608,Bt.a,Bt.a,[At.a]),i._8(4608,pt.a,pt.a,[Ot.a]),i._8(4608,Lt.a,Lt.a,[At.a,Ot.a,pt.a]),i._8(4608,u.a,u.a,[]),i._8(4608,c.a,c.a,[]),i._8(4608,g.a,g.a,[]),i._8(5120,dt.a,a,[Ot.a]),i._8(512,it.b,it.b,[]),i._8(512,i.k,Zt.a,[]),i._8(256,R.b,{},[]),i._8(1024,Dt.a,Dt.b,[]),i._8(1024,A.a,A.b,[r.b,Dt.a,i.u]),i._8(1024,R.a,R.c,[R.b,A.a]),i._8(512,K.a,K.a,[A.a]),i._8(512,I.a,I.a,[]),i._8(512,q.a,q.a,[R.a,A.a,[2,I.a]]),i._8(512,D.l,D.l,[q.a]),i._8(256,St.a,{links:[{loadChildren:"../pages/card-detail/card-detail.module.ngfactory#ItemDetailPageModuleNgFactory",name:"CardDetailPage",segment:"card-detail",priority:"low",defaultHistory:[]},{loadChildren:"../pages/cards/cards.module.ngfactory#CardsPageModuleNgFactory",name:"CardsPage",segment:"cards",priority:"low",defaultHistory:[]},{loadChildren:"../pages/content/content.module.ngfactory#ContentPageModuleNgFactory",name:"ContentPage",segment:"content",priority:"low",defaultHistory:[]},{loadChildren:"../pages/forgot-password/forgot-password.module.ngfactory#ForgotPasswordPageModuleNgFactory",name:"ForgotPasswordPage",segment:"forgot-password",priority:"low",defaultHistory:[]},{loadChildren:"../pages/item-create/item-create.module.ngfactory#ItemCreatePageModuleNgFactory",name:"ItemCreatePage",segment:"item-create",priority:"low",defaultHistory:[]},{loadChildren:"../pages/item-detail/item-detail.module.ngfactory#ItemDetailPageModuleNgFactory",name:"ItemDetailPage",segment:"item-detail",priority:"low",defaultHistory:[]},{loadChildren:"../pages/list-master/list-master.module.ngfactory#ListMasterPageModuleNgFactory",name:"ListMasterPage",segment:"list-master",priority:"low",defaultHistory:[]},{loadChildren:"../pages/login/login.module.ngfactory#LoginPageModuleNgFactory",name:"LoginPage",segment:"login",priority:"low",defaultHistory:[]},{loadChildren:"../pages/menu/menu.module.ngfactory#MenuPageModuleNgFactory",name:"MenuPage",segment:"menu",priority:"low",defaultHistory:[]},{loadChildren:"../pages/search/search.module.ngfactory#SearchPageModuleNgFactory",name:"SearchPage",segment:"search",priority:"low",defaultHistory:[]},{loadChildren:"../pages/profile/profile.module.ngfactory#ItemDetailPageModuleNgFactory",name:"ProfilePage",segment:"profile",priority:"low",defaultHistory:[]},{loadChildren:"../pages/settings/settings.module.ngfactory#SettingsPageModuleNgFactory",name:"SettingsPage",segment:"settings",priority:"low",defaultHistory:[]},{loadChildren:"../pages/signup/signup.module.ngfactory#SignupPageModuleNgFactory",name:"SignupPage",segment:"signup",priority:"low",defaultHistory:[]},{loadChildren:"../pages/tabs/tabs.module.ngfactory#TabsPageModuleNgFactory",name:"TabsPage",segment:"tabs",priority:"low",defaultHistory:[]},{loadChildren:"../pages/tutorial/tutorial.module.ngfactory#TutorialPageModuleNgFactory",name:"TutorialPage",segment:"tutorial",priority:"low",defaultHistory:[]},{loadChildren:"../pages/welcome/welcome.module.ngfactory#WelcomePageModuleNgFactory",name:"WelcomePage",segment:"welcome",priority:"low",defaultHistory:[]}]},[]),i._8(512,i.h,i.h,[]),i._8(512,Kt.a,Kt.a,[i.h]),i._8(1024,Et.b,Et.c,[Kt.a,i.o]),i._8(1024,i.c,function(t,e,n,a,o,l,i,s,u,c,g,p,f){return[r.s(t),qt.a(e),jt.b(n,a),zt.b(o,l,i,s,u),Et.d(c,g,p,f)]},[[2,i.t],R.a,A.a,K.a,R.a,A.a,K.a,q.a,D.l,R.a,St.a,Et.b,i.u]),i._8(512,i.d,i.d,[[2,i.c]]),i._8(131584,i.f,i.f,[i.u,i.T,i.o,i.k,i.i,i.d]),i._8(512,i.e,i.e,[i.f]),i._8(512,r.a,r.a,[[3,r.a]]),i._8(512,s.e,s.e,[]),i._8(512,s.d,s.d,[]),i._8(512,f.a,f.a,[]),i._8(512,yt.p,yt.p,[]),i._8(512,yt.g,yt.g,[]),i._8(512,yt.n,yt.n,[]),i._8(512,Nt.a,Nt.a,[]),i._8(512,p.a,p.a,[]),i._8(512,y,y,[]),i._8(256,s.n,"XSRF-TOKEN",[]),i._8(256,s.o,"X-XSRF-TOKEN",[]),i._8(256,ft.c,void 0,[]),i._8(256,ft.b,void 0,[]),i._8(256,b.a,m,[]),i._8(256,it.a,"/",[]),i._8(256,Ot.b,null,[])])});Object(i.M)(),Object(r.j)().bootstrapModuleFactory(Gt)},79:function(t,e,n){"use strict";n.d(e,"a",function(){return o});n(3);var a=n(113),o=(n(43),function(){function t(t,e){this.http=t,this.storage=e,this.url="https://pubg-mobile-api.herokuapp.com",this.setAPIHeaders()}return t.prototype.setAPIHeaders=function(){var t=this;this.storage.get("_token").then(function(e){t.token=e||"",console.log(t.token)})},t.prototype.get=function(t,e,n){if(n||(n={params:new a.h}),e){n.params=new a.h;for(var o in e)n.params=n.params.set(o,e[o])}var l={headers:new a.g({"Content-Type":"application/json",Authorization:this.token})};return n.headers=l.headers,this.http.get(this.url+"/"+t,n)},t.prototype.post=function(t,e){var n={headers:new a.g({"Content-Type":"application/json",Authorization:this.token})};return this.http.post(this.url+"/"+t,e,n)},t.prototype.put=function(t,e){var n={headers:new a.g({"Content-Type":"application/json",Authorization:this.token})};return this.http.put(this.url+"/"+t,e,n)},t.prototype.delete=function(t){var e={headers:new a.g({"Content-Type":"application/json",Authorization:this.token})};return this.http.delete(this.url+"/"+t,e)},t.prototype.patch=function(t,e){var n={headers:new a.g({"Content-Type":"application/json",Authorization:this.token})};return this.http.patch(this.url+"/"+t,e,n)},t}())},80:function(t,e,n){"use strict";n.d(e,"a",function(){return l});n(3);var a=n(202),o=(n.n(a),n(43),n(230)),l=function(){function t(t){var e=this;this.storage=t,this.pages=[],this.storage.get("_token").then(function(t){t?(e.pages[0]={title:"Matches",component:"CardsPage"},e.pages[1]={title:"Logout",component:"WelcomePage"},e.pages[2]={title:"My Profile",component:"ProfilePage"},e.rootPage="CardsPage"):e.rootPage=o.a})}return t.prototype.logout=function(){this.pages=[],this.pages[0]={title:"Login",component:"LoginPage"},this.pages[1]={title:"Signup",component:"SignupPage"}},t.prototype.login=function(){this.pages[0]={title:"Matches",component:"CardsPage"},this.pages[1]={title:"Logout",component:"WelcomePage"},this.pages[2]={title:"My Profile",component:"ProfilePage"}},t}()},89:function(t,e,n){"use strict";n(79),n(147);var a=n(100);n.d(e,"a",function(){return a.a});n(146),n(80)}},[233]);