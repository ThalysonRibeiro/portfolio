document.addEventListener("DOMContentLoaded", () => {
	const menu = document.getElementById("menu");
	const btn = document.getElementById("btn-menu");

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

	window.addEventListener("scroll", () => {
		const navbar = document.getElementById("navbar");
		if (window.scrollY > 50) {
			navbar.classList.add("navbar-scrolled");
		} else {
			navbar.classList.remove("navbar-scrolled");
		}
	});

	//NAVEGAÇÃO SEM PRECISAR DE #
	// Verifica se há uma rota na URL
	const path = window.location.pathname;
	if (path !== "/") {
		const sectionId = path.replace("/", "");
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	}

	// Para links dentro da página
	document.querySelectorAll('a[href^="/"]').forEach((anchor) => {
		anchor.addEventListener("click", function (e) {
			e.preventDefault();
			const sectionId = this.getAttribute("href").replace("/", "");
			const element = document.getElementById(sectionId);
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
				// Atualiza a URL sem recarregar a página
				history.pushState({}, "", this.getAttribute("href"));
			}
		});
	});
});