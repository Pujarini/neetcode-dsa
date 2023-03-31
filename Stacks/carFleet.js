var carFleet = function (target, position, speed) {
  const coordinates = getCoordinates(target, position, speed);
  console.log(coordinates);
  let fleets = 0;
  let prev = 0;
  for (const i of coordinates) {
    console.log(prev, "prev", i), "i";
    const isPrevLess = prev < i;
    console.log(isPrevLess);
    if (!isPrevLess) continue;

    prev = i;
    console.log(i);
    fleets++;
  }
  console.log(fleets);
};

const getCoordinates = (target, position, speed) => {
  return position
    .map((_position, index) => [_position, speed[index]])
    .sort((a, b) => b[0] - a[0])
    .map(([_pos, _speed]) => (target - _pos) / _speed);
};

let target = 12;
let position = [10, 8, 0, 5, 3];
let speed = [2, 4, 1, 1, 3];

console.log(carFleet(target, position, speed));
