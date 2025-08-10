import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class JelouService {
  private readonly apiUrl = 'https://api.jelou.io/enviar-mensaje';
  private readonly token = 'TU_TOKEN_DE_JELOU';

  async enviarMensaje(telefono: string, mensaje: string) {
    const response = await axios.post(
      this.apiUrl,
      { telefono, mensaje },
      {
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      },
    );
    return response.data;
  }
}
