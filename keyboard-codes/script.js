const pressContainer = document.querySelector('.press-before');
const textEl = document.querySelector('h1');
const textKey = document.querySelector('.specialH1');
const keyDiv = document.querySelector('.key');

const keyCodes = {
    8: 'backspace',
    9: 'tab',
    13: 'enter',
    16: 'shift',
    17: 'ctrl',
    18: 'alt',
    20: 'caps lock',
    27: 'escape',
    32: 'space',
    37: 'left arrow',
    38: 'up arrow',
    39: 'right arrow',
    40: 'down arrow',
    46: 'delete',
    48: '0',
    49: '1',
    50: '2',
    51: '3',
    52: '4',
    53: '5',
    54: '6',
    55: '7',
    56: '8',
    57: '9',
    65: 'a',
    66: 'b',
    67: 'c',
    68: 'd',
    69: 'e',
    70: 'f',
    71: 'g',
    72: 'h',
    73: 'i',
    74: 'j',
    75: 'k',
    76: 'l',
    77: 'm',
    78: 'n',
    79: 'o',
    80: 'p',
    81: 'q',
    82: 'r',
    83: 's',
    84: 't',
    85: 'u',
    86: 'v',
    87: 'w',
    88: 'x',
    89: 'y',
    90: 'z',
    91: 'left window key',
    92: 'right window key',
    93: 'select key',
    96: 'numpad 0',
    97: 'numpad 1',
    98: 'numpad 2',
    99: 'numpad 3',
    100: 'numpad 4',
    101: 'numpad 5',
    102: 'numpad 6',
    103: 'numpad 7',
    104: 'numpad 8',
    105: 'numpad 9',
    106: 'multiply',
    107: 'add',
    109: 'subtract',
    110: 'decimal point',
    111: 'divide',
    112: 'f1',
    113: 'f2',
    114: 'f3',
    115: 'f4',
    116: 'f5',
    117: 'f6',
    118: 'f7',
    119: 'f8',
    120: 'f9',
    121: 'f10',
    122: 'f11',
    123: 'f12',
    144: 'num lock',
    145: 'scroll lock',
    186: 'semi-colon',
    187: 'equal sign',
    188: 'comma',
    189: 'dash',
    190: 'period',
    191: 'forward slash',
    192: 'grave accent',
    219: 'open bracket',
    220: 'back slash',
    221: 'close bracket',
    222: 'single quote'
};

function handleKeyPress(e) {
    const { keyCode } = e;
    const key = keyCodes[keyCode] || String.fromCharCode(keyCode);
    
    // Update the display for the key name
    textEl.textContent = `You pressed`;
    textKey.textContent = key;
    keyDiv.style.display = 'block';
    // Update the ASCII code display
    keyDiv.textContent = keyCode;
}

window.addEventListener('keydown', handleKeyPress);
