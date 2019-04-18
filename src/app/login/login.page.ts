import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../service/login.service";
import {AlertController, LoadingController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {


  private userName;
  private password;
  constructor(private loginS:LoginService,private alertC:AlertController,private route:Router,public loadingCtrl: LoadingController,) { }

  ngOnInit() {
  }



  login(){
    var loginDTO={
        userName: this.userName,
        password :this.password,
    }

    this.loginS.login(loginDTO).subscribe(result=>{
        localStorage.setItem("fname",result["fname"])
        localStorage.setItem("lname",result["lname"])
        localStorage.setItem("id",result["id"])
        localStorage.setItem("role",result["role"])
        this.route.navigate(["/home"])

    },error1 => {
      this.loginS.loginServer3(loginDTO).subscribe(result=>{
          localStorage.setItem("fname",result["fname"])
          localStorage.setItem("lname",result["lname"])
          localStorage.setItem("id",result["id"])
          localStorage.setItem("role",result["role"])

          this.route.navigate(["/home"])
      },error2 => {
        this.alert();
      })
    })
  }

    async alert() {
        const alert = await this.alertC.create({
            header: 'Warning',
            subHeader: 'Royal Bank',
            message: 'User name or Password Incorrect! ',
            buttons: ['OK']
        });

        await alert.present();
    }

}
