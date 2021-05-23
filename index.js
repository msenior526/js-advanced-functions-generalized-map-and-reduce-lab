// Add your functions here
const map = (array, callback) => {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        let el = array[i];
        debugger
        newArr.push(callback(array));
    }
    return newArr;
}