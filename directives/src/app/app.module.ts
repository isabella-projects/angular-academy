import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight/highlight.directive';
import { ColoredDirective } from './colored/colored.directive';
import { UnlessDirective } from './unless.directive';

@NgModule({
    declarations: [
        AppComponent,
        HighlightDirective,
        ColoredDirective,
        UnlessDirective,
    ],
    imports: [BrowserModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
