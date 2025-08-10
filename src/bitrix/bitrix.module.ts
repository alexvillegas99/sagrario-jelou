import { Module } from '@nestjs/common';
import { BitrixService } from './bitrix.service';
import { BitrixController } from './bitrix.controller';

@Module({
  controllers: [BitrixController],
  providers: [BitrixService],
  exports: [BitrixService], // Exporting BitrixService to be used in other modules
})
export class BitrixModule {}
