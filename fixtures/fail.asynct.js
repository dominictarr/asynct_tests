
exports.fail1 = function (test) { 
  test.ok(false) 
}

exports.fail2 = function (test) {
  require('assert').ok(false)
}

exports.fail3 = function (test) {
  process.nextTick(function(){
    test.ok(false)
  })
}
