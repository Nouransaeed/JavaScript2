
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



function computeEarnings(tasks, hourlyRate) {

	const inHoursArr = tasks.map(task => task.duration / 60).filter(hours => hours <= 2);

	const maartjesPayArr = inHoursArr.map(hours => hours * maartjesHourlyRate);

	const totalPay = maartjesPayArr.reduce((sum, amount) => sum + amount);

	const toEuro = totalPay.toFixed(2);

	return toEuro;

}





const earnings = computeEarnings(maartjesTasks, maartjesHourlyRate);



//converting 



console.log(`Martje has earned €${earnings}`);


module.exports = {

	maartjesTasks,

	maartjesHourlyRate,

	computeEarnings,

};