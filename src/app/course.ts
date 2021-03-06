import { Pony } from './pony';
export class Course {

    id: number;
    ponies: Array<Pony>;
    location:string;
    date:Date;
    constructor( location?:string, date?:Date ){
        this.id=0;
        this.ponies = [];
        this.location = location === undefined ? 'Montpellier' : location;
        this.date = date === undefined ? new Date() : date;
    }

}
