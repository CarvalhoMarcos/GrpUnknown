export interface Aluno {
    cpf: string;
    nome: string;
    email: string;
    ano_res: string;
}

export interface ResponseAlunos {
    alunos:[];
}

export interface RequestCreateAluno {
    cpf: string;
    nome: string;
    email: string;
    matricula: string;
    data_de_nascimento: string;
    tipo_usuario: string;
    password: string;
    sexo: string;
    cor: string;
    ano_res: string;
}

export interface ResponseCreateAluno {

}

