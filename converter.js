const imperial = ( userNumber ) => {
    const intNumber = Number( userNumber );
    const conversion = {
        inch: 0.393701 * intNumber,
        foot: 0.0328084 * intNumber,
        yard: 0.0109361 * intNumber,
    }
    return conversion;
};

const international = ( userNumber ) => {
    const intNumber = Number( userNumber );
    const conversion = {
        metre: 0.01 * intNumber,
        kilometer: 0.000010 * intNumber,
    }
    return conversion;
}
const converter = { international, imperial };

export default converter
