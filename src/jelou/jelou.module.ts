import { Module } from '@nestjs/common';
import { JelouService } from './jelou.service';
import { JelouController } from './jelou.controller';
import { BitrixModule } from 'src/bitrix/bitrix.module';

@Module({
  imports: [BitrixModule],
  controllers: [JelouController],
  providers: [JelouService],
  exports: [JelouService],
})
export class JelouModule {}
