(() => {
	console.log('hello from js');
	let allSVG = document.querySelectorAll(".svg");

	function logSVG(){
		console.log(this.id); 
	}
	allSVG.forEach(item => item.addEventListener("click", logSVG));
	
})();