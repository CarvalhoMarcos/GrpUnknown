export interface ResponseProf{
    cpf: string;
    nome: string;
    email: string;
    crm: string;
    eh_docente: boolean;
    titulo_uni: string;
}

export interface RequestCreateProf{
    cpf: string;
    nome: string;
    email: string;
    tipo_usuario: string;
    data_nasc : String;
    password: string;
    sexo: string;
    cor: string;
    crm: string;
    eh_docente: boolean;
    titulo_uni: string;
}

export interface ResponseProfs{
    medicos : [];
}

export interface ResponseCreateProf{
    result: string;
}