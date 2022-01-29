const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};
let binToString = {
    10: ".",
    11: "-"
}

function decode(expr) {
    let groups = expr.match(/.{1,10}/g)

    let cutGroups = groups.map((item) => {
        if (item.indexOf("*") > -1) return []

        return item.substring(item.indexOf(1), item.length).match(/.{1,2}/g)
    })

    return cutGroups.map((group) => {
        if (!group.length) return " "

        return MORSE_TABLE[group.map((item) => binToString[item]).join("")]
    }).join("")
}

module.exports = {
    decode
}