function assignGrade(score) {
  if (score > 90) {
    return "A";
  } else if (score > 80) {
    return "B";
  } else if (score > 70) {
    return "C";
  } else if (score > 65) {
    return "D";
  } else {
    return "E";
  }
}

for (score = 60; score <= 100; score++) {
  var score = i;
  assignGrade(i);
  console.log("Voor 91 punten krijg je een A");
}
