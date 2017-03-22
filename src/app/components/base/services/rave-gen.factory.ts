import { Injectable, OpaqueToken } from '@angular/core';

export const RAVE_GEN_SERVICE_SHARED_TOKEN: OpaqueToken = new OpaqueToken('RaveServiceGen');

const LETTER_GROUPS = [
    ['a', 'z'],
    ['A', 'Z'],
    ['0', '9']
];

let _letters = '';
LETTER_GROUPS.forEach(group => {
    for (let i = group[0].charCodeAt(0); i < group[1].charCodeAt(0); i++) {
        _letters += String.fromCharCode(i);
    }
});
const _letterCount = _letters.length;

function _generateRave(length: number): string {
    let result = '';
    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * _letterCount);
        result += _letters[index];
    }

    return result;
}

export function RaveGenerator(length: number): Function {
    return function(): string {
        return _generateRave(length);
    };
}
