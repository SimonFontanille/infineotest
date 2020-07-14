import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
    public currentUserIsLogged: Subject<boolean>;
    public isLogged: boolean = false;

    constructor() {
        this.currentUserIsLogged = new Subject<boolean>();
    }

    login(username, password) {
        if (username === "user" && password === "pass") {
            this.currentUserIsLogged.next(true);
            this.isLogged = true;
        }
        return !this.isLogged;
    }

    logout() {
        this.currentUserIsLogged.next(false);
        this.isLogged = false;
    }
}