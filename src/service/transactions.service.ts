import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
    private url_1 = "http://192.168.1.101:8080/api/v1/";
    private url_2 = "http://192.168.1.101:8082/api/v1/";
    private url_3 = "http://192.168.1.101:8083/api/v1/";
  constructor(private http:HttpClient) { }

    public clientAccounts(clientID) {
        return this.http.get(this.url_2 + "clients/" + clientID);
    }

    public clientAccountsServer1(clientID) {
        return this.http.get(this.url_1 + "clients/" + clientID);
    }

    public findAccount(accNO) {
        return this.http.get(this.url_3 + "account/" + accNO);
    }

    public findAccountServer1(accNO) {
        return this.http.get(this.url_1 + "account/" + accNO);
    }
}
