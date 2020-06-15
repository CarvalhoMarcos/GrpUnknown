export class RegistrarExame {
  data_hora_exame: string;
  pedido_id: string; //so preciso disso
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
