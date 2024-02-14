// reactivity.js
import { createTemplate } from './template';

let currentState = { count: 0 };
let updateFunc;

export function updateState(newState) {
  currentState = { ...currentState, ...newState };
  if (updateFunc) {
    updateFunc(createTemplate(currentState));
  }
}

export function setUpdateFunc(func) {
  updateFunc = func;
}

function handleClick() {
  updateState({ count: currentState.count + 1 });
}
