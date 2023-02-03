"use strict";(self.webpackChunkcursoPlainAngular=self.webpackChunkcursoPlainAngular||[]).push([[144],{4144:(N,M,a)=>{a.d(M,{Nt:()=>k,c:()=>F});var d=a(1281),u=a(3353),n=a(4650),A=a(515),g=a(7579);const y=(0,u.i$)({passive:!0});let I=(()=>{class i{constructor(e,t){this._platform=e,this._ngZone=t,this._monitoredElements=new Map}monitor(e){if(!this._platform.isBrowser)return A.E;const t=(0,d.fI)(e),s=this._monitoredElements.get(t);if(s)return s.subject;const r=new g.x,l="cdk-text-field-autofilled",c=h=>{"cdk-text-field-autofill-start"!==h.animationName||t.classList.contains(l)?"cdk-text-field-autofill-end"===h.animationName&&t.classList.contains(l)&&(t.classList.remove(l),this._ngZone.run(()=>r.next({target:h.target,isAutofilled:!1}))):(t.classList.add(l),this._ngZone.run(()=>r.next({target:h.target,isAutofilled:!0})))};return this._ngZone.runOutsideAngular(()=>{t.addEventListener("animationstart",c,y),t.classList.add("cdk-text-field-autofill-monitored")}),this._monitoredElements.set(t,{subject:r,unlisten:()=>{t.removeEventListener("animationstart",c,y)}}),r}stopMonitoring(e){const t=(0,d.fI)(e),s=this._monitoredElements.get(t);s&&(s.unlisten(),s.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}}return i.\u0275fac=function(e){return new(e||i)(n.LFG(u.t4),n.LFG(n.R0b))},i.\u0275prov=n.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})(),b=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({}),i})();var f=a(4006),_=a(3238),p=a(7676);const w=new n.OlP("MAT_INPUT_VALUE_ACCESSOR"),H=["button","checkbox","file","hidden","image","radio","range","reset","submit"];let R=0;const T=(0,_.FD)(class{constructor(i,o,e,t){this._defaultErrorStateMatcher=i,this._parentForm=o,this._parentFormGroup=e,this.ngControl=t,this.stateChanges=new g.x}});let k=(()=>{class i extends T{get disabled(){return this._disabled}set disabled(e){this._disabled=(0,d.Ig)(e),this.focused&&(this.focused=!1,this.stateChanges.next())}get id(){return this._id}set id(e){this._id=e||this._uid}get required(){return this._required??this.ngControl?.control?.hasValidator(f.kI.required)??!1}set required(e){this._required=(0,d.Ig)(e)}get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&(0,u.qK)().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}get value(){return this._inputValueAccessor.value}set value(e){e!==this.value&&(this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=(0,d.Ig)(e)}constructor(e,t,s,r,l,c,h,S,L,C){super(c,r,l,s),this._elementRef=e,this._platform=t,this._autofillMonitor=S,this._formField=C,this._uid="mat-input-"+R++,this.focused=!1,this.stateChanges=new g.x,this.controlType="mat-input",this.autofilled=!1,this._disabled=!1,this._type="text",this._readonly=!1,this._neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(x=>(0,u.qK)().has(x)),this._iOSKeyupListener=x=>{const m=x.target;!m.value&&0===m.selectionStart&&0===m.selectionEnd&&(m.setSelectionRange(1,1),m.setSelectionRange(0,0))};const v=this._elementRef.nativeElement,E=v.nodeName.toLowerCase();this._inputValueAccessor=h||v,this._previousNativeValue=this.value,this.id=this.id,t.IOS&&L.runOutsideAngular(()=>{e.nativeElement.addEventListener("keyup",this._iOSKeyupListener)}),this._isServer=!this._platform.isBrowser,this._isNativeSelect="select"===E,this._isTextarea="textarea"===E,this._isInFormField=!!C,this._isNativeSelect&&(this.controlType=v.multiple?"mat-native-select-multiple":"mat-native-select")}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._platform.IOS&&this._elementRef.nativeElement.removeEventListener("keyup",this._iOSKeyupListener)}ngDoCheck(){this.ngControl&&(this.updateErrorState(),null!==this.ngControl.disabled&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}_focusChanged(e){e!==this.focused&&(this.focused=e,this.stateChanges.next())}_onInput(){}_dirtyCheckNativeValue(){const e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){const e=this._getPlaceholder();if(e!==this._previousPlaceholder){const t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){H.indexOf(this._type)}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!(this._isNeverEmpty()||this._elementRef.nativeElement.value||this._isBadInput()||this.autofilled)}get shouldLabelFloat(){if(this._isNativeSelect){const e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}return this.focused||!this.empty}setDescribedByIds(e){e.length?this._elementRef.nativeElement.setAttribute("aria-describedby",e.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){const e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}}return i.\u0275fac=function(e){return new(e||i)(n.Y36(n.SBq),n.Y36(u.t4),n.Y36(f.a5,10),n.Y36(f.F,8),n.Y36(f.sg,8),n.Y36(_.rD),n.Y36(w,10),n.Y36(I),n.Y36(n.R0b),n.Y36(p.G_,8))},i.\u0275dir=n.lG2({type:i,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:18,hostBindings:function(e,t){1&e&&n.NdJ("focus",function(){return t._focusChanged(!0)})("blur",function(){return t._focusChanged(!1)})("input",function(){return t._onInput()}),2&e&&(n.Ikx("id",t.id)("disabled",t.disabled)("required",t.required),n.uIk("name",t.name||null)("readonly",t.readonly&&!t._isNativeSelect||null)("aria-invalid",t.empty&&t.required?null:t.errorState)("aria-required",t.required)("id",t.id),n.ekj("mat-input-server",t._isServer)("mat-mdc-form-field-textarea-control",t._isInFormField&&t._isTextarea)("mat-mdc-form-field-input-control",t._isInFormField)("mdc-text-field__input",t._isInFormField)("mat-mdc-native-select-inline",t._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:["aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly"},exportAs:["matInput"],features:[n._Bn([{provide:p.Eo,useExisting:i}]),n.qOj,n.TTD]}),i})(),F=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=n.oAB({type:i}),i.\u0275inj=n.cJS({imports:[_.BQ,p.lN,p.lN,b,_.BQ]}),i})()}}]);