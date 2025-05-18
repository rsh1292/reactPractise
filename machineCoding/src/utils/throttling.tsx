type ThrottledFnInput = {
  fn: () => any;
  delay: number;
};
export function throttledFn({ fn, delay }: ThrottledFnInput) {
  let lastCall = 0;
  return function () {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    fn();
  };
}
