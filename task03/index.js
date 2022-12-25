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

const a = {
  x: {
    y: 1,
  },
};
const clonedA = makeObjectDeepCopy(a);
clonedA.x.y = 10;
console.log(a.x.y, clonedA.x.y);
