import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../../service/profile.service";
import {AlertController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  private fullname;
  private occupation;
  private accounts;

  private oldPassword;
  private newPassword;
  private confirmPassword;

  constructor(private profileS:ProfileService,private alertC:AlertController,private router:Router) {

  }

  ngOnInit() {
      this.clientDetails();
  }




  clientDetails(){
    this.profileS.clientDetails(localStorage.getItem("id")).subscribe(result=>{
      this.accounts = result["bankAccountDTOS"].length;

      this.fullname = result["fname"]+" "+result["mname"]+" "+result["lname"];
      this.occupation = result["occupation"];
    })
  }

    change(){
      this.profileS.userDetails(localStorage.getItem("uname")).subscribe(result=>{
        if(result["password"]==this.oldPassword){
          if(this.newPassword==this.confirmPassword){
            this.profileS.changePassword(localStorage.getItem("uname"),this.newPassword).subscribe();
            this.alert("Password Change Successfully");
            this.router.navigate(["/home"])
            return;
          }
          this.alert("Password Mismatching")
          return;
        }
        this.alert("Check Your Old Password Again");

      })
    }

    async alert(msg) {
        const alert = await this.alertC.create({
            header: 'Warning',
            subHeader: 'Royal Bank',
            message: msg,
            buttons: ['OK']
        });

        await alert.present();
    }
}
