// template.js
import { h } from 'snabbdom';

export function createTemplate(state, props) {
  return h('div', {}, [
    h('h1', {}, state.count),
    h('button', { on: { click: handleClick } }, 'Add')
  ]);
}
