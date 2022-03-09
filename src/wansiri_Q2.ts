//2.1
interface Car{
    id: number,
    brand: string,
    color: string,
    distanceUsed: any,
    showCar() : string,
    use() : number
}
//2.2
class Thai implements Car{
    id: number;
    brand: string;
    color: string;
    distanceUse: any;

    constructor(id: number, brand: string, color: string){
        this.id = id;
        this.brand = brand;
        this.color = color;
    }
    distanceUsed: any;
    use(): number {
        throw new Error("Method not implemented.");
    }

    showCar(){
        return `${this.brand} ${this.brand} ${this.brand}`;
    }
    car(distance:Number) :number{
        {this.distanceUse};
    }

}
const euCar1 = new Thai (1001,"Toyota","White");
console.log(euCar1.id)
console.log(euCar1.brand)
console.log(euCar1.color)
console.log(euCar1.showCar())
console.log(euCar1.car(2500))