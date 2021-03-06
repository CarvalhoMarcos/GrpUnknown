export interface Medico{
    cpf: string;
    nome: string;
    email: string;
    crm: string;
    eh_docente: boolean;
    titulo_uni: string;
}

export interface RequestCreateMedico{
    cpf: string;
    nome: string;
    email: string;
    tipo_usuario: string;
    data_nasc : string;
    password: string;
    sexo: string;
    cor: string;
    crm: string;
    eh_docente: boolean;
    titulo_uni: string;
}

export interface ResponseMedicos{
    medicos : Medico[];
}

export interface ResponseCreateMedico{
    result: string;
}