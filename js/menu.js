document.addEventListener("click", () => {
	const menu = document.getElementById("menu");
	const bnt = document.getElementById("bnt-menu");
	menu.classList.toggle("show");
	bnt.classList.toggle("ativar");
});

// Fechar o menu se clicar fora dele
document.addEventListener("click", (event) => {
	const menu = document.getElementById("menu");
	const bnt = document.getElementById("bnt-menu");
	const isClickInsideMenu = menu.contains(event.target);
	const isClickOnButton = bnt.contains(event.target);

	if (
		!isClickInsideMenu &&
		!isClickOnButton &&
		menu.classList.contains("show")
	) {
		menu.classList.remove("show");
		bnt.classList.remove("ativar");
	}
});
