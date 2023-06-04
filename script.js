const bancoDeDados = JSON.parse(localStorage.getItem('bancoDeDados')) || [];

function adicionandoNovoUsuario() {
  const emailInput = document.querySelector('.email-input').value
  const passwordInput = document.querySelector('.password-input').value

  const infosPrivadas = { email: emailInput, password: passwordInput }
  bancoDeDados.push(infosPrivadas)

  localStorage.setItem('bancoDeDados', JSON.stringify(bancoDeDados))
}

function verificarLogin() {
  const emailInput = document.querySelector('.email-input').value
  const passwordInput = document.querySelector('.password-input').value

  for (let i = 0; i < bancoDeDados.length; i++) {
    const usuario = bancoDeDados[i]

    if (usuario.email == emailInput && usuario.password == passwordInput) {
      console.log('Logado com sucesso!')
      return
    }
  }
  window.alert('Email ou senha inválidos')
  console.log('Email ou senha inválidos')
}

console.log(bancoDeDados)

// localStorage.clear()
