export interface TipoExame {
    id: string;
    nome_exame: string;
    recomendacoes: string;
}

export interface ResponseTiposExame{
    tiposExame : TipoExame[];
}