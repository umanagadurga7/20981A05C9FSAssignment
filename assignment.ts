//task 1 basic types
let a:number = 10
let b:string = "Uma"
let c:boolean = true
let arr:number[]=[11,22,33,44,55]
let tuple:[string,number]=['Mango',50]
enum days {Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday}
//task 2 functions
function add(firstnum:number,secondnum:number){
    var result=firstnum+secondnum
    return "sum of "+firstnum+" and "+secondnum+" is: "+result
}
console.log(add(45,63))
function capitalize(str:string):string{
    return "capitalized version: "+str.toUpperCase()
}
console.log(capitalize('uma naga durga'))
//task 3 interfaces
interface Person{
    name:string,
    age:number,
    email:string
}
let user:Person //declare user variable
user={name:"Uma",age:20,email:'20981a05c9@raghuclg.in'}//initialising
console.log(user)
console.log(user.name)
console.log(user.email)
//task 4 classes
class Car{
    private make:string
    private model:string
    private year:number
    constructor(make,model,year){
        this.make=make
        this.model=model
        this.year=year
    }
    displayInfo():(string|number){
        return "make: "+this.make+" model: "+this.model+" year: "+this.year
    }
}
let obj=new Car('toyota','v3','2020')
console.log(obj.displayInfo())
//task 5 generics
function revrseArray<T>(arr1:T[]):T[]{
    return arr1.reverse()
}
let generic_var= revrseArray<any>([100,'uma',true,200])
console.log(generic_var)