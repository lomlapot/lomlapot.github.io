window.onclick = ()=> {
	const texts = document.querySelectorAll(".menu-item");
//	console.log (texts)
	texts.forEach(text=> {
		const value = text.getAttribute("data-value");
		const arr = value.split("#");
		const radios = document.getElementsByName('toggle');
		for (let i = 0; i < arr.length ; i++) {
			if (radios[i].checked) {
				text.innerHTML = arr[i];
			}
		}
	})
}
