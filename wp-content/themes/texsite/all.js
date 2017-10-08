/**
 * File customizer.js.
 *
 * Theme Customizer enhancements for a better user experience.
 *
 * Contains handlers to make Theme Customizer preview reload changes asynchronously.
 */

( function( $ ) {

	// Site title and description.
	wp.customize( 'blogname', function( value ) {
		value.bind( function( to ) {
			$( '.site-title a' ).text( to );
		} );
	} );
	wp.customize( 'blogdescription', function( value ) {
		value.bind( function( to ) {
			$( '.site-description' ).text( to );
		} );
	} );

	// Header text color.
	wp.customize( 'header_textcolor', function( value ) {
		value.bind( function( to ) {
			if ( 'blank' === to ) {
				$( '.site-title, .site-description' ).css( {
					'clip': 'rect(1px, 1px, 1px, 1px)',
					'position': 'absolute'
				} );
			} else {
				$( '.site-title, .site-description' ).css( {
					'clip': 'auto',
					'position': 'relative'
				} );
				$( '.site-title a, .site-description' ).css( {
					'color': to
				} );
			}
		} );
	} );
} )( jQuery );

/*! Hammer.JS - v2.0.8 - 2016-04-23
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(j(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(b,c,d){var e="DEPRECATED METHOD: "+c+"\n"+d+" AT \n";return function(){var c=new Error("get-stack-trace"),d=c&&c.stack?c.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",f=a.console&&(a.console.warn||a.console.log);return f&&f.call(a.console,e,d),b.apply(this,arguments)}}function i(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&la(d,c)}function j(a,b){return function(){return a.apply(b,arguments)}}function k(a,b){return typeof a==oa?a.apply(b?b[0]||d:d,b):a}function l(a,b){return a===d?b:a}function m(a,b,c){g(q(b),function(b){a.addEventListener(b,c,!1)})}function n(a,b,c){g(q(b),function(b){a.removeEventListener(b,c,!1)})}function o(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function p(a,b){return a.indexOf(b)>-1}function q(a){return a.trim().split(/\s+/g)}function r(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function s(a){return Array.prototype.slice.call(a,0)}function t(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];r(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function u(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ma.length;){if(c=ma[g],e=c?c+f:b,e in a)return e;g++}return d}function v(){return ua++}function w(b){var c=b.ownerDocument||b;return c.defaultView||c.parentWindow||a}function x(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){k(a.options.enable,[a])&&c.handler(b)},this.init()}function y(a){var b,c=a.options.inputClass;return new(b=c?c:xa?M:ya?P:wa?R:L)(a,z)}function z(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&Ea&&d-e===0,g=b&(Ga|Ha)&&d-e===0;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,A(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function A(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=D(b)),e>1&&!c.firstMultiple?c.firstMultiple=D(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=E(d);b.timeStamp=ra(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=I(h,i),b.distance=H(h,i),B(c,b),b.offsetDirection=G(b.deltaX,b.deltaY);var j=F(b.deltaTime,b.deltaX,b.deltaY);b.overallVelocityX=j.x,b.overallVelocityY=j.y,b.overallVelocity=qa(j.x)>qa(j.y)?j.x:j.y,b.scale=g?K(g.pointers,d):1,b.rotation=g?J(g.pointers,d):0,b.maxPointers=c.prevInput?b.pointers.length>c.prevInput.maxPointers?b.pointers.length:c.prevInput.maxPointers:b.pointers.length,C(c,b);var k=a.element;o(b.srcEvent.target,k)&&(k=b.srcEvent.target),b.target=k}function B(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};b.eventType!==Ea&&f.eventType!==Ga||(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function C(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Ha&&(i>Da||h.velocity===d)){var j=b.deltaX-h.deltaX,k=b.deltaY-h.deltaY,l=F(i,j,k);e=l.x,f=l.y,c=qa(l.x)>qa(l.y)?l.x:l.y,g=G(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function D(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:pa(a.pointers[c].clientX),clientY:pa(a.pointers[c].clientY)},c++;return{timeStamp:ra(),pointers:b,center:E(b),deltaX:a.deltaX,deltaY:a.deltaY}}function E(a){var b=a.length;if(1===b)return{x:pa(a[0].clientX),y:pa(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:pa(c/b),y:pa(d/b)}}function F(a,b,c){return{x:b/a||0,y:c/a||0}}function G(a,b){return a===b?Ia:qa(a)>=qa(b)?0>a?Ja:Ka:0>b?La:Ma}function H(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function I(a,b,c){c||(c=Qa);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function J(a,b){return I(b[1],b[0],Ra)+I(a[1],a[0],Ra)}function K(a,b){return H(b[0],b[1],Ra)/H(a[0],a[1],Ra)}function L(){this.evEl=Ta,this.evWin=Ua,this.pressed=!1,x.apply(this,arguments)}function M(){this.evEl=Xa,this.evWin=Ya,x.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function N(){this.evTarget=$a,this.evWin=_a,this.started=!1,x.apply(this,arguments)}function O(a,b){var c=s(a.touches),d=s(a.changedTouches);return b&(Ga|Ha)&&(c=t(c.concat(d),"identifier",!0)),[c,d]}function P(){this.evTarget=bb,this.targetIds={},x.apply(this,arguments)}function Q(a,b){var c=s(a.touches),d=this.targetIds;if(b&(Ea|Fa)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=s(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return o(a.target,i)}),b===Ea)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Ga|Ha)&&delete d[g[e].identifier],e++;return h.length?[t(f.concat(h),"identifier",!0),h]:void 0}function R(){x.apply(this,arguments);var a=j(this.handler,this);this.touch=new P(this.manager,a),this.mouse=new L(this.manager,a),this.primaryTouch=null,this.lastTouches=[]}function S(a,b){a&Ea?(this.primaryTouch=b.changedPointers[0].identifier,T.call(this,b)):a&(Ga|Ha)&&T.call(this,b)}function T(a){var b=a.changedPointers[0];if(b.identifier===this.primaryTouch){var c={x:b.clientX,y:b.clientY};this.lastTouches.push(c);var d=this.lastTouches,e=function(){var a=d.indexOf(c);a>-1&&d.splice(a,1)};setTimeout(e,cb)}}function U(a){for(var b=a.srcEvent.clientX,c=a.srcEvent.clientY,d=0;d<this.lastTouches.length;d++){var e=this.lastTouches[d],f=Math.abs(b-e.x),g=Math.abs(c-e.y);if(db>=f&&db>=g)return!0}return!1}function V(a,b){this.manager=a,this.set(b)}function W(a){if(p(a,jb))return jb;var b=p(a,kb),c=p(a,lb);return b&&c?jb:b||c?b?kb:lb:p(a,ib)?ib:hb}function X(){if(!fb)return!1;var b={},c=a.CSS&&a.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(d){b[d]=c?a.CSS.supports("touch-action",d):!0}),b}function Y(a){this.options=la({},this.defaults,a||{}),this.id=v(),this.manager=null,this.options.enable=l(this.options.enable,!0),this.state=nb,this.simultaneous={},this.requireFail=[]}function Z(a){return a&sb?"cancel":a&qb?"end":a&pb?"move":a&ob?"start":""}function $(a){return a==Ma?"down":a==La?"up":a==Ja?"left":a==Ka?"right":""}function _(a,b){var c=b.manager;return c?c.get(a):a}function aa(){Y.apply(this,arguments)}function ba(){aa.apply(this,arguments),this.pX=null,this.pY=null}function ca(){aa.apply(this,arguments)}function da(){Y.apply(this,arguments),this._timer=null,this._input=null}function ea(){aa.apply(this,arguments)}function fa(){aa.apply(this,arguments)}function ga(){Y.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ha(a,b){return b=b||{},b.recognizers=l(b.recognizers,ha.defaults.preset),new ia(a,b)}function ia(a,b){this.options=la({},ha.defaults,b||{}),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=a,this.input=y(this),this.touchAction=new V(this,this.options.touchAction),ja(this,!0),g(this.options.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function ja(a,b){var c=a.element;if(c.style){var d;g(a.options.cssProps,function(e,f){d=u(c.style,f),b?(a.oldCssProps[d]=c.style[d],c.style[d]=e):c.style[d]=a.oldCssProps[d]||""}),b||(a.oldCssProps={})}}function ka(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var la,ma=["","webkit","Moz","MS","ms","o"],na=b.createElement("div"),oa="function",pa=Math.round,qa=Math.abs,ra=Date.now;la="function"!=typeof Object.assign?function(a){if(a===d||null===a)throw new TypeError("Cannot convert undefined or null to object");for(var b=Object(a),c=1;c<arguments.length;c++){var e=arguments[c];if(e!==d&&null!==e)for(var f in e)e.hasOwnProperty(f)&&(b[f]=e[f])}return b}:Object.assign;var sa=h(function(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a},"extend","Use `assign`."),ta=h(function(a,b){return sa(a,b,!0)},"merge","Use `assign`."),ua=1,va=/mobile|tablet|ip(ad|hone|od)|android/i,wa="ontouchstart"in a,xa=u(a,"PointerEvent")!==d,ya=wa&&va.test(navigator.userAgent),za="touch",Aa="pen",Ba="mouse",Ca="kinect",Da=25,Ea=1,Fa=2,Ga=4,Ha=8,Ia=1,Ja=2,Ka=4,La=8,Ma=16,Na=Ja|Ka,Oa=La|Ma,Pa=Na|Oa,Qa=["x","y"],Ra=["clientX","clientY"];x.prototype={handler:function(){},init:function(){this.evEl&&m(this.element,this.evEl,this.domHandler),this.evTarget&&m(this.target,this.evTarget,this.domHandler),this.evWin&&m(w(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(w(this.element),this.evWin,this.domHandler)}};var Sa={mousedown:Ea,mousemove:Fa,mouseup:Ga},Ta="mousedown",Ua="mousemove mouseup";i(L,x,{handler:function(a){var b=Sa[a.type];b&Ea&&0===a.button&&(this.pressed=!0),b&Fa&&1!==a.which&&(b=Ga),this.pressed&&(b&Ga&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:Ba,srcEvent:a}))}});var Va={pointerdown:Ea,pointermove:Fa,pointerup:Ga,pointercancel:Ha,pointerout:Ha},Wa={2:za,3:Aa,4:Ba,5:Ca},Xa="pointerdown",Ya="pointermove pointerup pointercancel";a.MSPointerEvent&&!a.PointerEvent&&(Xa="MSPointerDown",Ya="MSPointerMove MSPointerUp MSPointerCancel"),i(M,x,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Va[d],f=Wa[a.pointerType]||a.pointerType,g=f==za,h=r(b,a.pointerId,"pointerId");e&Ea&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Ga|Ha)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Za={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},$a="touchstart",_a="touchstart touchmove touchend touchcancel";i(N,x,{handler:function(a){var b=Za[a.type];if(b===Ea&&(this.started=!0),this.started){var c=O.call(this,a,b);b&(Ga|Ha)&&c[0].length-c[1].length===0&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}}});var ab={touchstart:Ea,touchmove:Fa,touchend:Ga,touchcancel:Ha},bb="touchstart touchmove touchend touchcancel";i(P,x,{handler:function(a){var b=ab[a.type],c=Q.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:za,srcEvent:a})}});var cb=2500,db=25;i(R,x,{handler:function(a,b,c){var d=c.pointerType==za,e=c.pointerType==Ba;if(!(e&&c.sourceCapabilities&&c.sourceCapabilities.firesTouchEvents)){if(d)S.call(this,b,c);else if(e&&U.call(this,c))return;this.callback(a,b,c)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var eb=u(na.style,"touchAction"),fb=eb!==d,gb="compute",hb="auto",ib="manipulation",jb="none",kb="pan-x",lb="pan-y",mb=X();V.prototype={set:function(a){a==gb&&(a=this.compute()),fb&&this.manager.element.style&&mb[a]&&(this.manager.element.style[eb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){k(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),W(a.join(" "))},preventDefaults:function(a){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=p(d,jb)&&!mb[jb],f=p(d,lb)&&!mb[lb],g=p(d,kb)&&!mb[kb];if(e){var h=1===a.pointers.length,i=a.distance<2,j=a.deltaTime<250;if(h&&i&&j)return}return g&&f?void 0:e||f&&c&Na||g&&c&Oa?this.preventSrc(b):void 0},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var nb=1,ob=2,pb=4,qb=8,rb=qb,sb=16,tb=32;Y.prototype={defaults:{},set:function(a){return la(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=_(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=_(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=_(a,this),-1===r(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=_(a,this);var b=r(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(b,a)}var c=this,d=this.state;qb>d&&b(c.options.event+Z(d)),b(c.options.event),a.additionalEvent&&b(a.additionalEvent),d>=qb&&b(c.options.event+Z(d))},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=tb)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(tb|nb)))return!1;a++}return!0},recognize:function(a){var b=la({},a);return k(this.options.enable,[this,b])?(this.state&(rb|sb|tb)&&(this.state=nb),this.state=this.process(b),void(this.state&(ob|pb|qb|sb)&&this.tryEmit(b))):(this.reset(),void(this.state=tb))},process:function(a){},getTouchAction:function(){},reset:function(){}},i(aa,Y,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(ob|pb),e=this.attrTest(a);return d&&(c&Ha||!e)?b|sb:d||e?c&Ga?b|qb:b&ob?b|pb:ob:tb}}),i(ba,aa,{defaults:{event:"pan",threshold:10,pointers:1,direction:Pa},getTouchAction:function(){var a=this.options.direction,b=[];return a&Na&&b.push(lb),a&Oa&&b.push(kb),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Na?(e=0===f?Ia:0>f?Ja:Ka,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Ia:0>g?La:Ma,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return aa.prototype.attrTest.call(this,a)&&(this.state&ob||!(this.state&ob)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=$(a.direction);b&&(a.additionalEvent=this.options.event+b),this._super.emit.call(this,a)}}),i(ca,aa,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&ob)},emit:function(a){if(1!==a.scale){var b=a.scale<1?"in":"out";a.additionalEvent=this.options.event+b}this._super.emit.call(this,a)}}),i(da,Y,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[hb]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Ga|Ha)&&!f)this.reset();else if(a.eventType&Ea)this.reset(),this._timer=e(function(){this.state=rb,this.tryEmit()},b.time,this);else if(a.eventType&Ga)return rb;return tb},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===rb&&(a&&a.eventType&Ga?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=ra(),this.manager.emit(this.options.event,this._input)))}}),i(ea,aa,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[jb]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&ob)}}),i(fa,aa,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Na|Oa,pointers:1},getTouchAction:function(){return ba.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Na|Oa)?b=a.overallVelocity:c&Na?b=a.overallVelocityX:c&Oa&&(b=a.overallVelocityY),this._super.attrTest.call(this,a)&&c&a.offsetDirection&&a.distance>this.options.threshold&&a.maxPointers==this.options.pointers&&qa(b)>this.options.velocity&&a.eventType&Ga},emit:function(a){var b=$(a.offsetDirection);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),i(ga,Y,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[ib]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&Ea&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Ga)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||H(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=rb,this.tryEmit()},b.interval,this),ob):rb}return tb},failTimeout:function(){return this._timer=e(function(){this.state=tb},this.options.interval,this),tb},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==rb&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ha.VERSION="2.0.8",ha.defaults={domEvents:!1,touchAction:gb,enable:!0,inputTarget:null,inputClass:null,preset:[[ea,{enable:!1}],[ca,{enable:!1},["rotate"]],[fa,{direction:Na}],[ba,{direction:Na},["swipe"]],[ga],[ga,{event:"doubletap",taps:2},["tap"]],[da]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var ub=1,vb=2;ia.prototype={set:function(a){return la(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?vb:ub},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&rb)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===vb||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(ob|pb|qb)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof Y)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;if(a=this.get(a)){var b=this.recognizers,c=r(b,a);-1!==c&&(b.splice(c,1),this.touchAction.update())}return this},on:function(a,b){if(a!==d&&b!==d){var c=this.handlers;return g(q(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this}},off:function(a,b){if(a!==d){var c=this.handlers;return g(q(a),function(a){b?c[a]&&c[a].splice(r(c[a],b),1):delete c[a]}),this}},emit:function(a,b){this.options.domEvents&&ka(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&ja(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},la(ha,{INPUT_START:Ea,INPUT_MOVE:Fa,INPUT_END:Ga,INPUT_CANCEL:Ha,STATE_POSSIBLE:nb,STATE_BEGAN:ob,STATE_CHANGED:pb,STATE_ENDED:qb,STATE_RECOGNIZED:rb,STATE_CANCELLED:sb,STATE_FAILED:tb,DIRECTION_NONE:Ia,DIRECTION_LEFT:Ja,DIRECTION_RIGHT:Ka,DIRECTION_UP:La,DIRECTION_DOWN:Ma,DIRECTION_HORIZONTAL:Na,DIRECTION_VERTICAL:Oa,DIRECTION_ALL:Pa,Manager:ia,Input:x,TouchAction:V,TouchInput:P,MouseInput:L,PointerEventInput:M,TouchMouseInput:R,SingleTouchInput:N,Recognizer:Y,AttrRecognizer:aa,Tap:ga,Pan:ba,Swipe:fa,Pinch:ca,Rotate:ea,Press:da,on:m,off:n,each:g,merge:ta,extend:sa,assign:la,inherit:i,bindFn:j,prefixed:u});var wb="undefined"!=typeof a?a:"undefined"!=typeof self?self:{};wb.Hammer=ha,"function"==typeof define&&define.amd?define(function(){return ha}):"undefined"!=typeof module&&module.exports?module.exports=ha:a[c]=ha}(window,document,"Hammer");
//# sourceMappingURL=hammer.min.js.map

/**
 * File header.js.
 *
 * scripts for header elements
 *
 */
(function( $ ) {
    var options = [
        {selector: '#staggered-test', offset: 50, callback: function(el) {
            Materialize.toast("This is our ScrollFire Demo!", 1500 );
        } },
        {selector: '#staggered-test', offset: 205, callback: function(el) {
            Materialize.toast("Please continue scrolling!", 1500 );
        } },
        {selector: '#staggered-test', offset: 400, callback: function(el) {
            Materialize.showStaggeredList($(el));
        } },
        {selector: '#story-img', offset: 250, callback: function(el) {
            Materialize.fadeInImage($(el));
        } }
    ];
    Materialize.scrollFire(options);
})( jQuery );

/**
 * File header.js.
 *
 * scripts for header elements
 *
 */


function getInstagram(data) {
    // console.log(data);
    var i = 0;
    var output = '<div class="container-fluid  instagram-bkg">';
    output += '<div class="row">';

    output += '<div class="instagram-pic col-lg-1 col-md-2 col-sm-3 col-xs-4">';
    output += '<div class="instagram-logo">';
    output += '<a href="https://instagram.com/texadelphianation" target="_blank">';
    output += '<img src="/wp-content/uploads/2017/08/InstagramIcon.png" alt="instagram">';
    output += '<div class="caption">';
    output += '</div>';
    output += '</a>';
    output += '</div>';
    output += '</div>';

    data.data.map(function (element) {

        if (i < 11) {
            i++;

            output += '<div class="instagram-pic col-lg-1 col-md-2 col-sm-3 col-xs-4">';
            output += '<div class="">';
            output += '<a href="' + element.link + '" target="_blank">';
            output += '<img src=' + element.images.low_resolution.url + ' alt="Lights" style="width:100%">';
            // using low_resolution vs standard_resolution
            output += '<div class="caption">';
            // if ( element.caption) {
            // output += '<p>' + element.caption.text + '</p>';
            // }
            output += '</div>';
            output += '</a>';
            output += '</div>';
            output += '</div>';

        }
    });

    output += '</div>';
    output += '</div>';
    (function ($) {
        $('.result').html(output);
    })(jQuery);
}
    

function initMap() {
    var $ = jQuery;
    var service = new google.maps.DistanceMatrixService;

    // getting json object to have data available
    $.getJSON('../wp-content/themes/texsite/json/locations.json', function (data) {

        console.log(data.locations);

        <!--mustache script-->
        RunTemplate.tmplt(data, function () {

            // cycle for multipage svg
            $('.item:first-child').addClass("active");

            // load menu svg event listener

            // support for touchscreens
            var eventsHandler;

            eventsHandler = {
                haltEventListeners: ['touchstart', 'touchend', 'touchmove', 'touchleave', 'touchcancel']
                , init: function (options) {
                    var instance = options.instance
                        , initialScale = 1
                        , pannedX = 0
                        , pannedY = 0

                    // Init Hammer
                    // Listen only for pointer and touch events
                    this.hammer = Hammer(options.svgElement, {
                        inputClass: Hammer.SUPPORT_POINTER_EVENTS ? Hammer.PointerEventInput : Hammer.TouchInput
                    })

                    // Enable pinch
                    this.hammer.get('pinch').set({enable: true})

                    // Handle double tap
                    this.hammer.on('doubletap', function (ev) {
                        instance.zoomIn()
                    })

                    // Handle pan
                    this.hammer.on('panstart panmove', function (ev) {
                        // On pan start reset panned variables
                        if (ev.type === 'panstart') {
                            pannedX = 0
                            pannedY = 0
                        }

                        // Pan only the difference
                        instance.panBy({x: ev.deltaX - pannedX, y: ev.deltaY - pannedY})
                        pannedX = ev.deltaX
                        pannedY = ev.deltaY
                    })

                    // Handle pinch
                    this.hammer.on('pinchstart pinchmove', function (ev) {
                        // On pinch start remember initial zoom
                        if (ev.type === 'pinchstart') {
                            initialScale = instance.getZoom()
                            instance.zoom(initialScale * ev.scale)
                        }

                        instance.zoom(initialScale * ev.scale)

                    })

                    // Prevent moving the page on some devices when panning over SVG
                    options.svgElement.addEventListener('touchmove', function (e) {
                        e.preventDefault();
                    });
                }

                , destroy: function () {
                    this.hammer.destroy()
                }
            }

            // end support for touch screens
            // without suport for touch follows
            var $menuSVG = $("[rel*='svg-']");
            console.log($menuSVG);

            $menuSVG.on('load', function (evt) {
                console.log('loaded');
                svgPanZoom('#' + $(evt.target).attr("id"), {
                    zoomEnabled: true,
                    controlIconsEnabled: true,
                    fit: 1,
                    center: 1,
                    customEventsHandler: eventsHandler
                });
            });
        });

        getPosition(data.locations, function (position) { //getPosition callback
            var current_position = position;

            // var current_position = {
            //     "lat": 35.46395,
            //     "lng": -97.510094
            // };

            var locations_coordinates = data.locations.map(function (current_location, index) {
                return current_location.coordinates;
            });

            getDistance(current_position, locations_coordinates, service, function (distance) { // getDistance callback

                var location_distance = distance.map(function (element, index) { // merging distance with locations array
                    data.locations[index].distance = element.distance.value;
                    data.locations[index].miles = element.distance.text;
                    return data.locations[index];
                }).sort(function (a, b) {  // sorting locations array
                    return a.distance - b.distance;
                });

                SearchLocation.getData(location_distance); // rendering locations
                SearchLocation.searchData(location_distance); // rendering location for search

            }); // end getDistance callback

        }); // end getPosition callback


    }); // end get json object

    // distance matrix
    function getDistance(origin, destination, service, cb) {

        service.getDistanceMatrix({
            origins: [origin],
            destinations: destination,
            travelMode: 'DRIVING',
            unitSystem: google.maps.UnitSystem.IMPERIAL,
            avoidHighways: false,
            avoidTolls: false
        }, function (response, status) {
            if (status === 'OK') {
                //console.log('distance matrix ' + JSON.stringify(response.rows[0].elements[0].distance.value));
                cb(response.rows[0].elements);
                // console.log('distance matrix ' + JSON.stringify(response));
            } else {
                alert('Geocode was not successful due to: ' + status);
            }
        });
    }

    // this functions gets the current position, needs https
    function getPosition(error_locations, cb) {
        // Try HTML5 geolocation.
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var pos = {
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                };

                cb(pos); // callback function

                //console.log('current position ' + JSON.stringify(pos));

            }, function () {
                //handleLocationError(true, infoWindow, map.getCenter());
                console.log('error');
                SearchLocation.getData(error_locations); // rendering locations
                SearchLocation.searchData(error_locations); // rendering location for search
            });
        } else {
            // Browser doesn't support Geolocation
            //handleLocationError(false, infoWindow, map.getCenter());
            console.log('no geolocation');
            SearchLocation.getData(error_locations); // rendering locations
            SearchLocation.searchData(error_locations); // rendering location for search
        }
    }

    // same postion but for testing without https
    // function getPosition(cb) {
    //     // Try HTML5 geolocation.
    //     var pos = {
    //         "lat": 35.46395,
    //         "lng": -97.510094
    //     };
    //     cb(pos); // callback function
    // }


/////////
    $.getJSON('../wp-content/themes/texsite/json/locations.json', function (data) {

        console.log(detectIE());
        //if (detectIE() === false) {

        var markers = data.locations.map(function (location, i) {
            // center to bounds
            var loc = new google.maps.LatLng(location.coordinates);
            bounds.extend(loc);

            // adding markers
            return new google.maps.Marker({
                position: location.coordinates,
                //labels
                label: location.label,
            });
        });

        // } else {
        //     var markers = JSON.parse(data).locations.map(function (location, i) {
        //         // center to bounds
        //         var loc = new google.maps.LatLng(location.coordinates);
        //         bounds.extend(loc);
        //
        //         // adding markers
        //         return new google.maps.Marker({
        //             position: location.coordinates,
        //             //labels
        //             label: location.label,
        //         });
        //     });
        // }

        // if (detectIE() === false) {
        // Add a marker clusterer to manage the markers.
        var markerCluster = new MarkerClusterer(map, markers,
            {
                gridSize: 15,
                imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
            });

        // Add links to markers to open in google maps for directions
        var gMapsClick = data.locations.map(function (location, i) {
            return markers[i].addListener('click', function () {
                window.open('https://www.google.com/maps/dir/?api=1&destination=' + location.coordinates.lat + ',' + location.coordinates.lng, '_blank');
            });
        });

        // } else {
        //     // Add a marker clusterer to manage the markers.
        //     var markerCluster = new MarkerClusterer(map, markers,
        //         {
        //             gridSize: 15,
        //             imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m',
        //         });
        //
        //     // Add links to markers to open in google maps for directions
        //     var gMapsClick = JSON.parse(data).locations.map(function (location, i) {
        //         return markers[i].addListener('click', function () {
        //             window.open('https://www.google.com/maps/dir/?api=1&destination=' + location.coordinates.lat + ',' + location.coordinates.lng, '_blank');
        //         });
        //     });
        // }

        // center to bounds
        map.fitBounds(bounds);
        map.panToBounds(bounds);

    });

    //map and bounds
    var map = new google.maps.Map(document.getElementById('map'), {
        // center and zoom in bounds
    });

    // center to bounds
    var bounds = new google.maps.LatLngBounds();

}

/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
function detectIE() {
    var ua = window.navigator.userAgent;

    // Test values; Uncomment to check result …

    // IE 10
    // ua = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; Trident/6.0)';

    // IE 11
    // ua = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; rv:11.0) like Gecko';

    // Edge 12 (Spartan)
    // ua = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

    // Edge 13
    // ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586';

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
        // Edge (IE 12+) => return version number
        return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
}
<!--mustache script-->
    var RunTemplate = (function ($) {

        function loadTemplate(data, cb) {
            var template = $('#locationtpl').html();
            var html = Mustache.to_html(template, data);
            $('#locationInfo').html(html);

            cb();
        }

        return {
            tmplt: loadTemplate
        }
    })(jQuery); //function


/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
( function() {
	var container, button, menu, links, i, len;

	container = document.getElementById( 'site-navigation' );
	if ( ! container ) {
		return;
	}

	button = container.getElementsByTagName( 'button' )[0];
	if ( 'undefined' === typeof button ) {
		return;
	}

	menu = container.getElementsByTagName( 'ul' )[0];

	// Hide menu toggle button if menu is empty and return early.
	if ( 'undefined' === typeof menu ) {
		button.style.display = 'none';
		return;
	}

	menu.setAttribute( 'aria-expanded', 'false' );
	if ( -1 === menu.className.indexOf( 'nav-menu' ) ) {
		menu.className += ' nav-menu';
	}

	button.onclick = function() {
		if ( -1 !== container.className.indexOf( 'toggled' ) ) {
			container.className = container.className.replace( ' toggled', '' );
			button.setAttribute( 'aria-expanded', 'false' );
			menu.setAttribute( 'aria-expanded', 'false' );
		} else {
			container.className += ' toggled';
			button.setAttribute( 'aria-expanded', 'true' );
			menu.setAttribute( 'aria-expanded', 'true' );
		}
	};

	// Get all the link elements within the menu.
	links    = menu.getElementsByTagName( 'a' );

	// Each time a menu link is focused or blurred, toggle focus.
	for ( i = 0, len = links.length; i < len; i++ ) {
		links[i].addEventListener( 'focus', toggleFocus, true );
		links[i].addEventListener( 'blur', toggleFocus, true );
	}

	/**
	 * Sets or removes .focus class on an element.
	 */
	function toggleFocus() {
		var self = this;

		// Move up through the ancestors of the current link until we hit .nav-menu.
		while ( -1 === self.className.indexOf( 'nav-menu' ) ) {

			// On li elements toggle the class .focus.
			if ( 'li' === self.tagName.toLowerCase() ) {
				if ( -1 !== self.className.indexOf( 'focus' ) ) {
					self.className = self.className.replace( ' focus', '' );
				} else {
					self.className += ' focus';
				}
			}

			self = self.parentElement;
		}
	}

	/**
	 * Toggles `focus` class to allow submenu access on tablets.
	 */
	( function( container ) {
		var touchStartFn, i,
			parentLink = container.querySelectorAll( '.menu-item-has-children > a, .page_item_has_children > a' );

		if ( 'ontouchstart' in window ) {
			touchStartFn = function( e ) {
				var menuItem = this.parentNode, i;

				if ( ! menuItem.classList.contains( 'focus' ) ) {
					e.preventDefault();
					for ( i = 0; i < menuItem.parentNode.children.length; ++i ) {
						if ( menuItem === menuItem.parentNode.children[i] ) {
							continue;
						}
						menuItem.parentNode.children[i].classList.remove( 'focus' );
					}
					menuItem.classList.add( 'focus' );
				} else {
					menuItem.classList.remove( 'focus' );
				}
			};

			for ( i = 0; i < parentLink.length; ++i ) {
				parentLink[i].addEventListener( 'touchstart', touchStartFn, false );
			}
		}
	}( container ) );
} )();

/**
 * File navigation.js.
 *
 * adapts classes to bootstrap
 * 
 */
(function( $ ) {
    $( 'li.menu-item-has-children a' ).removeClass().addClass( 'dropdown-toggle' ).attr("data-toggle", "dropdown");
})( jQuery );

var SearchLocation = (function ($) {
    /**
     * Search script
     */

// http://maps.googleapis.com/maps/api/directions/json?origin=78572&destination=78641
// json for distance between locations
    function search_the_data(locations) {
        $('#search').keyup(function () {
            var searchField = $('#search').val();
            var myExp = new RegExp(searchField, "i");
            var output = '<ul class="searchresults">';
            $.each(locations, function (key, val) {
                if ((val.name.search(myExp) != -1) ||
                    (val.address.search(myExp) != -1) ||
                    (val.zip.search(myExp) != -1) ||
                    (val.state.search(myExp) != -1) ||
                    (val.city.search(myExp) != -1)) {

                    output += get_output(val); // function
                }
            });
            output += '</ul>';
            $('#update').html(output);
        });
    }


    function get_the_data(locations) {

        var output = '<ul class="searchresults">';
        $.each(locations, function (key, val) {
            output += get_output(val); // function
        });
        output += '</ul>';
        $('#update').html(output);
    }

    function get_output(val) {
        var output = '';

        output += '<li>';
        output += '<div class="row main-location">';

        output += '<div class="location-info col-lg-6">';
        output += '<h4>' + val.name + '</h4>';
        output += '<p>' + val.address + '</p>';
        output += '<p>' + val.city + ', ';
        output += val.state + ' ';
        output += val.zip + '</p>';
        output += '<a href="tel:' + val.phone + '">' + 'T. ' + val.phone + '</a>';
        output += '<p>' + val.hours1 + '</p>';
        output += '<p>' + val.hours2 + '</p>';
        output += '<p>' + val.hours3 + '</p>';
        output += '<p>' + val.miles + '</p>';
        output += '</div>';

        output += '<div class="location-buttons col-lg-6">';
        output += '<div class="row">';
        output += '<a class="btn btn-default col-lg-6 col-md-6 col-sm-6 col-xs-6" role="button" data-toggle="modal" data-target="' + '#' + val.label + 'menuModal"> Menu</a>';
        output += '<a class="btn btn-default col-lg-6 col-md-6 col-sm-6 col-xs-6" role="button" data-toggle="modal" data-target="' + '#' + val.label + 'catModal"> Catering Menu</a>';
        output += '</div>';
        output += '<div class="row">';
        output += '<a class="btn btn-danger" href="https://www.google.com/maps/dir/?api=1&destination=' + val.coordinates.lat + ',' + val.coordinates.lng + '" target="_blank" role="button"> Directions</a>';
        output += '</div>';
        output += '</div>';

        output += '</div>';
        output += '</li>';

        return output;
    }

    return {
        getData: get_the_data,
        searchData: search_the_data
    }


})(jQuery);
/**
 * File skip-link-focus-fix.js.
 *
 * Helps with accessibility for keyboard only users.
 *
 * Learn more: https://git.io/vWdr2
 */
( function() {
	var isIe = /(trident|msie)/i.test( navigator.userAgent );

	if ( isIe && document.getElementById && window.addEventListener ) {
		window.addEventListener( 'hashchange', function() {
			var id = location.hash.substring( 1 ),
				element;

			if ( ! ( /^[A-z0-9_-]+$/.test( id ) ) ) {
				return;
			}

			element = document.getElementById( id );

			if ( element ) {
				if ( ! ( /^(?:a|select|input|button|textarea)$/i.test( element.tagName ) ) ) {
					element.tabIndex = -1;
				}

				element.focus();
			}
		}, false );
	}
} )();

// svg-pan-zoom v3.5.2
// https://github.com/ariutta/svg-pan-zoom
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
    var svgPanZoom = require('./svg-pan-zoom.js');

// UMD module definition
    (function(window, document){
        // AMD
        if (typeof define === 'function' && define.amd) {
            define('svg-pan-zoom', function () {
                return svgPanZoom;
            });
            // CMD
        } else if (typeof module !== 'undefined' && module.exports) {
            module.exports = svgPanZoom;

            // Browser
            // Keep exporting globally as module.exports is available because of browserify
            window.svgPanZoom = svgPanZoom;
        }
    })(window, document)

},{"./svg-pan-zoom.js":4}],2:[function(require,module,exports){
    var SvgUtils = require('./svg-utilities');

    module.exports = {
        enable: function(instance) {
            // Select (and create if necessary) defs
            var defs = instance.svg.querySelector('defs')
            if (!defs) {
                defs = document.createElementNS(SvgUtils.svgNS, 'defs')
                instance.svg.appendChild(defs)
            }

            // Check for style element, and create it if it doesn't exist
            var styleEl = defs.querySelector('style#svg-pan-zoom-controls-styles');
            if (!styleEl) {
                var style = document.createElementNS(SvgUtils.svgNS, 'style')
                style.setAttribute('id', 'svg-pan-zoom-controls-styles')
                style.setAttribute('type', 'text/css')
                style.textContent = '.svg-pan-zoom-control { cursor: pointer; fill: black; fill-opacity: 0.333; } .svg-pan-zoom-control:hover { fill-opacity: 0.8; } .svg-pan-zoom-control-background { fill: white; fill-opacity: 0.5; } .svg-pan-zoom-control-background { fill-opacity: 0.8; }'
                defs.appendChild(style)
            }

            // Zoom Group
            var zoomGroup = document.createElementNS(SvgUtils.svgNS, 'g');
            zoomGroup.setAttribute('id', 'svg-pan-zoom-controls');
            // zoomGroup.setAttribute('transform', 'translate(' + ( instance.width - 70 ) + ' ' + ( instance.height - 76 ) + ') scale(0.75)');
            zoomGroup.setAttribute('transform', 'translate(' + (0) + ' ' + (0) + ') scale(0.75)');
            zoomGroup.setAttribute('class', 'svg-pan-zoom-control');

            // Control elements
            zoomGroup.appendChild(this._createZoomIn(instance))
            zoomGroup.appendChild(this._createZoomReset(instance))
            zoomGroup.appendChild(this._createZoomOut(instance))

            // Finally append created element
            instance.svg.appendChild(zoomGroup)

            // Cache control instance
            instance.controlIcons = zoomGroup
        }

        , _createZoomIn: function(instance) {
            var zoomIn = document.createElementNS(SvgUtils.svgNS, 'g');
            zoomIn.setAttribute('id', 'svg-pan-zoom-zoom-in');
            zoomIn.setAttribute('transform', 'translate(30.5 5) scale(0.015)');
            zoomIn.setAttribute('class', 'svg-pan-zoom-control');
            zoomIn.addEventListener('click', function() {instance.getPublicInstance().zoomIn()}, false)
            zoomIn.addEventListener('touchstart', function() {instance.getPublicInstance().zoomIn()}, false)

            var zoomInBackground = document.createElementNS(SvgUtils.svgNS, 'rect'); // TODO change these background space fillers to rounded rectangles so they look prettier
            zoomInBackground.setAttribute('x', '0');
            zoomInBackground.setAttribute('y', '0');
            zoomInBackground.setAttribute('width', '1500'); // larger than expected because the whole group is transformed to scale down
            zoomInBackground.setAttribute('height', '1400');
            zoomInBackground.setAttribute('class', 'svg-pan-zoom-control-background');
            zoomIn.appendChild(zoomInBackground);

            var zoomInShape = document.createElementNS(SvgUtils.svgNS, 'path');
            zoomInShape.setAttribute('d', 'M1280 576v128q0 26 -19 45t-45 19h-320v320q0 26 -19 45t-45 19h-128q-26 0 -45 -19t-19 -45v-320h-320q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h320v-320q0 -26 19 -45t45 -19h128q26 0 45 19t19 45v320h320q26 0 45 19t19 45zM1536 1120v-960 q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5t84.5 -203.5z');
            zoomInShape.setAttribute('class', 'svg-pan-zoom-control-element');
            zoomIn.appendChild(zoomInShape);

            return zoomIn
        }

        , _createZoomReset: function(instance){
            // reset
            var resetPanZoomControl = document.createElementNS(SvgUtils.svgNS, 'g');
            resetPanZoomControl.setAttribute('id', 'svg-pan-zoom-reset-pan-zoom');
            resetPanZoomControl.setAttribute('transform', 'translate(5 35) scale(0.4)');
            resetPanZoomControl.setAttribute('class', 'svg-pan-zoom-control');
            resetPanZoomControl.addEventListener('click', function() {instance.getPublicInstance().reset()}, false);
            resetPanZoomControl.addEventListener('touchstart', function() {instance.getPublicInstance().reset()}, false);

            var resetPanZoomControlBackground = document.createElementNS(SvgUtils.svgNS, 'rect'); // TODO change these background space fillers to rounded rectangles so they look prettier
            resetPanZoomControlBackground.setAttribute('x', '2');
            resetPanZoomControlBackground.setAttribute('y', '2');
            resetPanZoomControlBackground.setAttribute('width', '182'); // larger than expected because the whole group is transformed to scale down
            resetPanZoomControlBackground.setAttribute('height', '58');
            resetPanZoomControlBackground.setAttribute('class', 'svg-pan-zoom-control-background');
            resetPanZoomControl.appendChild(resetPanZoomControlBackground);

            var resetPanZoomControlShape1 = document.createElementNS(SvgUtils.svgNS, 'path');
            resetPanZoomControlShape1.setAttribute('d', 'M33.051,20.632c-0.742-0.406-1.854-0.609-3.338-0.609h-7.969v9.281h7.769c1.543,0,2.701-0.188,3.473-0.562c1.365-0.656,2.048-1.953,2.048-3.891C35.032,22.757,34.372,21.351,33.051,20.632z');
            resetPanZoomControlShape1.setAttribute('class', 'svg-pan-zoom-control-element');
            resetPanZoomControl.appendChild(resetPanZoomControlShape1);

            var resetPanZoomControlShape2 = document.createElementNS(SvgUtils.svgNS, 'path');
            resetPanZoomControlShape2.setAttribute('d', 'M170.231,0.5H15.847C7.102,0.5,0.5,5.708,0.5,11.84v38.861C0.5,56.833,7.102,61.5,15.847,61.5h154.384c8.745,0,15.269-4.667,15.269-10.798V11.84C185.5,5.708,178.976,0.5,170.231,0.5z M42.837,48.569h-7.969c-0.219-0.766-0.375-1.383-0.469-1.852c-0.188-0.969-0.289-1.961-0.305-2.977l-0.047-3.211c-0.03-2.203-0.41-3.672-1.142-4.406c-0.732-0.734-2.103-1.102-4.113-1.102h-7.05v13.547h-7.055V14.022h16.524c2.361,0.047,4.178,0.344,5.45,0.891c1.272,0.547,2.351,1.352,3.234,2.414c0.731,0.875,1.31,1.844,1.737,2.906s0.64,2.273,0.64,3.633c0,1.641-0.414,3.254-1.242,4.84s-2.195,2.707-4.102,3.363c1.594,0.641,2.723,1.551,3.387,2.73s0.996,2.98,0.996,5.402v2.32c0,1.578,0.063,2.648,0.19,3.211c0.19,0.891,0.635,1.547,1.333,1.969V48.569z M75.579,48.569h-26.18V14.022h25.336v6.117H56.454v7.336h16.781v6H56.454v8.883h19.125V48.569z M104.497,46.331c-2.44,2.086-5.887,3.129-10.34,3.129c-4.548,0-8.125-1.027-10.731-3.082s-3.909-4.879-3.909-8.473h6.891c0.224,1.578,0.662,2.758,1.316,3.539c1.196,1.422,3.246,2.133,6.15,2.133c1.739,0,3.151-0.188,4.236-0.562c2.058-0.719,3.087-2.055,3.087-4.008c0-1.141-0.504-2.023-1.512-2.648c-1.008-0.609-2.607-1.148-4.796-1.617l-3.74-0.82c-3.676-0.812-6.201-1.695-7.576-2.648c-2.328-1.594-3.492-4.086-3.492-7.477c0-3.094,1.139-5.664,3.417-7.711s5.623-3.07,10.036-3.07c3.685,0,6.829,0.965,9.431,2.895c2.602,1.93,3.966,4.73,4.093,8.402h-6.938c-0.128-2.078-1.057-3.555-2.787-4.43c-1.154-0.578-2.587-0.867-4.301-0.867c-1.907,0-3.428,0.375-4.565,1.125c-1.138,0.75-1.706,1.797-1.706,3.141c0,1.234,0.561,2.156,1.682,2.766c0.721,0.406,2.25,0.883,4.589,1.43l6.063,1.43c2.657,0.625,4.648,1.461,5.975,2.508c2.059,1.625,3.089,3.977,3.089,7.055C108.157,41.624,106.937,44.245,104.497,46.331z M139.61,48.569h-26.18V14.022h25.336v6.117h-18.281v7.336h16.781v6h-16.781v8.883h19.125V48.569z M170.337,20.14h-10.336v28.43h-7.266V20.14h-10.383v-6.117h27.984V20.14z');
            resetPanZoomControlShape2.setAttribute('class', 'svg-pan-zoom-control-element');
            resetPanZoomControl.appendChild(resetPanZoomControlShape2);

            return resetPanZoomControl
        }

        , _createZoomOut: function(instance){
            // zoom out
            var zoomOut = document.createElementNS(SvgUtils.svgNS, 'g');
            zoomOut.setAttribute('id', 'svg-pan-zoom-zoom-out');
            zoomOut.setAttribute('transform', 'translate(30.5 70) scale(0.015)');
            zoomOut.setAttribute('class', 'svg-pan-zoom-control');
            zoomOut.addEventListener('click', function() {instance.getPublicInstance().zoomOut()}, false);
            zoomOut.addEventListener('touchstart', function() {instance.getPublicInstance().zoomOut()}, false);

            var zoomOutBackground = document.createElementNS(SvgUtils.svgNS, 'rect'); // TODO change these background space fillers to rounded rectangles so they look prettier
            zoomOutBackground.setAttribute('x', '0');
            zoomOutBackground.setAttribute('y', '0');
            zoomOutBackground.setAttribute('width', '1500'); // larger than expected because the whole group is transformed to scale down
            zoomOutBackground.setAttribute('height', '1400');
            zoomOutBackground.setAttribute('class', 'svg-pan-zoom-control-background');
            zoomOut.appendChild(zoomOutBackground);

            var zoomOutShape = document.createElementNS(SvgUtils.svgNS, 'path');
            zoomOutShape.setAttribute('d', 'M1280 576v128q0 26 -19 45t-45 19h-896q-26 0 -45 -19t-19 -45v-128q0 -26 19 -45t45 -19h896q26 0 45 19t19 45zM1536 1120v-960q0 -119 -84.5 -203.5t-203.5 -84.5h-960q-119 0 -203.5 84.5t-84.5 203.5v960q0 119 84.5 203.5t203.5 84.5h960q119 0 203.5 -84.5 t84.5 -203.5z');
            zoomOutShape.setAttribute('class', 'svg-pan-zoom-control-element');
            zoomOut.appendChild(zoomOutShape);

            return zoomOut
        }

        , disable: function(instance) {
            if (instance.controlIcons) {
                instance.controlIcons.parentNode.removeChild(instance.controlIcons)
                instance.controlIcons = null
            }
        }
    }

},{"./svg-utilities":5}],3:[function(require,module,exports){
    var SvgUtils = require('./svg-utilities')
        , Utils = require('./utilities')
    ;

    var ShadowViewport = function(viewport, options){
        this.init(viewport, options)
    }

    /**
     * Initialization
     *
     * @param  {SVGElement} viewport
     * @param  {Object} options
     */
    ShadowViewport.prototype.init = function(viewport, options) {
        // DOM Elements
        this.viewport = viewport
        this.options = options

        // State cache
        this.originalState = {zoom: 1, x: 0, y: 0}
        this.activeState = {zoom: 1, x: 0, y: 0}

        this.updateCTMCached = Utils.proxy(this.updateCTM, this)

        // Create a custom requestAnimationFrame taking in account refreshRate
        this.requestAnimationFrame = Utils.createRequestAnimationFrame(this.options.refreshRate)

        // ViewBox
        this.viewBox = {x: 0, y: 0, width: 0, height: 0}
        this.cacheViewBox()

        // Process CTM
        var newCTM = this.processCTM()

        // Update viewport CTM and cache zoom and pan
        this.setCTM(newCTM)

        // Update CTM in this frame
        this.updateCTM()
    }

    /**
     * Cache initial viewBox value
     * If no viewBox is defined, then use viewport size/position instead for viewBox values
     */
    ShadowViewport.prototype.cacheViewBox = function() {
        var svgViewBox = this.options.svg.getAttribute('viewBox')

        if (svgViewBox) {
            var viewBoxValues = svgViewBox.split(/[\s\,]/).filter(function(v){return v}).map(parseFloat)

            // Cache viewbox x and y offset
            this.viewBox.x = viewBoxValues[0]
            this.viewBox.y = viewBoxValues[1]
            this.viewBox.width = viewBoxValues[2]
            this.viewBox.height = viewBoxValues[3]

            var zoom = Math.min(this.options.width / this.viewBox.width, this.options.height / this.viewBox.height)

            // Update active state
            this.activeState.zoom = zoom
            this.activeState.x = (this.options.width - this.viewBox.width * zoom) / 2
            this.activeState.y = (this.options.height - this.viewBox.height * zoom) / 2

            // Force updating CTM
            this.updateCTMOnNextFrame()

            this.options.svg.removeAttribute('viewBox')
        } else {
            this.simpleViewBoxCache()
        }
    }

    /**
     * Recalculate viewport sizes and update viewBox cache
     */
    ShadowViewport.prototype.simpleViewBoxCache = function() {
        var bBox = this.viewport.getBBox()

        this.viewBox.x = bBox.x
        this.viewBox.y = bBox.y
        this.viewBox.width = bBox.width
        this.viewBox.height = bBox.height
    }

    /**
     * Returns a viewbox object. Safe to alter
     *
     * @return {Object} viewbox object
     */
    ShadowViewport.prototype.getViewBox = function() {
        return Utils.extend({}, this.viewBox)
    }

    /**
     * Get initial zoom and pan values. Save them into originalState
     * Parses viewBox attribute to alter initial sizes
     *
     * @return {CTM} CTM object based on options
     */
    ShadowViewport.prototype.processCTM = function() {
        var newCTM = this.getCTM()

        if (this.options.fit || this.options.contain) {
            var newScale;
            if (this.options.fit) {
                newScale = Math.min(this.options.width/this.viewBox.width, this.options.height/this.viewBox.height);
            } else {
                newScale = Math.max(this.options.width/this.viewBox.width, this.options.height/this.viewBox.height);
            }

            newCTM.a = newScale; //x-scale
            newCTM.d = newScale; //y-scale
            newCTM.e = -this.viewBox.x * newScale; //x-transform
            newCTM.f = -this.viewBox.y * newScale; //y-transform
        }

        if (this.options.center) {
            var offsetX = (this.options.width - (this.viewBox.width + this.viewBox.x * 2) * newCTM.a) * 0.5
                , offsetY = (this.options.height - (this.viewBox.height + this.viewBox.y * 2) * newCTM.a) * 0.5

            newCTM.e = offsetX
            newCTM.f = offsetY
        }

        // Cache initial values. Based on activeState and fix+center opitons
        this.originalState.zoom = newCTM.a
        this.originalState.x = newCTM.e
        this.originalState.y = newCTM.f

        return newCTM
    }

    /**
     * Return originalState object. Safe to alter
     *
     * @return {Object}
     */
    ShadowViewport.prototype.getOriginalState = function() {
        return Utils.extend({}, this.originalState)
    }

    /**
     * Return actualState object. Safe to alter
     *
     * @return {Object}
     */
    ShadowViewport.prototype.getState = function() {
        return Utils.extend({}, this.activeState)
    }

    /**
     * Get zoom scale
     *
     * @return {Float} zoom scale
     */
    ShadowViewport.prototype.getZoom = function() {
        return this.activeState.zoom
    }

    /**
     * Get zoom scale for pubilc usage
     *
     * @return {Float} zoom scale
     */
    ShadowViewport.prototype.getRelativeZoom = function() {
        return this.activeState.zoom / this.originalState.zoom
    }

    /**
     * Compute zoom scale for pubilc usage
     *
     * @return {Float} zoom scale
     */
    ShadowViewport.prototype.computeRelativeZoom = function(scale) {
        return scale / this.originalState.zoom
    }

    /**
     * Get pan
     *
     * @return {Object}
     */
    ShadowViewport.prototype.getPan = function() {
        return {x: this.activeState.x, y: this.activeState.y}
    }

    /**
     * Return cached viewport CTM value that can be safely modified
     *
     * @return {SVGMatrix}
     */
    ShadowViewport.prototype.getCTM = function() {
        var safeCTM = this.options.svg.createSVGMatrix()

        // Copy values manually as in FF they are not itterable
        safeCTM.a = this.activeState.zoom
        safeCTM.b = 0
        safeCTM.c = 0
        safeCTM.d = this.activeState.zoom
        safeCTM.e = this.activeState.x
        safeCTM.f = this.activeState.y

        return safeCTM
    }

    /**
     * Set a new CTM
     *
     * @param {SVGMatrix} newCTM
     */
    ShadowViewport.prototype.setCTM = function(newCTM) {
        var willZoom = this.isZoomDifferent(newCTM)
            , willPan = this.isPanDifferent(newCTM)

        if (willZoom || willPan) {
            // Before zoom
            if (willZoom) {
                // If returns false then cancel zooming
                if (this.options.beforeZoom(this.getRelativeZoom(), this.computeRelativeZoom(newCTM.a)) === false) {
                    newCTM.a = newCTM.d = this.activeState.zoom
                    willZoom = false
                } else {
                    this.updateCache(newCTM);
                    this.options.onZoom(this.getRelativeZoom())
                }
            }

            // Before pan
            if (willPan) {
                var preventPan = this.options.beforePan(this.getPan(), {x: newCTM.e, y: newCTM.f})
                    // If prevent pan is an object
                    , preventPanX = false
                    , preventPanY = false

                // If prevent pan is Boolean false
                if (preventPan === false) {
                    // Set x and y same as before
                    newCTM.e = this.getPan().x
                    newCTM.f = this.getPan().y

                    preventPanX = preventPanY = true
                } else if (Utils.isObject(preventPan)) {
                    // Check for X axes attribute
                    if (preventPan.x === false) {
                        // Prevent panning on x axes
                        newCTM.e = this.getPan().x
                        preventPanX = true
                    } else if (Utils.isNumber(preventPan.x)) {
                        // Set a custom pan value
                        newCTM.e = preventPan.x
                    }

                    // Check for Y axes attribute
                    if (preventPan.y === false) {
                        // Prevent panning on x axes
                        newCTM.f = this.getPan().y
                        preventPanY = true
                    } else if (Utils.isNumber(preventPan.y)) {
                        // Set a custom pan value
                        newCTM.f = preventPan.y
                    }
                }

                // Update willPan flag
                // Check if newCTM is still different
                if ((preventPanX && preventPanY) || !this.isPanDifferent(newCTM)) {
                    willPan = false
                } else {
                    this.updateCache(newCTM);
                    this.options.onPan(this.getPan());
                }
            }

            // Check again if should zoom or pan
            if (willZoom || willPan) {
                this.updateCTMOnNextFrame()
            }
        }
    }

    ShadowViewport.prototype.isZoomDifferent = function(newCTM) {
        return this.activeState.zoom !== newCTM.a
    }

    ShadowViewport.prototype.isPanDifferent = function(newCTM) {
        return this.activeState.x !== newCTM.e || this.activeState.y !== newCTM.f
    }


    /**
     * Update cached CTM and active state
     *
     * @param {SVGMatrix} newCTM
     */
    ShadowViewport.prototype.updateCache = function(newCTM) {
        this.activeState.zoom = newCTM.a
        this.activeState.x = newCTM.e
        this.activeState.y = newCTM.f
    }

    ShadowViewport.prototype.pendingUpdate = false

    /**
     * Place a request to update CTM on next Frame
     */
    ShadowViewport.prototype.updateCTMOnNextFrame = function() {
        if (!this.pendingUpdate) {
            // Lock
            this.pendingUpdate = true

            // Throttle next update
            this.requestAnimationFrame.call(window, this.updateCTMCached)
        }
    }

    /**
     * Update viewport CTM with cached CTM
     */
    ShadowViewport.prototype.updateCTM = function() {
        var ctm = this.getCTM()

        // Updates SVG element
        SvgUtils.setCTM(this.viewport, ctm, this.defs)

        // Free the lock
        this.pendingUpdate = false

        // Notify about the update
        if(this.options.onUpdatedCTM) {
            this.options.onUpdatedCTM(ctm)
        }
    }

    module.exports = function(viewport, options){
        return new ShadowViewport(viewport, options)
    }

},{"./svg-utilities":5,"./utilities":7}],4:[function(require,module,exports){
    var Wheel = require('./uniwheel')
        , ControlIcons = require('./control-icons')
        , Utils = require('./utilities')
        , SvgUtils = require('./svg-utilities')
        , ShadowViewport = require('./shadow-viewport')

    var SvgPanZoom = function(svg, options) {
        this.init(svg, options)
    }

    var optionsDefaults = {
        viewportSelector: '.svg-pan-zoom_viewport' // Viewport selector. Can be querySelector string or SVGElement
        , panEnabled: true // enable or disable panning (default enabled)
        , controlIconsEnabled: false // insert icons to give user an option in addition to mouse events to control pan/zoom (default disabled)
        , zoomEnabled: true // enable or disable zooming (default enabled)
        , dblClickZoomEnabled: true // enable or disable zooming by double clicking (default enabled)
        , mouseWheelZoomEnabled: true // enable or disable zooming by mouse wheel (default enabled)
        , preventMouseEventsDefault: true // enable or disable preventDefault for mouse events
        , zoomScaleSensitivity: 0.1 // Zoom sensitivity
        , minZoom: 0.5 // Minimum Zoom level
        , maxZoom: 10 // Maximum Zoom level
        , fit: true // enable or disable viewport fit in SVG (default true)
        , contain: false // enable or disable viewport contain the svg (default false)
        , center: true // enable or disable viewport centering in SVG (default true)
        , refreshRate: 'auto' // Maximum number of frames per second (altering SVG's viewport)
        , beforeZoom: null
        , onZoom: null
        , beforePan: null
        , onPan: null
        , customEventsHandler: null
        , eventsListenerElement: null
        , onUpdatedCTM: null
    }

    SvgPanZoom.prototype.init = function(svg, options) {
        var that = this

        this.svg = svg
        this.defs = svg.querySelector('defs')

        // Add default attributes to SVG
        SvgUtils.setupSvgAttributes(this.svg)

        // Set options
        this.options = Utils.extend(Utils.extend({}, optionsDefaults), options)

        // Set default state
        this.state = 'none'

        // Get dimensions
        var boundingClientRectNormalized = SvgUtils.getBoundingClientRectNormalized(svg)
        this.width = boundingClientRectNormalized.width
        this.height = boundingClientRectNormalized.height

        // Init shadow viewport
        this.viewport = ShadowViewport(SvgUtils.getOrCreateViewport(this.svg, this.options.viewportSelector), {
            svg: this.svg
            , width: this.width
            , height: this.height
            , fit: this.options.fit
            , contain: this.options.contain
            , center: this.options.center
            , refreshRate: this.options.refreshRate
            // Put callbacks into functions as they can change through time
            , beforeZoom: function(oldScale, newScale) {
                if (that.viewport && that.options.beforeZoom) {return that.options.beforeZoom(oldScale, newScale)}
            }
            , onZoom: function(scale) {
                if (that.viewport && that.options.onZoom) {return that.options.onZoom(scale)}
            }
            , beforePan: function(oldPoint, newPoint) {
                if (that.viewport && that.options.beforePan) {return that.options.beforePan(oldPoint, newPoint)}
            }
            , onPan: function(point) {
                if (that.viewport && that.options.onPan) {return that.options.onPan(point)}
            }
            , onUpdatedCTM: function(ctm) {
                if (that.viewport && that.options.onUpdatedCTM) {return that.options.onUpdatedCTM(ctm)}
            }
        })

        // Wrap callbacks into public API context
        var publicInstance = this.getPublicInstance()
        publicInstance.setBeforeZoom(this.options.beforeZoom)
        publicInstance.setOnZoom(this.options.onZoom)
        publicInstance.setBeforePan(this.options.beforePan)
        publicInstance.setOnPan(this.options.onPan)
        publicInstance.setOnUpdatedCTM(this.options.onUpdatedCTM)

        if (this.options.controlIconsEnabled) {
            ControlIcons.enable(this)
        }

        // Init events handlers
        this.lastMouseWheelEventTime = Date.now()
        this.setupHandlers()
    }

    /**
     * Register event handlers
     */
    SvgPanZoom.prototype.setupHandlers = function() {
        var that = this
            , prevEvt = null // use for touchstart event to detect double tap
        ;

        this.eventListeners = {
            // Mouse down group
            mousedown: function(evt) {
                var result = that.handleMouseDown(evt, prevEvt);
                prevEvt = evt
                return result;
            }
            , touchstart: function(evt) {
                var result = that.handleMouseDown(evt, prevEvt);
                prevEvt = evt
                return result;
            }

            // Mouse up group
            , mouseup: function(evt) {
                return that.handleMouseUp(evt);
            }
            , touchend: function(evt) {
                return that.handleMouseUp(evt);
            }

            // Mouse move group
            , mousemove: function(evt) {
                return that.handleMouseMove(evt);
            }
            , touchmove: function(evt) {
                return that.handleMouseMove(evt);
            }

            // Mouse leave group
            , mouseleave: function(evt) {
                return that.handleMouseUp(evt);
            }
            , touchleave: function(evt) {
                return that.handleMouseUp(evt);
            }
            , touchcancel: function(evt) {
                return that.handleMouseUp(evt);
            }
        }

        // Init custom events handler if available
        if (this.options.customEventsHandler != null) { // jshint ignore:line
            this.options.customEventsHandler.init({
                svgElement: this.svg
                , eventsListenerElement: this.options.eventsListenerElement
                , instance: this.getPublicInstance()
            })

            // Custom event handler may halt builtin listeners
            var haltEventListeners = this.options.customEventsHandler.haltEventListeners
            if (haltEventListeners && haltEventListeners.length) {
                for (var i = haltEventListeners.length - 1; i >= 0; i--) {
                    if (this.eventListeners.hasOwnProperty(haltEventListeners[i])) {
                        delete this.eventListeners[haltEventListeners[i]]
                    }
                }
            }
        }

        // Bind eventListeners
        for (var event in this.eventListeners) {
            // Attach event to eventsListenerElement or SVG if not available
            (this.options.eventsListenerElement || this.svg)
                .addEventListener(event, this.eventListeners[event], false)
        }

        // Zoom using mouse wheel
        if (this.options.mouseWheelZoomEnabled) {
            this.options.mouseWheelZoomEnabled = false // set to false as enable will set it back to true
            this.enableMouseWheelZoom()
        }
    }

    /**
     * Enable ability to zoom using mouse wheel
     */
    SvgPanZoom.prototype.enableMouseWheelZoom = function() {
        if (!this.options.mouseWheelZoomEnabled) {
            var that = this

            // Mouse wheel listener
            this.wheelListener = function(evt) {
                return that.handleMouseWheel(evt);
            }

            // Bind wheelListener
            Wheel.on(this.options.eventsListenerElement || this.svg, this.wheelListener, false)

            this.options.mouseWheelZoomEnabled = true
        }
    }

    /**
     * Disable ability to zoom using mouse wheel
     */
    SvgPanZoom.prototype.disableMouseWheelZoom = function() {
        if (this.options.mouseWheelZoomEnabled) {
            Wheel.off(this.options.eventsListenerElement || this.svg, this.wheelListener, false)
            this.options.mouseWheelZoomEnabled = false
        }
    }

    /**
     * Handle mouse wheel event
     *
     * @param  {Event} evt
     */
    SvgPanZoom.prototype.handleMouseWheel = function(evt) {
        if (!this.options.zoomEnabled || this.state !== 'none') {
            return;
        }

        if (this.options.preventMouseEventsDefault){
            if (evt.preventDefault) {
                evt.preventDefault();
            } else {
                evt.returnValue = false;
            }
        }

        // Default delta in case that deltaY is not available
        var delta = evt.deltaY || 1
            , timeDelta = Date.now() - this.lastMouseWheelEventTime
            , divider = 3 + Math.max(0, 30 - timeDelta)

        // Update cache
        this.lastMouseWheelEventTime = Date.now()

        // Make empirical adjustments for browsers that give deltaY in pixels (deltaMode=0)
        if ('deltaMode' in evt && evt.deltaMode === 0 && evt.wheelDelta) {
            delta = evt.deltaY === 0 ? 0 :  Math.abs(evt.wheelDelta) / evt.deltaY
        }

        delta = -0.3 < delta && delta < 0.3 ? delta : (delta > 0 ? 1 : -1) * Math.log(Math.abs(delta) + 10) / divider

        var inversedScreenCTM = this.svg.getScreenCTM().inverse()
            , relativeMousePoint = SvgUtils.getEventPoint(evt, this.svg).matrixTransform(inversedScreenCTM)
            , zoom = Math.pow(1 + this.options.zoomScaleSensitivity, (-1) * delta); // multiplying by neg. 1 so as to make zoom in/out behavior match Google maps behavior

        this.zoomAtPoint(zoom, relativeMousePoint)
    }

    /**
     * Zoom in at a SVG point
     *
     * @param  {SVGPoint} point
     * @param  {Float} zoomScale    Number representing how much to zoom
     * @param  {Boolean} zoomAbsolute Default false. If true, zoomScale is treated as an absolute value.
     *                                Otherwise, zoomScale is treated as a multiplied (e.g. 1.10 would zoom in 10%)
     */
    SvgPanZoom.prototype.zoomAtPoint = function(zoomScale, point, zoomAbsolute) {
        var originalState = this.viewport.getOriginalState()

        if (!zoomAbsolute) {
            // Fit zoomScale in set bounds
            if (this.getZoom() * zoomScale < this.options.minZoom * originalState.zoom) {
                zoomScale = (this.options.minZoom * originalState.zoom) / this.getZoom()
            } else if (this.getZoom() * zoomScale > this.options.maxZoom * originalState.zoom) {
                zoomScale = (this.options.maxZoom * originalState.zoom) / this.getZoom()
            }
        } else {
            // Fit zoomScale in set bounds
            zoomScale = Math.max(this.options.minZoom * originalState.zoom, Math.min(this.options.maxZoom * originalState.zoom, zoomScale))
            // Find relative scale to achieve desired scale
            zoomScale = zoomScale/this.getZoom()
        }

        var oldCTM = this.viewport.getCTM()
            , relativePoint = point.matrixTransform(oldCTM.inverse())
            , modifier = this.svg.createSVGMatrix().translate(relativePoint.x, relativePoint.y).scale(zoomScale).translate(-relativePoint.x, -relativePoint.y)
            , newCTM = oldCTM.multiply(modifier)

        if (newCTM.a !== oldCTM.a) {
            this.viewport.setCTM(newCTM)
        }
    }

    /**
     * Zoom at center point
     *
     * @param  {Float} scale
     * @param  {Boolean} absolute Marks zoom scale as relative or absolute
     */
    SvgPanZoom.prototype.zoom = function(scale, absolute) {
        this.zoomAtPoint(scale, SvgUtils.getSvgCenterPoint(this.svg, this.width, this.height), absolute)
    }

    /**
     * Zoom used by public instance
     *
     * @param  {Float} scale
     * @param  {Boolean} absolute Marks zoom scale as relative or absolute
     */
    SvgPanZoom.prototype.publicZoom = function(scale, absolute) {
        if (absolute) {
            scale = this.computeFromRelativeZoom(scale)
        }

        this.zoom(scale, absolute)
    }

    /**
     * Zoom at point used by public instance
     *
     * @param  {Float} scale
     * @param  {SVGPoint|Object} point    An object that has x and y attributes
     * @param  {Boolean} absolute Marks zoom scale as relative or absolute
     */
    SvgPanZoom.prototype.publicZoomAtPoint = function(scale, point, absolute) {
        if (absolute) {
            // Transform zoom into a relative value
            scale = this.computeFromRelativeZoom(scale)
        }

        // If not a SVGPoint but has x and y then create a SVGPoint
        if (Utils.getType(point) !== 'SVGPoint') {
            if('x' in point && 'y' in point) {
                point = SvgUtils.createSVGPoint(this.svg, point.x, point.y)
            } else {
                throw new Error('Given point is invalid')
            }
        }

        this.zoomAtPoint(scale, point, absolute)
    }

    /**
     * Get zoom scale
     *
     * @return {Float} zoom scale
     */
    SvgPanZoom.prototype.getZoom = function() {
        return this.viewport.getZoom()
    }

    /**
     * Get zoom scale for public usage
     *
     * @return {Float} zoom scale
     */
    SvgPanZoom.prototype.getRelativeZoom = function() {
        return this.viewport.getRelativeZoom()
    }

    /**
     * Compute actual zoom from public zoom
     *
     * @param  {Float} zoom
     * @return {Float} zoom scale
     */
    SvgPanZoom.prototype.computeFromRelativeZoom = function(zoom) {
        return zoom * this.viewport.getOriginalState().zoom
    }

    /**
     * Set zoom to initial state
     */
    SvgPanZoom.prototype.resetZoom = function() {
        var originalState = this.viewport.getOriginalState()

        this.zoom(originalState.zoom, true);
    }

    /**
     * Set pan to initial state
     */
    SvgPanZoom.prototype.resetPan = function() {
        this.pan(this.viewport.getOriginalState());
    }

    /**
     * Set pan and zoom to initial state
     */
    SvgPanZoom.prototype.reset = function() {
        this.resetZoom()
        this.resetPan()
    }

    /**
     * Handle double click event
     * See handleMouseDown() for alternate detection method
     *
     * @param {Event} evt
     */
    SvgPanZoom.prototype.handleDblClick = function(evt) {
        if (this.options.preventMouseEventsDefault) {
            if (evt.preventDefault) {
                evt.preventDefault()
            } else {
                evt.returnValue = false
            }
        }

        // Check if target was a control button
        if (this.options.controlIconsEnabled) {
            var targetClass = evt.target.getAttribute('class') || ''
            if (targetClass.indexOf('svg-pan-zoom-control') > -1) {
                return false
            }
        }

        var zoomFactor

        if (evt.shiftKey) {
            zoomFactor = 1/((1 + this.options.zoomScaleSensitivity) * 2) // zoom out when shift key pressed
        } else {
            zoomFactor = (1 + this.options.zoomScaleSensitivity) * 2
        }

        var point = SvgUtils.getEventPoint(evt, this.svg).matrixTransform(this.svg.getScreenCTM().inverse())
        this.zoomAtPoint(zoomFactor, point)
    }

    /**
     * Handle click event
     *
     * @param {Event} evt
     */
    SvgPanZoom.prototype.handleMouseDown = function(evt, prevEvt) {
        if (this.options.preventMouseEventsDefault) {
            if (evt.preventDefault) {
                evt.preventDefault()
            } else {
                evt.returnValue = false
            }
        }

        Utils.mouseAndTouchNormalize(evt, this.svg)

        // Double click detection; more consistent than ondblclick
        if (this.options.dblClickZoomEnabled && Utils.isDblClick(evt, prevEvt)){
            this.handleDblClick(evt)
        } else {
            // Pan mode
            this.state = 'pan'
            this.firstEventCTM = this.viewport.getCTM()
            this.stateOrigin = SvgUtils.getEventPoint(evt, this.svg).matrixTransform(this.firstEventCTM.inverse())
        }
    }

    /**
     * Handle mouse move event
     *
     * @param  {Event} evt
     */
    SvgPanZoom.prototype.handleMouseMove = function(evt) {
        if (this.options.preventMouseEventsDefault) {
            if (evt.preventDefault) {
                evt.preventDefault()
            } else {
                evt.returnValue = false
            }
        }

        if (this.state === 'pan' && this.options.panEnabled) {
            // Pan mode
            var point = SvgUtils.getEventPoint(evt, this.svg).matrixTransform(this.firstEventCTM.inverse())
                , viewportCTM = this.firstEventCTM.translate(point.x - this.stateOrigin.x, point.y - this.stateOrigin.y)

            this.viewport.setCTM(viewportCTM)
        }
    }

    /**
     * Handle mouse button release event
     *
     * @param {Event} evt
     */
    SvgPanZoom.prototype.handleMouseUp = function(evt) {
        if (this.options.preventMouseEventsDefault) {
            if (evt.preventDefault) {
                evt.preventDefault()
            } else {
                evt.returnValue = false
            }
        }

        if (this.state === 'pan') {
            // Quit pan mode
            this.state = 'none'
        }
    }

    /**
     * Adjust viewport size (only) so it will fit in SVG
     * Does not center image
     */
    SvgPanZoom.prototype.fit = function() {
        var viewBox = this.viewport.getViewBox()
            , newScale = Math.min(this.width/viewBox.width, this.height/viewBox.height)

        this.zoom(newScale, true)
    }

    /**
     * Adjust viewport size (only) so it will contain the SVG
     * Does not center image
     */
    SvgPanZoom.prototype.contain = function() {
        var viewBox = this.viewport.getViewBox()
            , newScale = Math.max(this.width/viewBox.width, this.height/viewBox.height)

        this.zoom(newScale, true)
    }

    /**
     * Adjust viewport pan (only) so it will be centered in SVG
     * Does not zoom/fit/contain image
     */
    SvgPanZoom.prototype.center = function() {
        var viewBox = this.viewport.getViewBox()
            , offsetX = (this.width - (viewBox.width + viewBox.x * 2) * this.getZoom()) * 0.5
            , offsetY = (this.height - (viewBox.height + viewBox.y * 2) * this.getZoom()) * 0.5

        this.getPublicInstance().pan({x: offsetX, y: offsetY})
    }

    /**
     * Update content cached BorderBox
     * Use when viewport contents change
     */
    SvgPanZoom.prototype.updateBBox = function() {
        this.viewport.simpleViewBoxCache()
    }

    /**
     * Pan to a rendered position
     *
     * @param  {Object} point {x: 0, y: 0}
     */
    SvgPanZoom.prototype.pan = function(point) {
        var viewportCTM = this.viewport.getCTM()
        viewportCTM.e = point.x
        viewportCTM.f = point.y
        this.viewport.setCTM(viewportCTM)
    }

    /**
     * Relatively pan the graph by a specified rendered position vector
     *
     * @param  {Object} point {x: 0, y: 0}
     */
    SvgPanZoom.prototype.panBy = function(point) {
        var viewportCTM = this.viewport.getCTM()
        viewportCTM.e += point.x
        viewportCTM.f += point.y
        this.viewport.setCTM(viewportCTM)
    }

    /**
     * Get pan vector
     *
     * @return {Object} {x: 0, y: 0}
     */
    SvgPanZoom.prototype.getPan = function() {
        var state = this.viewport.getState()

        return {x: state.x, y: state.y}
    }

    /**
     * Recalculates cached svg dimensions and controls position
     */
    SvgPanZoom.prototype.resize = function() {
        // Get dimensions
        var boundingClientRectNormalized = SvgUtils.getBoundingClientRectNormalized(this.svg)
        this.width = boundingClientRectNormalized.width
        this.height = boundingClientRectNormalized.height

        // Recalculate original state
        var viewport = this.viewport
        viewport.options.width = this.width
        viewport.options.height = this.height
        viewport.processCTM()

        // Reposition control icons by re-enabling them
        if (this.options.controlIconsEnabled) {
            this.getPublicInstance().disableControlIcons()
            this.getPublicInstance().enableControlIcons()
        }
    }

    /**
     * Unbind mouse events, free callbacks and destroy public instance
     */
    SvgPanZoom.prototype.destroy = function() {
        var that = this

        // Free callbacks
        this.beforeZoom = null
        this.onZoom = null
        this.beforePan = null
        this.onPan = null
        this.onUpdatedCTM = null

        // Destroy custom event handlers
        if (this.options.customEventsHandler != null) { // jshint ignore:line
            this.options.customEventsHandler.destroy({
                svgElement: this.svg
                , eventsListenerElement: this.options.eventsListenerElement
                , instance: this.getPublicInstance()
            })
        }

        // Unbind eventListeners
        for (var event in this.eventListeners) {
            (this.options.eventsListenerElement || this.svg)
                .removeEventListener(event, this.eventListeners[event], false)
        }

        // Unbind wheelListener
        this.disableMouseWheelZoom()

        // Remove control icons
        this.getPublicInstance().disableControlIcons()

        // Reset zoom and pan
        this.reset()

        // Remove instance from instancesStore
        instancesStore = instancesStore.filter(function(instance){
            return instance.svg !== that.svg
        })

        // Delete options and its contents
        delete this.options

        // Delete viewport to make public shadow viewport functions uncallable
        delete this.viewport

        // Destroy public instance and rewrite getPublicInstance
        delete this.publicInstance
        delete this.pi
        this.getPublicInstance = function(){
            return null
        }
    }

    /**
     * Returns a public instance object
     *
     * @return {Object} Public instance object
     */
    SvgPanZoom.prototype.getPublicInstance = function() {
        var that = this

        // Create cache
        if (!this.publicInstance) {
            this.publicInstance = this.pi = {
                // Pan
                enablePan: function() {that.options.panEnabled = true; return that.pi}
                , disablePan: function() {that.options.panEnabled = false; return that.pi}
                , isPanEnabled: function() {return !!that.options.panEnabled}
                , pan: function(point) {that.pan(point); return that.pi}
                , panBy: function(point) {that.panBy(point); return that.pi}
                , getPan: function() {return that.getPan()}
                // Pan event
                , setBeforePan: function(fn) {that.options.beforePan = fn === null ? null : Utils.proxy(fn, that.publicInstance); return that.pi}
                , setOnPan: function(fn) {that.options.onPan = fn === null ? null : Utils.proxy(fn, that.publicInstance); return that.pi}
                // Zoom and Control Icons
                , enableZoom: function() {that.options.zoomEnabled = true; return that.pi}
                , disableZoom: function() {that.options.zoomEnabled = false; return that.pi}
                , isZoomEnabled: function() {return !!that.options.zoomEnabled}
                , enableControlIcons: function() {
                    if (!that.options.controlIconsEnabled) {
                        that.options.controlIconsEnabled = true
                        ControlIcons.enable(that)
                    }
                    return that.pi
                }
                , disableControlIcons: function() {
                    if (that.options.controlIconsEnabled) {
                        that.options.controlIconsEnabled = false;
                        ControlIcons.disable(that)
                    }
                    return that.pi
                }
                , isControlIconsEnabled: function() {return !!that.options.controlIconsEnabled}
                // Double click zoom
                , enableDblClickZoom: function() {that.options.dblClickZoomEnabled = true; return that.pi}
                , disableDblClickZoom: function() {that.options.dblClickZoomEnabled = false; return that.pi}
                , isDblClickZoomEnabled: function() {return !!that.options.dblClickZoomEnabled}
                // Mouse wheel zoom
                , enableMouseWheelZoom: function() {that.enableMouseWheelZoom(); return that.pi}
                , disableMouseWheelZoom: function() {that.disableMouseWheelZoom(); return that.pi}
                , isMouseWheelZoomEnabled: function() {return !!that.options.mouseWheelZoomEnabled}
                // Zoom scale and bounds
                , setZoomScaleSensitivity: function(scale) {that.options.zoomScaleSensitivity = scale; return that.pi}
                , setMinZoom: function(zoom) {that.options.minZoom = zoom; return that.pi}
                , setMaxZoom: function(zoom) {that.options.maxZoom = zoom; return that.pi}
                // Zoom event
                , setBeforeZoom: function(fn) {that.options.beforeZoom = fn === null ? null : Utils.proxy(fn, that.publicInstance); return that.pi}
                , setOnZoom: function(fn) {that.options.onZoom = fn === null ? null : Utils.proxy(fn, that.publicInstance); return that.pi}
                // Zooming
                , zoom: function(scale) {that.publicZoom(scale, true); return that.pi}
                , zoomBy: function(scale) {that.publicZoom(scale, false); return that.pi}
                , zoomAtPoint: function(scale, point) {that.publicZoomAtPoint(scale, point, true); return that.pi}
                , zoomAtPointBy: function(scale, point) {that.publicZoomAtPoint(scale, point, false); return that.pi}
                , zoomIn: function() {this.zoomBy(1 + that.options.zoomScaleSensitivity); return that.pi}
                , zoomOut: function() {this.zoomBy(1 / (1 + that.options.zoomScaleSensitivity)); return that.pi}
                , getZoom: function() {return that.getRelativeZoom()}
                // CTM update
                , setOnUpdatedCTM: function(fn) {that.options.onUpdatedCTM = fn === null ? null : Utils.proxy(fn, that.publicInstance); return that.pi}
                // Reset
                , resetZoom: function() {that.resetZoom(); return that.pi}
                , resetPan: function() {that.resetPan(); return that.pi}
                , reset: function() {that.reset(); return that.pi}
                // Fit, Contain and Center
                , fit: function() {that.fit(); return that.pi}
                , contain: function() {that.contain(); return that.pi}
                , center: function() {that.center(); return that.pi}
                // Size and Resize
                , updateBBox: function() {that.updateBBox(); return that.pi}
                , resize: function() {that.resize(); return that.pi}
                , getSizes: function() {
                    return {
                        width: that.width
                        , height: that.height
                        , realZoom: that.getZoom()
                        , viewBox: that.viewport.getViewBox()
                    }
                }
                // Destroy
                , destroy: function() {that.destroy(); return that.pi}
            }
        }

        return this.publicInstance
    }

    /**
     * Stores pairs of instances of SvgPanZoom and SVG
     * Each pair is represented by an object {svg: SVGSVGElement, instance: SvgPanZoom}
     *
     * @type {Array}
     */
    var instancesStore = []

    var svgPanZoom = function(elementOrSelector, options){
        var svg = Utils.getSvg(elementOrSelector)

        if (svg === null) {
            return null
        } else {
            // Look for existent instance
            for(var i = instancesStore.length - 1; i >= 0; i--) {
                if (instancesStore[i].svg === svg) {
                    return instancesStore[i].instance.getPublicInstance()
                }
            }

            // If instance not found - create one
            instancesStore.push({
                svg: svg
                , instance: new SvgPanZoom(svg, options)
            })

            // Return just pushed instance
            return instancesStore[instancesStore.length - 1].instance.getPublicInstance()
        }
    }

    module.exports = svgPanZoom;

},{"./control-icons":2,"./shadow-viewport":3,"./svg-utilities":5,"./uniwheel":6,"./utilities":7}],5:[function(require,module,exports){
    var Utils = require('./utilities')
        , _browser = 'unknown'
    ;

// http://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser
    if (/*@cc_on!@*/false || !!document.documentMode) { // internet explorer
        _browser = 'ie';
    }

    module.exports = {
        svgNS:  'http://www.w3.org/2000/svg'
        , xmlNS:  'http://www.w3.org/XML/1998/namespace'
        , xmlnsNS:  'http://www.w3.org/2000/xmlns/'
        , xlinkNS:  'http://www.w3.org/1999/xlink'
        , evNS:  'http://www.w3.org/2001/xml-events'

        /**
         * Get svg dimensions: width and height
         *
         * @param  {SVGSVGElement} svg
         * @return {Object}     {width: 0, height: 0}
         */
        , getBoundingClientRectNormalized: function(svg) {
            if (svg.clientWidth && svg.clientHeight) {
                return {width: svg.clientWidth, height: svg.clientHeight}
            } else if (!!svg.getBoundingClientRect()) {
                return svg.getBoundingClientRect();
            } else {
                throw new Error('Cannot get BoundingClientRect for SVG.');
            }
        }

        /**
         * Gets g element with class of "viewport" or creates it if it doesn't exist
         *
         * @param  {SVGSVGElement} svg
         * @return {SVGElement}     g (group) element
         */
        , getOrCreateViewport: function(svg, selector) {
            var viewport = null

            if (Utils.isElement(selector)) {
                viewport = selector
            } else {
                viewport = svg.querySelector(selector)
            }

            // Check if there is just one main group in SVG
            if (!viewport) {
                var childNodes = Array.prototype.slice.call(svg.childNodes || svg.children).filter(function(el){
                    return el.nodeName !== 'defs' && el.nodeName !== '#text'
                })

                // Node name should be SVGGElement and should have no transform attribute
                // Groups with transform are not used as viewport because it involves parsing of all transform possibilities
                if (childNodes.length === 1 && childNodes[0].nodeName === 'g' && childNodes[0].getAttribute('transform') === null) {
                    viewport = childNodes[0]
                }
            }

            // If no favorable group element exists then create one
            if (!viewport) {
                var viewportId = 'viewport-' + new Date().toISOString().replace(/\D/g, '');
                viewport = document.createElementNS(this.svgNS, 'g');
                viewport.setAttribute('id', viewportId);

                // Internet Explorer (all versions?) can't use childNodes, but other browsers prefer (require?) using childNodes
                var svgChildren = svg.childNodes || svg.children;
                if (!!svgChildren && svgChildren.length > 0) {
                    for (var i = svgChildren.length; i > 0; i--) {
                        // Move everything into viewport except defs
                        if (svgChildren[svgChildren.length - i].nodeName !== 'defs') {
                            viewport.appendChild(svgChildren[svgChildren.length - i]);
                        }
                    }
                }
                svg.appendChild(viewport);
            }

            // Parse class names
            var classNames = [];
            if (viewport.getAttribute('class')) {
                classNames = viewport.getAttribute('class').split(' ')
            }

            // Set class (if not set already)
            if (!~classNames.indexOf('svg-pan-zoom_viewport')) {
                classNames.push('svg-pan-zoom_viewport')
                viewport.setAttribute('class', classNames.join(' '))
            }

            return viewport
        }

        /**
         * Set SVG attributes
         *
         * @param  {SVGSVGElement} svg
         */
        , setupSvgAttributes: function(svg) {
            // Setting default attributes
            svg.setAttribute('xmlns', this.svgNS);
            svg.setAttributeNS(this.xmlnsNS, 'xmlns:xlink', this.xlinkNS);
            svg.setAttributeNS(this.xmlnsNS, 'xmlns:ev', this.evNS);

            // Needed for Internet Explorer, otherwise the viewport overflows
            if (svg.parentNode !== null) {
                var style = svg.getAttribute('style') || '';
                if (style.toLowerCase().indexOf('overflow') === -1) {
                    svg.setAttribute('style', 'overflow: hidden; ' + style);
                }
            }
        }

        /**
         * How long Internet Explorer takes to finish updating its display (ms).
         */
        , internetExplorerRedisplayInterval: 300

        /**
         * Forces the browser to redisplay all SVG elements that rely on an
         * element defined in a 'defs' section. It works globally, for every
         * available defs element on the page.
         * The throttling is intentionally global.
         *
         * This is only needed for IE. It is as a hack to make markers (and 'use' elements?)
         * visible after pan/zoom when there are multiple SVGs on the page.
         * See bug report: https://connect.microsoft.com/IE/feedback/details/781964/
         * also see svg-pan-zoom issue: https://github.com/ariutta/svg-pan-zoom/issues/62
         */
        , refreshDefsGlobal: Utils.throttle(function() {
            var allDefs = document.querySelectorAll('defs');
            var allDefsCount = allDefs.length;
            for (var i = 0; i < allDefsCount; i++) {
                var thisDefs = allDefs[i];
                thisDefs.parentNode.insertBefore(thisDefs, thisDefs);
            }
        }, this.internetExplorerRedisplayInterval)

        /**
         * Sets the current transform matrix of an element
         *
         * @param {SVGElement} element
         * @param {SVGMatrix} matrix  CTM
         * @param {SVGElement} defs
         */
        , setCTM: function(element, matrix, defs) {
            var that = this
                , s = 'matrix(' + matrix.a + ',' + matrix.b + ',' + matrix.c + ',' + matrix.d + ',' + matrix.e + ',' + matrix.f + ')';

            element.setAttributeNS(null, 'transform', s);
            if ('transform' in element.style) {
                element.style.transform = s;
            } else if ('-ms-transform' in element.style) {
                element.style['-ms-transform'] = s;
            } else if ('-webkit-transform' in element.style) {
                element.style['-webkit-transform'] = s;
            }

            // IE has a bug that makes markers disappear on zoom (when the matrix "a" and/or "d" elements change)
            // see http://stackoverflow.com/questions/17654578/svg-marker-does-not-work-in-ie9-10
            // and http://srndolha.wordpress.com/2013/11/25/svg-line-markers-may-disappear-in-internet-explorer-11/
            if (_browser === 'ie' && !!defs) {
                // this refresh is intended for redisplaying the SVG during zooming
                defs.parentNode.insertBefore(defs, defs);
                // this refresh is intended for redisplaying the other SVGs on a page when panning a given SVG
                // it is also needed for the given SVG itself, on zoomEnd, if the SVG contains any markers that
                // are located under any other element(s).
                window.setTimeout(function() {
                    that.refreshDefsGlobal();
                }, that.internetExplorerRedisplayInterval);
            }
        }

        /**
         * Instantiate an SVGPoint object with given event coordinates
         *
         * @param {Event} evt
         * @param  {SVGSVGElement} svg
         * @return {SVGPoint}     point
         */
        , getEventPoint: function(evt, svg) {
            var point = svg.createSVGPoint()

            Utils.mouseAndTouchNormalize(evt, svg)

            point.x = evt.clientX
            point.y = evt.clientY

            return point
        }

        /**
         * Get SVG center point
         *
         * @param  {SVGSVGElement} svg
         * @return {SVGPoint}
         */
        , getSvgCenterPoint: function(svg, width, height) {
            return this.createSVGPoint(svg, width / 2, height / 2)
        }

        /**
         * Create a SVGPoint with given x and y
         *
         * @param  {SVGSVGElement} svg
         * @param  {Number} x
         * @param  {Number} y
         * @return {SVGPoint}
         */
        , createSVGPoint: function(svg, x, y) {
            var point = svg.createSVGPoint()
            point.x = x
            point.y = y

            return point
        }
    }

},{"./utilities":7}],6:[function(require,module,exports){
// uniwheel 0.1.2 (customized)
// A unified cross browser mouse wheel event handler
// https://github.com/teemualap/uniwheel

    module.exports = (function(){

        //Full details: https://developer.mozilla.org/en-US/docs/Web/Reference/Events/wheel

        var prefix = "", _addEventListener, _removeEventListener, onwheel, support, fns = [];

        // detect event model
        if ( window.addEventListener ) {
            _addEventListener = "addEventListener";
            _removeEventListener = "removeEventListener";
        } else {
            _addEventListener = "attachEvent";
            _removeEventListener = "detachEvent";
            prefix = "on";
        }

        // detect available wheel event
        support = "onwheel" in document.createElement("div") ? "wheel" : // Modern browsers support "wheel"
            document.onmousewheel !== undefined ? "mousewheel" : // Webkit and IE support at least "mousewheel"
                "DOMMouseScroll"; // let's assume that remaining browsers are older Firefox


        function createCallback(element,callback,capture) {

            var fn = function(originalEvent) {

                !originalEvent && ( originalEvent = window.event );

                // create a normalized event object
                var event = {
                    // keep a ref to the original event object
                    originalEvent: originalEvent,
                    target: originalEvent.target || originalEvent.srcElement,
                    type: "wheel",
                    deltaMode: originalEvent.type == "MozMousePixelScroll" ? 0 : 1,
                    deltaX: 0,
                    delatZ: 0,
                    preventDefault: function() {
                        originalEvent.preventDefault ?
                            originalEvent.preventDefault() :
                            originalEvent.returnValue = false;
                    }
                };

                // calculate deltaY (and deltaX) according to the event
                if ( support == "mousewheel" ) {
                    event.deltaY = - 1/40 * originalEvent.wheelDelta;
                    // Webkit also support wheelDeltaX
                    originalEvent.wheelDeltaX && ( event.deltaX = - 1/40 * originalEvent.wheelDeltaX );
                } else {
                    event.deltaY = originalEvent.detail;
                }

                // it's time to fire the callback
                return callback( event );

            };

            fns.push({
                element: element,
                fn: fn,
                capture: capture
            });

            return fn;
        }

        function getCallback(element,capture) {
            for (var i = 0; i < fns.length; i++) {
                if (fns[i].element === element && fns[i].capture === capture) {
                    return fns[i].fn;
                }
            }
            return function(){};
        }

        function removeCallback(element,capture) {
            for (var i = 0; i < fns.length; i++) {
                if (fns[i].element === element && fns[i].capture === capture) {
                    return fns.splice(i,1);
                }
            }
        }

        function _addWheelListener( elem, eventName, callback, useCapture ) {

            var cb;

            if (support === "wheel") {
                cb = callback;
            } else {
                cb = createCallback(elem,callback,useCapture);
            }

            elem[ _addEventListener ]( prefix + eventName, cb, useCapture || false );

        }

        function _removeWheelListener( elem, eventName, callback, useCapture ) {

            var cb;

            if (support === "wheel") {
                cb = callback;
            } else {
                cb = getCallback(elem,useCapture);
            }

            elem[ _removeEventListener ]( prefix + eventName, cb, useCapture || false );

            removeCallback(elem,useCapture);

        }

        function addWheelListener( elem, callback, useCapture ) {
            _addWheelListener( elem, support, callback, useCapture );

            // handle MozMousePixelScroll in older Firefox
            if( support == "DOMMouseScroll" ) {
                _addWheelListener( elem, "MozMousePixelScroll", callback, useCapture);
            }
        }

        function removeWheelListener(elem,callback,useCapture){
            _removeWheelListener(elem,support,callback,useCapture);

            // handle MozMousePixelScroll in older Firefox
            if( support == "DOMMouseScroll" ) {
                _removeWheelListener(elem, "MozMousePixelScroll", callback, useCapture);
            }
        }

        return {
            on: addWheelListener,
            off: removeWheelListener
        };

    })();

},{}],7:[function(require,module,exports){
    module.exports = {
        /**
         * Extends an object
         *
         * @param  {Object} target object to extend
         * @param  {Object} source object to take properties from
         * @return {Object}        extended object
         */
        extend: function(target, source) {
            target = target || {};
            for (var prop in source) {
                // Go recursively
                if (this.isObject(source[prop])) {
                    target[prop] = this.extend(target[prop], source[prop])
                } else {
                    target[prop] = source[prop]
                }
            }
            return target;
        }

        /**
         * Checks if an object is a DOM element
         *
         * @param  {Object}  o HTML element or String
         * @return {Boolean}   returns true if object is a DOM element
         */
        , isElement: function(o){
            return (
                o instanceof HTMLElement || o instanceof SVGElement || o instanceof SVGSVGElement || //DOM2
                (o && typeof o === 'object' && o !== null && o.nodeType === 1 && typeof o.nodeName === 'string')
            );
        }

        /**
         * Checks if an object is an Object
         *
         * @param  {Object}  o Object
         * @return {Boolean}   returns true if object is an Object
         */
        , isObject: function(o){
            return Object.prototype.toString.call(o) === '[object Object]';
        }

        /**
         * Checks if variable is Number
         *
         * @param  {Integer|Float}  n
         * @return {Boolean}   returns true if variable is Number
         */
        , isNumber: function(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        }

        /**
         * Search for an SVG element
         *
         * @param  {Object|String} elementOrSelector DOM Element or selector String
         * @return {Object|Null}                   SVG or null
         */
        , getSvg: function(elementOrSelector) {
            var element
                , svg;

            if (!this.isElement(elementOrSelector)) {
                // If selector provided
                if (typeof elementOrSelector === 'string' || elementOrSelector instanceof String) {
                    // Try to find the element
                    element = document.querySelector(elementOrSelector)

                    if (!element) {
                        throw new Error('Provided selector did not find any elements. Selector: ' + elementOrSelector)
                        return null
                    }
                } else {
                    throw new Error('Provided selector is not an HTML object nor String')
                    return null
                }
            } else {
                element = elementOrSelector
            }

            if (element.tagName.toLowerCase() === 'svg') {
                svg = element;
            } else {
                if (element.tagName.toLowerCase() === 'object') {
                    svg = element.contentDocument.documentElement;
                } else {
                    if (element.tagName.toLowerCase() === 'embed') {
                        svg = element.getSVGDocument().documentElement;
                    } else {
                        if (element.tagName.toLowerCase() === 'img') {
                            throw new Error('Cannot script an SVG in an "img" element. Please use an "object" element or an in-line SVG.');
                        } else {
                            throw new Error('Cannot get SVG.');
                        }
                        return null
                    }
                }
            }

            return svg
        }

        /**
         * Attach a given context to a function
         * @param  {Function} fn      Function
         * @param  {Object}   context Context
         * @return {Function}           Function with certain context
         */
        , proxy: function(fn, context) {
            return function() {
                return fn.apply(context, arguments)
            }
        }

        /**
         * Returns object type
         * Uses toString that returns [object SVGPoint]
         * And than parses object type from string
         *
         * @param  {Object} o Any object
         * @return {String}   Object type
         */
        , getType: function(o) {
            return Object.prototype.toString.apply(o).replace(/^\[object\s/, '').replace(/\]$/, '')
        }

        /**
         * If it is a touch event than add clientX and clientY to event object
         *
         * @param  {Event} evt
         * @param  {SVGSVGElement} svg
         */
        , mouseAndTouchNormalize: function(evt, svg) {
            // If no clientX then fallback
            if (evt.clientX === void 0 || evt.clientX === null) {
                // Fallback
                evt.clientX = 0
                evt.clientY = 0

                // If it is a touch event
                if (evt.touches !== void 0 && evt.touches.length) {
                    if (evt.touches[0].clientX !== void 0) {
                        evt.clientX = evt.touches[0].clientX
                        evt.clientY = evt.touches[0].clientY
                    } else if (evt.touches[0].pageX !== void 0) {
                        var rect = svg.getBoundingClientRect();

                        evt.clientX = evt.touches[0].pageX - rect.left
                        evt.clientY = evt.touches[0].pageY - rect.top
                    }
                    // If it is a custom event
                } else if (evt.originalEvent !== void 0) {
                    if (evt.originalEvent.clientX !== void 0) {
                        evt.clientX = evt.originalEvent.clientX
                        evt.clientY = evt.originalEvent.clientY
                    }
                }
            }
        }

        /**
         * Check if an event is a double click/tap
         * TODO: For touch gestures use a library (hammer.js) that takes in account other events
         * (touchmove and touchend). It should take in account tap duration and traveled distance
         *
         * @param  {Event}  evt
         * @param  {Event}  prevEvt Previous Event
         * @return {Boolean}
         */
        , isDblClick: function(evt, prevEvt) {
            // Double click detected by browser
            if (evt.detail === 2) {
                return true;
            }
            // Try to compare events
            else if (prevEvt !== void 0 && prevEvt !== null) {
                var timeStampDiff = evt.timeStamp - prevEvt.timeStamp // should be lower than 250 ms
                    , touchesDistance = Math.sqrt(Math.pow(evt.clientX - prevEvt.clientX, 2) + Math.pow(evt.clientY - prevEvt.clientY, 2))

                return timeStampDiff < 250 && touchesDistance < 10
            }

            // Nothing found
            return false;
        }

        /**
         * Returns current timestamp as an integer
         *
         * @return {Number}
         */
        , now: Date.now || function() {
            return new Date().getTime();
        }

        // From underscore.
        // Returns a function, that, when invoked, will only be triggered at most once
        // during a given window of time. Normally, the throttled function will run
        // as much as it can, without ever going more than once per `wait` duration;
        // but if you'd like to disable the execution on the leading edge, pass
        // `{leading: false}`. To disable execution on the trailing edge, ditto.
// jscs:disable
// jshint ignore:start
        , throttle: function(func, wait, options) {
            var that = this;
            var context, args, result;
            var timeout = null;
            var previous = 0;
            if (!options) options = {};
            var later = function() {
                previous = options.leading === false ? 0 : that.now();
                timeout = null;
                result = func.apply(context, args);
                if (!timeout) context = args = null;
            };
            return function() {
                var now = that.now();
                if (!previous && options.leading === false) previous = now;
                var remaining = wait - (now - previous);
                context = this;
                args = arguments;
                if (remaining <= 0 || remaining > wait) {
                    clearTimeout(timeout);
                    timeout = null;
                    previous = now;
                    result = func.apply(context, args);
                    if (!timeout) context = args = null;
                } else if (!timeout && options.trailing !== false) {
                    timeout = setTimeout(later, remaining);
                }
                return result;
            };
        }
// jshint ignore:end
// jscs:enable

        /**
         * Create a requestAnimationFrame simulation
         *
         * @param  {Number|String} refreshRate
         * @return {Function}
         */
        , createRequestAnimationFrame: function(refreshRate) {
            var timeout = null

            // Convert refreshRate to timeout
            if (refreshRate !== 'auto' && refreshRate < 60 && refreshRate > 1) {
                timeout = Math.floor(1000 / refreshRate)
            }

            if (timeout === null) {
                return window.requestAnimationFrame || requestTimeout(33)
            } else {
                return requestTimeout(timeout)
            }
        }
    }

    /**
     * Create a callback that will execute after a given timeout
     *
     * @param  {Function} timeout
     * @return {Function}
     */
    function requestTimeout(timeout) {
        return function(callback) {
            window.setTimeout(callback, timeout)
        }
    }

},{}]},{},[1]);

try{Typekit.load({ async: true });}catch(e){}