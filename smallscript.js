// ==UserScript==
// @name         New
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://app.noest-dz.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=noest-dz.com
// @grant        none
// @run-at document-start
// ==/UserScript==

(function() {
    'use strict';
document.addEventListener("DOMContentLoaded", async function() {

    //import css
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://shadir69.github.io/modal/style.css?1';//css url
    document.head.appendChild(link);
    //end import css

    const API_URL = "https://rlist.mantoudjbladi.com/api/";
    const hostName=window.location.hostname;
    const publicScript_Url = API_URL+ "get-script?url=" +hostName+"/public";
    const privateScript_Url = API_URL+ "get-script?url=" +hostName +"/private";

    // Fetch the URL of the userscript
    const response = await fetch(publicScript_Url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 3|HQlYz7i1TpXhaCCYs6lq8QL5bVhnoEPYaWuq7ZJQ', //+token
            "X-Api-Key": "3AQi9ysOlvV6ZsYyl5OiUe31ckl6XVndBcMRFHeY"
        }
    });

    // Load the userscript from the URL returned by the API
    const firstScriptURL = await response.text();
    const scriptPublic = document.createElement('script');
    scriptPublic.setAttribute('src', firstScriptURL);
console.log('script1 add');
    scriptPublic.addEventListener('load', async function() {
        const response = await fetch(privateScript_Url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer 3|HQlYz7i1TpXhaCCYs6lq8QL5bVhnoEPYaWuq7ZJQ', //+token
                "X-Api-Key": "3AQi9ysOlvV6ZsYyl5OiUe31ckl6XVndBcMRFHeY"
            }
        });

        // Load the userscript from the URL returned by the API
        const secondScriptURL = await response.text();
        const scriptPrivate = document.createElement('script');
        scriptPrivate.setAttribute('src', secondScriptURL);
         document.head.appendChild(scriptPrivate);
        console.log('script2 add');
    });

    document.head.appendChild(scriptPublic);

});

})();
