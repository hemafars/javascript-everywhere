// const studint = {
//   firastName: "hema",
//   lastName: "fars",
//   country: "egyption",
// };
// console.log(studint.firastName);
console.log("----------------");
let studnts = [
  {
    name: "hema",
    sorcs: 100,
  },
  {
    name: "mlk",
    sorcs: 95,
  },
  {
    name: "salma",
    sorcs: 80,
  },
  {
    name: "mohamed",
    sorcs: 95,
  },
  {
    name: "yasen",
    sorcs: 98,
  },
];
let passstudnts = 0;
let falltudnts = 0;

for (const studint of studnts) {
  let result;
  console.log(studint);
  if (studint.sorcs >= 50) {
    result = "pass";
    passstudnts++;
  } else {
    result = "fall";
    falltudnts++;
  }
  console.log(`${studint.name}-${studint.sorcs}-${result}`);
}

console.log(`length : ${studnts.length}`);
console.log(`passs : ${passstudnts}`);
console.log(`fill : ${falltudnts}`);
