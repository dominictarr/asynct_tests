
var helper = require('test-helper')
  , it = require('it-is').style('colour')
  , isPass = helper.isPass
  , isError = helper.isError
  , isFail = helper.isFail
  , assert = require('assert')
  , Reporter = require('test-report')
  , cmd = require.resolve('asynct/cmd')
  , exec = require('child_process').exec
  , fs = require('fs')
  
function test (file, callback) {
  console.log('testing ' + cmd + ' against:' + file)
  var tmp = '/tmp/exampleReport' + Math.random()

  exec([process.execPath, cmd, file, '--reportFile', tmp].join(' ')
    , {cwd: __dirname}
    , function (err, stdout, stderr) {
      console.log(stderr)
        var report = JSON.parse(fs.readFileSync(tmp))
        fs.unlinkSync(tmp)
        callback(err, report)
      })
}

var results = require('./fixtures/results')

Object.keys(results).forEach(function (name) {

  exports [name] = function(finish) {
    test(name, function (err, report) {
    
      if(results[name].status === 'success')
        it(err).equal(null) 
      else 
        it(err).property('code', report.failCount)
  
      it(report).has(results[name])
      finish()
    })
  }
})


helper.runAsync(exports)