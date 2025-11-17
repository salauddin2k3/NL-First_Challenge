
function formatValue(givenValue: string | number | boolean): string | number | boolean {

    if (typeof givenValue === "string") {
        const upperCaseValue = givenValue.toUpperCase();
        return upperCaseValue;
    }

    else if (typeof givenValue === "number") {
        const numValue = givenValue * 10;
        return numValue;
    }
    else {
        const booleanValue = !givenValue;
        return booleanValue;
    };
};







function getLength(value: string | any[]): number {

    if (typeof value === "string") {
        const stringLengt = value.length;
        return stringLengt;
    }

    else if (Array.isArray(value)) {
        const arrLength = value.length;
        return arrLength;
    }

    return 0;
};







class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    };

    getDetails(): string {
        const personInfo = `'Name: ${this.name}, Age: ${this.age}'`;
        return personInfo
    };
};







type Item = {
    title: string;
    rating: number;
};

function filterByRating(items: Item[]): Item[] {
    const filterdItem = items.filter(item => item.rating >= 4);
    return filterdItem;
};







interface UserType {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
};

function filterActiveUsers(users: UserType[]): UserType[] {

    const activeUsers = users.filter(user => user.isActive === true);

    return activeUsers;
};







interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
};

function printBookDetails(book: Book) {

    const checkingAvailble = book.isAvailable ? 'Yes' : 'No';

    const finalRisult = `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${checkingAvailble}`;

    return finalRisult;
};








type ArrType = string | number;

function getUniqueValues(arr1: ArrType[], arr2: ArrType[]): ArrType[] {

    const unqValue: ArrType[] = [];

    function nowValue(arr: ArrType[], value: ArrType): boolean {

        for (let v = 0; v < arr.length; v++) {
            if (arr[v] === value) {
                return true;
            }
        }
        return false;
    };


    for (let i = 0; i < arr1.length; i++) {
        const value = arr1[i];

        if (!nowValue(unqValue, value)) {
            unqValue.push(value);
        }
    };

    for (let i = 0; i < arr2.length; i++) {
        const value = arr2[i];

        if (!nowValue(unqValue, value)) {
            unqValue.push(value);
        }
    };

    return unqValue;
};








interface ProductType {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
};

function calculateTotalPrice(products: ProductType[]): number {

    const finalResult = products
        .map(product => {
            const total = product.price * product.quantity;
            if (product.discount) {
                return total * (1 - product.discount / 100);
            }
            return total;
        })
        .reduce((acc, crr) => acc + crr, 0);

    return finalResult;

};






