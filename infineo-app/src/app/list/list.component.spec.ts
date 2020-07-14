import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListComponent } from './list.component';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      providers: [ UserService, AuthService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should userService.addItemToUserCart to be called', () => {
    let service = new UserService();
    const spy = spyOn(service, 'addItemToUserCart')
    component = new ListComponent(service, new AuthService());
    component.addToCart(0);

    expect(service.addItemToUserCart).toHaveBeenCalled();
  });

  it('should userService.removeItemToUserCart to be called', () => {
    let service = new UserService();
    const spy = spyOn(service, 'removeItemToUserCart')
    component = new ListComponent(service, new AuthService());
    component.removeToCart(0);

    expect(service.removeItemToUserCart).toHaveBeenCalled();
  });
});
