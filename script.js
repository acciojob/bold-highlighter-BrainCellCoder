function highlight() {
    //Write your code here
	const words = document.querySelectorAll("strong");
	words.forEach((word) => {
		word.classList.add("green")
	})
}


function return_normal() {
    //Write your code here
const words = document.querySelectorAll("strong");
	words.forEach((word) => {
		word.classList.remove("green")
	})
    
}
