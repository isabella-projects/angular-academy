import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppComponent],
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });

    it(`should have the 'Angular Developer' title`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app.title).toEqual('Angular Developer');
    });

    it('should render title', () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;

        const titleEl = compiled.querySelector('h1');
        expect(titleEl?.textContent).toContain('Angular Developer');
    });

    it(`should have 'center' classname`, () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();

        const compiled = fixture.nativeElement as HTMLElement;

        const titleEl = compiled.querySelector('h1');
        expect(titleEl).toHaveClass('center');
    });
});
