const makeObjectDeepCopy = (object) => {
  if (typeof object === "object") {
    let cloneObject = {};
    for (const key in object) {
      cloneObject[key] = makeObjectDeepCopy(object[key]);
    }
    return cloneObject;
  } else {
    return object;
  }
};
