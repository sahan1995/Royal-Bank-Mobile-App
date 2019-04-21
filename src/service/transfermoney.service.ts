import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class TransfermoneyService {


    private url = "http://192.168.1.101:8085/api/v1/"
    constructor(private http: HttpClient) {
    }


    public clientAccounts(clientID) {
        return this.http.get(this.url + "clients/" + clientID);
    }


    public findAccount(accNO) {
        return this.http.get(this.url + "accounts/" + accNO);
    }

    public transferMoney(DTO) {
        return this.http.post(this.url + "sendmoney", DTO);
    }

}
