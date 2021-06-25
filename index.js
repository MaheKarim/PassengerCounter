	/**
	 * 	What I Learn From This Project
	 * 	1. Script tag
	 * 	2. Variables
	 * 	3. Numbers
	 * 	4. Strings
	 * 	5. console.log
	 * 	6. functions
	 * 	7. The DOM
	 */

	 let countEl = document.getElementById("count-el")
	 let count = 0
	 
	 function increment() {
		 count +=  1
		 countEl.textContent = count
	 }
	 
	 let saveEl = document.getElementById("save-el")
	 function save() {
		 let saveString = count + "  -  "
		 saveEl.textContent += saveString;
	 }
	 
	 function refresh() {
		 countEl.textContent = 0
		 count = 0
	 }