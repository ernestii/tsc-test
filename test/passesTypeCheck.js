const assert = require('assert');
const { exec } = require('child_process');

const tscBinary = 'node node_modules/typescript/bin/tsc';
const tscConfigFilePath = 'tsconfig.json';
const tscCommand = `${tscBinary} --noEmit --p ${tscConfigFilePath}`;

describe('Server-side code', function() {
  this.timeout(0);

  it('passes typechecking', function(done) {
    exec(tscCommand, (error, stdout, stderr) => {
      assert.equal(stdout, '');
      done();
    });
  })
});

