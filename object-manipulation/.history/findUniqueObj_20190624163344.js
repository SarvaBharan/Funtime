

/**
 * @function Finds duplicate in an arrayOfObjects
 * @param {*} arr
 * @returns uniqueArray
 */
function fetchUnique(arr) {
    if (!arr.length) return;
    let uniq = arr.map(ele => ele['id'])
        .map((ele, index, arrOfIds) => arrOfIds.indexOf(ele) == index && index)
        .filter(obj => arr[obj])
        .map(ele => arr[ele]);
    return uniq;
}

let var arr = [
    {
        city: 'Amsterdam',
        title: 'This is Amsterdam!'
    },
    {
        city: 'Berlin',
        title: 'This is Berlin!'
    },
    {
        city: 'Budapest',
        title: 'This is Budapest!'
    }
];