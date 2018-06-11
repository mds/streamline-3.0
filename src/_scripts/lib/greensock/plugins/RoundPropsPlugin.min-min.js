/*!
 * VERSION: beta 1.4.1
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var e=_gsScope._gsDefine.plugin({propName:"roundProps",version:"1.4.1",priority:-1,API:2,init:function(e,o,r){return this._tween=r,!0}}),o=e.prototype;o._onInitAllProps=function(){for(var e,o,r,n=this._tween,p=n.vars.roundProps instanceof Array?n.vars.roundProps:n.vars.roundProps.split(","),s=p.length,t={},_=n._propLookup.roundProps;--s>-1;)t[p[s]]=1;for(s=p.length;--s>-1;)for(e=p[s],o=n._firstPT;o;)r=o._next,o.pg?o.t._roundProps(t,!0):o.n===e&&(this._add(o.t,e,o.s,o.c),r&&(r._prev=o._prev),o._prev?o._prev._next=r:n._firstPT===o&&(n._firstPT=r),o._next=o._prev=null,n._propLookup[e]=_),o=r;return!1},o._add=function(e,o,r,n){this._addTween(e,o,r,r+n,o,!0),this._overwriteProps.push(o)}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();