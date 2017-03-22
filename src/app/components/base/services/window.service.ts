import { OpaqueToken, Provider } from '@angular/core';

export function getWindow(): Window {
    return window;
}

export const WINDOW_SERVICE_TOKEN: OpaqueToken = new OpaqueToken('WindowToken');

export const WINDOW_PROVIDER = { provide: WINDOW_SERVICE_TOKEN, useValue: getWindow() };
