import { OpaqueToken, Provider } from '@angular/core';

export const WINDOW: OpaqueToken = new OpaqueToken('WindowToken');

const win = (function _window(): any {
    console.log(window);
    return window;
})();

export const WINDOW_PROVIDER = { provide: WINDOW, useValue: win };
