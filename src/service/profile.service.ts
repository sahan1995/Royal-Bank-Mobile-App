import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

    private url = "http://192.168.1.101/api/v1/"
    constructor(private http:HttpClient) { }

    public clientDetails(clientID) {
        return this.http.get(this.url + "clients/" + clientID);
    }

    public userDetails(userName){
       return this.http.get(this.url+"users/"+userName);
    }

    public changePassword(uname,password){
        return this.http.put(this.url+"users/change?uname="+uname+"&pass="+password,null);
    }
}
