import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { LoginComponent } from './login.component';
import { AuthService } from 'src/app/services/auth.service';

describe('loginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;  

    beforeEach(async() => {
       await TestBed.configureTestingModule({
            declarations: [LoginComponent] 
        })
        .compileComponents();
        
    }); 
    beforeEach(()=>{
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
    })

    it('should ', () => {
        expect()
    })
})
 