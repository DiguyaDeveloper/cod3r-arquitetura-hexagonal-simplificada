import CasoDeUso from "../../shared/CasoDeUso.ts";
import ColecaoUsuarios from "../data/ColecaoUsuario.ts";
import Usuario from "../model/Usuario.ts";

export type LoginUsuarioDTO = {
  email: string;
  senha: string;
};

export default class LoginUsuario
  implements CasoDeUso<LoginUsuarioDTO, Usuario | null>
{
  async executar(dto: LoginUsuarioDTO): Promise<Usuario | null> {
    const colecao = new ColecaoUsuarios();

    const usuario = await colecao.buscarPorEmail(dto.email);
    if (!usuario) return null;

    const senhaCripto = dto.senha.split("").reverse().join("");
    if (usuario.senha !== senhaCripto) return null;

    return {
      nome: usuario.nome,
      email: usuario.email,
    };
  }
}
