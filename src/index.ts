import ColecaoUsuarioMemoria from "./adapters/ColecaoUsuarioMemoria.ts";
import LoginUsuario from "./core/usuario/service/LoginUsuario.ts";
import RegistrarUsuario from "./core/usuario/service/RegistrarUsuario.ts";
import RealCripto from "./adapters/RealCripto.ts";

/**
 * Instancia de implementação concreta das interfaces InverterCripto e ColecaoUsuario
 * const provedorCripto = new InverterCripto();
 * InverterCripto torna-se uma implementação depreciada e de forma simples esta sendo substituido
 */
const provedorCripto = new RealCripto();
const colecaoUsuario = new ColecaoUsuarioMemoria();

/**
 * Instancia do Caso de uso passando as dependências como parametro
 * O caso de uso recebe uma interface no construtor mas aqui passamos como input a implementação concréta
 */
const registrar = new RegistrarUsuario(colecaoUsuario, provedorCripto);

await registrar.executar({
  nome: "Diguya",
  email: "diguya@email.com",
  senha: "123456",
});

const login = new LoginUsuario(provedorCripto);

const usuario = await login.executar({
  email: "diguya@email.com",
  senha: "123456",
});

console.log(usuario);
