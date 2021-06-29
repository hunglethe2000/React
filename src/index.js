import React from 'react';
import ReactDOM from 'react-dom';

const person = {
  name: 'le the hung',
  age: 21,
  status: true
}
function total(giatriA, giatriB){
  return giatriA + giatriB;
}
const a = 20;
const b = 10;
const element = <h1>Sum = {total(a,b)}</h1>
ReactDOM.render(
    element,
  document.getElementById('root')
);