// lifecycle.js
export function useEffect(effectFunc) {
    document.addEventListener('DOMContentLoaded', effectFunc);
  }
  