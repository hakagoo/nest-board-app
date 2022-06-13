import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import path from "path";
import { Board } from "src/boards/board.entity";

export const typeORMConfig :TypeOrmModuleOptions = {
    type : 'postgres',
    host : 'localhost',
    port : 5432,
    username: 'postgres',
    password: 'postgres',
    //username: 'postgres',
    //password: 'postgres',
    database: 'board-app',
    entities: [__dirname + `/../**/*.entity.{js, ts}`],
    //entities: ['/../**/*.*.{js, ts}'],
    //entities: [Board],
    //entities: ["./**/*.entities.{js, ts}"],
    synchronize: true
}
