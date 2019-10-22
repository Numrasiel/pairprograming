import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';

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
}
