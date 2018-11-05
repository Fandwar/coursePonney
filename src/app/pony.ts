export class Pony {

    id:number;
    name: string;
    weight:number;
    age:number;
    color:string;

    constructor( name?:string, age?:number, color?:string, weight?:number  ){
        this.id = 0;
        this.name = name === undefined ? 'nom' : name;
        this.age = age === undefined ? 0 : age;
        this.weight = weight === undefined ? 0 : weight;
        this.color = color === undefined ? 'couleur' : color;

    }

}
