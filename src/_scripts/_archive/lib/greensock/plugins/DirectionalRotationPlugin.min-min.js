/*!
 * VERSION: beta 0.2.1
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.2.1",API:2,init:function(e,t){"object"!=typeof t&&(t={rotation:t}),this.finals={};var s,i,n,o,p,r,u=!0===t.useRadians?2*Math.PI:360,f=1e-6;for(s in t)"useRadians"!==s&&(r=(t[s]+"").split("_"),i=r[0],n=parseFloat("function"!=typeof e[s]?e[s]:e[s.indexOf("set")||"function"!=typeof e["get"+s.substr(3)]?s:"get"+s.substr(3)]()),o=this.finals[s]="string"==typeof i&&"="===i.charAt(1)?n+parseInt(i.charAt(0)+"1",10)*Number(i.substr(2)):Number(i)||0,p=o-n,r.length&&(i=r.join("_"),-1!==i.indexOf("short")&&(p%=u)!==p%(u/2)&&(p=0>p?p+u:p-u),-1!==i.indexOf("_cw")&&0>p?p=(p+9999999999*u)%u-(0|p/u)*u:-1!==i.indexOf("ccw")&&p>0&&(p=(p-9999999999*u)%u-(0|p/u)*u)),(p>f||-f>p)&&(this._addTween(e,s,n,n+p,s),this._overwriteProps.push(s)));return!0},set:function(e){var t;if(1!==e)this._super.setRatio.call(this,e);else for(t=this._firstPT;t;)t.f?t.t[t.p](this.finals[t.p]):t.t[t.p]=this.finals[t.p],t=t._next}})._autoCSS=!0}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();