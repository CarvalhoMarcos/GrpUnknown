export class RegistrarExame {
  exame_id: string;
  pedido_id: string;
  examinador_id: string;
  data_hora_id: string; //mudar para datetime
  pdf_id: string;
}
export interface RequestRegistrarExame {
  registrarExame: RegistrarExame[];
  // pedido-exame-aberto: PedidoExame[];
}

export interface ResponseRegistrarExame {}
