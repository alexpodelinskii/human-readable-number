module.exports = function toReadable(number) {
    if (!number) return "zero";

    let arr = ["",
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        "sixteen",
        'seventeen',
        'eighteen',
        'nineteen',];

    let arr2 = ["", 'one', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number < 20) return arr[number];
    let number1 = "" + number
    let arrNum = number1.split("");
    arrNum = arrNum.map(el => +el);
    let res
    if (number < 100) {
        res = arr2[arrNum[0]] + " " + arr[arrNum[1]];
    } else if ((number % 100) < 20) {
        res = arr[arrNum[0]] + " hundred " + arr[(arrNum[1] * 10 + arrNum[2])];
    } else {
        res = arr[arrNum[0]] + " hundred " + arr2[arrNum[1]] + " " + arr[arrNum[2]];
    }
    return res.trim()

}

