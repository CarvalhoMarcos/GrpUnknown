export class RegistrarExame {
  exame_id: string;
  pedido_id: string; //so preciso disso
  examinador_id: string;
  data_hora_id: string; //mudar para datetime
  pdf_id: string;
}
export interface RequestRegistrarExame {
  //requisitar exames em aberto do componente pedido-exame
  // registrarExame: RegistrarExame[];
  // pedido-exame-aberto: PedidoExame[];
}

export interface ResponseRegistrarExame {}

// export interface RequestCreateExame {
//   exame_id: string;
//   pedido_id: string;
//   examinador_id: string;
//   data_hora_id: string; //mudar para datetime
//   pdf_id: string;
// }

// export interface ResponseCreateExame {}
