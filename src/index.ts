import LoginUsuario from "./usuario/service/LoginUsuario.ts";
import RegistrarUsuario from "./usuario/service/RegistrarUsuario.ts";

const registrar = new RegistrarUsuario();

registrar.executar({
  nome: "Diguya",
  email: "diguya@email.com",
  senha: "123456",
});

const login = new LoginUsuario();
const usuario = await login.executar({
  email: "diguya@email.com",
  senha: "123456",
});

console.log(usuario);
