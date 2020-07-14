import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
    public currentUserCart: number[];
    public currentUserCartSubject: Subject<number[]>;

    constructor() {
        this.currentUserCartSubject = new Subject<number[]>();
        this.currentUserCart = [];
    }

    addItemToUserCart(itemId: number) {
        this.currentUserCart.push(itemId);
        this.emitUserCartSubject();
    }

    removeItemToUserCart(itemId: number) {
        const index = this.currentUserCart.indexOf(itemId, 0);
        if (index > -1) {
            this.currentUserCart.splice(index, 1);
        }
        this.emitUserCartSubject();
    }

    emitUserCartSubject() {
        this.currentUserCartSubject.next(this.currentUserCart);
    }

    getItemToUserCart(): number[] {
        return this.currentUserCart;
    }
}