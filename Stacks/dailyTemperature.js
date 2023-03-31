var dailyTemperatures = function (temperatures) {
  // 19.31% O(n2)
  //   let result = [];
  //   for (let i = 0; i < temperatures.length - 1; i++) {
  //     let currmaxPos = -1;
  //     for (let j = i + 1; j < temperatures.length; j++) {
  //       if (temperatures[j] > temperatures[i]) {
  //         currmaxPos = j - i;
  //         break;
  //       } else {
  //         currmaxPos = 0;
  //       }
  //     }
  //     result.push(currmaxPos);
  //   }
  //   console.log(temperatures.length, result.length);
  //   if (result.length !== temperatures.length) {
  //     result.push(0);
  //   }
  //   //   console.log(result);/
  //   return result;
  // O(N) 58.4
  //   let stack = [];
  //   let result = Array(temperatures.length).fill(0);
  //   for (let day = 0; day < temperatures.length; day++) {
  //     while (foundWarmerDay(stack, temperatures, day)) {
  //       let prevColdDay = stack.pop();
  //       let waitTime = day - prevColdDay;
  //       result[prevColdDay] = waitTime;
  //     }
  //     stack.push(day);
  //   }
  //   console.log(result);
  // 91% O(n)
  const result = Array(temperatures.length).fill(0);
  const stack = [];
  for (let day = temperatures.length - 1; day >= 0; day--) {
    let temp = temperatures[day];
    while (stack.length && stack[stack.length - 1][0] <= temp) {
      stack.pop();
    }
    const waitDays = stack.length ? stack[stack.length - 1][1] - day : 0;
    result[day] = waitDays;

    stack.push([temp, day]);
  }
  console.log(result);
};

// const foundWarmerDay = (stack, temperatures, day) => {
//   let prevColdDay = stack[stack.length - 1];
//   const [prev, curr] = [temperatures[prevColdDay], temperatures[day]];
//   const isWarmer = prev < curr;

//   return stack.length && isWarmer;
// };

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])); // [1,1,4,2,1,1,0,0]

/**
 * 1. use monotonic decreasing stack
 * 2. push [temp, i] into stack
 * 3. pop the temperature once you get the higher temperature and find the differece b/w the idx and push to result array
 * 4. else keep pushing to stack
 * 5.
 */
