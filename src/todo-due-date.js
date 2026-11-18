import { max } from 'date-fns';
import { todoItemsArray } from "./todo-item.js";
// export const todoItemsArray = [todoItem, todoItem2];


// find out what the percent of other due dates are in comparison to the furthest due date which is 100%

// putting the todoDueDate property of each todo item into the new Date() constructor
export const todoItemsWithDate = todoItemsArray.map(todoProperty => ({
  ...todoProperty,
  todoDueDate: new Date(`${todoProperty.todoDueDate}T00:00:00`)
}));

// find out the furthest date from current date
// find out how many ms is within the time from current date to furthest date. this equals 100%

// array of all the dates
export const allDates = todoItemsWithDate.map(todoItem => todoItem.todoDueDate);
// the furthest date
export const furthestFutureDate = max(allDates);

// find out how many minutes is in between the furthest due date and the current date

const currentDate = new Date();

// this is the 100% in milliseconds
export const fromCurrentToFurthestDate = Math.abs(furthestFutureDate - currentDate);


// if a 2304 is 100% how do i find out what percentage 1500 is?

// find the milliseconds for all dates

export const todoItemsInMilliseconds = todoItemsWithDate.map(todoItem => ({
  ...todoItem,
  todoDueDate: Math.abs(todoItem.todoDueDate - currentDate)
}));

// find the percentages for each date relative to the scale of current date to furthest date
// the todo items with percentages as dates array

export const todoItemsInPercentages = todoItemsInMilliseconds.map(todoItem => ({
  ...todoItem,
  todoDueDate: (todoItem.todoDueDate / fromCurrentToFurthestDate) * 100
}));





















