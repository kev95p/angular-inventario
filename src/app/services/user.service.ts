import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }
    getCurrentUser(){
        return JSON.parse(localStorage.getItem("currentUser"));
    }
}