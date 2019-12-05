# Run tsc typechecking as a mocha test

```
>npm run test

> tsctest@1.0.0 test C:\Users\Ernest\tsctest
> mocha --timeout 0



  Server-side code
    1) passes typechecking


  0 passing (3s)
  1 failing

  1) Server-side code
       passes typechecking:

      Uncaught AssertionError [ERR_ASSERTION]: 'src/index.js(10,21): error TS2554: Expected 2 arguments, but got 3.\r\n' == ''
      + expected - actual

      -src/index.js(10,21): error TS2554: Expected 2 arguments, but got 3.

      at exec (test\passesTypeCheck.js:13:14)
      at ChildProcess.exithandler (child_process.js:301:5)
      at maybeClose (internal/child_process.js:970:16)
      at Process.ChildProcess._handle.onexit (internal/child_process.js:259:5)



npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! tsctest@1.0.0 test: `mocha --timeout 0`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the tsctest@1.0.0 test script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\Ernest\AppData\Roaming\npm-cache\_logs\2019-12-05T02_50_20_099Z-debug.log
```