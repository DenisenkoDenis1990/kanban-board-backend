import { Status } from 'src/utils/enums';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Board } from './board.entity';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column({ type: 'enum', enum: Status, default: Status.TO_DO })
  status: Status;

  @ManyToOne(() => Board, (board) => board.id)
  @JoinColumn({ name: 'board_id' })
  board: Board;
}
