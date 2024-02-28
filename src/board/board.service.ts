import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from 'src/models/board.entity';
import { Repository } from 'typeorm';
import { CreateBoardDto } from './dto/create.board.dto';
import { UpdateBoardDto } from './dto/update.board.dto';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board) private readonly boardRepo: Repository<Board>,
  ) {}

  public async createBoard(newBoard: CreateBoardDto) {
    return await this.boardRepo.save({ title: newBoard.title });
  }
  public async updateBoard(body: UpdateBoardDto) {
    return await this.boardRepo.update(body.id, { title: body.title });
  }
  public async getAllBoards() {
    return await this.boardRepo.find();
  }
  public async getBoardById(id: string) {
    return await this.boardRepo.findOneBy({ id });
  }

  public async deleteBoard(id: string) {
    return await this.boardRepo.delete(id);
  }
}
