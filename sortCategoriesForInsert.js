const data = [
  {
    name: "Accessories",
    id: 1,
    parent_id: 20,
  },
  {
    name: "Women",
    id: 19,
    parent_id: null,
  },
  {
    name: "Watches",
    id: 57,
    parent_id: 1,
  },
  {
    name: "Men",
    id: 20,
    parent_id: null,
  },
  {
    name: "Turtles",
    id: 2,
    parent_id: 19,
  },
];

function parentIsIncluded(array, item) {
  if (!array.length) {
    return false;
  }

  // User find be could be any method that indicates a match, this stops after a match is made and might be more performant.
  return array.find((i) => i.id == item.parent_id);
}

function merge(left, right) {
  let array = [];

  while (left.length && right.length) {
    if (left[0].parent_id === null || parentIsIncluded(array, left[0])) {
      array.push(left.shift());
    } else {
      array.push(right.shift());
    }
  }

  return [...array, ...left, ...right];
}

function sortItems(array) {
  const half = Math.floor(array.length / 2);

  if (array.length < 2) {
    return array;
  }

  const left = array.splice(0, half);

  return merge(sortItems(left), sortItems(array));
}

function sortCategoriesForInsert(data) {
  return sortItems(data);
}
console.log(sortCategoriesForInsert(data));

exports.sortCategoriesForInsert = sortCategoriesForInsert;
