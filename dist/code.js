/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/plugin/util.ts":
/*!****************************!*\
  !*** ./src/plugin/util.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toDarkColor": () => (/* binding */ toDarkColor),
/* harmony export */   "toHSL": () => (/* binding */ toHSL),
/* harmony export */   "toLightColor": () => (/* binding */ toLightColor),
/* harmony export */   "toRGB": () => (/* binding */ toRGB),
/* harmony export */   "toRGB01": () => (/* binding */ toRGB01)
/* harmony export */ });
function toRGB(hex) {
    let r = 0;
    let g = 0;
    let b = 0;
    if (hex.length == 4) {
        r = Number('0x' + hex[1] + hex[1]);
        g = Number('0x' + hex[2] + hex[2]);
        b = Number('0x' + hex[3] + hex[3]);
    }
    else if (hex.length == 7) {
        r = Number('0x' + hex[1] + hex[2]);
        g = Number('0x' + hex[3] + hex[4]);
        b = Number('0x' + hex[5] + hex[6]);
    }
    return { r, g, b };
}
function toHSL(hex) {
    let { r, g, b } = toRGB(hex);
    r /= 255;
    g /= 255;
    b /= 255;
    let cmin = Math.min(r, g, b);
    let cmax = Math.max(r, g, b);
    let delta = cmax - cmin;
    let h = 0;
    let s = 0;
    let l = 0;
    if (delta == 0)
        h = 0;
    else if (cmax == r)
        h = ((g - b) / delta) % 6;
    else if (cmax == g)
        h = (b - r) / delta + 2;
    else
        h = (r - g) / delta + 4;
    h = Math.round(h * 60);
    if (h < 0)
        h += 360;
    l = (cmax + cmin) / 2;
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
    return { h, s, l };
}
function toRGB01({ h, s, l }) {
    s /= 100;
    l /= 100;
    let c = (1 - Math.abs(2 * l - 1)) * s;
    let x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    let m = l - c / 2;
    let r = 0;
    let g = 0;
    let b = 0;
    if (0 <= h && h < 60) {
        r = c;
        g = x;
        b = 0;
    }
    else if (60 <= h && h < 120) {
        r = x;
        g = c;
        b = 0;
    }
    else if (120 <= h && h < 180) {
        r = 0;
        g = c;
        b = x;
    }
    else if (180 <= h && h < 240) {
        r = 0;
        g = x;
        b = c;
    }
    else if (240 <= h && h < 300) {
        r = x;
        g = 0;
        b = c;
    }
    else if (300 <= h && h < 360) {
        r = c;
        g = 0;
        b = x;
    }
    r = Number((r + m).toFixed(3));
    g = Number((g + m).toFixed(3));
    b = Number((b + m).toFixed(3));
    return { r, g, b };
}
function toLightColor(hex, shade) {
    const { h, s } = toHSL(hex);
    return toRGB01({ h, s, l: 100 - Number(shade) / 10 });
}
function toDarkColor(hex, shade) {
    const { h, s } = toHSL(hex);
    return toRGB01({ h, s, l: Number(shade) / 10 });
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************************!*\
  !*** ./src/plugin/controller.ts ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/plugin/util.ts");

figma.showUI(__html__, { width: 1200, height: 325, themeColors: true });
figma.ui.onmessage = (msg) => {
    if (msg.type === 'create_color_variables') {
        const data = msg.data;
        const collections = figma.variables.getLocalVariableCollections();
        const collection = collections.find((c) => c.name === data.collection);
        if (!collection)
            return figma.notify('Please enter a valid collection name!', { error: true });
        const ids = collection.variableIds;
        if (!ids)
            return figma.notify(`Variables not found in Collection (${collection.name})`, { error: true });
        const dark = collection.modes.find((m) => m.name.toLowerCase() === 'dark');
        const light = collection.modes.find((m) => m.name.toLowerCase() === 'light');
        if (!dark)
            return figma.notify('Dark mode not found in Collection, please add Dark Mode in your collection!', { error: true });
        if (!light)
            return figma.notify('Light mode not found in Collection, please add Light Mode in your collection!', { error: true });
        for (const id of ids) {
            const variable = figma.variables.getVariableById(id);
            if (!variable)
                continue;
            const [name, shade] = variable.name.split('/');
            switch (name.toLowerCase()) {
                case 'reverse':
                    switch (shade.toLowerCase()) {
                        case 'default':
                            variable.setValueForMode(dark.modeId, (0,_util__WEBPACK_IMPORTED_MODULE_0__.toRGB01)((0,_util__WEBPACK_IMPORTED_MODULE_0__.toHSL)('#FFFFFF')));
                            variable.setValueForMode(light.modeId, (0,_util__WEBPACK_IMPORTED_MODULE_0__.toRGB01)((0,_util__WEBPACK_IMPORTED_MODULE_0__.toHSL)('#000000')));
                            break;
                        case 'foreground':
                            variable.setValueForMode(dark.modeId, (0,_util__WEBPACK_IMPORTED_MODULE_0__.toRGB01)((0,_util__WEBPACK_IMPORTED_MODULE_0__.toHSL)('#000000')));
                            variable.setValueForMode(light.modeId, (0,_util__WEBPACK_IMPORTED_MODULE_0__.toRGB01)((0,_util__WEBPACK_IMPORTED_MODULE_0__.toHSL)('#FFFFFF')));
                            break;
                        default:
                            variable.setValueForMode(dark.modeId, (0,_util__WEBPACK_IMPORTED_MODULE_0__.toDarkColor)('#FFFFFF', shade));
                            variable.setValueForMode(light.modeId, (0,_util__WEBPACK_IMPORTED_MODULE_0__.toLightColor)('#000000', shade));
                            break;
                    }
                    break;
                default:
                    switch (shade.toLowerCase()) {
                        case 'default':
                            variable.setValueForMode(dark.modeId, (0,_util__WEBPACK_IMPORTED_MODULE_0__.toRGB01)((0,_util__WEBPACK_IMPORTED_MODULE_0__.toHSL)(data[`${name.toLowerCase()}-dark`])));
                            variable.setValueForMode(light.modeId, (0,_util__WEBPACK_IMPORTED_MODULE_0__.toRGB01)((0,_util__WEBPACK_IMPORTED_MODULE_0__.toHSL)(data[`${name.toLowerCase()}-light`])));
                            break;
                        case 'foreground':
                            variable.setValueForMode(dark.modeId, (0,_util__WEBPACK_IMPORTED_MODULE_0__.toRGB01)((0,_util__WEBPACK_IMPORTED_MODULE_0__.toHSL)(data[`${name.toLowerCase()}-dark-foreground`])));
                            variable.setValueForMode(light.modeId, (0,_util__WEBPACK_IMPORTED_MODULE_0__.toRGB01)((0,_util__WEBPACK_IMPORTED_MODULE_0__.toHSL)(data[`${name.toLowerCase()}-light-foreground`])));
                            break;
                        default:
                            variable.setValueForMode(dark.modeId, (0,_util__WEBPACK_IMPORTED_MODULE_0__.toDarkColor)(data[`${name.toLowerCase()}-dark`], shade));
                            variable.setValueForMode(light.modeId, (0,_util__WEBPACK_IMPORTED_MODULE_0__.toLightColor)(data[`${name.toLowerCase()}-light`], shade));
                            break;
                    }
            }
        }
        figma.notify('All color variables applied successfully');
    }
    figma.closePlugin();
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29kZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ087QUFDUCxVQUFVLFVBQVU7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ08sbUJBQW1CLFNBQVM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNPO0FBQ1AsWUFBWSxPQUFPO0FBQ25CLHFCQUFxQixtQ0FBbUM7QUFDeEQ7QUFDTztBQUNQLFlBQVksT0FBTztBQUNuQixxQkFBcUIsNkJBQTZCO0FBQ2xEOzs7Ozs7O1VDL0ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNObUU7QUFDbkUseUJBQXlCLDZDQUE2QztBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRUFBMkUsYUFBYTtBQUN4RjtBQUNBO0FBQ0Esc0VBQXNFLGdCQUFnQixNQUFNLGFBQWE7QUFDekc7QUFDQTtBQUNBO0FBQ0EsaUhBQWlILGFBQWE7QUFDOUg7QUFDQSxtSEFBbUgsYUFBYTtBQUNoSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0UsOENBQU8sQ0FBQyw0Q0FBSztBQUMvRSxtRUFBbUUsOENBQU8sQ0FBQyw0Q0FBSztBQUNoRjtBQUNBO0FBQ0Esa0VBQWtFLDhDQUFPLENBQUMsNENBQUs7QUFDL0UsbUVBQW1FLDhDQUFPLENBQUMsNENBQUs7QUFDaEY7QUFDQTtBQUNBLGtFQUFrRSxrREFBVztBQUM3RSxtRUFBbUUsbURBQVk7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0VBQWtFLDhDQUFPLENBQUMsNENBQUssU0FBUyxtQkFBbUI7QUFDM0csbUVBQW1FLDhDQUFPLENBQUMsNENBQUssU0FBUyxtQkFBbUI7QUFDNUc7QUFDQTtBQUNBLGtFQUFrRSw4Q0FBTyxDQUFDLDRDQUFLLFNBQVMsbUJBQW1CO0FBQzNHLG1FQUFtRSw4Q0FBTyxDQUFDLDRDQUFLLFNBQVMsbUJBQW1CO0FBQzVHO0FBQ0E7QUFDQSxrRUFBa0Usa0RBQVcsU0FBUyxtQkFBbUI7QUFDekcsbUVBQW1FLG1EQUFZLFNBQVMsbUJBQW1CO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9maWdtYS1wbHVnaW4tcmVhY3QtdGVtcGxhdGUvLi9zcmMvcGx1Z2luL3V0aWwudHMiLCJ3ZWJwYWNrOi8vZmlnbWEtcGx1Z2luLXJlYWN0LXRlbXBsYXRlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ZpZ21hLXBsdWdpbi1yZWFjdC10ZW1wbGF0ZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZmlnbWEtcGx1Z2luLXJlYWN0LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZmlnbWEtcGx1Z2luLXJlYWN0LXRlbXBsYXRlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZmlnbWEtcGx1Z2luLXJlYWN0LXRlbXBsYXRlLy4vc3JjL3BsdWdpbi9jb250cm9sbGVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiB0b1JHQihoZXgpIHtcbiAgICBsZXQgciA9IDA7XG4gICAgbGV0IGcgPSAwO1xuICAgIGxldCBiID0gMDtcbiAgICBpZiAoaGV4Lmxlbmd0aCA9PSA0KSB7XG4gICAgICAgIHIgPSBOdW1iZXIoJzB4JyArIGhleFsxXSArIGhleFsxXSk7XG4gICAgICAgIGcgPSBOdW1iZXIoJzB4JyArIGhleFsyXSArIGhleFsyXSk7XG4gICAgICAgIGIgPSBOdW1iZXIoJzB4JyArIGhleFszXSArIGhleFszXSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGhleC5sZW5ndGggPT0gNykge1xuICAgICAgICByID0gTnVtYmVyKCcweCcgKyBoZXhbMV0gKyBoZXhbMl0pO1xuICAgICAgICBnID0gTnVtYmVyKCcweCcgKyBoZXhbM10gKyBoZXhbNF0pO1xuICAgICAgICBiID0gTnVtYmVyKCcweCcgKyBoZXhbNV0gKyBoZXhbNl0pO1xuICAgIH1cbiAgICByZXR1cm4geyByLCBnLCBiIH07XG59XG5leHBvcnQgZnVuY3Rpb24gdG9IU0woaGV4KSB7XG4gICAgbGV0IHsgciwgZywgYiB9ID0gdG9SR0IoaGV4KTtcbiAgICByIC89IDI1NTtcbiAgICBnIC89IDI1NTtcbiAgICBiIC89IDI1NTtcbiAgICBsZXQgY21pbiA9IE1hdGgubWluKHIsIGcsIGIpO1xuICAgIGxldCBjbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG4gICAgbGV0IGRlbHRhID0gY21heCAtIGNtaW47XG4gICAgbGV0IGggPSAwO1xuICAgIGxldCBzID0gMDtcbiAgICBsZXQgbCA9IDA7XG4gICAgaWYgKGRlbHRhID09IDApXG4gICAgICAgIGggPSAwO1xuICAgIGVsc2UgaWYgKGNtYXggPT0gcilcbiAgICAgICAgaCA9ICgoZyAtIGIpIC8gZGVsdGEpICUgNjtcbiAgICBlbHNlIGlmIChjbWF4ID09IGcpXG4gICAgICAgIGggPSAoYiAtIHIpIC8gZGVsdGEgKyAyO1xuICAgIGVsc2VcbiAgICAgICAgaCA9IChyIC0gZykgLyBkZWx0YSArIDQ7XG4gICAgaCA9IE1hdGgucm91bmQoaCAqIDYwKTtcbiAgICBpZiAoaCA8IDApXG4gICAgICAgIGggKz0gMzYwO1xuICAgIGwgPSAoY21heCArIGNtaW4pIC8gMjtcbiAgICBzID0gZGVsdGEgPT0gMCA/IDAgOiBkZWx0YSAvICgxIC0gTWF0aC5hYnMoMiAqIGwgLSAxKSk7XG4gICAgcyA9ICsocyAqIDEwMCkudG9GaXhlZCgxKTtcbiAgICBsID0gKyhsICogMTAwKS50b0ZpeGVkKDEpO1xuICAgIHJldHVybiB7IGgsIHMsIGwgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0b1JHQjAxKHsgaCwgcywgbCB9KSB7XG4gICAgcyAvPSAxMDA7XG4gICAgbCAvPSAxMDA7XG4gICAgbGV0IGMgPSAoMSAtIE1hdGguYWJzKDIgKiBsIC0gMSkpICogcztcbiAgICBsZXQgeCA9IGMgKiAoMSAtIE1hdGguYWJzKCgoaCAvIDYwKSAlIDIpIC0gMSkpO1xuICAgIGxldCBtID0gbCAtIGMgLyAyO1xuICAgIGxldCByID0gMDtcbiAgICBsZXQgZyA9IDA7XG4gICAgbGV0IGIgPSAwO1xuICAgIGlmICgwIDw9IGggJiYgaCA8IDYwKSB7XG4gICAgICAgIHIgPSBjO1xuICAgICAgICBnID0geDtcbiAgICAgICAgYiA9IDA7XG4gICAgfVxuICAgIGVsc2UgaWYgKDYwIDw9IGggJiYgaCA8IDEyMCkge1xuICAgICAgICByID0geDtcbiAgICAgICAgZyA9IGM7XG4gICAgICAgIGIgPSAwO1xuICAgIH1cbiAgICBlbHNlIGlmICgxMjAgPD0gaCAmJiBoIDwgMTgwKSB7XG4gICAgICAgIHIgPSAwO1xuICAgICAgICBnID0gYztcbiAgICAgICAgYiA9IHg7XG4gICAgfVxuICAgIGVsc2UgaWYgKDE4MCA8PSBoICYmIGggPCAyNDApIHtcbiAgICAgICAgciA9IDA7XG4gICAgICAgIGcgPSB4O1xuICAgICAgICBiID0gYztcbiAgICB9XG4gICAgZWxzZSBpZiAoMjQwIDw9IGggJiYgaCA8IDMwMCkge1xuICAgICAgICByID0geDtcbiAgICAgICAgZyA9IDA7XG4gICAgICAgIGIgPSBjO1xuICAgIH1cbiAgICBlbHNlIGlmICgzMDAgPD0gaCAmJiBoIDwgMzYwKSB7XG4gICAgICAgIHIgPSBjO1xuICAgICAgICBnID0gMDtcbiAgICAgICAgYiA9IHg7XG4gICAgfVxuICAgIHIgPSBOdW1iZXIoKHIgKyBtKS50b0ZpeGVkKDMpKTtcbiAgICBnID0gTnVtYmVyKChnICsgbSkudG9GaXhlZCgzKSk7XG4gICAgYiA9IE51bWJlcigoYiArIG0pLnRvRml4ZWQoMykpO1xuICAgIHJldHVybiB7IHIsIGcsIGIgfTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0b0xpZ2h0Q29sb3IoaGV4LCBzaGFkZSkge1xuICAgIGNvbnN0IHsgaCwgcyB9ID0gdG9IU0woaGV4KTtcbiAgICByZXR1cm4gdG9SR0IwMSh7IGgsIHMsIGw6IDEwMCAtIE51bWJlcihzaGFkZSkgLyAxMCB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0b0RhcmtDb2xvcihoZXgsIHNoYWRlKSB7XG4gICAgY29uc3QgeyBoLCBzIH0gPSB0b0hTTChoZXgpO1xuICAgIHJldHVybiB0b1JHQjAxKHsgaCwgcywgbDogTnVtYmVyKHNoYWRlKSAvIDEwIH0pO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyB0b0RhcmtDb2xvciwgdG9IU0wsIHRvTGlnaHRDb2xvciwgdG9SR0IwMSB9IGZyb20gXCIuL3V0aWxcIjtcbmZpZ21hLnNob3dVSShfX2h0bWxfXywgeyB3aWR0aDogMTIwMCwgaGVpZ2h0OiAzMjUsIHRoZW1lQ29sb3JzOiB0cnVlIH0pO1xuZmlnbWEudWkub25tZXNzYWdlID0gKG1zZykgPT4ge1xuICAgIGlmIChtc2cudHlwZSA9PT0gJ2NyZWF0ZV9jb2xvcl92YXJpYWJsZXMnKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBtc2cuZGF0YTtcbiAgICAgICAgY29uc3QgY29sbGVjdGlvbnMgPSBmaWdtYS52YXJpYWJsZXMuZ2V0TG9jYWxWYXJpYWJsZUNvbGxlY3Rpb25zKCk7XG4gICAgICAgIGNvbnN0IGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9ucy5maW5kKChjKSA9PiBjLm5hbWUgPT09IGRhdGEuY29sbGVjdGlvbik7XG4gICAgICAgIGlmICghY29sbGVjdGlvbilcbiAgICAgICAgICAgIHJldHVybiBmaWdtYS5ub3RpZnkoJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGNvbGxlY3Rpb24gbmFtZSEnLCB7IGVycm9yOiB0cnVlIH0pO1xuICAgICAgICBjb25zdCBpZHMgPSBjb2xsZWN0aW9uLnZhcmlhYmxlSWRzO1xuICAgICAgICBpZiAoIWlkcylcbiAgICAgICAgICAgIHJldHVybiBmaWdtYS5ub3RpZnkoYFZhcmlhYmxlcyBub3QgZm91bmQgaW4gQ29sbGVjdGlvbiAoJHtjb2xsZWN0aW9uLm5hbWV9KWAsIHsgZXJyb3I6IHRydWUgfSk7XG4gICAgICAgIGNvbnN0IGRhcmsgPSBjb2xsZWN0aW9uLm1vZGVzLmZpbmQoKG0pID0+IG0ubmFtZS50b0xvd2VyQ2FzZSgpID09PSAnZGFyaycpO1xuICAgICAgICBjb25zdCBsaWdodCA9IGNvbGxlY3Rpb24ubW9kZXMuZmluZCgobSkgPT4gbS5uYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdsaWdodCcpO1xuICAgICAgICBpZiAoIWRhcmspXG4gICAgICAgICAgICByZXR1cm4gZmlnbWEubm90aWZ5KCdEYXJrIG1vZGUgbm90IGZvdW5kIGluIENvbGxlY3Rpb24sIHBsZWFzZSBhZGQgRGFyayBNb2RlIGluIHlvdXIgY29sbGVjdGlvbiEnLCB7IGVycm9yOiB0cnVlIH0pO1xuICAgICAgICBpZiAoIWxpZ2h0KVxuICAgICAgICAgICAgcmV0dXJuIGZpZ21hLm5vdGlmeSgnTGlnaHQgbW9kZSBub3QgZm91bmQgaW4gQ29sbGVjdGlvbiwgcGxlYXNlIGFkZCBMaWdodCBNb2RlIGluIHlvdXIgY29sbGVjdGlvbiEnLCB7IGVycm9yOiB0cnVlIH0pO1xuICAgICAgICBmb3IgKGNvbnN0IGlkIG9mIGlkcykge1xuICAgICAgICAgICAgY29uc3QgdmFyaWFibGUgPSBmaWdtYS52YXJpYWJsZXMuZ2V0VmFyaWFibGVCeUlkKGlkKTtcbiAgICAgICAgICAgIGlmICghdmFyaWFibGUpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBjb25zdCBbbmFtZSwgc2hhZGVdID0gdmFyaWFibGUubmFtZS5zcGxpdCgnLycpO1xuICAgICAgICAgICAgc3dpdGNoIChuYW1lLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdyZXZlcnNlJzpcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChzaGFkZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdkZWZhdWx0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZS5zZXRWYWx1ZUZvck1vZGUoZGFyay5tb2RlSWQsIHRvUkdCMDEodG9IU0woJyNGRkZGRkYnKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlLnNldFZhbHVlRm9yTW9kZShsaWdodC5tb2RlSWQsIHRvUkdCMDEodG9IU0woJyMwMDAwMDAnKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZm9yZWdyb3VuZCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGUuc2V0VmFsdWVGb3JNb2RlKGRhcmsubW9kZUlkLCB0b1JHQjAxKHRvSFNMKCcjMDAwMDAwJykpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZS5zZXRWYWx1ZUZvck1vZGUobGlnaHQubW9kZUlkLCB0b1JHQjAxKHRvSFNMKCcjRkZGRkZGJykpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGUuc2V0VmFsdWVGb3JNb2RlKGRhcmsubW9kZUlkLCB0b0RhcmtDb2xvcignI0ZGRkZGRicsIHNoYWRlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGUuc2V0VmFsdWVGb3JNb2RlKGxpZ2h0Lm1vZGVJZCwgdG9MaWdodENvbG9yKCcjMDAwMDAwJywgc2hhZGUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHNoYWRlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlLnNldFZhbHVlRm9yTW9kZShkYXJrLm1vZGVJZCwgdG9SR0IwMSh0b0hTTChkYXRhW2Ake25hbWUudG9Mb3dlckNhc2UoKX0tZGFya2BdKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlLnNldFZhbHVlRm9yTW9kZShsaWdodC5tb2RlSWQsIHRvUkdCMDEodG9IU0woZGF0YVtgJHtuYW1lLnRvTG93ZXJDYXNlKCl9LWxpZ2h0YF0pKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdmb3JlZ3JvdW5kJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYWJsZS5zZXRWYWx1ZUZvck1vZGUoZGFyay5tb2RlSWQsIHRvUkdCMDEodG9IU0woZGF0YVtgJHtuYW1lLnRvTG93ZXJDYXNlKCl9LWRhcmstZm9yZWdyb3VuZGBdKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlLnNldFZhbHVlRm9yTW9kZShsaWdodC5tb2RlSWQsIHRvUkdCMDEodG9IU0woZGF0YVtgJHtuYW1lLnRvTG93ZXJDYXNlKCl9LWxpZ2h0LWZvcmVncm91bmRgXSkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFibGUuc2V0VmFsdWVGb3JNb2RlKGRhcmsubW9kZUlkLCB0b0RhcmtDb2xvcihkYXRhW2Ake25hbWUudG9Mb3dlckNhc2UoKX0tZGFya2BdLCBzaGFkZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhYmxlLnNldFZhbHVlRm9yTW9kZShsaWdodC5tb2RlSWQsIHRvTGlnaHRDb2xvcihkYXRhW2Ake25hbWUudG9Mb3dlckNhc2UoKX0tbGlnaHRgXSwgc2hhZGUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZpZ21hLm5vdGlmeSgnQWxsIGNvbG9yIHZhcmlhYmxlcyBhcHBsaWVkIHN1Y2Nlc3NmdWxseScpO1xuICAgIH1cbiAgICBmaWdtYS5jbG9zZVBsdWdpbigpO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==