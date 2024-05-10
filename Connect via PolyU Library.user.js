// ==UserScript==
// @name         Connect via PolyU Library
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Add Connect via PolyU Library to context menu
// @icon         https://www.lib.polyu.edu.hk/sites/all/themes/polyu85/favicon.ico
// @author       Alvin
// @match        *://*/*
// @exclude      *://*.ezproxy.lb.polyu.edu.hk/*
// @grant        none
// @run-at       context-menu
// ==/UserScript==

(function() {
    'use strict';
    location.href = 'http://ezproxy.lb.polyu.edu.hk/login?url=' + location.href;
})();
