import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CourseEntity } from './course.entity';
@Entity()
export class LessonEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  description: string;
  @Column("simple-json")
  video: { 'videoUrl': string, 'type': string, 'title': string, 'duration': string };

  @Column()
  CourseId: string;

  @ManyToOne(() => CourseEntity, (course) => course.lessons)
  course: CourseEntity;
}