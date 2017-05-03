/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n  var mySwiper = new Swiper('.swiper-container', {\n    pagination: '.swiper-pagination',\n    nextButton: '.swiper-button-next',\n    prevButton: '.swiper-button-prev',\n    slidesPerView: 3,\n    loop: true,\n    paginationType: 'custom',\n    paginationClickable: true,\n    paginationCustomRender: function (swiper, current, total) {\n      var html = '<div class=\"text-center tip\">'\n      for (var i = 0; i < total; i++) {\n        html += '<img class=\"st-img\" src=\"image/'\n          + ((i === (current - 1 ) % total || i === (current ) % total || i === (current + 1) % total)\n            ? 'bluetip.png' : 'blacktip.png') + '\">'\n      }\n      html += '</div>'\n      return html\n    },\n    breakpoints: {\n      // when window width is <= 480px\n      480: {\n        slidesPerView: 1,\n        paginationCustomRender: function (swiper, current, total) {\n          var html = '<div class=\"text-center tip\">'\n          for (var i = 0; i < total; i++) {\n            html += '<img class=\"st-img\" src=\"image/'\n              + ((i === (current - 1 ) % total)\n                ? 'bluetip.png' : 'blacktip.png') + '\">'\n          }\n          html += '</div>'\n          return html\n        }\n      },\n      // when window width is <= 640px\n      640: {\n        slidesPerView: 2,\n        paginationCustomRender: function (swiper, current, total) {\n          var html = '<div class=\"text-center tip\">'\n          for (var i = 0; i < total; i++) {\n            html += '<img class=\"st-img\" src=\"image/'\n              + ((i === (current - 1 ) % total || i === (current ) % total)\n                ? 'bluetip.png' : 'blacktip.png') + '\">'\n          }\n          html += '</div>'\n          return html\n        }\n      }\n    }\n  })\n})\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvanMvaW5kZXguanM/YmFlOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFdBQVc7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixXQUFXO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsV0FBVztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuICB2YXIgbXlTd2lwZXIgPSBuZXcgU3dpcGVyKCcuc3dpcGVyLWNvbnRhaW5lcicsIHtcbiAgICBwYWdpbmF0aW9uOiAnLnN3aXBlci1wYWdpbmF0aW9uJyxcbiAgICBuZXh0QnV0dG9uOiAnLnN3aXBlci1idXR0b24tbmV4dCcsXG4gICAgcHJldkJ1dHRvbjogJy5zd2lwZXItYnV0dG9uLXByZXYnLFxuICAgIHNsaWRlc1BlclZpZXc6IDMsXG4gICAgbG9vcDogdHJ1ZSxcbiAgICBwYWdpbmF0aW9uVHlwZTogJ2N1c3RvbScsXG4gICAgcGFnaW5hdGlvbkNsaWNrYWJsZTogdHJ1ZSxcbiAgICBwYWdpbmF0aW9uQ3VzdG9tUmVuZGVyOiBmdW5jdGlvbiAoc3dpcGVyLCBjdXJyZW50LCB0b3RhbCkge1xuICAgICAgdmFyIGh0bWwgPSAnPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIHRpcFwiPidcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG90YWw7IGkrKykge1xuICAgICAgICBodG1sICs9ICc8aW1nIGNsYXNzPVwic3QtaW1nXCIgc3JjPVwiaW1hZ2UvJ1xuICAgICAgICAgICsgKChpID09PSAoY3VycmVudCAtIDEgKSAlIHRvdGFsIHx8IGkgPT09IChjdXJyZW50ICkgJSB0b3RhbCB8fCBpID09PSAoY3VycmVudCArIDEpICUgdG90YWwpXG4gICAgICAgICAgICA/ICdibHVldGlwLnBuZycgOiAnYmxhY2t0aXAucG5nJykgKyAnXCI+J1xuICAgICAgfVxuICAgICAgaHRtbCArPSAnPC9kaXY+J1xuICAgICAgcmV0dXJuIGh0bWxcbiAgICB9LFxuICAgIGJyZWFrcG9pbnRzOiB7XG4gICAgICAvLyB3aGVuIHdpbmRvdyB3aWR0aCBpcyA8PSA0ODBweFxuICAgICAgNDgwOiB7XG4gICAgICAgIHNsaWRlc1BlclZpZXc6IDEsXG4gICAgICAgIHBhZ2luYXRpb25DdXN0b21SZW5kZXI6IGZ1bmN0aW9uIChzd2lwZXIsIGN1cnJlbnQsIHRvdGFsKSB7XG4gICAgICAgICAgdmFyIGh0bWwgPSAnPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIHRpcFwiPidcbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRvdGFsOyBpKyspIHtcbiAgICAgICAgICAgIGh0bWwgKz0gJzxpbWcgY2xhc3M9XCJzdC1pbWdcIiBzcmM9XCJpbWFnZS8nXG4gICAgICAgICAgICAgICsgKChpID09PSAoY3VycmVudCAtIDEgKSAlIHRvdGFsKVxuICAgICAgICAgICAgICAgID8gJ2JsdWV0aXAucG5nJyA6ICdibGFja3RpcC5wbmcnKSArICdcIj4nXG4gICAgICAgICAgfVxuICAgICAgICAgIGh0bWwgKz0gJzwvZGl2PidcbiAgICAgICAgICByZXR1cm4gaHRtbFxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPD0gNjQwcHhcbiAgICAgIDY0MDoge1xuICAgICAgICBzbGlkZXNQZXJWaWV3OiAyLFxuICAgICAgICBwYWdpbmF0aW9uQ3VzdG9tUmVuZGVyOiBmdW5jdGlvbiAoc3dpcGVyLCBjdXJyZW50LCB0b3RhbCkge1xuICAgICAgICAgIHZhciBodG1sID0gJzxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciB0aXBcIj4nXG4gICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b3RhbDsgaSsrKSB7XG4gICAgICAgICAgICBodG1sICs9ICc8aW1nIGNsYXNzPVwic3QtaW1nXCIgc3JjPVwiaW1hZ2UvJ1xuICAgICAgICAgICAgICArICgoaSA9PT0gKGN1cnJlbnQgLSAxICkgJSB0b3RhbCB8fCBpID09PSAoY3VycmVudCApICUgdG90YWwpXG4gICAgICAgICAgICAgICAgPyAnYmx1ZXRpcC5wbmcnIDogJ2JsYWNrdGlwLnBuZycpICsgJ1wiPidcbiAgICAgICAgICB9XG4gICAgICAgICAgaHRtbCArPSAnPC9kaXY+J1xuICAgICAgICAgIHJldHVybiBodG1sXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pXG59KVxuXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9qcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);