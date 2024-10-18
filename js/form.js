document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('emailForm');
  const loading = document.getElementById('loading');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Mostrar o indicador de carregamento
    loading.style.display = 'flex';

    const name = document.getElementById('campo-nome').value;
    const email = document.getElementById('campo-email').value;
    const message = document.getElementById('campo-mensagem').value;

    const data = {
      nome: name,
      email: email,
      mensagem: message
    };

    fetch('https://enviar-e-mail-950ae0fd007c.herokuapp.com/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        console.log('Response status:', response.status);
        if (!response.ok) {
          throw new Error('Erro ao enviar e-mail');
        }
        return response.json();
      })
      .then(data => {
        console.log('Success:', data);
        window.location.href = "../pages/thanks.html";
      })
      .catch((error) => {
        console.error('Erro:', error);
        // Esconder o indicador de carregamento em caso de erro
        loading.style.display = 'none';
        alert('Ocorreu um erro ao enviar o e-mail. Por favor, tente novamente.');
      });
  });
});