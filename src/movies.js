/* eslint no-restricted-globals: 'off' */

// Iteration 1: Ordering by year - Order by year, ascending (in growing order)

const orderByYear = (arr) => {
	let arrCopy = [ ...arr ];

	let sortedArray = arrCopy.sort((a, b) => {
		if (a.year === b.year) {
			return a.title.localeCompare(b.title);
		} else {
			return a.year - b.year;
		}
	});

	return sortedArray;
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct

const howManyMovies = (arr) => {
	// let counter = 0;

	// for(i = 0; i < arr.length; i++) {
	//   let bothConditions = arr[i].genre.includes('Drama') && arr[i].director.includes('Steven Spielberg');
	//   if (bothConditions) {
	//     counter++;
	//   }
	// }
	// return counter;

	let counter = 0;
	let filteredMovies = arr.filter((obj) => {
		if (obj.director === 'Steven Spielberg' && obj.genre.includes('Drama')) {
			counter++;
			return obj;
		}
	});

	return counter;
};

// Iteration 3: Alphabetic Order - Order by title and print the first 20 titles

const orderAlphabetically = (arr) => {
	let newArray = [ ...arr ];

	newArray.sort((a, b) => {
		return a.title.localeCompare(b.title);
	});

	let firstTwenty = newArray.slice(0, 20);

	let firstTwentyTitle = firstTwenty.map((movie) => {
		return movie.title;
	});

	return firstTwentyTitle;
};

// Iteration 4: All rates average - Get the average of all rates with 2 decimals

const ratesAverage = (arr) => {
	if (arr.length === 0) {
		return 0;
	}

	let total = 0;
	for (let obj of arr) {
		if (!obj.rate) {
			continue;
		} else {
			total += obj.rate;
		}
	}
	return Number(parseFloat(total / arr.length).toFixed(2));
};

// Iteration 5: Drama movies - Get the average of Drama Movies

const dramaMoviesRate = (arr) => {
	let dramaArray = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i].genre.includes('Drama')) {
			dramaArray.push(arr[i]);
		}
	}
	return ratesAverage(dramaArray);
};

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// Code not working on Jasmine
// const timeConverter = (time) => {
// 	let hourInt = 0;
// 	let minInt = 0;

// 	for (let i = 0; i < time.length; i++) {
// 		if (time[i] === 'h') {
// 			hourInt += Number(time[i - 1]);
// 		} else if (time[i] === 'm') {
// 			minInt += Number(time[i - 1] + time[i - 2]);
// 		}
// 	}

// 	return hourInt * 60 + minInt;
// };

// const turnHoursToMinutes = (arr) => {
// 	let copyArr = [ ...arr ];

// 	for (let i = 0; i < copyArr.length; i++) {
// 		copyArr[i].duration = timeConverter(copyArr[i].duration);
// 	};

// 	return copyArr;
// };

// BONUS Iteration: Best yearly rate average - Best yearly rate average
