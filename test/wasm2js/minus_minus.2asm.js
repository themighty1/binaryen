
function asmFunc(importObject) {
 var env = importObject.env || importObject;
 var Math_imul = Math.imul;
 var Math_fround = Math.fround;
 var Math_abs = Math.abs;
 var Math_clz32 = Math.clz32;
 var Math_min = Math.min;
 var Math_max = Math.max;
 var Math_floor = Math.floor;
 var Math_ceil = Math.ceil;
 var Math_trunc = Math.trunc;
 var Math_sqrt = Math.sqrt;
 var abort = env.abort;
 var nan = NaN;
 var infinity = Infinity;
 function $0() {
  return ~~- -7094.0 | 0;
 }
 
 function $1() {
  $0() | 0;
 }
 
 return {
  "func_44_invoker": $1
 };
}

var retasmFunc = asmFunc(  { abort: function() { throw new Error('abort'); }
  });
export var func_44_invoker = retasmFunc.func_44_invoker;
