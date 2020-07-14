import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { UserService } from '../services/user.service';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CartComponent,
      ],
      providers: [
        UserService,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set items to display in new array', () => {
    component.userCart = [0];
    component.listItems = [{
      "id": 0,
    },
    {
      "id": 1,
    }]
    component.setItemsDatasToDisplay();
    expect(component.listItemsInCart).toEqual([{"id": 0}]);
  });

  it('should userService.removeItemToUserCart to be called', () => {
    let service = new UserService();
    const spy = spyOn(service, 'removeItemToUserCart')
    component = new CartComponent(service);
    component.removeToCart(0);

    expect(service.removeItemToUserCart).toHaveBeenCalled();
  });
});
