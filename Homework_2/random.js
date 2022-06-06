function random(lower, upper) {
  lower = Math.ceil(lower);
  upper = Math.floor(upper);
  randomfunc = Math.floor(Math.random(lower, upper) * (upper - lower) + lower);
  return randomfunc;
}
