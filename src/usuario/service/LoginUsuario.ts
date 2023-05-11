import CasoDeUso from "../../shared/CasoDeUso";
import ColecaoUsuarios from "../data/ColecaoUsuario";
import Usuario from "../model/Usuario";

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
