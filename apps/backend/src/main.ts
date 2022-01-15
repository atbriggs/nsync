/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

import { AppModule } from "./app/app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const globalPrefix = "songs";
  // app.setGlobalPrefix(globalPrefix);
  // process.env.PLAYGROUND_URL === "http://localhost:3000"
  const port = process.env.PORT || 3333;
  app.enableCors();
  await app.listen(port, () => {
    Logger.log("Listening at http://localhost:" + port + "/");
  });
}

bootstrap();
