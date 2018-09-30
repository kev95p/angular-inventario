import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardResponse } from '../utils/responses/CardResponse';

@Injectable()
export class CardService {

  constructor(public http: HttpClient) { }

  getAll() {
    return this.http.get<CardResponse>('http://localhost:3000/cards');
  }

}
