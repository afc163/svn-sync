var exec = require('shelljs').exec
var camel = require('to-camel-case')

function svnSync(path) {
  path = path || '.'
  var cmd = exec('svn info ' + path, {
    silent: true
  })
  if(cmd.code !== 0) {
    throw new Error('A Error occur when executing "svn info" at' + path + '\n' + cmd.output)
  }
  return toJSON(cmd.output)
}

function toJSON(output) {
  var result = {}
  output = output.split('\n')
  output.forEach(function(line) {
    if (!line) {
      return
    }
    var index = line.indexOf(': ')
    if (index > 0) {
      var key = line.slice(0, index)
      var value = line.slice(index + 2)
      result[camel(key)] = value
    }
  })
  return result
}

module.exports = svnSync
module.exports.toJSON = toJSON
