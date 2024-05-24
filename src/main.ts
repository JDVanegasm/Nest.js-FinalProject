import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClassSerializerInterceptor } from '@nestjs/common';
import { enviroments } from './enviroments';
import { setupSwagger } from './Swagger.config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

   // Configura Swagger
   const config = new DocumentBuilder()
   .setTitle('MachapeEcommerce FINAL PROJECT')
   .setDescription('FINAL PROJECT')
   .setVersion('1.0')
   .build();
 
   const document = SwaggerModule.createDocument(app, config);
   SwaggerModule.setup('api', app, document);

  // Evitar el error de protocolo cruzado (htto/https)
  app.enableCors();
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  await app.listen(process.env.PORT || 3000);
  console.log(`Ambiente de ejecución ${process.env.NODE_ENV}`);
  console.log(`Servidor corriendo en puerto: ${process.env.PORT}`);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
