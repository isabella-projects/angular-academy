import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
    let component: UserComponent;
    let fixture: ComponentFixture<UserComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [UserComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(UserComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create the app', () => {
        let fixture = TestBed.createComponent(UserComponent);
        let app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    });

    it('should output the developer', () => {
        const fixture = TestBed.createComponent(UserComponent);
        fixture.detectChanges();
        const compiled = fixture.nativeElement as HTMLElement;

        const titleEl = compiled.querySelector('p:nth-of-type(1)');
        expect(titleEl?.textContent).toContain('Developer');
    });
});
