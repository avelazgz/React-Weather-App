"use strict";(self.webpackChunkcursoPlainAngular=self.webpackChunkcursoPlainAngular||[]).push([[202],{4202:(x,f,e)=>{e.r(f),e.d(f,{HomeModule:()=>i});var p=e(6895),o=e(4650),L=e(263),C=e(3561),c=e(4859),u=e(7676),h=e(4144),s=e(4006),d=e(3416);class r{constructor(){this.infoLogin=new o.vpe}ngOnInit(){}sendData(){this.infoLogin.emit({user:this.user,password:this.password})}}function v(l,n){if(1&l){const t=o.EpF();o.TgZ(0,"app-login-form",2),o.NdJ("infoLogin",function(a){o.CHM(t);const T=o.oxw();return o.KtG(T.login(a))}),o.qZA()}}function Z(l,n){if(1&l){const t=o.EpF();o.TgZ(0,"button",3),o.NdJ("click",function(){o.CHM(t);const a=o.oxw();return o.KtG(a.logout())}),o._uU(1),o.ALo(2,"translate"),o.qZA()}2&l&&(o.xp6(1),o.Oqu(o.lcZ(2,1,"home.login.logout")))}r.\u0275fac=function(n){return new(n||r)},r.\u0275cmp=o.Xpm({type:r,selectors:[["app-login-form"]],outputs:{infoLogin:"infoLogin"},decls:16,vars:17,consts:[[1,"example-form"],["appearance","fill",1,"example-full-width"],["data-testid","user-input","name","user","matInput","",3,"ngModel","placeholder","ngModelChange"],["data-testid","password-input","name","pass","matInput","","type","password",3,"ngModel","placeholder","ngModelChange"],["data-testid","login-button","mat-button","","type","button",3,"click"]],template:function(n,t){1&n&&(o.TgZ(0,"form",0)(1,"mat-form-field",1)(2,"mat-label"),o._uU(3),o.ALo(4,"translate"),o.qZA(),o.TgZ(5,"input",2),o.NdJ("ngModelChange",function(a){return t.user=a}),o.ALo(6,"translate"),o.qZA()(),o.TgZ(7,"mat-form-field",1)(8,"mat-label"),o._uU(9),o.ALo(10,"translate"),o.qZA(),o.TgZ(11,"input",3),o.NdJ("ngModelChange",function(a){return t.password=a}),o.ALo(12,"translate"),o.qZA()(),o.TgZ(13,"button",4),o.NdJ("click",function(){return t.sendData()}),o._uU(14),o.ALo(15,"translate"),o.qZA()()),2&n&&(o.xp6(3),o.Oqu(o.lcZ(4,7,"home.login.username.title")),o.xp6(2),o.Q6J("ngModel",t.user)("placeholder",o.lcZ(6,9,"home.login.username.placeholder")),o.xp6(4),o.Oqu(o.lcZ(10,11,"home.login.password.title")),o.xp6(2),o.Q6J("ngModel",t.password)("placeholder",o.lcZ(12,13,"home.login.password.placeholder")),o.xp6(3),o.Oqu(o.lcZ(15,15,"home.login.login")))},dependencies:[u.KE,u.hX,h.Nt,c.lW,s._Y,s.Fj,s.JJ,s.JL,s.On,s.F,d.X$],styles:[".example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}"]});class m{constructor(n,t){this.authService=n,this.settingsService=t,this.isLoggedIn=!1}ngOnInit(){console.log(this.settingsService.appSettings)}login(n){console.log(n),this.authService.login(n.user,n.password).subscribe(t=>{console.log(t),this.isLoggedIn=t})}isLogin(){return this.authService.isLoggedIn()}logout(){this.authService.logout(),this.isLoggedIn=!1}}m.\u0275fac=function(n){return new(n||m)(o.Y36(L.e),o.Y36(C.X))},m.\u0275cmp=o.Xpm({type:m,selectors:[["app-home-page"]],decls:4,vars:4,consts:[[3,"infoLogin",4,"ngIf","ngIfElse"],["logoutTemplate",""],[3,"infoLogin"],["mat-button","",3,"click"]],template:function(n,t){if(1&n&&(o.YNc(0,v,1,0,"app-login-form",0),o.ALo(1,"async"),o.YNc(2,Z,3,3,"ng-template",null,1,o.W1O)),2&n){const g=o.MAs(3);o.Q6J("ngIf",!o.lcZ(1,2,t.isLogin()))("ngIfElse",g)}},dependencies:[p.O5,c.lW,r,p.Ov,d.X$]});var A=e(3792);const M=[{path:"",component:m}];class i{}i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=o.oAB({type:i}),i.\u0275inj=o.cJS({imports:[p.ez,A.Bz.forChild(M),d.aw.forChild(),u.lN,h.c,c.ot,s.u5]})}}]);