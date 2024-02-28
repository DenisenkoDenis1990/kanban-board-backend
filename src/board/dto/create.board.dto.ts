import { IsString, Length } from 'class-validator';

export class CreateBoardDto {
  @IsString()
  @Length(5, 30)
  title: string;
}
