document.addEventListener("DOMContentLoaded", () => {
	const darkmod = document.querySelector("#darkmod");

	darkmod.onclick = () => {
		if (darkmod.classList.contains("bi-moon")) {
			darkmod.classList.replace("bi-moon", "bi-sun");
			document.body.classList.add("color");
		} else {
			darkmod.classList.replace("bi-sun", "bi-moon");
			document.body.classList.remove("color");
		}
	};
});
