// exercises.js — Shared dummy data for Fitness & Physiotherapy Exercise Planner
// All team members import this file. Do not modify the structure without informing the team.

const exercises = [
  // ── BACK PAIN ──────────────────────────────────────────────────────────────
  {
    id: 1,
    name: "Cat-Cow Stretch",
    category: "back pain",
    difficulty: "beginner",
    duration: 40,
    reps: 8,
    sets: 2,
    vid: "video/cat-cow.mp4",
    description: "A gentle spinal mobility exercise that relieves tension in the lower back and neck.",
    steps: [
      "Start on hands and knees with wrists below shoulders and knees below hips.",
      "Inhale and drop your belly toward the floor, lifting your head and tailbone (Cow).",
      "Exhale and round your spine toward the ceiling, tucking your chin and pelvis (Cat).",
      "Flow smoothly between the two positions.",
      "Repeat for the prescribed number of reps."
    ],
    completed: false
  },
  {
    id: 2,
    name: "Pelvic Tilt",
    category: "back pain",
    difficulty: "beginner",
    duration: 60,
    reps: 12,
    sets: 3,
    vid: "video/pelvic-tilt.mp4",
    description: "Strengthens the deep core muscles that support the lower back.",
    steps: [
      "Lie on your back with knees bent and feet flat on the floor.",
      "Gently flatten your lower back against the floor by tightening your abdominal muscles.",
      "Hold the position for 5 seconds.",
      "Relax and let your back return to its natural curve.",
      "Repeat for the prescribed number of reps."
    ],
    completed: false
  },
  {
    id: 3,
    name: "Child's Pose",
    category: "back pain",
    difficulty: "beginner",
    duration: 30,
    reps: 4,
    sets: 2,
    vid: "video/child-pose.mp4",
    description: "A restful stretch that gently elongates the lower back and hips.",
    steps: [
      "Kneel on the floor and sit back on your heels.",
      "Extend both arms forward and lower your forehead to the ground.",
      "Breathe deeply and let your lower back relax with each exhale.",
      "Hold for 30 seconds, then slowly rise back up.",
      "Repeat for the prescribed number of reps."
    ],
    completed: false
  },

  // ── KNEE PAIN ──────────────────────────────────────────────────────────────
  {
    id: 4,
    name: "Seated Knee Extension",
    category: "knee pain",
    difficulty: "beginner",
    duration: 50,
    reps: 10,
    sets: 3,
    vid: "video/seated-knee-extension.mp4",
    description: "Strengthens the quadriceps to reduce knee pain and improve joint stability.",
    steps: [
      "Sit upright in a sturdy chair with feet flat on the floor.",
      "Slowly straighten your right leg until it is parallel to the floor.",
      "Hold for 3–5 seconds, squeezing the thigh muscle.",
      "Slowly lower your foot back to the floor.",
      "Repeat on the left leg. Alternate for the prescribed number of reps."
    ],
    completed: false
  },
  {
    id: 5,
    name: "Wall Squat",
    category: "knee pain",
    difficulty: "intermediate",
    duration: 20,
    reps: 8,
    sets: 3,
    vid: "video/wall-squat.mp4",
    description: "Builds quadricep and glute strength with reduced knee stress.",
    steps: [
      "Stand with your back flat against a wall, feet shoulder-width apart.",
      "Slide your back down the wall until your knees are at about 90 degrees.",
      "Keep knees aligned over your feet — do not let them collapse inward.",
      "Hold the position for 20 seconds, then slide back up.",
      "Rest briefly and repeat for the prescribed number of reps."
    ],
    completed: false
  },
  {
    id: 6,
    name: "Straight Leg Raise",
    category: "knee pain",
    difficulty: "beginner",
    duration: 60,
    reps: 12,
    sets: 3,
    vid: "video/straight-leg-raise.mp4",
    description: "Strengthens the hip flexors and quads without bending the knee joint.",
    steps: [
      "Lie flat on your back with one knee bent and the other leg straight.",
      "Tighten the thigh muscle of your straight leg.",
      "Raise the straight leg to the height of the bent knee (about 45 degrees).",
      "Hold for 2 seconds, then slowly lower back down.",
      "Complete all reps on one side, then switch legs."
    ],
    completed: false
  },

  // ── STRETCHING ─────────────────────────────────────────────────────────────
  {
    id: 7,
    name: "Standing Quad Stretch",
    category: "stretching",
    difficulty: "beginner",
    duration: 30,
    reps: 2,
    sets: 2,
    vid: "video/standing-quad-strecth.mp4",
    description: "Loosens tight quadriceps and improves overall leg flexibility.",
    steps: [
      "Stand near a wall or chair for balance if needed.",
      "Bend your right knee and bring your right foot toward your buttocks.",
      "Hold your ankle with your right hand, keeping knees together.",
      "Stand tall and feel the stretch along the front of your thigh.",
      "Hold for 30 seconds, then switch legs."
    ],
    completed: false
  },
  {
    id: 8,
    name: "Doorway Chest Stretch",
    category: "stretching",
    difficulty: "beginner",
    duration: 30,
    reps: 3,
    sets: 1,
    vid: "video/doorway-chest-stretch.mp4",
    description: "Opens the chest and shoulders, counteracting prolonged sitting posture.",
    steps: [
      "Stand in an open doorway with arms at 90 degrees on each door frame.",
      "Step one foot forward and gently lean your body through the doorway.",
      "Feel the stretch across your chest and the front of your shoulders.",
      "Keep your back straight and avoid arching your lower back.",
      "Hold for 30 seconds. Repeat 3 times."
    ],
    completed: false
  },
  {
    id: 9,
    name: "Seated Hamstring Stretch",
    category: "stretching",
    difficulty: "beginner",
    duration: 30,
    reps: 2,
    sets: 2,
    vid: "video/seated-hamstring-stretch.mp4",
    description: "Relieves tightness in the hamstrings and reduces lower back strain.",
    steps: [
      "Sit on the edge of a chair with one leg extended straight in front of you.",
      "Keep your back straight and hinge forward from your hips (not your waist).",
      "Reach toward your extended foot until you feel a stretch in the back of your thigh.",
      "Hold for 30 seconds, then sit upright.",
      "Repeat on the other leg."
    ],
    completed: false
  },

  // ── MUSCLE STRENGTH ────────────────────────────────────────────────────────
  {
    id: 10,
    name: "Glute Bridge",
    category: "muscle strength",
    difficulty: "beginner",
    duration: 60,
    reps: 12,
    sets: 3,
    vid: "video/glute-bridge.mp4",
    description: "Activates the glutes and hamstrings while stabilising the lower back.",
    steps: [
      "Lie on your back with knees bent, feet flat on the floor hip-width apart.",
      "Press your feet into the floor and squeeze your glutes.",
      "Lift your hips until your body forms a straight line from shoulders to knees.",
      "Hold for 2 seconds at the top, then slowly lower back down.",
      "Repeat for the prescribed number of reps."
    ],
    completed: false
  },
  {
    id: 11,
    name: "Resistance Band Row",
    category: "muscle strength",
    difficulty: "intermediate",
    duration: 60,
    reps: 12,
    sets: 3,
    vid: "video/resistance-band-row.mp4",
    description: "Strengthens the upper back and improves posture.",
    steps: [
      "Sit on the floor with legs straight. Loop a resistance band around both feet.",
      "Hold one end of the band in each hand with palms facing each other.",
      "Sit tall and pull the band toward your waist, squeezing your shoulder blades together.",
      "Pause for 1 second, then slowly extend your arms back to the start.",
      "Repeat for the prescribed number of reps."
    ],
    completed: false
  },
  {
    id: 12,
    name: "Side-Lying Hip Abduction",
    category: "muscle strength",
    difficulty: "beginner",
    duration: 75,
    reps: 15,
    sets: 3,
    vid: "video/side-lying-hip-abduction.mp4",
    description: "Targets the hip abductors to improve hip stability and reduce knee and back pain.",
    steps: [
      "Lie on your side with legs straight, one on top of the other.",
      "Keep your body in a straight line from head to feet.",
      "Slowly raise the top leg to about 45 degrees, keeping the foot flexed.",
      "Hold for 2 seconds, then lower with control.",
      "Complete all reps on one side, then flip over and repeat."
    ],
    completed: false
  }
];

// Helper: get all unique categories
const categories = [...new Set(exercises.map(e => e.category))];

// Helper: filter by category
function getByCategory(category) {
  if (!category || category === "all") return exercises;
  return exercises.filter(e => e.category === category);
}

// Helper: search by name or description
function searchExercises(query) {
  const q = query.toLowerCase();
  return exercises.filter(e =>
    e.name.toLowerCase().includes(q) ||
    e.description.toLowerCase().includes(q) ||
    e.category.toLowerCase().includes(q)
  );
}

// Helper: mark an exercise as completed
function markCompleted(id) {
  const exercise = exercises.find(e => e.id === id);
  if (exercise) exercise.completed = true;
}

// Helper: reset all progress
function resetProgress() {
  exercises.forEach(e => e.completed = false);
}
