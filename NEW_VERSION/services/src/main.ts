import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent).catch((error) => console.error(error));

/* Alternative way for injecting services for more complex applications
bootstrapApplication(AppComponent, {
    providers: [TasksService]
}).catch((err) => console.error(err));
---------------------------------------------- */
