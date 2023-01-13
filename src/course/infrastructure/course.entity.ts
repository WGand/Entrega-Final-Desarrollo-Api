import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CourseStateEnum } from '../domain/CourseStateEnum';
import { LessonEntity } from './lesson.entity';

@Entity()
export class CourseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  state: CourseStateEnum;

  @OneToMany(() => LessonEntity, (lesson) => lesson.course)
  lessons: LessonEntity[];
}
