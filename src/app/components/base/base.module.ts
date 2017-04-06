import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './services/user.service';
import { WINDOW_PROVIDER } from './services/window.service';
import { STRINGS_PROVIDER } from './services/strings.service';
import { MultilangPipe } from './pipes/multilang.pipe';
import { StarsPipe } from './pipes/stars.pipe';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        WINDOW_PROVIDER,
        STRINGS_PROVIDER,
        UserService
    ],
    declarations: [
        MultilangPipe,
        StarsPipe
    ],
    exports: [
        MultilangPipe,
        StarsPipe
    ]
})
export class BaseModule {
}
