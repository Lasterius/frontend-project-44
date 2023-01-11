#!/usr/bin/env node

import readlineSync from 'readline-sync';
import evenGame from './games/even.js';
import calcGame from './games/calc.js';

console.log('Welcome to the Brain Games!');

const getName = () => readlineSync.question('May I have your name? ');
const userName = getName();

console.log(`Hello, ${userName}!`);

console.log(evenGame());

console.log(calcGame());
