/**
 * Stack -> LIFO or FILO
 */

/**
 * Using Array
 */

// Method - 1
const stack1 = [1, 2, 3, 4, 5, 6];
stack1.push(10);
stack1.pop();
console.log('Stack-1 :', stack1);

// Method - 2 [Expensive]
const stack2 = [10, 20, 30, 40, 50, 60];
stack2.unshift(100);
stack2.shift();
console.log('Stack-2 :', stack2);

/**
 * Using Linked list - Use shift, unshift of linked list
 */

//----------------------------------------------------------

/**
 * Queue - FIFO or LILO
 */

/**
 * Using array
 */

//  Method - 1
const q1 = [1, 5, 6, 9, 8];
q1.push(2);
q1.shift();
console.log('q1: ', q1);

//  Method - 2 [Expensive]
const q2 = [10, 50, 60, 90, 80];
q2.unshift(2);
q2.pop();
console.log('q2: ', q2);


/**
 * Using linked list: Add at tail remove from head (Opposite will be expensive)
 */
