function slugify(title) {
	// Change code below this line
	const normalize = title.toLowerCase();
	slug = normalize.join("-");
	return slug;

	// Change code above this line
}

slugify("Arrays for begginers");
