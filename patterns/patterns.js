//pattern1

// for (let i = 0; i < 4; i++) {
//   for (let j = 0; j < 4; j++) {
//     console.log("*");
//   }
//   console.log("\n");
// }

//pattern2

// for (let i = 0; i < 5; i++) {
//   for (let j = 0; j <= i; j++) {
//     console.log("*");
//   }
//   console.log("\n");
// }

//pattern3
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     console.log(j);
//   }
//   console.log("\n");
// }

//pattern4

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     console.log(i);
//   }
//   console.log("\n");
// }

//pattern5
// for (let i = 5; i >= 0; i--) {
//   for (let j = 0; j < i; j++) {
//     console.log("*");
//   }
//   console.log("\n");
// }

//pattern6
// for (let i = 5; i >= 0; i--) {
//   for (let j = 1; j <= i; j++) {
//     console.log(j);
//   }
//   console.log("\n");
// }

//pattern7
function pattern7(n) {
  for (let i = 0; i <= 4; i++) {
    for (let j = 0; j < 4 - i - 1; j++) {
      console.log(" ");
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      console.log("*");
    }
    for (let j = 0; j < 4 - i - 1; j++) {
      console.log(" ");
    }
    console.log("\n");
  }
}

//pattern8

function pattern8(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      console.log(" ");
    }
    for (let j = 2 * (n - 1 - i) + 1; j > 0; j--) {
      console.log("*");
    }
    for (let j = 0; j < i; j++) {
      console.log(" ");
    }
    console.log("\n");
  }
}

// pattern8(4);

// pattern7(4);
// pattern8(4);

// function flipTriangle(n) {
//   for (let i = 1; i <= 2 * n - 1; i++) {
//     let stars = i;
//     if (i > n - 1) stars = 2 * n - i;
//     for (j = 1; j <= stars; j++) {
//       console.log("*");
//     }
//     console.log("\n");
//   }
// }
// flipTriangle(5);

function binaryPrint(n) {
  let start = 1;
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      start = 1;
    } else {
      start = 0;
    }
    for (let j = 0; j <= i; j++) {
      console.log(start);
      start = 1 - start;
    }
    console.log("\n");
  }
}
// binaryPrint(4);

function pyramid(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      console.log(j);
    }
    for (let j = 1; j <= 2 * (n - i); j++) {
      console.log("*");
    }
    for (let j = i; j >= 1; j--) {
      console.log(j);
    }
    console.log("\n");
  }
}

// pyramid(4);

function countNum(n) {
  let count = 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      console.log(count);
      count++;
    }
    console.log("\n");
  }
}
// countNum(6);

function printAlphabets(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 65; j <= 65 + i; j++) {
      console.log(String.fromCharCode(j));
    }
    console.log("\n");
  }
}
// printAlphabets(5);

function printAlphabets2(n) {
  for (let i = n - 1; i >= 0; i--) {
    for (let j = 65; j <= 65 + i; j++) {
      console.log(String.fromCharCode(j));
    }
    console.log("\n");
  }
}
// printAlphabets2(4);

function alphaPyramid(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      console.log(String.fromCharCode(65 + i));
    }
    console.log("\n");
  }
}
// alphaPyramid(5);

function pattern17(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      console.log("*");
    }
    let char = 65;
    let breakpoint = (2 * (i + 1)) / 2;
    for (let j = 1; j <= 2 * i + 1; j++) {
      console.log(String.fromCharCode(char));
      if (j < breakpoint) char++;
      else char--;
    }
    for (let j = 0; j < n - i - 1; j++) {
      console.log("*");
    }
    console.log("\n");
  }
}
// pattern17(4);

function pattern18(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 69 - i; j <= 69; j++) {
      console.log(String.fromCharCode(j));
    }
    console.log("\n");
  }
}

// pattern18(5);

function pattern19(n) {
  let stars = 2 * n - 2;
  for (let i = 0; i < 2 * n; i++) {
    let breakpoint = n - 1;

    if (i <= breakpoint) {
      for (let j = n - i; j > 0; j--) {
        console.log("*");
      }
      for (let j = 0; j < 2 * i; j++) {
        console.log("hello");
      }
      for (let j = n - i; j > 0; j--) {
        console.log("*");
      }
      console.log("\n");
    } else {
      for (let j = i - n; j >= 0; j--) {
        console.log("*");
      }
      for (let j = 0; j < stars; j++) {
        console.log("hello");
      }
      for (let j = i - n; j >= 0; j--) {
        console.log("*");
      }
      stars -= 2;
      console.log("\n");
      // console.log("else", i);
    }
  }
}

// pattern19(5);

function pattern20(n) {
  let stars = 2 * n - 2;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      console.log("*");
    }
    for (let j = 0; j < stars; j++) {
      console.log("hello");
    }
    for (let j = 0; j <= i; j++) {
      console.log("*");
    }
    stars -= 2;
    console.log("\n");
  }
  let stars1 = 2;
  for (let i = n - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      console.log("*");
    }
    for (let j = 0; j < stars1; j++) {
      console.log("hello");
    }
    for (let j = 0; j < i; j++) {
      console.log("*");
    }
    stars1 += 2;
    console.log("\n");
  }
}

// pattern20(5);

function pattern21(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i == 0 || j == 0 || i == n - 1 || j == n - 1) console.log("*");
    }
    console.log("\n");
  }
}
// pattern21(4);

function pattern22(n) {
  for (let i = 0; i < 2 * n - 1; i++) {
    for (let j = 0; j < 2 * n - 1; j++) {
      let top = i;
      let left = j;
      let right = 2 * n - 1 - 1 - j;
      let bottom = 2 * n - 1 - 1 - i;
      console.log(n - Math.min(Math.min(top, bottom), Math.min(left, right)));
    }
    console.log("\n");
  }
}
pattern22(4);
