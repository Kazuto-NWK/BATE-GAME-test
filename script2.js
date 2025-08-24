"use strict"

const test = (ac, ex) => {
  if(JSON.stringify(ac) === JSON.stringify(ex)) {
    console.log("OK! TEST PASS!")
  } else {
    console.error("test failed!");
    console.log(`ex: `, ex);
    console.log(`ac: `, ac);
    console.trace();
  }
};

// /* 2つの整数a とbを受け取るfindAllPairingsという関数を記述してください。
// aとbの間のあらゆる数値の組み合わせ（aとb自身も含む）のペアのリストを返します 
// 。このリストは、最初の数値、次に2番目の数値の順で並んでいる必要があります。 */
// /* findAllPairings(1, 3)は次のペアの配列（つまり配列の配列）を返します */
// const resultArr = [
//     [1, 1],
//     [1, 2],
//     [1, 3],
//     [2, 1],
//     [2, 2],
//     [2, 3],
//     [3, 1],
//     [3, 2],
//     [3, 3]
// ];

// const findAllPairings = (a, b) => {
//   const result = [];
//   for(let i = a; i <= b; i++) {
//     for(let j = a; j <= b; j++) {
//       result.push([i, j]);
//     }
//   }
//   return result;
// };

// test(findAllPairings(1, 3), resultArr);



// /* 関数 multiplyByIndex を宣言してください。 */
// /**
//  * @param {Array<number>} arr
//  * @returns {Array<number>} 与えられた配列の各要素と
//  * そのインデックスを掛け合わせた数字が要素として入った、新たな配列
//  */
// const multiplyByIndex = (arr) => {
//   return arr.map((ele, index) => ele * index);
// };

// test(multiplyByIndex([1, 2, 3]), [0, 2, 6]);
// test(multiplyByIndex([2, 3, 4]), [0, 3, 8]);
// test(multiplyByIndex([-3, -4, -5]), [-0, -4, -10]);



// /* 関数 feedback を宣言してください。 */
// /**
//  * @param {Array<any>} arr
//  * @param {Function} func - 実行したい関数
//  * @param {number} rep - 関数を実行したい回数
//  * @returns {Array<any>} 与えられた配列の各要素に、実行したい回数だけ関数を実行した結果が入った、新しい配列
//  */
// const feedback = (arr, func, rep) => {
//   return arr.map(ele => {
//     let resultErement = ele;
//     for(let i = 1; i <= rep; i++) {
//       resultErement = func(resultErement);
//     }
//     return resultErement;
//   })
// };

// function double(element) {
//   return element * 2;
// }

// test(feedback([1, 2, 3], double, 1), [2, 4, 6]);
// test(feedback([1, 2, 3], double, 2), [4, 8, 12]);
// test(feedback([1, 2, 3], double, 8), [256, 512, 768]);




// const myMathObject = {
//   sum:(...num) => num.reduce((x, y) => x + y),
//   product:(...num) => num.reduce((x, y) => x * y),
//   isEven: (num) => num % 2 === 0,
//   ceil: (num) => {
//     const splitNum = String(num).split(".");
//     return (splitNum.length !== 1)? Number(splitNum[0]) + 1 : Number(splitNum[0]);
//   },
//   floor: (num) => Number(String(num).split(".")[0]),
//   round: (num) => {
//     const splitNum = String(num).split(".");
//     return (Number(splitNum[1]) <= 4)? Number(splitNum[0]) : Number(splitNum[0]) + 1;
//   },
// };

// // これは `sum` のテストのサンプルです。`sum` メソッドを完成させたらテストしてみましょう。💪
// test(myMathObject.sum(1), 1);
// test(myMathObject.sum(1, 2, 3), 6);
// test(myMathObject.product(1, 2, 3), 6);
// test(myMathObject.product(5, 6, 7), 210);
// test(myMathObject.isEven(19), false);
// test(myMathObject.isEven(20), true);
// test(myMathObject.isEven(0), true);

// /* 以下の 2 つのメソッドも完成させましょう。完成したら自分でテストを用意し、うまく働くか確認しましょう。
// product は全ての引数の積 (product)、つまりすべての引数をかけた結果を返します。
// isEven は引数に数値を取り、それが偶数の場合は true を返し、奇数の場合は false を返します。
// 作成したメソッドを使って、次の問題の答えをコンソールに出力してみましょう。
// 19283, 18475, 199999 の合計を求めてください。
// 19283, 18475, 199999 の積を求めてください。
// 19 が偶数か奇数かを求めてください。 */


// /* myMathObject に ceil メソッドを追加してください。
// JavaScript で用意されている Math.ceil() メソッドは 使用せずに定義してください 。 */
// /**
//  * @param {number} num 数値
//  * @returns {number} 与えられた数字を切り上げた整数
//  */
// test(myMathObject.ceil(1.1), 2);
// test(myMathObject.ceil(2.2), 3);
// test(myMathObject.ceil(3.3), 4);
// test(myMathObject.ceil(4.4), 5);
// test(myMathObject.ceil(5.5), 6);
// test(myMathObject.ceil(5.0), 5);


// /* myMathObject に floor メソッドを追加してください。
// JavaScript で用意されている Math.floor() メソッドは 使用せずに定義してください 。 */
// /**
//  * @param {number} 数値
//  * @returns {number} 与えられた数字を切り下げた整数
//  */
// test(myMathObject.floor(1.1), 1);
// test(myMathObject.floor(2.2), 2);
// test(myMathObject.floor(3.3), 3);
// test(myMathObject.floor(4.4), 4);
// test(myMathObject.floor(5.5), 5);



// /* myMathObject に round メソッドを追加してください。
// JavaScript で用意されているMath.round() メソッドは 使用せずに定義してください 。 */
// /**
//  * @param {number} 数値
//  * @returns {number} 与えられた数字を四捨五入した整数
//  */
// test(myMathObject.round(1.1), 1);
// test(myMathObject.round(2.2), 2);
// test(myMathObject.round(3.3), 3);
// test(myMathObject.round(4.4), 4);
// test(myMathObject.round(5.5), 6);
// test(myMathObject.round(6.6), 7);
// test(myMathObject.round(7.7), 8);
// test(myMathObject.round(11.7), 12);
// test(myMathObject.round(20.1), 20);



/* myMathObject に primeFactorization メソッドを追加してください。
素因数分解を覚えていますか。0 でない正の整数を素数（それ以上割れない数）のかけ算になおすことです。
6 を素因数分解すると 2 x 3 になります。6 の素因数は 2 と 3 です。
指数とは素因数が何乗されているかですが、2 と 3 はそれぞれ 1 回しかでてこないので
2 についても、3 についても指数は 1 です。8 を素因数分解すると 2 x 2 x 2 で素因数は 2、
その指数は 3 です。 */
// const myMathObject = {
//   sum:(...num) => num.reduce((x, y) => x + y),
//   product:(...num) => num.reduce((x, y) => x * y),
//   isEven: (num) => num % 2 === 0,
//   ceil: (num) => {
//     const splitNum = String(num).split(".");
//     return (splitNum.length !== 1)? Number(splitNum[0]) + 1 : Number(splitNum[0]);
//   },
//   floor: (num) => Number(String(num).split(".")[0]),
//   round: (num) => {
//     const splitNum = String(num).split(".");
//     return (Number(splitNum[1]) <= 4)? Number(splitNum[0]) : Number(splitNum[0]) + 1;
//   },

//   primeFactorization: (num) => {
//     const result = {};
//     let subNum = num
//     for(let i = 2; i <= Math.sqrt(subNum); i++) {
//       let count = 0;
//       if(subNum % i === 0) {
//         while(subNum % i === 0) {
//           subNum /= i;
//           count++;
//         }
//         result[i] = count;
//       }
//     }
//     if (subNum > 1) result[subNum] = 1;
//     return result;
//   },
// };

// /**
//  * @param {number} 0 でない正の整数
//  * @returns {{ [primeFactor: number]: number }} 引数の数値を素因数分解し、
//  * その数値の素因数をキー、その素因数の指数を値にしたオブジェクト
//  */

// test(myMathObject.primeFactorization(2), { 2: 1 });
// test(myMathObject.primeFactorization(3), { 3: 1 });
// test(myMathObject.primeFactorization(4), { 2: 2 });
// test(myMathObject.primeFactorization(5), { 5: 1 });
// test(myMathObject.primeFactorization(6), { 2: 1, 3: 1 });
// test(myMathObject.primeFactorization(100), { 2: 2, 5: 2 });

// test(myMathObject.primeFactorization(200560490130), {
//   2: 1,
//   3: 1,
//   5: 1,
//   7: 1,
//   11: 1,
//   13: 1,
//   17: 1,
//   19: 1,
//   23: 1,
//   29: 1,
//   31: 1,
// });

// test(myMathObject.primeFactorization(900719925474099), {
//   3: 1,
//   53: 1,
//   157: 1,
//   1613: 1,
//   2731: 1,
//   8191: 1,
// });




// /* 関数 sayHelloToFriends を宣言してください */
// /**
//  * @param {Array<string>} nameArr - 友達の名前が入った配列
//  * @returns {Array<string>} 友達の名前それぞれに `"Hello"` の挨拶が付け加わった文字列を要素に持つ配列
//  */
// const sayHelloToFriends = (nameArr) => {
//   return nameArr.map(ele => `Hello, ${ele}!`);
// };

// const friends = ["Mario", "Luigi"];
// test(sayHelloToFriends(friends), ["Hello, Mario!", "Hello, Luigi!"]);


// const obj1 = { a: "A" };
// const obj2 = { a: "A", b: 2 };
// const obj3 = { a: "A", b: 2, c: "C", d: true };
// const obj4 = { a: "A", c: "C" };
// /* 関数 filterObjectForStrings を宣言してください。 */
// /**
//  * @param {object} obj オブジェクト
//  * @returns {{ [key: string]: string }} 引数で与えられたオブジェクトの、値が文字列であるキーと値のペアだけを持つ新しいオブジェクト。
//  */
// function filterObjectForStrings(obj) {
//   const result = {};
//   for(const key in obj) {
//     if(typeof obj[key] === "string") result[key] = obj[key];
//   }
//   return result;
// }

// test(filterObjectForStrings(obj1), obj1); // 変化なし
// test(filterObjectForStrings(obj2), obj1); // 値が 2 のペアは含まれていない
// test(filterObjectForStrings(obj3), obj4); // 値が 2 や true のペアは含まれていない



/*  関数 filterArrayForStrings を宣言してください。
この関数内で、2 問目で作った関数 filterObjectForStrings を使いましょう。 */
/**
//  * @param {Array<object>} arrayOfObjects - オブジェクトを要素に持つ配列
//  * @returns {Array<{ [key: string]: string }>} 引数で与えられた配列内の各オブジェクトについて、
//  * 値が文字列であるキーと値のペアのみを持つ新しいオブジェクトを作成し、
//  * そのオブジェクトを含む新しい配列を返り値として返す。
//  */
// const filterArrayForStrings = (arrayOfObjects) => arrayOfObjects.map(ele => filterObjectForStrings(ele));

// test(filterArrayForStrings([obj1]), [obj1]); // 変化なし
// // 2 番目の要素から値が 2 のペアは除くこと
// test(filterArrayForStrings([obj1, obj2]), [obj1, obj1]);

// test(filterArrayForStrings([obj3, obj2, obj1]), [obj4, obj1, obj1]);

/* : 以下のコードを実行する前に何が表示されるか予想してみましょう。
その後、コードを実行して予想が合っていたかどうかを確認してください。
なぜこのような結果になるのか理由を説明してください。 */
// const names = ["いち", "に", "さん", "よん"];

// for (let i = 0; i < 4; i++) {
//   for (let j = 0; j < names.length; j++) {
//     for (let k = 1; k < 3; k++) {
//       console.log(names[j]);
//     }
//   }
// }
// /* コンソールに、２回ずつnamesの各要素を出力。それを１セットとし４セット分繰り替えす */



// /* 関数 getDepth を宣言してください。 */
// /**
//  * @param {object}
//  * @returns {number} 引数のオブジェクトの深さ（何層になっているか）を返す。入れ子になったオブジェクトが複数ある場合は、一番深い層の数を返してください。
//  */
// const getDepth = (obj) => {
//   let resultCount = 1;

//   const countDeep = (obj) => {
//     let subCount = resultCount;

//     for(const key in obj) {
//       if(typeof obj[key] === "object") {
//         subCount++;
//         if(resultCount < subCount) resultCount = subCount;
//         countDeep(obj[key]);
//       }
//       subCount = 1;
//     }

//     return resultCount; 
//   };

//   return countDeep(obj);
// };

// const nestedObject1 = { a: "A" };
// const nestedObject2 = { a: "A", b: { c: "C" } };
// const nestedObject3 = { a: "A", b: { c: "C" }, d: { e: { f: "F" } } };
// const nestedObjectZ = {
//   z: {
//     y: {
//       x: {
//         w: {
//           v: {
//             u: {
//               t: {
//                 s: {
//                   r: {
//                     q: {
//                       p: {
//                         o: {
//                           n: {
//                             m: {
//                               l: {
//                                 k: {
//                                   j: {
//                                     i: {
//                                       h: {
//                                         g: {
//                                           f: {
//                                             e: "E",
//                                           },
//                                         },
//                                       },
//                                     },
//                                   },
//                                 },
//                               },
//                             },
//                           },
//                         },
//                       },
//                     },
//                   },
//                 },
//               },
//             },
//           },
//         },
//       },
//     },
//   },
// };

// // nestedObject1 の深さは 1 です
// test(getDepth(nestedObject1), 1);

// // nestedObject2 の深さは 2 です
// test(getDepth(nestedObject2), 2);

// // nestedObject3 の深さは 3 です
// test(getDepth(nestedObject3), 3);

// // nestedObjectZ の深さは 22 です。
// test(getDepth(nestedObjectZ), 22);
