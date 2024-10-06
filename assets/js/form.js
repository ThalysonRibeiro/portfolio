document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('emailForm').addEventListener('submit', (e) => {
    e.preventDefault();

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
        console.log('Response status:', response.status); // Log do status da resposta
        if (!response.ok) {
          throw new Error('Erro ao enviar e-mail');
        }
        return response.json();
      })
      .then(data => {
        console.log('Success:', data); // Log do sucesso
        window.location.href = "https://portfolio-tau-weld-10.vercel.app/obrigado.html"; // Redirecionamento
      })
      .catch((error) => {
        console.error('Erro:', error); // Log do erro
      });
  });
});
