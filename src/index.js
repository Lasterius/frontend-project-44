#!/usr/bin/env node

import readlineSync from 'readline-sync';
import evenGame from './games/even.js';
import calcGame from './games/calc.js';
import gcdGame from './games/gcd.js';
import progressionGame from './games/progression.js';
import primeGame from './games/prime.js';

console.log('Welcome to the Brain Games!');

const getName = () => readlineSync.question('May I have your name? ');
const userName = getName();

console.log(`Hello, ${userName}!`);

console.log(evenGame());

console.log(calcGame());

console.log(gcdGame());

console.log(progressionGame());

console.log(primeGame());
