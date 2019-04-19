import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AtmService {

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
    public createATMCard(atm){
        return this.http.post(this.url_1+"atmcards",atm);
    }
    public createATMCardserver3(atm){
        return this.http.post(this.url_3+"atmcards",atm);
    }
}
