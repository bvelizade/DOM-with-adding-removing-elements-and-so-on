// 1. Set the text of the <h1> element
let h1 = document.querySelector("h1");
h1.textContent = "My Activities List";


// 2. Set the color of the <h1> to a different color
h1.style.color = "#4286f4";


// 3. Set the content of the '.desc' paraghraph
// The content should include at least one HTML tag
let p = document.querySelector(".desc");
p.innerHTML = "A <strong>list of fun things</strong> I wanna do today";


// 4. Set the class of the <ul> to "list"
let ul = document.querySelector("ul");
ul.className = "list";


// 5. Create a new list item and add it to the <ul>
let li = document.createElement("li");
li.innerHTML = "<input> Eat an ice cream";
ul.appendChild(li);

// 6. Change all <input> elements from text fields to checkboxes

let inputs = document.querySelectorAll("input"); 

for(i = 0; i < inputs.length; i++){
	inputs[i].type = "checkbox";
}


// 7. Create a <button> element, and set its text to "Delete"
// Add the <button> inside the '.extra' <div>
let div = document.querySelector(".extra");
let btn = document.createElement("BUTTON"); 
btn.style.borderRadius = "5px";
btn.textContent = "Delete";
div.appendChild(btn);



// 8.Remove the '.extra' <div> element from the DOM when a user clicks the 'Delete button'

btn.addEventListener("click", () => {
	let divMain = document.querySelector(".bg-light");
	divMain.removeChild(div);
});


