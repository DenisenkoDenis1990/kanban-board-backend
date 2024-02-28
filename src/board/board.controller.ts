import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create.board.dto';
import { UpdateBoardDto } from './dto/update.board.dto';

@Controller('board')
export class BoardController {
  constructor(private service: BoardService) {}

  @Get('/get-all')
  public async getAllBoards() {
    try {
      const result = await this.service.getAllBoards();
      return result;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  @Get('/:id')
  public async getBoardById(@Param('id') id: string) {
    try {
      const result = await this.service.getBoardById(id);
      return result;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }

  @Post('/add-board')
  public async addBoard(@Body() body: CreateBoardDto) {
    try {
      const result = await this.service.createBoard(body);
      return result;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
  @Patch('/update-board')
  public async editBoard(@Body() body: UpdateBoardDto) {
    try {
      const result = await this.service.updateBoard(body);
      return result;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
  @Delete('/delete-board/:id')
  public async deleteBoard(@Param('id') id: string) {
    try {
      const result = await this.service.deleteBoard(id);
      return result;
    } catch (error) {
      throw new HttpException(error.message, error.status);
    }
  }
}
