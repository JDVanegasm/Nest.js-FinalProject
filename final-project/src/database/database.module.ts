import { Global, Module } from '@nestjs/common';

import { ConfigType } from '@nestjs/config';

import { TypeOrmModule } from '@nestjs/typeorm';

import config from 'src/config';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        const { host, name, user, password, port,schema
        } =
          configService.postgres;
        return {
          type: 'postgres',
          host: host,
          database: name,
          schema: schema,
          username: user,
          password: password || 'Mapache.dormilon2405',
          port,
          synchronize: true,
          autoLoadEntities: true,
          ssl: {rejectUnauthorized:false}
        };
      },
    }),
  ],

  exports: [TypeOrmModule],
})
export class DatabaseModule {}