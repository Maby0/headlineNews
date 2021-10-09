'use strict';

function expect(actual) {
  return {
    toEqual: function(expected) {
      if (actual === expected) {
        console.log('%c Pass ', 'background: green;');
      } else {
        console.log('%c Fail ', 'background: red;');
      }
    },

    toInclude: function(expected) {
      if (actual.includes(expected)) {
        console.log('%c Pass ', 'background: green;');
      } else {
        console.log('%c Fail ', 'background: red;');
      }
    },

    toBe: function(expected) {
      if (actual instanceof expected) {
        console.log('%c Pass ', 'background: green;');
      } else {
        console.log('%c Fail ', 'background: red;');
      }
    }
  }
}

function it(label, callback) {
  console.log(`Test: ${label}`)
  callback();
}

// function stub() {
//   return {
//       of : function (name, callback, returnValue) {
//           this[name] = function () {
//             var args = Array.prototype.slice.call(arguments);
//             this[name].calls.push(args);
//             var ret = null;
//             if(callback)
//                 ret = callback.apply(this, args);
//             if(returnValue) return returnValue;
//             return ret;
//         };
//         this[name].calls = [];

//         return this;
//       }
//   };
// }