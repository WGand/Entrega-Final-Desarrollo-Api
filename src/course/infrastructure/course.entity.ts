import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { LessonEntity } from './lesson.entity';

@Entity()
export class CourseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  imagen: string;

  @Column()
  description: string;

  @Column()
  state: string;

  @Column()
  professorName: string;

  @OneToMany(() => LessonEntity, (lesson) => lesson.course)
  lessons: LessonEntity[];
}
