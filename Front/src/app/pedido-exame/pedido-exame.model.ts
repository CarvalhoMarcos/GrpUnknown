export interface PedidoExame {
    paciente_id: string;
    data_prev: string;
    tipo_exame_id: string;
    desc_diagn: string;
    cid: string;
}

export interface RequestCreatePedidoExame {
    paciente_id: string;
    data_prev: string;
    tipo_exame_id: string;
    desc_diagn: string;
    cid: string;
    status: string;
}

export interface ResponsePedidosExame{
    medicos : PedidoExame[];
}

export interface ResponseCreatePedidoExame{
    result: string;
}