	 let countEl = document.getElementById("count-el")
	 let count = 0
	 
	 function increment() {
		 count +=  1
		 countEl.textContent = count
	 }
	 
	 let saveEl = document.getElementById("save-el")
	 function save() {
		 let saveString = count + "  -  "
		 saveEl.innerText += saveString;
	 }