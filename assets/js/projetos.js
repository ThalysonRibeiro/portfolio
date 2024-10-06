document.addEventListener("DOMContentLoaded", () => {
  // botão

  const divCards = document.getElementById("container-cards");
  let card = "";

  for (const projeto of projetos) {
    card += /* html */ `
   <div class="container-cards" data-aos="fade-up"
   data-aos-anchor-placement="bottom-bottom">
        <div class="card">
          <img src="${projeto.image}" alt="">
          <div class="conteudo-card">
            <h2>${projeto.titulo}</h2>
            <h3>${projeto.categoria}</h3>
            <p>${projeto.descricao}</p>
          </div>
          <div class="tecnologias">
            ${projeto.tecnologias}
          </div>
        </div>
        <div class="botao-card">
          <a class="link-projeto" href="${projeto.site}"target="_blank"><span>acesse o stie</span></a>
          <a class="link-projeto" href="${projeto.repositorio}"target="_blank"><span><i class="bi bi-github"></i></span></a>
        </div>
        </div>
  `;
  }
  divCards.innerHTML = card;
});
