export function isEmpty(input) {
  if (input === null || input === undefined) return true;
  if (typeof input === "string") return input.trim().length === 0;
  if (Array.isArray(input)) return input.length === 0;
  if (typeof input === "object") return Object.keys(input).length === 0;
  return false;
}

/*
How to use

import { isEmpty } from './checkInputEmpty.js';

if (isEmpty(userInput)) {
  console.log("Please enter a value.");
}
*/