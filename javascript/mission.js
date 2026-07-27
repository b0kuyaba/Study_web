const temp = [17, 25, 31, 22];

temp.forEach(val => {
  console.log(`현재 온도: ${val}`);
});

const tempPlus2 = temp.map(val => {
  return val + 2;
});
console.log(tempPlus2);

const tempOver25 = temp.filter(val => {
  return val > 25;
});
console.log(tempOver25);

const student = [
  { name: "민수", score: 75 },
  { name: "지우", score: 92 },
  { name: "현우", score: 84 },
  { name: "서연", score: 68 },
];

const scoreOver80 = student.filter(val => val.score > 80).map(val => val.name);
console.log(scoreOver80);
