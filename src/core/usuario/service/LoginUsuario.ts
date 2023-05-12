import CasoDeUso from "../../shared/CasoDeUso.ts";
import ColecaoUsuarioMemoria from "../data/ColecaoUsuarioMemoria.ts";
import ProvedorCripto from "../model/ProvedorCripto.ts";
import Usuario from "../model/Usuario.ts";

export type LoginUsuarioDTO = {
  email: string;
  senha: string;
};

export type UsuarioDTO = Required<Usuario>;

export default class LoginUsuario
  implements CasoDeUso<LoginUsuarioDTO, Usuario | null> {
  constructor(private provedorCripto: ProvedorCripto) {}

  async executar(dto: LoginUsuarioDTO): Promise<Usuario | null> {
    const colecao = new ColecaoUsuarioMemoria();

    const usuario = await colecao.buscarPorEmail(dto.email);
    if (!usuario || !usuario.senha) return null;

    const saoIguais = await this.provedorCripto.comparar(
      dto.senha,
      usuario.senha,
    );

    if (!saoIguais) return null;

    return {
      nome: usuario.nome,
      email: usuario.email,
    };
  }
}
