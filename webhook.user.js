// ==UserScript==
// @name         JS逆向网站钩子
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @description  Js逆向网站钩子 控制台打印日志信息
// @author       helong
// @match        *
// @grant        none
// @license      MIT
// @downloadURL https://update.greasyfork.org/scripts/500274/Web%20Hook%20Js%E9%80%86%E5%90%91%E7%BD%91%E7%AB%99%E9%92%A9%E5%AD%90.user.js
// @updateURL https://update.greasyfork.org/scripts/500274/Web%20Hook%20Js%E9%80%86%E5%90%91%E7%BD%91%E7%AB%99%E9%92%A9%E5%AD%90.meta.js
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