import { Controller,Get,Put,Post,Patch,Delete } from '@nestjs/common';

@Controller('premier')
export class PremierControllerController {
    @Get()
    getHello(): string {
        return "hello from premier controlle ";
    }
}
