const students = [
  {
    rollNum: 1,
    name: "Sam",
    marks: {
      maths: 10,
      phy: 20,
      chem: 21,
    },
  },
  {
    rollNum: 2,
    name: "David",
    marks: {
      maths: 91,
      phy: 10,
      chem: 43,
    },
  },
  {
    rollNum: 3,
    name: "Max",
    marks: {
      maths: 12,
      phy: 80,
      chem: 78,
    },
  },
  {
    rollNum: 4,
    name: "Jimmy",
    marks: {
      maths: 90,
      phy: 30,
      chem: 87,
    },
  },
];

var topper = students
  .map((s) => ({
    ...s,
    total: s.marks.maths + s.marks.phy + s.marks.chem,
  }))
  .reduce((res, s) => (s.total > res.total ? s : res)).name;
console.log(topper);

var mathsTopper = students.reduce((res, s) =>
  s.marks.maths > res.marks.maths ? s : res
).name;
console.log(mathsTopper);
