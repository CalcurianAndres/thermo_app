import{b as De,d as Me}from"./chunk-7GHGAEND.js";import{a as Ae}from"./chunk-JQZTFXZZ.js";import{$a as f,Ca as _e,Ea as Q,Fa as d,Ga as c,Ha as ve,Ia as M,Ja as g,L as O,La as P,M as V,Ma as G,Na as R,O as z,Oa as A,Pa as ye,Q as m,Ra as Ce,X as me,Xa as Ve,Y as Z,Z as l,Za as ee,_a as w,a,b as u,bb as te,ca as X,da as Y,ga as b,h as he,ja as K,k as fe,mb as be,p as pe,qa as k,ra as o,ua as J,v as ge,wa as D,xa as h}from"./chunk-23X5PWBD.js";var ke=(()=>{class i{constructor(t,n){this._renderer=t,this._elementRef=n,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(n){return new(n||i)(o(J),o(K))}}static{this.\u0275dir=l({type:i})}}return i})(),Qe=(()=>{class i extends ke{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=Y(i)))(r||i)}})()}static{this.\u0275dir=l({type:i,features:[h]})}}return i})(),Pe=new m("");var et={provide:Pe,useExisting:V(()=>$),multi:!0};function tt(){let i=te()?te().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var it=new m(""),$=(()=>{class i extends ke{constructor(t,n,r){super(t,n),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!tt())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(n){return new(n||i)(o(J),o(K),o(it,8))}}static{this.\u0275dir=l({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&M("input",function(p){return r._handleInput(p.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(p){return r._compositionEnd(p.target.value)})},features:[A([et]),h]})}}return i})();function nt(i){return i==null||(typeof i=="string"||Array.isArray(i))&&i.length===0}var ne=new m(""),Ge=new m("");function rt(i){return nt(i.value)?{required:!0}:null}function we(i){return null}function Re(i){return i!=null}function Ue(i){return Ce(i)?fe(i):i}function Te(i){let e={};return i.forEach(t=>{e=t!=null?a(a({},e),t):e}),Object.keys(e).length===0?null:e}function je(i,e){return e.map(t=>t(i))}function st(i){return!i.validate}function Be(i){return i.map(e=>st(e)?e:t=>e.validate(t))}function ot(i){if(!i)return null;let e=i.filter(Re);return e.length==0?null:function(t){return Te(je(t,e))}}function re(i){return i!=null?ot(Be(i)):null}function at(i){if(!i)return null;let e=i.filter(Re);return e.length==0?null:function(t){let n=je(t,e).map(Ue);return ge(n).pipe(pe(Te))}}function se(i){return i!=null?at(Be(i)):null}function Ee(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function lt(i){return i._rawValidators}function ut(i){return i._rawAsyncValidators}function ie(i){return i?Array.isArray(i)?i:[i]:[]}function T(i,e){return Array.isArray(i)?i.includes(e):i===e}function Fe(i,e){let t=ie(e);return ie(i).forEach(r=>{T(t,r)||t.push(r)}),t}function Se(i,e){return ie(e).filter(t=>!T(i,t))}var j=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=re(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=se(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},y=class extends j{get formDirective(){return null}get path(){return null}},x=class extends j{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},B=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},dt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Kt=u(a({},dt),{"[class.ng-submitted]":"isSubmitted"}),He=(()=>{class i extends B{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(o(x,2))}}static{this.\u0275dir=l({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&Q("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[h]})}}return i})(),Le=(()=>{class i extends B{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(o(y,10))}}static{this.\u0275dir=l({type:i,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){n&2&&Q("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[h]})}}return i})();var E="VALID",U="INVALID",_="PENDING",F="DISABLED",C=class{},H=class extends C{constructor(e,t){super(),this.value=e,this.source=t}},I=class extends C{constructor(e,t){super(),this.pristine=e,this.source=t}},N=class extends C{constructor(e,t){super(),this.touched=e,this.source=t}},v=class extends C{constructor(e,t){super(),this.status=e,this.source=t}};function We(i){return(q(i)?i.validators:i)||null}function ct(i){return Array.isArray(i)?re(i):i||null}function $e(i,e){return(q(e)?e.asyncValidators:i)||null}function ht(i){return Array.isArray(i)?se(i):i||null}function q(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function ft(i,e,t){let n=i.controls;if(!(e?Object.keys(n):n).length)throw new O(1e3,"");if(!n[t])throw new O(1001,"")}function pt(i,e,t){i._forEachChild((n,r)=>{if(t[r]===void 0)throw new O(1002,"")})}var L=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=w(()=>this.statusReactive()),this.statusReactive=D(void 0),this._pristine=w(()=>this.pristineReactive()),this.pristineReactive=D(!0),this._touched=w(()=>this.touchedReactive()),this.touchedReactive=D(!1),this._events=new he,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return f(this.statusReactive)}set status(e){f(()=>this.statusReactive.set(e))}get valid(){return this.status===E}get invalid(){return this.status===U}get pending(){return this.status==_}get disabled(){return this.status===F}get enabled(){return this.status!==F}get pristine(){return f(this.pristineReactive)}set pristine(e){f(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return f(this.touchedReactive)}set touched(e){f(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Fe(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Fe(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Se(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Se(e,this._rawAsyncValidators))}hasValidator(e){return T(this._rawValidators,e)}hasAsyncValidator(e){return T(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(u(a({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new N(!0,n))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),t&&e.emitEvent!==!1&&this._events.next(new N(!1,n))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(u(a({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new I(!1,n))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),t&&e.emitEvent!==!1&&this._events.next(new I(!0,n))}markAsPending(e={}){this.status=_;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new v(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(u(a({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=F,this.errors=null,this._forEachChild(r=>{r.disable(u(a({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new H(this.value,n)),this._events.next(new v(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(u(a({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=E,this._forEachChild(n=>{n.enable(u(a({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(u(a({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===E||this.status===_)&&this._runAsyncValidator(n,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new H(this.value,t)),this._events.next(new v(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(u(a({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?F:E}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=_,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let n=Ue(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,r)=>n&&n._find(r),this)}getError(e,t){let n=t?this.get(t):this;return n&&n.errors?n.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new v(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,n)}_initObservables(){this.valueChanges=new b,this.statusChanges=new b}_calculateStatus(){return this._allControlsDisabled()?F:this.errors?U:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(_)?_:this._anyControlsHaveStatus(U)?U:E}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new I(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new N(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){q(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=ct(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=ht(this._rawAsyncValidators)}},W=class extends L{constructor(e,t,n){super(We(t),$e(n,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,n={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){pt(this,!0,e),Object.keys(e).forEach(n=>{ft(this,!0,n),this.controls[n].setValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(n=>{let r=this.controls[n];r&&r.patchValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((n,r)=>{n.reset(e?e[r]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,n)=>(e[n]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,n)=>n._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let n=this.controls[t];n&&e(n,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,n]of Object.entries(this.controls))if(this.contains(t)&&e(n))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(t,n,r)=>((n.enabled||this.disabled)&&(t[r]=n.value),t))}_reduceChildren(e,t){let n=e;return this._forEachChild((r,s)=>{n=t(n,r,s)}),n}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var oe=new m("CallSetDisabledState",{providedIn:"root",factory:()=>ae}),ae="always";function gt(i,e){return[...e.path,i]}function qe(i,e,t=ae){ze(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),_t(i,e),yt(i,e),vt(i,e),mt(i,e)}function Ie(i,e){i.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function mt(i,e){if(e.valueAccessor.setDisabledState){let t=n=>{e.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(t),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(t)})}}function ze(i,e){let t=lt(i);e.validator!==null?i.setValidators(Ee(t,e.validator)):typeof t=="function"&&i.setValidators([t]);let n=ut(i);e.asyncValidator!==null?i.setAsyncValidators(Ee(n,e.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();Ie(e._rawValidators,r),Ie(e._rawAsyncValidators,r)}function _t(i,e){e.valueAccessor.registerOnChange(t=>{i._pendingValue=t,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&Ze(i,e)})}function vt(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&Ze(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function Ze(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function yt(i,e){let t=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};i.registerOnChange(t),e._registerOnDestroy(()=>{i._unregisterOnChange(t)})}function Ct(i,e){i==null,ze(i,e)}function Vt(i,e){if(!i.hasOwnProperty("model"))return!1;let t=i.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function bt(i){return Object.getPrototypeOf(i.constructor)===Qe}function Dt(i,e){i._syncPendingControls(),e.forEach(t=>{let n=t.control;n.updateOn==="submit"&&n._pendingChange&&(t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function Mt(i,e){if(!e)return null;Array.isArray(e);let t,n,r;return e.forEach(s=>{s.constructor===$?t=s:bt(s)?n=s:r=s}),r||n||t||null}var At={provide:y,useExisting:V(()=>le)},S=Promise.resolve(),le=(()=>{class i extends y{get submitted(){return f(this.submittedReactive)}constructor(t,n,r){super(),this.callSetDisabledState=r,this._submitted=w(()=>this.submittedReactive()),this.submittedReactive=D(!1),this._directives=new Set,this.ngSubmit=new b,this.form=new W({},re(t),se(n))}ngAfterViewInit(){this._setUpdateStrategy()}get formDirective(){return this}get control(){return this.form}get path(){return[]}get controls(){return this.form.controls}addControl(t){S.then(()=>{let n=this._findContainer(t.path);t.control=n.registerControl(t.name,t.control),qe(t.control,t,this.callSetDisabledState),t.control.updateValueAndValidity({emitEvent:!1}),this._directives.add(t)})}getControl(t){return this.form.get(t.path)}removeControl(t){S.then(()=>{let n=this._findContainer(t.path);n&&n.removeControl(t.name),this._directives.delete(t)})}addFormGroup(t){S.then(()=>{let n=this._findContainer(t.path),r=new W({});Ct(r,t),n.registerControl(t.name,r),r.updateValueAndValidity({emitEvent:!1})})}removeFormGroup(t){S.then(()=>{let n=this._findContainer(t.path);n&&n.removeControl(t.name)})}getFormGroup(t){return this.form.get(t.path)}updateModel(t,n){S.then(()=>{this.form.get(t.path).setValue(n)})}setValue(t){this.control.setValue(t)}onSubmit(t){return this.submittedReactive.set(!0),Dt(this.form,this._directives),this.ngSubmit.emit(t),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submittedReactive.set(!1)}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.form._updateOn=this.options.updateOn)}_findContainer(t){return t.pop(),t.length?this.form.get(t):this.form}static{this.\u0275fac=function(n){return new(n||i)(o(ne,10),o(Ge,10),o(oe,8))}}static{this.\u0275dir=l({type:i,selectors:[["form",3,"ngNoForm","",3,"formGroup",""],["ng-form"],["","ngForm",""]],hostBindings:function(n,r){n&1&&M("submit",function(p){return r.onSubmit(p)})("reset",function(){return r.onReset()})},inputs:{options:[0,"ngFormOptions","options"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[A([At]),h]})}}return i})();function Ne(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function xe(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var wt=class extends L{constructor(e=null,t,n){super(We(t),$e(n,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),q(t)&&(t.nonNullable||t.initialValueIsDefault)&&(xe(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){Ne(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){Ne(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){xe(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Et={provide:x,useExisting:V(()=>ue)},Oe=Promise.resolve(),ue=(()=>{class i extends x{constructor(t,n,r,s,p,Ke){super(),this._changeDetectorRef=p,this.callSetDisabledState=Ke,this.control=new wt,this._registered=!1,this.name="",this.update=new b,this._parent=t,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=Mt(this,s)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let n=t.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),Vt(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){qe(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){Oe.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let n=t.isDisabled.currentValue,r=n!==0&&ee(n);Oe.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?gt(t,this._parent):[t]}static{this.\u0275fac=function(n){return new(n||i)(o(y,9),o(ne,10),o(Ge,10),o(Pe,10),o(Ve,8),o(oe,8))}}static{this.\u0275dir=l({type:i,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[A([Et]),h,X]})}}return i})(),Xe=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275dir=l({type:i,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]})}}return i})();var Ft=(()=>{class i{constructor(){this._validator=we}ngOnChanges(t){if(this.inputName in t){let n=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(n),this._validator=this._enabled?this.createValidator(n):we,this._onChange&&this._onChange()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275dir=l({type:i,features:[X]})}}return i})();var St={provide:ne,useExisting:V(()=>de),multi:!0};var de=(()=>{class i extends Ft{constructor(){super(...arguments),this.inputName="required",this.normalizeInput=ee,this.createValidator=t=>rt}enabled(t){return t}static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=Y(i)))(r||i)}})()}static{this.\u0275dir=l({type:i,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(n,r){n&2&&_e("required",r._enabled?"":null)},inputs:{required:"required"},features:[A([St]),h]})}}return i})();var It=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=Z({type:i})}static{this.\u0275inj=z({})}}return i})();var Ye=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:oe,useValue:t.callSetDisabledState??ae}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=Z({type:i})}static{this.\u0275inj=z({imports:[It]})}}return i})();var ce=class i{constructor(e){this.userService=e}users=[];newUser={name:"",email:"",password:""};ngOnInit(){this.userService.getUsers().subscribe(e=>{this.users=e}),this.userService.listenForNewUsers(e=>{this.users.push(e)})}createUser(){this.userService.createUser(this.newUser).subscribe(e=>{console.log("Usuario creado:",e),this.newUser={name:"",email:"",password:""}})}static \u0275fac=function(t){return new(t||i)(o(Ae))};static \u0275cmp=me({type:i,selectors:[["ng-component"]],standalone:!0,features:[ye],decls:20,vars:3,consts:[[1,"max-w-sm","mx-auto",3,"submit"],[1,"mb-5"],["for","email",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["type","text","name","name","required","",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-blue-500","focus:border-blue-500","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500",3,"ngModelChange","ngModel"],["type","text","name","email","required","",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-blue-500","focus:border-blue-500","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500",3,"ngModelChange","ngModel"],["for","password",1,"block","mb-2","text-sm","font-medium","text-gray-900","dark:text-white"],["name","password","required","",1,"bg-gray-50","border","border-gray-300","text-gray-900","text-sm","rounded-lg","focus:ring-blue-500","focus:border-blue-500","block","w-full","p-2.5","dark:bg-gray-700","dark:border-gray-600","dark:placeholder-gray-400","dark:text-white","dark:focus:ring-blue-500","dark:focus:border-blue-500",3,"ngModelChange","ngModel"],["type","submit",1,"text-white","bg-blue-700","hover:bg-blue-800","focus:ring-4","focus:outline-none","focus:ring-blue-300","font-medium","rounded-lg","text-sm","w-full","sm:w-auto","px-5","py-2.5","text-center","dark:bg-blue-600","dark:hover:bg-blue-700","dark:focus:ring-blue-800"]],template:function(t,n){t&1&&(d(0,"div")(1,"h2"),g(2,"Enviar Informacion"),c(),d(3,"form",0),M("submit",function(){return n.createUser()}),d(4,"div",1)(5,"label",2),g(6,"Nombre"),c(),d(7,"input",3),R("ngModelChange",function(s){return G(n.newUser.name,s)||(n.newUser.name=s),s}),c()(),d(8,"div",1)(9,"label",2),g(10,"Producto"),c(),d(11,"input",4),R("ngModelChange",function(s){return G(n.newUser.email,s)||(n.newUser.email=s),s}),c()(),d(12,"div",1)(13,"label",5),g(14,"Informaci\xF3n"),c(),d(15,"textarea",6),R("ngModelChange",function(s){return G(n.newUser.password,s)||(n.newUser.password=s),s}),g(16," "),c()(),d(17,"button",7),g(18,"Enviar"),c()()(),ve(19,"router-outlet")),t&2&&(k(7),P("ngModel",n.newUser.name),k(4),P("ngModel",n.newUser.email),k(4),P("ngModel",n.newUser.password))},dependencies:[be,Ye,Xe,$,He,Le,de,ue,le,Me,De]})};export{ce as default};