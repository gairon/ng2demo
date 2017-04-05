import { OpaqueToken, Provider } from '@angular/core';

export const STRINGS_SERVICE_TOKEN: OpaqueToken = new OpaqueToken('StringsServiceToken');

const strings = {
    TITLE: 'Video show',
    VERSION: 'v. 1.0.0'
};

export const STRINGS_PROVIDER = { provide: STRINGS_SERVICE_TOKEN, useValue: strings };
