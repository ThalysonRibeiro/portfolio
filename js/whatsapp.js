const enviarMensagem = () => {
  const phone = '65981278291';
  const message = 'Oi! Deixe sua mensagem que respondo assim que puder.'
  window.open(
    `https://wa.me/${phone}?text=${message}`,
    '_blank'
  )
}