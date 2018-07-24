/*!
 * VERSION: 1.15.1
 * DATE: 2015-01-08
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2015, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(t,e,i){var s=function(e){t.call(this,e),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=!0===this.vars.yoyo,this._dirty=!0},r=1e-10,a=[],n=e._internals,h=n.lazyTweens,o=n.lazyRender,_=new i(null,null,1,0),l=s.prototype=new t;return l.constructor=s,l.kill()._gc=!1,s.version="1.15.1",l.invalidate=function(){return this._yoyo=!0===this.vars.yoyo,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),t.prototype.invalidate.call(this)},l.addCallback=function(t,i,s,r){return this.add(e.delayedCall(0,t,s,r),i)},l.removeCallback=function(t,e){if(t)if(null==e)this._kill(null,t);else for(var i=this.getTweensOf(t,!1),s=i.length,r=this._parseTimeOrLabel(e);--s>-1;)i[s]._startTime===r&&i[s]._enabled(!1,!1);return this},l.removePause=function(e){return this.removeCallback(t._internals.pauseCallback,e)},l.tweenTo=function(t,i){i=i||{};var s,r,n,h={ease:_,useFrames:this.usesFrames(),immediateRender:!1};for(r in i)h[r]=i[r];return h.time=this._parseTimeOrLabel(t),s=Math.abs(Number(h.time)-this._time)/this._timeScale||.001,n=new e(this,s,h),h.onStart=function(){n.target.paused(!0),n.vars.time!==n.target.time()&&s===n.duration()&&n.duration(Math.abs(n.vars.time-n.target.time())/n.target._timeScale),i.onStart&&i.onStart.apply(i.onStartScope||n,i.onStartParams||a)},n},l.tweenFromTo=function(t,e,i){i=i||{},t=this._parseTimeOrLabel(t),i.startAt={onComplete:this.seek,onCompleteParams:[t],onCompleteScope:this},i.immediateRender=!1!==i.immediateRender;var s=this.tweenTo(e,i);return s.duration(Math.abs(s.vars.time-t)/this._timeScale||.001)},l.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,n,_,l,m,u,d=this._dirty?this.totalDuration():this._totalDuration,c=this._duration,f=this._time,p=this._totalTime,v=this._startTime,T=this._timeScale,y=this._rawPrevTime,g=this._paused,b=this._cycle;if(t>=d?(this._locked||(this._totalTime=d,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(n=!0,l="onComplete",0===this._duration&&(0===t||0>y||y===r)&&y!==t&&this._first&&(m=!0,y>r&&(l="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,this._yoyo&&0!=(1&this._cycle)?this._time=t=0:(this._time=c,t=c+1e-4)):1e-7>t?(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==f||0===c&&y!==r&&(y>0||0>t&&y>=0)&&!this._locked)&&(l="onReverseComplete",n=this._reversed),0>t?(this._active=!1,y>=0&&this._first&&(m=!0),this._rawPrevTime=t):(this._rawPrevTime=c||!e||t||this._rawPrevTime===t?t:r,t=0,this._initted||(m=!0))):(0===c&&0>y&&(m=!0),this._time=this._rawPrevTime=t,this._locked||(this._totalTime=t,0!==this._repeat&&(u=c+this._repeatDelay,this._cycle=this._totalTime/u>>0,0!==this._cycle&&this._cycle===this._totalTime/u&&this._cycle--,this._time=this._totalTime-this._cycle*u,this._yoyo&&0!=(1&this._cycle)&&(this._time=c-this._time),this._time>c?(this._time=c,t=c+1e-4):0>this._time?this._time=t=0:t=this._time))),this._cycle!==b&&!this._locked){var w=this._yoyo&&0!=(1&b),S=w===(this._yoyo&&0!=(1&this._cycle)),P=this._totalTime,D=this._cycle,C=this._rawPrevTime,L=this._time;if(this._totalTime=b*c,b>this._cycle?w=!w:this._totalTime+=c,this._time=f,this._rawPrevTime=0===c?y-1e-4:y,this._cycle=b,this._locked=!0,f=w?0:c,this.render(f,e,0===c),e||this._gc||this.vars.onRepeat&&this.vars.onRepeat.apply(this.vars.onRepeatScope||this,this.vars.onRepeatParams||a),S&&(f=w?c+1e-4:-1e-4,this.render(f,!0,!1)),this._locked=!1,this._paused&&!g)return;this._time=L,this._totalTime=P,this._cycle=D,this._rawPrevTime=C}if(!(this._time!==f&&this._first||i||m))return void(p!==this._totalTime&&this._onUpdate&&(e||this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||a)));if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==p&&t>0&&(this._active=!0),0===p&&this.vars.onStart&&0!==this._totalTime&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||a)),this._time>=f)for(s=this._first;s&&(_=s._next,!this._paused||g);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=_;else for(s=this._last;s&&(_=s._prev,!this._paused||g);)(s._active||f>=s._startTime&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=_;this._onUpdate&&(e||(h.length&&o(),this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||a))),l&&(this._locked||this._gc||(v===this._startTime||T!==this._timeScale)&&(0===this._time||d>=this.totalDuration())&&(n&&(h.length&&o(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[l]&&this.vars[l].apply(this.vars[l+"Scope"]||this,this.vars[l+"Params"]||a)))},l.getActive=function(t,e,i){null==t&&(t=!0),null==e&&(e=!0),null==i&&(i=!1);var s,r,a=[],n=this.getChildren(t,e,i),h=0,o=n.length;for(s=0;o>s;s++)r=n[s],r.isActive()&&(a[h++]=r);return a},l.getLabelAfter=function(t){t||0!==t&&(t=this._time);var e,i=this.getLabelsArray(),s=i.length;for(e=0;s>e;e++)if(i[e].time>t)return i[e].name;return null},l.getLabelBefore=function(t){null==t&&(t=this._time);for(var e=this.getLabelsArray(),i=e.length;--i>-1;)if(t>e[i].time)return e[i].name;return null},l.getLabelsArray=function(){var t,e=[],i=0;for(t in this._labels)e[i++]={time:this._labels[t],name:t};return e.sort(function(t,e){return t.time-e.time}),e},l.progress=function(t,e){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!=(1&this._cycle)?1-t:t)+this._cycle*(this._duration+this._repeatDelay),e):this._time/this.duration()},l.totalProgress=function(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this._totalTime/this.totalDuration()},l.totalDuration=function(e){return arguments.length?-1===this._repeat?this:this.duration((e-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(t.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},l.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),t>this._duration&&(t=this._duration),this._yoyo&&0!=(1&this._cycle)?t=this._duration-t+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(t+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(t,e)):this._time},l.repeat=function(t){return arguments.length?(this._repeat=t,this._uncache(!0)):this._repeat},l.repeatDelay=function(t){return arguments.length?(this._repeatDelay=t,this._uncache(!0)):this._repeatDelay},l.yoyo=function(t){return arguments.length?(this._yoyo=t,this):this._yoyo},l.currentLabel=function(t){return arguments.length?this.seek(t,!0):this.getLabelBefore(this._time+1e-8)},s},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(t,e,i){var s=function(t){e.call(this,t),this._labels={},this.autoRemoveChildren=!0===this.vars.autoRemoveChildren,this.smoothChildTiming=!0===this.vars.smoothChildTiming,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var i,s,r=this.vars;for(s in r)i=r[s],o(i)&&-1!==i.join("").indexOf("{self}")&&(r[s]=this._swapSelfInParams(i));o(r.tweens)&&this.add(r.tweens,0,r.align,r.stagger)},r=1e-10,a=i._internals,n=s._internals={},h=a.isSelector,o=a.isArray,_=a.lazyTweens,l=a.lazyRender,m=[],u=_gsScope._gsDefine.globals,d=function(t){var e,i={};for(e in t)i[e]=t[e];return i},c=n.pauseCallback=function(t,e,i,s){var r=t._timeline,a=r._totalTime;!e&&this._forcingPlayhead||r._rawPrevTime===t._startTime||(r.pause(t._startTime),e&&e.apply(s||r,i||m),this._forcingPlayhead&&r.seek(a))},f=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},p=s.prototype=new e;return s.version="1.15.1",p.constructor=s,p.kill()._gc=p._forcingPlayhead=!1,p.to=function(t,e,s,r){var a=s.repeat&&u.TweenMax||i;return e?this.add(new a(t,e,s),r):this.set(t,s,r)},p.from=function(t,e,s,r){return this.add((s.repeat&&u.TweenMax||i).from(t,e,s),r)},p.fromTo=function(t,e,s,r,a){var n=r.repeat&&u.TweenMax||i;return e?this.add(n.fromTo(t,e,s,r),a):this.set(t,r,a)},p.staggerTo=function(t,e,r,a,n,o,_,l){var m,u=new s({onComplete:o,onCompleteParams:_,onCompleteScope:l,smoothChildTiming:this.smoothChildTiming});for("string"==typeof t&&(t=i.selector(t)||t),t=t||[],h(t)&&(t=f(t)),a=a||0,0>a&&(t=f(t),t.reverse(),a*=-1),m=0;t.length>m;m++)r.startAt&&(r.startAt=d(r.startAt)),u.to(t[m],e,d(r),m*a);return this.add(u,n)},p.staggerFrom=function(t,e,i,s,r,a,n,h){return i.immediateRender=0!=i.immediateRender,i.runBackwards=!0,this.staggerTo(t,e,i,s,r,a,n,h)},p.staggerFromTo=function(t,e,i,s,r,a,n,h,o){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,this.staggerTo(t,e,s,r,a,n,h,o)},p.call=function(t,e,s,r){return this.add(i.delayedCall(0,t,e,s),r)},p.set=function(t,e,s){return s=this._parseTimeOrLabel(s,0,!0),null==e.immediateRender&&(e.immediateRender=s===this._time&&!this._paused),this.add(new i(t,0,e),s)},s.exportRoot=function(t,e){t=t||{},null==t.smoothChildTiming&&(t.smoothChildTiming=!0);var r,a,n=new s(t),h=n._timeline;for(null==e&&(e=!0),h._remove(n,!0),n._startTime=0,n._rawPrevTime=n._time=n._totalTime=h._time,r=h._first;r;)a=r._next,e&&r instanceof i&&r.target===r.vars.onComplete||n.add(r,r._startTime-r._delay),r=a;return h.add(n,0),n},p.add=function(r,a,n,h){var _,l,m,u,d,c;if("number"!=typeof a&&(a=this._parseTimeOrLabel(a,0,!0,r)),!(r instanceof t)){if(r instanceof Array||r&&r.push&&o(r)){for(n=n||"normal",h=h||0,_=a,l=r.length,m=0;l>m;m++)o(u=r[m])&&(u=new s({tweens:u})),this.add(u,_),"string"!=typeof u&&"function"!=typeof u&&("sequence"===n?_=u._startTime+u.totalDuration()/u._timeScale:"start"===n&&(u._startTime-=u.delay())),_+=h;return this._uncache(!0)}if("string"==typeof r)return this.addLabel(r,a);if("function"!=typeof r)throw"Cannot add "+r+" into the timeline; it is not a tween, timeline, function, or string.";r=i.delayedCall(0,r)}if(e.prototype.add.call(this,r,a),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(d=this,c=d.rawTime()>r._startTime;d._timeline;)c&&d._timeline.smoothChildTiming?d.totalTime(d._totalTime,!0):d._gc&&d._enabled(!0,!1),d=d._timeline;return this},p.remove=function(e){if(e instanceof t)return this._remove(e,!1);if(e instanceof Array||e&&e.push&&o(e)){for(var i=e.length;--i>-1;)this.remove(e[i]);return this}return"string"==typeof e?this.removeLabel(e):this.kill(null,e)},p._remove=function(t,i){e.prototype._remove.call(this,t,i);var s=this._last;return s?this._time>s._startTime+s._totalDuration/s._timeScale&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},p.append=function(t,e){return this.add(t,this._parseTimeOrLabel(null,e,!0,t))},p.insert=p.insertMultiple=function(t,e,i,s){return this.add(t,e||0,i,s)},p.appendMultiple=function(t,e,i,s){return this.add(t,this._parseTimeOrLabel(null,e,!0,t),i,s)},p.addLabel=function(t,e){return this._labels[t]=this._parseTimeOrLabel(e),this},p.addPause=function(t,e,s,r){var a=i.delayedCall(0,c,["{self}",e,s,r],this);return a.data="isPause",this.add(a,t)},p.removeLabel=function(t){return delete this._labels[t],this},p.getLabelTime=function(t){return null!=this._labels[t]?this._labels[t]:-1},p._parseTimeOrLabel=function(e,i,s,r){var a;if(r instanceof t&&r.timeline===this)this.remove(r);else if(r&&(r instanceof Array||r.push&&o(r)))for(a=r.length;--a>-1;)r[a]instanceof t&&r[a].timeline===this&&this.remove(r[a]);if("string"==typeof i)return this._parseTimeOrLabel(i,s&&"number"==typeof e&&null==this._labels[i]?e-this.duration():0,s);if(i=i||0,"string"!=typeof e||!isNaN(e)&&null==this._labels[e])null==e&&(e=this.duration());else{if(-1===(a=e.indexOf("=")))return null==this._labels[e]?s?this._labels[e]=this.duration()+i:i:this._labels[e]+i;i=parseInt(e.charAt(a-1)+"1",10)*Number(e.substr(a+1)),e=a>1?this._parseTimeOrLabel(e.substr(0,a-1),0,s):this.duration()}return Number(e)+i},p.seek=function(t,e){return this.totalTime("number"==typeof t?t:this._parseTimeOrLabel(t),!1!==e)},p.stop=function(){return this.paused(!0)},p.gotoAndPlay=function(t,e){return this.play(t,e)},p.gotoAndStop=function(t,e){return this.pause(t,e)},p.render=function(t,e,i){this._gc&&this._enabled(!0,!1);var s,a,n,h,o,u=this._dirty?this.totalDuration():this._totalDuration,d=this._time,c=this._startTime,f=this._timeScale,p=this._paused;if(t>=u?(this._totalTime=this._time=u,this._reversed||this._hasPausedChild()||(a=!0,h="onComplete",0===this._duration&&(0===t||0>this._rawPrevTime||this._rawPrevTime===r)&&this._rawPrevTime!==t&&this._first&&(o=!0,this._rawPrevTime>r&&(h="onReverseComplete"))),this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,t=u+1e-4):1e-7>t?(this._totalTime=this._time=0,(0!==d||0===this._duration&&this._rawPrevTime!==r&&(this._rawPrevTime>0||0>t&&this._rawPrevTime>=0))&&(h="onReverseComplete",a=this._reversed),0>t?(this._active=!1,this._rawPrevTime>=0&&this._first&&(o=!0),this._rawPrevTime=t):(this._rawPrevTime=this._duration||!e||t||this._rawPrevTime===t?t:r,t=0,this._initted||(o=!0))):this._totalTime=this._time=this._rawPrevTime=t,this._time!==d&&this._first||i||o){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==d&&t>0&&(this._active=!0),0===d&&this.vars.onStart&&0!==this._time&&(e||this.vars.onStart.apply(this.vars.onStartScope||this,this.vars.onStartParams||m)),this._time>=d)for(s=this._first;s&&(n=s._next,!this._paused||p);)(s._active||s._startTime<=this._time&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=n;else for(s=this._last;s&&(n=s._prev,!this._paused||p);)(s._active||d>=s._startTime&&!s._paused&&!s._gc)&&(s._reversed?s.render((s._dirty?s.totalDuration():s._totalDuration)-(t-s._startTime)*s._timeScale,e,i):s.render((t-s._startTime)*s._timeScale,e,i)),s=n;this._onUpdate&&(e||(_.length&&l(),this._onUpdate.apply(this.vars.onUpdateScope||this,this.vars.onUpdateParams||m))),h&&(this._gc||(c===this._startTime||f!==this._timeScale)&&(0===this._time||u>=this.totalDuration())&&(a&&(_.length&&l(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[h]&&this.vars[h].apply(this.vars[h+"Scope"]||this,this.vars[h+"Params"]||m)))}},p._hasPausedChild=function(){for(var t=this._first;t;){if(t._paused||t instanceof s&&t._hasPausedChild())return!0;t=t._next}return!1},p.getChildren=function(t,e,s,r){r=r||-9999999999;for(var a=[],n=this._first,h=0;n;)r>n._startTime||(n instanceof i?!1!==e&&(a[h++]=n):(!1!==s&&(a[h++]=n),!1!==t&&(a=a.concat(n.getChildren(!0,e,s)),h=a.length))),n=n._next;return a},p.getTweensOf=function(t,e){var s,r,a=this._gc,n=[],h=0;for(a&&this._enabled(!0,!0),s=i.getTweensOf(t),r=s.length;--r>-1;)(s[r].timeline===this||e&&this._contains(s[r]))&&(n[h++]=s[r]);return a&&this._enabled(!1,!0),n},p.recent=function(){return this._recent},p._contains=function(t){for(var e=t.timeline;e;){if(e===this)return!0;e=e.timeline}return!1},p.shiftChildren=function(t,e,i){i=i||0;for(var s,r=this._first,a=this._labels;r;)r._startTime>=i&&(r._startTime+=t),r=r._next;if(e)for(s in a)a[s]>=i&&(a[s]+=t);return this._uncache(!0)},p._kill=function(t,e){if(!t&&!e)return this._enabled(!1,!1);for(var i=e?this.getTweensOf(e):this.getChildren(!0,!0,!1),s=i.length,r=!1;--s>-1;)i[s]._kill(t,e)&&(r=!0);return r},p.clear=function(t){var e=this.getChildren(!1,!0,!0),i=e.length;for(this._time=this._totalTime=0;--i>-1;)e[i]._enabled(!1,!1);return!1!==t&&(this._labels={}),this._uncache(!0)},p.invalidate=function(){for(var e=this._first;e;)e.invalidate(),e=e._next;return t.prototype.invalidate.call(this)},p._enabled=function(t,i){if(t===this._gc)for(var s=this._first;s;)s._enabled(t,!0),s=s._next;return e.prototype._enabled.call(this,t,i)},p.totalTime=function(){this._forcingPlayhead=!0;var e=t.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},p.duration=function(t){return arguments.length?(0!==this.duration()&&0!==t&&this.timeScale(this._duration/t),this):(this._dirty&&this.totalDuration(),this._duration)},p.totalDuration=function(t){if(!arguments.length){if(this._dirty){for(var e,i,s=0,r=this._last,a=999999999999;r;)e=r._prev,r._dirty&&r.totalDuration(),r._startTime>a&&this._sortChildren&&!r._paused?this.add(r,r._startTime-r._delay):a=r._startTime,0>r._startTime&&!r._paused&&(s-=r._startTime,this._timeline.smoothChildTiming&&(this._startTime+=r._startTime/this._timeScale),this.shiftChildren(-r._startTime,!1,-9999999999),a=0),i=r._startTime+r._totalDuration/r._timeScale,i>s&&(s=i),r=e;this._duration=this._totalDuration=s,this._dirty=!1}return this._totalDuration}return 0!==this.totalDuration()&&0!==t&&this.timeScale(this._totalDuration/t),this},p.usesFrames=function(){for(var e=this._timeline;e._timeline;)e=e._timeline;return e===t._rootFramesTimeline},p.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},s},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(t){"use strict";var e=function(){return(_gsScope.GreenSockGlobals||_gsScope)[t]};"function"==typeof define&&define.amd?define(["TweenLite"],e):"undefined"!=typeof module&&module.exports&&(require("./TweenLite.js"),module.exports=e())}("TimelineMax");