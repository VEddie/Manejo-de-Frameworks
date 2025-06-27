import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import ROOT from '../utilities/constants';

export interface User {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private http: HttpClient) {}

    getAll() {
        return this.http.get<User[]>(ROOT);
    }

    register(user: User) {
        return this.http.post(ROOT, user);
    }
}
