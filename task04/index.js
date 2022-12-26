const selectFromInterval = (
  interval,
  firstIntervalPoint,
  secondIntervalPoint
) => {
  if (!Array.isArray(interval)) {
    throw new Error("Ошибка!");
  }

  if (!interval.every((num) => typeof num === "number")) {
    throw new Error("Ошибка!");
  }

  if (
    typeof firstIntervalPoint !== "number" ||
    typeof secondIntervalPoint !== "number"
  ) {
    throw new Error("Ошибка!");
  }

  const minIntervalPoint = Math.min(firstIntervalPoint, secondIntervalPoint);
  const maxIntervalPoint = Math.max(firstIntervalPoint, secondIntervalPoint);
  const sortedInterval = interval.sort((a, b) => a - b);

  const intersections = [];

  for (let index = minIntervalPoint; index <= maxIntervalPoint; index++) {
    if (sortedInterval.includes(index)) {
      intersections.push(index);
    }
  }

  return intersections;
};
