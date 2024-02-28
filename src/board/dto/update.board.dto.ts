import { IsString } from 'class-validator';
import { CreateBoardDto } from './create.board.dto';

export class UpdateBoardDto extends CreateBoardDto {
  @IsString()
  id: string;
}
