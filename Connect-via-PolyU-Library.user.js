// ==UserScript==
// @name         Connect via PolyU Library
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Add Connect via PolyU Library to context menu
// @icon         https://www.lib.polyu.edu.hk/sites/all/themes/polyu85/favicon.ico
// @home         https://github.com/AlvinNgMH/UserScript
// @downloadURL  https://raw.githubusercontent.com/AlvinNgMH/UserScript/main/Connect-via-PolyU-Library.user.js
// @updateURL    https://raw.githubusercontent.com/AlvinNgMH/UserScript/main/Connect-via-PolyU-Library.user.js
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
