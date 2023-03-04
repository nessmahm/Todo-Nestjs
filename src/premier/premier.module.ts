import { Module } from '@nestjs/common';
import { PremierControllerController } from './premier-controller.controller';

@Module({
  controllers: [PremierControllerController]
})
export class PremierModule {}
