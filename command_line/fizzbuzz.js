#!/usr/local/bin/node

var fs = require('fs');


if (process.argv.length < 3) NoParamsGiven();
else RunWithParams(process.argv[2]);


function NoParamsGiven() {
  ShowUsage();
  QuitApp();
}


function ShowUsage() {
  console.log('\nPlease run this command line utility like this:');
  console.log('   fizzbuzz <filename>');
}


function QuitApp() {
  process.exit(-1);
}


function RunWithParams(arg) {
  var count, config, fizzBuzzData;

  count = parseInt(arg);
  if (isNaN(count)) config = LoadConfig(arg);
  else config = LoadDefaultConfig(count);

  fizzBuzzData = CalculateFizzBuzz(config);
  WriteFizzBuzz(fizzBuzzData);
}


function LoadConfig(fileName) {
  console.log('\nReading config file [' + fileName + ']');

  var data = fs.readFileSync(fileName);
  var config = JSON.parse(data);

  return config;
}


function LoadDefaultConfig(count) {
  var config = {
    "count": count,
    "fizz": "fizz",
    "buzz": "buzz"
  };

  return config;
}


function CalculateFizzBuzz(config) {
  var i, answer, allAnswers = {};

  for (i = 0; i < config.count; i++) {
    answer = '';

    if (i % 3 === 0) answer += config.fizz;
    if (i % 5 === 0) answer += config.buzz;
    if (answer === '') answer = i;

    console.log(answer);
    allAnswers[i] = answer;
  }

  return allAnswers;
}


function WriteFizzBuzz(data) {
  var FILENAME = 'fizz_buzz_results.json';
  var fizzBuzzDataAsString = JSON.stringify(data);

  console.log('Writing a translated file [' + FILENAME + ']\n');
  fs.writeFileSync(FILENAME, fizzBuzzDataAsString);
}
