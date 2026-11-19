import { max } from 'date-fns';
import { todoItemsArray } from "./todo-item.js";
import { isEmpty } from './checkInputEmpty.js';

// if (isEmpty(userInput)) {
//   console.log("Please enter a value.");
// }

// todo items array with no dates. these todo's have no urgency
export const todoItemsWithNoDateValues = []

for (const todoItem of todoItemsArray) {
  
  if (isEmpty(todoItem.todoDueDate)) {
    todoItemsWithNoDateValues.push(todoItem);
  } 
}

// todo items array with dates. these todo's will have an urgency.
export const todoItemsWithDateValues = []

for (const todoItem of todoItemsArray) {
  
  if (!isEmpty(todoItem.todoDueDate)) {
    todoItemsWithDateValues.push(todoItem);
  } 
}

// putting the todoDueDate property of each todo item into the new Date() constructor
const todoItemsWithDate = todoItemsWithDateValues.map(todoProperty => ({
  ...todoProperty,
  todoDueDate: new Date(`${todoProperty.todoDueDate}T00:00:00`)
}));

// find out the furthest date from current date
// find out how many ms is within the time from current date to furthest date. this equals 100%

// array of all the dates
const allDates = todoItemsWithDate.map(todoItem => todoItem.todoDueDate);
// the furthest date
const furthestFutureDate = max(allDates);

const currentDate = new Date();

// this is the 100% in milliseconds
const fromCurrentToFurthestDate = Math.abs(furthestFutureDate - currentDate);

// milliseconds for all dates
const todoItemsInMilliseconds = todoItemsWithDate.map(todoItem => ({
  ...todoItem,
  todoDueDate: Math.abs(todoItem.todoDueDate - currentDate)
}));

// find the percentages for each date relative to the scale of current date to furthest date
// the todo items with percentages instead of dates array
const todoItemsInPercentages = todoItemsInMilliseconds.map(todoItem => ({
  ...todoItem,
  todoDueDate: (todoItem.todoDueDate / fromCurrentToFurthestDate) * 100
}));





















