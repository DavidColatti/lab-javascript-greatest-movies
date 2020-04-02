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
  let newArray = [...arr];

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

// Iteration 5: Drama movies - Get the average of Drama Movies

// Iteration 6: Time Format - Turn duration of the movies from hours to minutes

// BONUS Iteration: Best yearly rate average - Best yearly rate average
