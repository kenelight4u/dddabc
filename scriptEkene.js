var button = document.querySelector("button");
var input = document.querySelector("input");
var ul = document.querySelector("ul");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.className = "joke";
	// li.classList.toggle("done");
	input.value = "";

	// myFunction(li);
	// if (li.click) {
	// 	myFunction();
	// };
}


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// function myFunction(){
// 	var li = document.querySelectorAll("li");
// 	  // li.classList.add("done");
// 	  // li.classlist.toggle("done");
// 	console.log("its working");		
// 	}

	
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

// li.addEventListener("click", myFunction);

