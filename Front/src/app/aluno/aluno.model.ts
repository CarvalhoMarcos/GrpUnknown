export interface Aluno {
    cpf: string;
    nome: string;
    email: string;
    ano_res: string;
}

export interface ResponseAlunos {
    alunos: Aluno[];
}

export interface RequestCreateAluno {
    cpf: string;
    nome: string;
    email: string;
    tipo_usuario: string;
    data_nasc : string;
    password: string;
    sexo: string;
    cor: string;
    ano_res: string;
}

export interface ResponseCreateAluno {

}

