// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

require = (function (modules, cache, entry) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof require === "function" && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof require === "function" && require;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }
      
      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module;

      modules[name][0].call(module.exports, localRequire, module, module.exports);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module() {
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({2:[function(require,module,exports) {

},{"./et-book/et-book-roman-line-figures/et-book-roman-line-figures.eot":["c3309e1d0fe76148b105ebcd912ca597.eot",3],"./et-book/et-book-roman-line-figures/et-book-roman-line-figures.woff":["61a792b4a7987b22a790458e8fcbfeb5.woff",4],"./et-book/et-book-roman-line-figures/et-book-roman-line-figures.ttf":["bdf17935795e7d0b8aa1bc358fc52c80.ttf",5],"./et-book/et-book-roman-line-figures/et-book-roman-line-figures.svg":["280f76daa0ce813d684761bd7c7349e0.svg",6],"./et-book/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.eot":["77d32589232a2d766aee72ddf63eb790.eot",7],"./et-book/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.woff":["5bbfd529ae66cb3467af9baffbded5b3.woff",8],"./et-book/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.ttf":["41ed47d6fae248f5b14574c5986ad725.ttf",9],"./et-book/et-book-display-italic-old-style-figures/et-book-display-italic-old-style-figures.svg":["4b56e70ce28816722f0b91da8fe29e20.svg",10],"./et-book/et-book-bold-line-figures/et-book-bold-line-figures.eot":["984cde95051856a267f5ffda0205bc87.eot",11],"./et-book/et-book-bold-line-figures/et-book-bold-line-figures.woff":["89f5365c469ce040228195fb68067730.woff",12],"./et-book/et-book-bold-line-figures/et-book-bold-line-figures.ttf":["15d263d0e7074c7e1a2bd47be3bbb88f.ttf",13],"./et-book/et-book-bold-line-figures/et-book-bold-line-figures.svg":["fee957143154aff0c55f70d957359269.svg",14],"./et-book/et-book-roman-old-style-figures/et-book-roman-old-style-figures.eot":["cba722d33b5b80c9adf8c6ec7a383d1d.eot",15],"./et-book/et-book-roman-old-style-figures/et-book-roman-old-style-figures.woff":["d44422db51fc8603595471fe5ba59f5e.woff",16],"./et-book/et-book-roman-old-style-figures/et-book-roman-old-style-figures.ttf":["0bb178a526625c72db33dd5882dd47c7.ttf",17],"./et-book/et-book-roman-old-style-figures/et-book-roman-old-style-figures.svg":["8e0d4744d032ee6f4dc1195c15a84232.svg",18]}],1:[function(require,module,exports) {
"use strict";require("./lib/tufte.css");
},{"./lib/tufte.css":2}]},{},[1])