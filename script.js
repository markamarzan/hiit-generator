//Data sets for workout categories by muscle group
const exercises = {
  fullBody: ['Jumping Jacks', 'Burpees', 'Kettlebell Swings', 'High Knees', 'Jump Rope'],
  upperBody: ['Rope Whips', 'Push Ups', 'Bear Crawls', 'Up-Down Plank'],
  lowerBody: ['Squat Jump', 'Lunge Jump', 'Tuck Jump', 'Reverse Lunges'],
  core: ['Planks', 'Runner Crunches', 'Mountain Climbers', 'Russian Twists']
}

//Random number generator
function getRandomNum(num) {
  return Math.floor(Math.random() * num);
}

