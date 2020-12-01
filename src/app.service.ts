import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'O serviço de exemplo GET do Aprova Digital foi executado com sucesso!';
  }

  postHello(): string {
    return 'O serviço de exemplo POST do Aprova Digital foi executado com sucesso!';
  }
}
