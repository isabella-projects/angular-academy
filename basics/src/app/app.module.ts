import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { FirstTaskComponent } from './first-task/first-task.component';
import { SecondTaskComponent } from './second-task/second-task.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { ThirdTaskComponent } from './third-task/third-task.component';
import { SecretsComponent } from './secrets/secrets.component';

@NgModule({
    declarations: [
        AppComponent,
        SuccessAlertComponent,
        WarningAlertComponent,
        ServerComponent,
        ServersComponent,
        FirstTaskComponent,
        SecondTaskComponent,
        DatabindingComponent,
        ThirdTaskComponent,
        SecretsComponent,
    ],
    imports: [BrowserModule, FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
