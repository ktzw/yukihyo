define(function () {
var JSX={};(function(c){function e(b,e){var a=function(){};a.prototype=e.prototype;var c=new a;for(var d in b){b[d].prototype=c}}function s(c,b){for(var a in b.prototype)if(b.prototype.hasOwnProperty(a))c.prototype[a]=b.prototype[a]}function r(a,b,d){function c(a,b,c){delete a[b];a[b]=c;return c}Object.defineProperty(a,b,{get:function(){return c(a,b,d())},set:function(d){c(a,b,d)},enumerable:true,configurable:true})}function q(a,b,c){return a[b]=a[b]/c|0}var g=parseInt;var h=parseFloat;function p(a){return a!==a}var j=isFinite;var f=encodeURIComponent;var l=decodeURIComponent;var m=encodeURI;var n=decodeURI;var o=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;function b(){}c.require=function(b){var a=d[b];return a!==undefined?a:null};c.profilerIsRunning=function(){return b.getResults!=null};c.getProfileResults=function(){return(b.getResults||function(){return{}})()};c.postProfileResults=function(a,c){if(b.postResults==null)throw new Error('profiler has not been turned on');return b.postResults(a,c)};c.resetProfileResults=function(){if(b.resetResults==null)throw new Error('profiler has not been turned on');return b.resetResults()};c.DEBUG=false;function k(){};e([k],Error);function a(){this.message=''};e([a],Object);a.prototype.A=function(a){this.message=a};a.prototype.setMessage=a.prototype.A;a.prototype._=function(){return this.message};a.prototype.greeting=a.prototype._;var d={'lib/yukihyo.jsx':{yukihyo:a}}}(JSX))
return {
    "yukihyo": JSX.require("lib/yukihyo.jsx").yukihyo,
};
});
