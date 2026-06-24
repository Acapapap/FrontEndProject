// plan.js — Shared plan data between Exercise Library and My Plan page

let myPlan = JSON.parse(localStorage.getItem("myPlan")) || [];

function addToPlan(id) {
  const alreadyAdded = myPlan.find(e => e.id === id);

  if (alreadyAdded) {
    alert("Already in your plan!");
    return;
  }

  const exercise = exercises.find(e => e.id === id);

  const newExercise = {
    ...exercise,
    completed: false,
    dateCompleted: ""
  };

  myPlan.push(newExercise);
  savePlan();

  alert(exercise.name + " added to your plan!");
}

function removeFromPlan(id) {
  myPlan = myPlan.filter(e => e.id !== id);
  savePlan();
}

function savePlan() {
  localStorage.setItem("myPlan", JSON.stringify(myPlan));
}