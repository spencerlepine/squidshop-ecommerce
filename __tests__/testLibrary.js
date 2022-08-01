const https = require('http');

const lastTestName = []
const lastDescName = []
const request = (host, port, path, callback) => {
  const optionsGet = {
    host: host,
    port: port,
    path: path, // the rest of the url with parameters if needed
    method: 'GET' // do GET
  };

  const req = https.request(optionsGet, (res) => {
    let str = ''

    res.on('data', function (chunk) {
      str += chunk
    })

    res.on('end', function () {
      try {
        const json = JSON.parse(str)
        callback(json)
      } catch (e) {
        handleFailure()
        callback({})
      }
    })
  })

  req.on('error', function (e) {
    handleFailure(e)
  })

  req.end()
}

const handleFailure = (failureMessage) => {
  console.log(`\n  ${lastDescName.slice(-1)[0]}`)
  console.log(`    ${lastTestName.slice(-1)[0]}`)
  console.log(`       ❌ FAILED: ${failureMessage}`)
  process.exit(1);
}

const assert = (actual, expected) => {
  if (actual !== expected) {
    handleFailure(`Expected ${actual} to equal ${expected}`)
  }
}

const assertType = (actual, expectedType) => {
  const actualType = typeof actual;
  if (actualType !== expectedType) {
    handleFailure(`Expected ${actualType} type to equal ${expectedType}`)
  }
}

const describe = (testGroupName, testGroup) => {
  lastDescName.push(testGroupName)
  testGroup()
}

const test = (testName, assertions) => {
  lastTestName.push(testName)
  assertions(() => {
    console.log(`      ${testName}`)
    console.log("       ✅ Passed")
  })
}

const customTestLibary = {
  assert,
  assertType,
  describe,
  test,
  request
};

module.exports = customTestLibary