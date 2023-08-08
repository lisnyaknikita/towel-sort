module.exports = function towelSort(matrix) {
    if (!matrix || !matrix.length) {
        return [];
    }

    const transformedMatrix = matrix.map((array, i) => {
        if (i % 2 === 0) {
            return array;
        } else {
            return array.reverse();
        }
    });

    return transformedMatrix.flat();
};
