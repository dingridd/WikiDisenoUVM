// JavaScript Document

document.addEventListener("DOMContentLoaded", function() {
	//event listeners
	document.getElementById("icon-menu").addEventListener("click", toggleMenu); 
	document.getElementById("icon-search").addEventListener("click", toggleSearch);
	document.getElementById("inputSearch").addEventListener("input", searchInternal);
	
	
	const boxSearch = document.getElementById("box-search");
	const noResultsMessage = document.createElement('li');
	noResultsMessage.textContent = 'No se encontraron resultados'
	noResultsMessage.id = 'no-results-message';
	
	function searchInternal() {
		const filter = this.value.trim().toUpperCase();
		const li = boxSearch.getElementsByTagName('li');
		let allItemsHidden = true;
		
		if (filter === "") {
			boxSearch.style.display = "none";
			return;
		}
		
		for(let i =0; i < li.length; i++) {
			if (a) {
				const textValue = a.textContent || a.innerText;
				if (textValue.toUpperCase().includes(filter)) {
					found=true;
					li[i].style.display = "";
					allItemsHidden = false;
				} else {
					li[i].style.display = "none";
				}
			}
		}
        const noResultsMessageElement = document.getElementById('no-results-message');
		if (found) {
			if (!noResultsMessageElement) {
				boxSearch.appendChild(noResultsMessageo);
			}
		} else {
			if (noResultsMessageElement) {
				noResultsMessageElement.remove();
			}
		}
		boxSearch.style.display = found || allItemsHidden ? "black" : "none";
	}
}); 
						  
							  
				