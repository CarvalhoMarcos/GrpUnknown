export interface ResponseMedico{
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
    password: string;
    sexo: string;
    cor: string;
    crm: string;
    eh_docente: boolean;
    titulo_uni: string;
}

export interface ResponseMedicos{
    medicos : [];
}

export interface ResponseCreateMedico{
    result: string;
}