/*!
 * VERSION: 0.1.2
 * DATE: 2014-07-17
 * UPDATES AND DOCS AT: http://www.greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine.plugin({propName:"endArray",API:2,version:"0.1.2",init:function(e,n){var s,o,i=n.length,t=this.a=[];if(this.target=e,this._round=!1,!i)return!1;for(;--i>-1;)s=e[i],o=n[i],s!==o&&t.push({i:i,s:s,c:o-s});return!0},round:function(e){"endArray"in e&&(this._round=!0)},set:function(e){var n,s,o=this.target,i=this.a,t=i.length;if(this._round)for(;--t>-1;)n=i[t],o[n.i]=Math.round(n.s+n.c*e);else for(;--t>-1;)n=i[t],s=n.s+n.c*e,o[n.i]=1e-6>s&&s>-1e-6?0:s}})}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()();