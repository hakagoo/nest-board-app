import { BadRequestException, PipeTransform } from "@nestjs/common";
import { BoardStatus } from "../boards.model";

export class BoardStatusValidationPipe implements PipeTransform{
    readonly StatusOption = [
        BoardStatus.PRIVATE,
        BoardStatus.PUBLIC
    ]

    transform(value: any){
        value = value.toUpperCase();

        if(!this.isStatisValid(value)) {
            throw new BadRequestException(`${value} isn't in thie status options `);
        }
    }

    private isStatisValid(status: any) {
        const index = this.StatusOption.indexOf(status);
        return index !== -1;
    }
}