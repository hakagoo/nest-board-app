import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { v1 as uuid} from 'uuid'; //v1 : version

@Injectable()
export class BoardsService {
    private boards: Board[] = [];
    /**private로 사용해야 다른 컴포넌트에서 사용할 수 없음 */

    getAllBoards(): Board[] {
        return this.boards;
    }

    createBoard(title: string, description:string) {
        const board:Board = {
            /**
             * if you declare type of const board to Board, you have to uss all parameters in Board class.
             * but there is 'id' that we can't use by hard coding
             * (in database, database create unique id automatically)
             * so we will use uuid(npm install uuid --save)
             */
            id : uuid(),
            title, //exactly same with 'title: title'
            description: description,
            status: BoardStatus.PUBLIC
        }

        this.boards.push(board);
        return board;
    }
}
