document.addEventListener("DOMContentLoaded", () => {
	const darkmod = document.querySelector("#darkmod");
	const html = document.documentElement;

	// Variáveis para temas e classes
	const darkTheme = "dark";
	const lightTheme = "light";
	const moonIcon = "bi-moon";
	const sunIcon = "bi-sun";

	// Inicia com o tema escuro
	// html.setAttribute("data-theme", darkTheme);
	// darkmod.classList.replace(moonIcon, sunIcon);

	// Salva a preferência no localStorage
	// localStorage.setItem("theme", darkTheme);

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
