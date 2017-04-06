import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// import { MaterialModule } from '@angular/material';
// import 'hammerjs';
// import '@angular/material/core/theming/prebuilt/purple-green.css';

import { AppComponent } from './app.component';

import { BaseModule } from './components/base';
import { NewsModule } from './components/news';
import { VideoModule } from './components/video';
import { CategoriesModule } from './components/categories';

import { UserService } from './components/base/services/user.service';
import { PortalService } from './components/base/services/portal.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        // app modules
        BaseModule,
        VideoModule,
        NewsModule,
        CategoriesModule
        // ,MaterialModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        PortalService,
        UserService, {
            provide: LOCALE_ID,
            useValue: 'ru-RU'
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
