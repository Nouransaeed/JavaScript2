'use strict';

const monday = [
  {
    name: 'Write a summary HTML/CSS',
    duration: 180,
  },
  {
    name: 'Some web development',
    duration: 120,
  },
  {
    name: 'Fix homework for class10',
    duration: 20,
  },
  {
    name: 'Talk to a lot of people',
    duration: 200,
  },
];

const tuesday = [
  {
    name: 'Keep writing summary',
    duration: 240,
  },
  {
    name: 'Some more web development',
    duration: 180,
  },
  {
    name: 'Staring out the window',
    duration: 10,
  },
  {
    name: 'Talk to a lot of people',
    duration: 200,
  },
  {
    name: 'Look at application assignments new students',
    duration: 40,
  },
];

const maartjesTasks = monday.concat(tuesday);
const maartjesHourlyRate = 20;

/* const computeEarnings = (tasks, hourlyRate) => {
  let totalMins = 0;
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].duration >= 120) {
      totalMins += tasks[i].duration;
    }
  }
  const hours = totalMins / 60;
  return hours * hourlyRate;
}; */

const computeEarnings = (tasks, hourlyRate) => {
  const hours = tasks.filter(function(task) {
    return task.duration >= 120;
  });
  const total = hours.map(function(time) {
    return time.duration / 60;
  });
  function sumofArray(sum, num) {
    return sum + num;
  }
  return total.reduce(sumofArray) * hourlyRate;
};

// eslint-disable-next-line no-unused-vars
const earnings = computeEarnings(maartjesTasks, maartjesHourlyRate);

// add code to convert `earnings` to a string rounded to two decimals (euro cents)

console.log(`Maartje has earned €${Math.round((earnings + 0.00001) * 100) / 100}`);

// Do not change or remove anything below this line
module.exports = {
  maartjesTasks,
  maartjesHourlyRate,
  computeEarnings,
};
