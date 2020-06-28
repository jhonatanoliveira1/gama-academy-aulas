interface Usuario {
  nome: string,
  email: string,
  address?: string;
}

function getUser(): Usuario {
  return {
    nome: 'Jhonatan',
    email: 'Jhonatan@gmail.com'
  }
}

function setUser(usuario: Usuario) {
  // ...
}