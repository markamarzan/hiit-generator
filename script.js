//Data sets for workout categories by muscle group
const exercises = {
  'Full Body': ['Jumping Jacks', 'Burpees', 'Kettlebell Swings', 'High Knees', 'Jump Rope'],
  'Upper Body': ['Rope Whips', 'Push Ups', 'Bear Crawls', 'Up-Down Plank'],
  'Lower Body': ['Squat Jump', 'Lunge Jump', 'Tuck Jump', 'Reverse Lunges'],
  'Core': ['Planks', 'Runner Crunches', 'Mountain Climbers', 'Russian Twists']
}

//Random number generator
function getRandomNum(num) {
  return Math.floor(Math.random() * num);
}

//HIIT Generator Function
function generateHIIT(arr) {
  let hiitWorkout = [];
  for (let prop in arr) {
    hiitWorkout.push(`${prop}: ${arr[prop][getRandomNum(arr[prop].length)]}`);
  }
  console.log(hiitWorkout);
}

generateHIIT(exercises);