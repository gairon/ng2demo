import { OpaqueToken, Provider } from '@angular/core';

export const STRINGS: OpaqueToken = new OpaqueToken('StringsToken');

const strings = {
    TITLE: 'This is application title',
    VERSION: '1.0.0'
};

export const STRINGS_PROVIDER = { provide: STRINGS, useValue: strings };
