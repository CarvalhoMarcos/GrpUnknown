
export interface User {
    cpf: string;
    nome: string;
    email: string;
    tipo_usuario: string;
    data_nasc: Date;
    sexo: string;
    cor: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface RetornoLogin {
    usuario: User;
    token: string;
}
export interface UsuarioPLogar{
    cpf : string;
    password : string;
}