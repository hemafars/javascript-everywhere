let studnts = [
  {
    name: "ahmed",
    sorcs: 100,
  },
  {
    name: "mohamed",
    sorcs: 95,
  },
  {
    name: "ali",
    sorcs: 80,
  },
  {
    name: "omar",
    sorcs: 80,
  },
  {
    name: "mahmod",
    sorcs: 80,
  },
];
let Excellent = 0;
let Good = 0;
let NeedsWork = 0;

for (const studint of studnts) {
  let result;
  console.log(studint);
  if (studint.sorcs >= 90) {
    result = "Excellent";
    Excellent++;
  } else if (studint.sorcs >= 70 || studint.sorcs >= 89) {
    result = "Good";
    Good++;
  } else {
    result = "NeedsWork";
    NeedsWork++;
  }
  console.log(`${studint.name}-${studint.sorcs}-${result}`);
}

console.log(`length : ${studnts.length}`);
console.log(`Excellent : ${Excellent}`);
console.log(`Good : ${Good}`);
console.log(`NeedsWork : ${NeedsWork}`);
