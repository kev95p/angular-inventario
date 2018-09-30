import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
    constructor(private http: HttpClient) { }

    login(email: string, password: string) {
        return this.http.post<any>("http://localhost:3000/auth/login", { email:email, password:password })
            .pipe(
                map(response => {

                // login successful if there's a jwt token in the response
                if (response.authUser && response.authUser.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(response.authUser));
                }

                return response;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}