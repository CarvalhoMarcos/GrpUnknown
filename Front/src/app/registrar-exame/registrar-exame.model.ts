export interface RegistroExame {
  data_hora_exame: string;
  pedido_id: string;
}

export interface ResponseRegistroExame {
  registros: RegistroExame[];
}

export interface RequestCreateRegistroExame {
  data_hora_exame: string;
  pedido_id: string;
}

export interface ResponseCreateRegistroExame {
  // result: string; // status E?
}
