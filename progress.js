
// progress.js
// This page reads exercise plan data from localStorage.
// The data comes from plan.js when user adds exercise to My Plan.

let exerciseList = JSON.parse(localStorage.getItem("myPlan")) || [];

function loadProgress() {
    const total = exerciseList.length;

    // If the exercise does not have completed status yet,
    // it will be counted as pending.
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
        progressMessage.innerText = "No exercise has been added to your plan yet.";
    } else if (percentage === 100) {
        progressMessage.innerText = "Great job! You have completed all exercises.";
    } else {
        progressMessage.innerText = "Good job! You have completed " + percentage + "% of your exercise plan.";
    }

    showExerciseTable();
}

function showExerciseTable() {
    const table = document.getElementById("progressTable");
    table.innerHTML = "";

    if (exerciseList.length === 0) {
        table.innerHTML = `
            <tr>
                <td colspan="2" class="text-center">
                    No exercise added yet.
                </td>
            </tr>
        `;
        return;
    }

    exerciseList.forEach(function(exercise) {
        const status = exercise.completed
            ? '<span class="badge bg-success">Completed</span>'
            : '<span class="badge bg-warning text-dark">Pending</span>';

        table.innerHTML += `
            <tr>
                <td>${exercise.name}</td>
                <td>${status}</td>
            </tr>
        `;
    });
}

loadProgress();