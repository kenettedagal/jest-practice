export default function analyzeArray(array) {
    const obj = {};
    const sorted = array.sort((a, b) => a - b);
    obj.average = (sorted.reduce((prev, cur) => prev + cur, 0)) / sorted.length;
    obj.min = sorted[0];
    obj.max = sorted[sorted.length - 1];
    obj.length = array.length;
    return obj;
};