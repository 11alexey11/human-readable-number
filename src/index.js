module.exports = function toReadable (number) {
    let array = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 
                'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let dozens = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let arraySymbols = String(number).split('');
    let str = '';
    if (arraySymbols.length === 3) {
        str += array[Number(arraySymbols[0])] + ' hundred';
        if (Number(arraySymbols[1]) === 0) {
            if (Number(arraySymbols[2]) !== 0) {
                str += ' ' + array[Number(arraySymbols[2])];
            }
        }
        else if (Number(arraySymbols[1]) === 1) {
            str += ' ' + array[Number(arraySymbols[1] + arraySymbols[2])];
        } else {
            if (Number(arraySymbols[2]) !== 0) {
                str += ' ' + dozens[Number(arraySymbols[1])] + ' ' + array[Number(arraySymbols[2])];
            } else {
                str += ' ' + dozens[Number(arraySymbols[1])];
            }
        }
    } else if (arraySymbols.length === 2) {
        if (Number(arraySymbols[0]) === 1) {
            str += array[Number(arraySymbols[0] + arraySymbols[1])];
        } else {
            if (Number(arraySymbols[1]) !== 0) {
                str += dozens[Number(arraySymbols[0])] + ' ' + array[Number(arraySymbols[1])];
            } else {
                str += dozens[Number(arraySymbols[0])];
            }
        }
    } else {
        str += array[Number(arraySymbols[0])];
    }
    return str;
}
