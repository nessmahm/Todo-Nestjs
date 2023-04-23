import { NestFactory } from '@nestjs/core';
import {seedService} from "./seed/seed.service";
import {SeedModule} from "./seed/seed.module";
async function bootstrap() {
    const app = await NestFactory.createApplicationContext(SeedModule);
    const seed = app.get(seedService)
    console.log("connecting")
        await seed.seed();
    console.log("done")

    await app.close();
}
bootstrap();