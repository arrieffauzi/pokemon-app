import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  baseUrl = 'https://pokeapi.co/api/v2';
  constructor() {}

  getList(offset: number, limit: number) {
    return axios
      .get(this.baseUrl + `/pokemon?offset=${offset}&limit=${limit}`)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });
  }

  getDetail(name:string) {
    return axios
      .get(this.baseUrl + `/pokemon/${name}`)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });
  }
}
