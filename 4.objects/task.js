function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

let John = new Student("John", "male", 25);
let Bruce = new Student("Bruce", "male", 38);
let Diana = new Student("Diana", "female", 17);
let Geralt = new Student("Geralt from Rivia", "mutant", 125);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
};
Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) {
    this.marks = new Array();
    this.marks.push(mark);
  } else {
    this.marks.push(mark);
  }
};

Student.prototype.addMarks = function (...theMarks) {
  if (this.marks === undefined) {
    this.marks = new Array();
    this.marks.push(...theMarks);
  } else {
    this.marks.push(...theMarks);
  }
};

Student.prototype.getAverage = function () {
  if (this.marks === undefined) {
    this.marks = new Array();
  }
  console.log(this.marks);

  let sum = 0;
  for (mark of this.marks) {
    sum += mark;
  }
  let lgth = this.marks.length;
  return sum / lgth;
};

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;
  this.exclude = reason;
}
