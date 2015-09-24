var curry = require('./curry');

function calculate (number) {
  return function (operator) {

    if('+' === operator || 'add' === operator) {
      return function (number2){
        return number + number2;
      };
    }

    if ('-' === operator || 'subtract' === operator) {
      return function (number2) {
        return number - number2;
      };
    }

    if ('*' === operator || 'multiply' === operator) {
      return function (number2) {
        return number * number2;
      };
    }

    if ('/' === operator || 'divide' === operator)  {
      return function (number2) {
        return number/number2;
      };
    }

    if ('%' === operator || 'modulo' === operator) {
      return function (number2) {
        return number%number2;
      };
    }

    if ('^' === operator || 'power of') {
      return function (number2) {
        return Math.pow(number,number2);
      };
    }

  };
}

function random (start) {
  return {
    to : function (finish){
      return Math.floor(Math.random()*(finish - start)) + start;
    },
    toInclue : function (finish) {
      return Math.floor(Math.random()*(finish - start + 1)) + start;
    }
  };
}

function concat(head, tail){
  return head + tail;

}

var prependGreeting = curry(concat, 'Hello ');

function add (num, num2, num3) {
  return num + num2 + num3;
}

var add4and5 = curry(add, 4, 5);

function calculator(operation){
  return function (op2, op1) {
    switch (true) {
      case  '+' === operation ||  'add' === operation:
        return op1 + op2;
    }

    switch (true) {
      case '-' === operation || 'subtract' === operation:
        return op1 - op2;
    }

    switch (true) {
      case '*' === operation || 'multiply' === operation:
        return op1 * op2;
    }

    switch (true) {
      case '/' === operation || 'divide' === operation:
        return op1 / op2;
    }

    switch (true) {
      case '%' === operation || 'modulo' === operation:
        return op1 % op2;
    }

    switch (true) {
      case '^' === operation || 'power of' === operation:
        return Math.pow(op1,op2);
    }
  };

}

var add5 = curry(calculator('+'),5);
var sub5 = curry(calculator('-'),5);
var multiply5 = curry(calculator('*'), 5);
var divide5 = curry(calculator('/'), 5);
var mod5 = curry(calculator('%'), 5);
var pow3 = curry(calculator('^'), 3);

module.exports = {
  calculate : calculate,
  random : random,
  prependGreeting : prependGreeting,
  add4and5 : add4and5,
  calculator : calculator,
  add5 : add5,
  sub5 : sub5,
  multiply5 : multiply5,
  divide5 : divide5,
  mod5 : mod5,
  pow3 : pow3
};