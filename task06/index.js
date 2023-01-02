function myFilter(checkElementCallback, object) {
  const that = object || this;
  const filtered = [];

  for (let i = 0; i < that.length; i++) {
    if (checkElementCallback(that[i], i, that)) {
      filtered.push(that[i]);
    }
  }
  return filtered;
}

Array.prototype.myFilter = myFilter;
