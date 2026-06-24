// progress.js
// This page reads exercise plan data from localStorage.
// The data comes from plan.js using localStorage name: "myPlan"

let exerciseList = JSON.parse(localStorage.getItem("myPlan")) || [];

// Make sure every exercise has completed status and dateCompleted
exerciseList = exerciseList.map(function(exercise) {
    return {
        ...exercise,
        completed: exercise.completed || false,
        dateCompleted: exercise.dateCompleted || ""
    };
});

saveProgress();

function saveProgress() {
    localStorage.setItem("myPlan", JSON.stringify(exerciseList));
}

function loadProgress() {
    const total = exerciseList.length;

    const completed = exerciseList.filter(function(exercise) {
        return exercise.completed === true;
    }).length;

    const remaining = total - completed;

    let percentage = 0;

    if (total > 0) {
        percentage = Math.round((completed / total) * 100);
    }

    document.getElementById("totalExercise").innerText = total;
    document.getElementById("completedExercise").innerText = completed;
    document.getElementById("remainingExercise").innerText = remaining;

    const progressBar = document.getElementById("progressBar");
    progressBar.style.width = percentage + "%";
    progressBar.innerText = percentage + "%";

    const progressMessage = document.getElementById("progressMessage");

    if (total === 0) {
        progressMessage.innerText = "No exercises added yet. Please add exercises from the Exercise Library.";
    } else if (percentage === 0) {
        progressMessage.innerText = "Let's start your exercise plan!";
    } else if (percentage < 50) {
        progressMessage.innerText = "Good start! Keep going.";
    } else if (percentage < 100) {
        progressMessage.innerText = "Great progress! You are almost there.";
    } else {
        progressMessage.innerText = "Excellent! You have completed all exercises.";
    }

    showExerciseTable();
}

function showExerciseTable() {
    const table = document.getElementById("progressTable");
    table.innerHTML = "";

    if (exerciseList.length === 0) {
        table.innerHTML = `
            <tr>
                <td colspan="3" class="text-center">No exercise found.</td>
            </tr>
        `;
        return;
    }

    exerciseList.forEach(function(exercise, index) {
        const status = exercise.completed
            ? '<span class="badge bg-success">Completed</span>'
            : '<span class="badge bg-warning text-dark">Pending</span>';

        table.innerHTML += `
            <tr>
                <td>${exercise.name}</td>
                <td>${status}</td>
                <td>${exercise.dateCompleted || "-"}</td>
            </tr>
        `;
    });
}

function resetProgress() {
    exerciseList.forEach(function(exercise) {
        exercise.completed = false;
        exercise.dateCompleted = "";
    });

    saveProgress();
    loadProgress();
}

loadProgress();