import { Course } from './course';
import { PONIES } from './ponies-mock';

export const COURSES: Course[] = [
    { id : 1, location: 'Le chateau', date: new Date(), ponies: PONIES },
    { id : 2, location: 'Le jardin', date: new Date(), ponies: PONIES  }
];