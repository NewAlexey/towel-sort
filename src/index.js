// You should implement your task here.

const { strikethrough } = require("colors");

module.exports = function towelSort(matrix) {
    if (matrix === undefined || matrix.length === 0) return [];
    let ans = [];
    matrix.forEach((item, index) => {
        if (index % 2 === 0) {
            ans.push(item);
        } else {
            ans.push(item.reverse());
        }
    });
    ans = ans.reduce((acc, item) => {
        item.forEach((element) => {
            return [...acc, acc.push(element)];
        });
        return acc;
    }, []);
    return ans;
};
