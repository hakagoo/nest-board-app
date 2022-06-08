import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './boards-status.enum';
import { v1 as uuid} from 'uuid'; //v1 : version
import { CreateBoardDto } from './dto/create-board.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { BoardRepository } from './board.repository';
import { Board } from './board.entity';
import { promises } from 'dns';

@Injectable()
export class BoardsService {

    /**
     * 서비스에 리포지토리 의존성 주입
     */
    constructor(
        @InjectRepository(BoardRepository)
        private boardRepository: BoardRepository,
    ){}

    /**
     * 데이터베이스 작업이 다 끝난 후에 값을 받을 수 있도록 async-await 문법 사용
     */
    async getBoardById(id: number): Promise <Board> {
        const found = await this.boardRepository.findOne(id);

        if(!found){
            throw new NotFoundException(`Can't find Board with id ${id}`);
        }
        
        return found;
    }

    createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
        
        return this.boardRepository.createBoard(createBoardDto);
    }

    // private boards: Board[] = [];
    // /**private로 사용해야 다른 컴포넌트에서 사용할 수 없음 */

    // getAllBoards(): Board[] {
    //     return this.boards;
    // }

    // createBoard(createBoardDto: CreateBoardDto) {
    //     const {title, description} = createBoardDto;
        
    //     const board:Board = {
    //         /**
    //          * if you declare type of const board to Board, you have to uss all parameters in Board class.
    //          * but there is 'id' that we can't use by hard coding
    //          * (in database, database create unique id automatically)
    //          * so we will use uuid(npm install uuid --save)
    //          */
    //         id : uuid(),
    //         title, //exactly same with 'title: title'
    //         description: description,
    //         status: BoardStatus.PUBLIC
    //     }

    //     this.boards.push(board);
    //     return board;
    // }

    // getBoardById(id: string) :Board {
    //     const found = this.boards.find((board) => board.id === id);

    //     if(!found) {
    //         throw new NotFoundException(`Can't find board with ${id}`);
    //     }

    //     return found;
        
        
    // }

    // deleteBoard(id: string): void {
    //     const found = this.getBoardById(id);
    //     this.boards = this.boards.filter((board) => board.id !== found.id);
    // }

    // updateBoardStatus(id: string, status: BoardStatus): Board {
    //     const board = this.getBoardById(id);
    //     board.status = status;
    //     return board;
    // }
}
