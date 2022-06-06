/**
 * 게시물이 가지는 상태(공개/비공개, 내용 등)를 정의하기 위한 모델
 * class(변수타입 체크, 인스턴스 생성)나 interface(변수 타입만 체크) 사용
 */

 export interface Board {
     id: string;
     title: string;
     description: string;
     status: BoardStatus;
 }

 export enum BoardStatus {
     PUBLIC = 'PUBLIC',
     PRIVATE = 'PRIVATE'
 }