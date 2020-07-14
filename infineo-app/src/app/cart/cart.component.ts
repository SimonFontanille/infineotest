import { Component, OnInit } from '@angular/core';
import { listBD } from '../../mocks/items';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public listItems: any = listBD;
  public listItemsInCart: any;
  private currentUserCartSubscription: Subscription;
  public userCart: number[] = [];

  constructor(
    private userService: UserService,
  ) { }

  ngOnInit(): void {
    this.userCart = this.userService.getItemToUserCart();
    this.setItemsDatasToDisplay();

    this.currentUserCartSubscription = this.userService.currentUserCartSubject.subscribe(
      (value) => {
        this.userCart = value;
        this.setItemsDatasToDisplay();
      }
    );
  }

  setItemsDatasToDisplay(): void {
    this.listItemsInCart = this.userCart.map( itemId => {
      return this.listItems[itemId];
    });
  }

  removeToCart(itemId): void {
    this.userService.removeItemToUserCart(itemId);
  }

}
