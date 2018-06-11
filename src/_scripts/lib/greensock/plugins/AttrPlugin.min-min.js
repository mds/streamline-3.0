/*!
 * VERSION: 0.3.3
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.3.3",init:function(t,e){var s,i,o;if("function"!=typeof t.setAttribute)return!1;this._target=t,this._proxy={},this._start={},this._end={};for(s in e)this._start[s]=this._proxy[s]=i=t.getAttribute(s),o=this._addTween(this._proxy,s,parseFloat(i),e[s],s),this._end[s]=o?o.s+o.c:e[s],this._overwriteProps.push(s);return!0},set:function(t){this._super.setRatio.call(this,t);for(var e,s=this._overwriteProps,i=s.length,o=1===t?this._end:t?this._proxy:this._start;--i>-1;)e=s[i],this._target.setAttribute(e,o[e]+"")}})}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();