import { Controller, Get } from '@nestjs/common';
import { Board } from './boards.model';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
    constructor(private boardService : BoardsService) {}
        //인수가 프로퍼티로 
        @Get('/')
        getAllBoard(): Board[] {
            return this.boardService.getAllBoards();
        }
}



// export class BoardsController {
//     boardService : BoardsService
//     constructor(boardService : BoardsService) {
//         this.boardService = boardService;
//     }
// }
/**
 * ts에서는 접근제한자 사용가능
 * 접근제한자를 쓰는 암묵적으로 해당 클래스에서는 접근제한자로 정의된 클래스만 사용한다는 의미
 * 따라서, 주석으로 선언 > 할당을 할 필요없음
 */
