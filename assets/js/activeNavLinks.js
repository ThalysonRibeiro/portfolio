document.addEventListener("DOMContentLoaded", () => {
	// Seleciona todas as seções e links do menu
	const sections = document.querySelectorAll("nav, header, section, footer");
	const menuLinks = document.querySelectorAll(".menu a");

	// Função para verificar qual seção está visível
	const checkActiveSection = () => {
		let current = "";

		sections.forEach((section) => {
			const sectionTop = section.offsetTop;
			const sectionHeight = section.clientHeight;
			if (window.scrollY >= sectionTop - sectionHeight / 3) {
				current = section.getAttribute("id");
			}
		});

		menuLinks.forEach((link) => {
			link.classList.remove("active");
			if (link.getAttribute("href").substring(1) === current) {
				link.classList.add("active");
			}
		});
	};

	// Adiciona o evento de scroll
	window.addEventListener("scroll", checkActiveSection);

	// Chama a função uma vez para definir o estado inicial
	checkActiveSection();
});
