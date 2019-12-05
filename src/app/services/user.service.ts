import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
import { from } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    private readonly USER_URL = '/assets/users.json';

    constructor(private httpClient: HttpClient) {
    }

    getUsers = (): Observable<User[]> => {
        return this.httpClient.get<User[]>(this.USER_URL);
    }

    private userSource = new BehaviorSubject(null);
    currentUser = this.userSource.asObservable();
    
    changeMessage(user: User) {
        this.userSource.next(user)
    }
}
