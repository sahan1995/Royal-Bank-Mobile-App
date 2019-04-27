import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class AccountService {



    private url = "http://192.168.1.101/api/v1/"
    constructor(private http:HttpClient) { }


    clientAccounts(clientID) {

    return this.http.get(this.url+"clients/"+clientID);

    }
    public findAccount(accNO) {
        return this.http.get(this.url + "accounts/" + accNO);
    }
}
