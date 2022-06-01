
/**
 * @param {string} input
 * @param {number} K
 * @return {boolean}
 */
var hasAllCodes = function (input, K) {
    let totalBinaryCodeOfSize_K = 1 << K;
    let sizeInput = input.length;
    if (sizeInput < totalBinaryCodeOfSize_K + K - 1) {
        return false;
    }

    const ascii_zero = 48;
    const allBinaryCodeOfSize_K = new Set();
    const fixRollingBitmaskToSize_K = totalBinaryCodeOfSize_K - 1;
    let rollingBitmaskOfSize_K = 0;

    //initialzie rollingBitmask to size K.
    for (let i = 0; i < K; ++i) {
        rollingBitmaskOfSize_K = ((rollingBitmaskOfSize_K << 1) & fixRollingBitmaskToSize_K) | (input.codePointAt(i) - ascii_zero);
    }
    allBinaryCodeOfSize_K.add(rollingBitmaskOfSize_K);

    //get all subsequent rollingBitmasks of size K.
    for (let i = K; i < sizeInput && allBinaryCodeOfSize_K.size < totalBinaryCodeOfSize_K; ++i) {
        rollingBitmaskOfSize_K = ((rollingBitmaskOfSize_K << 1) & fixRollingBitmaskToSize_K) | (input.codePointAt(i) - ascii_zero);
        allBinaryCodeOfSize_K.add(rollingBitmaskOfSize_K);
    }
    return allBinaryCodeOfSize_K.size === totalBinaryCodeOfSize_K;
};
