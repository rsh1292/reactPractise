type ThrottledFnInput = {
  fn: () => any;
  delay: number;
};
export function throttledFn({ fn, delay }: ThrottledFnInput) {
  let lastCall = 0;
  return function (...args: any[]) {
    let now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    fn();
  };
}
