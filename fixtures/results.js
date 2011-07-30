var Reporter = require('test-report')
  , it = require('it-is')
function report (name) {
  var reporter = new Reporter (name)
  module.exports[name] = reporter.report
  return reporter
}

report ('fixtures/pass.asynct.js')
  .test('pass1').test('pass2').test('pass2')
  
report ('fixtures/fail.asynct.js')
  .test('fail1', { name: 'AssertionError' })
  .test('fail2', { name: 'AssertionError' })
  .test('fail3', { name: 'AssertionError' })

  
report ('fixtures/error.asynct.js')
  .test('error1', {message: "EXAMPLE ERROR", stack: it.ok()})
  .test('error2', {message: "EXAMPLE ERROR", stack: it.ok()})
  .test('error3', {type:'non_object_property_load', stack: it.ok()})
  .test('error4', {type:'called_non_callable', stack: it.ok()})
  .test('error5', {type:'stack_overflow'})
  .test('error6', null) //a thrown null object
