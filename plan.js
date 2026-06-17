// plan.js — Shared plan data between Exercise Library and My Plan page
// Both exercise.html and plan.html use this file

// Load existing plan from localStorage (so data stays after refresh)
let myPlan = JSON.parse(localStorage.getItem("myPlan")) || [];

// Add an exercise to the plan
function addToPlan(id) {
  const alreadyAdded = myPlan.find(e => e.id === id);
  if (alreadyAdded) {
    alert("Already in your plan!");
    return;
  }
  const exercise = exercises.find(e => e.id === id);
  myPlan.push(exercise);
  savePlan();
  alert(exercise.name + " added to your plan!");
}

// Remove an exercise from the plan
function removeFromPlan(id) {
  myPlan = myPlan.filter(e => e.id !== id);
  savePlan();
}

// Save plan to localStorage
function savePlan() {
  localStorage.setItem("myPlan", JSON.stringify(myPlan));
}
