import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JelouModule } from './jelou/jelou.module';
import { BitrixModule } from './bitrix/bitrix.module';

@Module({
  imports: [JelouModule, BitrixModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
