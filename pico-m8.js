#!/usr/bin/env node

'use strict';

const program = require('commander');

program
  .version('0.0.1')
  .command('help')
  .description('Pico-m8 help')
  .action(function(){
    console.log("Hi I'm an initial version of pico-m8")
  })
  .parse(process.argv);

program.parse(process.argv);



