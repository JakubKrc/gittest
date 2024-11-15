import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm';
import { KubotestModule } from './kubotest/kubotest.module';
import { Kubotest } from './kubotest/entities/kubotest.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type : 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_ PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        schema: configService.get('DB_SCHEMA'),
        entities: [Kubotest]
      }),
    }),
    KubotestModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
