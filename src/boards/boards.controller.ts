import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Board, BoardStatus } from './boards.model';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
    constructor(private boardService : BoardsService) {}
        //인수가 프로퍼티로 
        @Get('/')
        getAllBoard(): Board[] {
            return this.boardService.getAllBoards();
        }

        @Post()
        createBoard(
            @Body() createBoardDto : CreateBoardDto    
        ): Board {
            return this.boardService.createBoard(createBoardDto);
//console.log('description', description);
        }
        /**
         * 바디 전체를 가져올 때,
         */
        // createBoard(@Body() body){
        //     console.log('body', body);
        // }

        @Get('/:id')
        getBoardById(@Param('id') id: string): Board {
            return this.boardService.getBoardById(id);
        }

        @Delete('/:id')
        deleteBoard(@Param('id') id: string): void {
            this.boardService.deleteBoard(id);
        }

        @Patch('/id')
        updateBoardStatus(
            @Param('id') id: string,
            @Body('status') status: BoardStatus,
        ) {
            return this.boardService.updateBoardStatus(id, status);
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
