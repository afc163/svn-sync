var fs = require('fs')
var should = require('should')
var svnSync = require('..')
var toJSON = require('..').toJSON

var output = fs.readFileSync('tests/output').toString()
var object = toJSON(output)

object.path.should.equal('.')
object.workingCopyRootPath.should.equal('/Users/afc163/Projects/example')
object.url.should.equal('http://svn.example.net/svn/example/branches/xxxxx_CP_xxxxx_example')
object.repositoryRoot.should.equal('http://svn.example.net/svn/example')
