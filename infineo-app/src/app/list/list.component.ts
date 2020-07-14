import { Component, OnInit } from '@angular/core';
import { listBD } from '../../mocks/items';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public isLogged: boolean;
  public listItems: any = listBD;
  private isLoginSubsription: Subscription;
  private currentUserCartSubscription: Subscription;
  public userCart: number[] = [];

  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.isLoginSubsription = this.authService.currentUserIsLogged.subscribe(
      (value) => {
        this.isLogged = value;
      }
    );
    this.currentUserCartSubscription = this.userService.currentUserCartSubject.subscribe(
      (value) => {
        this.userCart = value;
      }
    );
  }

  addToCart(itemId) {
    this.userService.addItemToUserCart(itemId);
  }

  removeToCart(itemId) {
    this.userService.removeItemToUserCart(itemId);
  }

}
