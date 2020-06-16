export interface ResponsePaciente{
    cpf: string;
    nome: string;
    email: string;
    tipo_usuario : string;
    data_nasc : string;
}

export interface RequestCreatePaciente{
    cpf: string;
    nome: string;
    email: string;
    tipo_usuario: string;
    data_nasc : string;
    password: string;
    sexo: string;
    cor: string;
    
}

export interface ResponseCreatePaciente{
    result : string;
}
