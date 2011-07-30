
exports.error1 = function (test) { 
  throw new Error ("EXAMPLE ERROR")
}

exports.error2 = function (test) {
  process.nextTick(function(){
    throw new Error ("EXAMPLE ERROR")
  })
}

exports.error3 = function (test) {
  null.foo
}

exports.error4 = function (test) {
  'hello'()
}

exports.error5 = function (test) {
  (function stackOverflow () {
    stackOverflow ()
  })()
}

exports.error6 = function (test) {
  throw null
}
