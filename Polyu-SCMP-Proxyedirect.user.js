// ==UserScript==
// @name Polyu SCMP Proxy Redirect
// @version      1.5
// @description  Redirects to polyu scmp proxy
// @downloadURL  https://raw.githubusercontent.com/AlvinNgMH/UserScript/main/Polyu-SCMP-Proxyedirect.user.js
// @updateURL    https://raw.githubusercontent.com/AlvinNgMH/UserScript/main/Polyu-SCMP-Proxyedirect.user.js
// @author       Alvin
// @icon         https://assets-v2.i-scmp.com/production/favicon.ico
// @match *://*.scmp.com/*
// @exclude *://help.scmp.com/*
// @run-at document-start
// @grant        none
// ==/UserScript==

'use strict';

const currentUrl = window.location.href;

const newUrl = currentUrl.replace(/^(https?:\/\/)([^.]+)\.scmp\.com\//, function(_, protocol, subdomain) {
    return protocol + subdomain + '-scmp-com.ezproxy.lb.polyu.edu.hk/';
});

window.location.replace(newUrl);
