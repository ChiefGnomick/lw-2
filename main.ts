function getMaxNumber(array: number[]): number {
    return Math.max(...array);
}

function hasNegativeNumber(matrix: number[][]): boolean {
    for (let row of matrix) {
        if (row.some(num => num < 0)) {
            return true;
        }
    }
    return false;
}

type Numbers = [number, number, number];
const exampleTuple: Numbers = [10, 20, 30];

enum BallType {
    Football = "Футбольный мяч",
    Basketball = "Баскетбольный мяч",
    Tennis = "Тенисный мяч",
}

console.log(BallType.Football); 

class Pet {
    name: string = 'Some pet';
    age: number = -1;
    speak(): string {
        return "No speak. I am fish!";
    }
}

class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak(): string {
        return "Yaw-Gaw!";
    }
}

class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak(): string {
        return "Miyau!";
    }
}

function printPetInfo<T extends Pet>(pet: T): void {
    console.log(`Name: ${pet.name}, Age: ${pet.age}, Says: ${pet.speak()}`);
}

const myDog = new Dog();
const myCat = new Cat();

printPetInfo(myDog);
printPetInfo(myCat);

type Ball = {
    type: BallType;
    brand: string;
};

const football: Ball = {
    type: BallType.Football,
    brand: "бренд",
};

console.log(JSON.stringify(football, null, 2));
