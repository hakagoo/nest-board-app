import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeORMConfig :TypeOrmModuleOptions = {
    type : 'postgres',
    host : 'localhost',
    port : 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'board-app',
    entities: [__dirname + '/../**/*.entity{.js, .ts}'],
    //entities: ['/../**/*.entity{js, ts}'],
    synchronize: true
}

/**
 * Nest] 9008  - 2022. 06. 08. 오후 11:57:21     LOG [NestFactory] Starting Nest application...
[Nest] 9008  - 2022. 06. 08. 오후 11:57:21     LOG [InstanceLoader] AppModule dependencies initialized +81ms
[Nest] 9008  - 2022. 06. 08. 오후 11:57:21     LOG [InstanceLoader] TypeOrmModule dependencies initialized +0ms
[Nest] 9008  - 2022. 06. 08. 오후 11:57:21     LOG [InstanceLoader] TypeOrmCoreModule dependencies initialized +109ms
[Nest] 9008  - 2022. 06. 08. 오후 11:57:21   ERROR [ExceptionHandler] No repository for "BoardRepository" was found. Looks like this entity is not registered in current "default" connection?
 */