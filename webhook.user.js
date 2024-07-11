// ==UserScript==
// @name         Web Hook Js逆向网站钩子
// @namespace    http://tampermonkey.net/
// @version      0.1.0
// @description  Js逆向网站钩子 控制台打印日志信息
// @author       helong
// @match      *
// @grant        none
// @license      MIT
// @downloadURL https://update.greasyfork.org/scripts/499553/CoverMore%E8%BE%85%E5%8A%A9%E5%B7%A5%E5%85%B7.user.js
// @updateURL https://update.greasyfork.org/scripts/499553/CoverMore%E8%BE%85%E5%8A%A9%E5%B7%A5%E5%85%B7.meta.js
// ==/UserScript==

(function () {
  'use strict';

  var myJsonParse = JSON.parse
  JSON.parse = function (params) {
    console.log('myJsonParse', params)

    return myJsonParse(params);
  }

  var myJSONstringify = JSON.stringify;
  JSON.stringify = function (value, replacer, space) {
    var undefined2null = function (k, v) { return (v === undefined) ? null : v }

    console.log('stringify', value);
    return myJSONstringify.call(this, value, (replacer || undefined2null), space)
  };
})();