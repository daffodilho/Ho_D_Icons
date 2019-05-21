(() => {
	console.log('fired!');


	//select elements with JavaScript//

	//setting up a variable using the let keyword,
	//and using a css selector to find the element we want to use.
	//let stores the reference to element as a variable (in memory)//

	let svgGraphic = document.querySelector("#badgeSVG"),
        mainHeadline = document.querySelector(".main-headline"),
        subHeadline = document.querySelector(".sub-headline"),
        swapTextButton = document.querySelector(".switch-type")

	//funtions are reusable pieces of code
	//that you can run any time

	function logMyId() {
		console.log(this.id);

		this.style.opacity = 0.5;
	}
    
    function swapText(){
    mainHeadline.textContent = "Now you're something else!";
    mainHeadline.classList.toggle("selected");
        
    subHeadline.textContent = "So are you!";
    subHeadline.classList.toggle("selected");
    }
    
    // events always go down here
	svgGraphic.addEventListener("click", logMyId);
    swapTextButton.addEventListener("mouseover", swapText);

})();