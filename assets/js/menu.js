document.addEventListener("DOMContentLoaded", () => {
	const menu = document.getElementById("menu");
	const btn = document.getElementById("bnt-menu");

	if (!menu || !btn) {
		console.error("Menu ou botão não encontrados");
		return;
	}

	document.addEventListener("click", (event) => {
		const isClickInsideMenu = menu.contains(event.target);
		const isClickOnButton = btn.contains(event.target);

		if (isClickOnButton) {
			menu.classList.toggle("show");
			btn.classList.toggle("ativar");
		} else if (!isClickInsideMenu && menu.classList.contains("show")) {
			menu.classList.remove("show");
			btn.classList.remove("ativar");
		}
	});
});
