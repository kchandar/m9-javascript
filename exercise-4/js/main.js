// Load the data in data/population-2010.json (use $.get, this
// is a jquery function which we will learn more about next class).
// Information on making ajax calls in jquery:
// https://learn.jquery.com/ajax/jquery-ajax-methods/
$.get("../data/population-2010.json", function(data) {
	console.log(data);

	// Answer the following questions by writing code to find the
	// answers. Log the result of each question to your browser's
	// developer console.

	// In 2010, how many 32 year olds were women?
	var women32 = 0;
	data.forEach(function(obj) {
		if(obj.age == '32') {
			women32 = obj.females;
		}
	});

	console.log(women32);

	// Are there more men or women who are 20?
	var women20 = 0;
	var men20 = 0;
	data.forEach(function(obj) {
		if(obj.age == '20') {
			women20 = obj.females;
			men20 = obj.males;
		}
	});
	console.log("women = " + women20 + " vs men = " + men20);

	// Find the total percentage of men and the percentage
	// of women in the population. Round both values to
	// 2 decimal places.
	var total = 0.0;
	var totew = 0.0;
	var totem = 0.0;
	data.forEach(function(obj) {
		totew += obj.females;
		totem += obj.males;
		total += (obj.females + obj.males);
	});

	var percw = ((totew / total) * 100).toFixed(2);
	var percm = ((totem / total) * 100).toFixed(2);
	console.log(total);
	console.log("percentage of women: " + percw);
	console.log("percentage of men: " + percm);
	// Create a boolean array where
	// at each index the value is true if there are more women
	// of that age than men.
	//
	// For example, at index 10 the value
	// should be false because there are more men aged 10 than
	// women.
	//
	// Bonus: Try to do this without using a loop
	var hasMoreWomen = [];
	data.forEach(function(obj) {
		if(obj.females > obj.males) {
			hasMoreWomen.push(true);
		}
		else {
			hasMoreWomen.push(false);
		}
	});

	var hasMoreWomenMap = data.map(function(obj) {
		if(obj.females > obj.males) {
			return true;
		}
		else {
			return false;
		}
	});

	console.log(hasMoreWomen);
	console.log(hasMoreWomenMap);


	// Log this array to the console. Look at its contents and come
	// up with one observation about the data that this array helps
	// you to see. Make a comment of this observation.
});
