import CasoDeUso from "../../shared/CasoDeUso";
import ColecaoUsuarios from "../data/ColecaoUsuario";
import Usuario from "../model/Usuario";

export default class RegistrarUsuario
  implements CasoDeUso<Required<Usuario>, void>
{
  async executar(usuario: Required<Usuario>): Promise<void> {
    const senhaCripto = usuario.senha.split("").reverse().join("");
    const usuarioCripto = { ...usuario, senha: senhaCripto };

    const colecao = new ColecaoUsuarios();
    colecao.adicionar(usuarioCripto);
  }
}
