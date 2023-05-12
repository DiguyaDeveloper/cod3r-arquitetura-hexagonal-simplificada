import CasoDeUso from "../../shared/CasoDeUso.ts";
import ColecaoUsuarios from "../data/ColecaoUsuario.ts";
import Usuario from "../model/Usuario.ts";

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
