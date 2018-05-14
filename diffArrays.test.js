const diffArrays = require('./diffArrays');

test('Returns correct order for 4', () => {
    expect(diffArrays.diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5, 883, 98])).toEqual([4, 883, 98]);
});
