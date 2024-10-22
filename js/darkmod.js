document.addEventListener("DOMContentLoaded", () => {
	const darkmod = document.querySelector("#darkmod");
	const html = document.documentElement;

	// Variáveis para temas e classes
	const darkTheme = "dark";
	const lightTheme = "light";
	const moonIcon = "bi-moon";
	const sunIcon = "bi-sun";

	// Verifica a preferência do tema no localStorage
	const savedTheme = localStorage.getItem("theme");

	if (savedTheme) {
		html.setAttribute("data-theme", savedTheme);
		// Atualiza o ícone com base no tema salvo
		if (savedTheme === darkTheme) {
			darkmod.classList.replace(moonIcon, sunIcon);
		} else {
			darkmod.classList.replace(sunIcon, moonIcon);
		}
	} else {
		// Define um tema padrão caso nenhum tema seja salvo
		html.setAttribute("data-theme", lightTheme); // Ou darkTheme, dependendo da sua preferência
		darkmod.classList.replace(sunIcon, moonIcon);
	}

	darkmod.onclick = () => {
		const currentTheme = html.getAttribute("data-theme");

		if (currentTheme === darkTheme) {
			html.removeAttribute("data-theme");
			localStorage.setItem("theme", lightTheme);
			darkmod.classList.replace(sunIcon, moonIcon);
		} else {
			html.setAttribute("data-theme", darkTheme);
			localStorage.setItem("theme", darkTheme);
			darkmod.classList.replace(moonIcon, sunIcon);
		}
	};
});
