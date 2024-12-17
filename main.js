var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function getMaxNumber(array) {
    return Math.max.apply(Math, array);
}
function hasNegativeNumber(matrix) {
    for (var _i = 0, matrix_1 = matrix; _i < matrix_1.length; _i++) {
        var row = matrix_1[_i];
        if (row.some(function (num) { return num < 0; })) {
            return true;
        }
    }
    return false;
}
var exampleTuple = [10, 20, 30];
var BallType;
(function (BallType) {
    BallType["Football"] = "\u0424\u0443\u0442\u0431\u043E\u043B\u044C\u043D\u044B\u0439 \u043C\u044F\u0447";
    BallType["Basketball"] = "\u0411\u0430\u0441\u043A\u0435\u0442\u0431\u043E\u043B\u044C\u043D\u044B\u0439 \u043C\u044F\u0447";
    BallType["Tennis"] = "\u0422\u0435\u043D\u0438\u0441\u043D\u044B\u0439 \u043C\u044F\u0447";
})(BallType || (BallType = {}));
console.log(BallType.Football);
var Pet = /** @class */ (function () {
    function Pet() {
        this.name = 'Some pet';
        this.age = -1;
    }
    Pet.prototype.speak = function () {
        return "No speak. I am fish!";
    };
    return Pet;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = "AngryHunter";
        _this.age = 8;
        return _this;
    }
    Dog.prototype.speak = function () {
        return "Yaw-Gaw!";
    };
    return Dog;
}(Pet));
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = 'Barsik';
        _this.age = 2;
        return _this;
    }
    Cat.prototype.speak = function () {
        return "Miyau!";
    };
    return Cat;
}(Pet));
function printPetInfo(pet) {
    console.log("Name: ".concat(pet.name, ", Age: ").concat(pet.age, ", Says: ").concat(pet.speak()));
}
var myDog = new Dog();
var myCat = new Cat();
printPetInfo(myDog);
printPetInfo(myCat);
var football = {
    type: BallType.Football,
    diameter: 22,
    weight: 450,
    brand: "бренд",
};
console.log(JSON.stringify(football, null, 2));
