function reverseJSON(json) {
	var keys = Object.keys(json);

	var newJSON = {};
	for (var k = 0; k < keys.length; k++) {
		newJSON[json[keys[k]]] = keys[k];
	}

	return newJSON
}

function doUI() {
	var input = document.getElementById("input");
	
	var json = input.value;
	json = JSON.parse(json);
	json = reverseJSON(json);	
	json = JSON.stringify(json);	

	input.value = json;
}