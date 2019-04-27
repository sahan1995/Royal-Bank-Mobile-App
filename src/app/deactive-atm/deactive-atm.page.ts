import { Component, OnInit } from '@angular/core';
import {AtmService} from "../../service/atm.service";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-deactive-atm',
  templateUrl: './deactive-atm.page.html',
  styleUrls: ['./deactive-atm.page.scss'],
})
export class DeactiveAtmPage implements OnInit {

  constructor(private atmService:AtmService,private alertC:AlertController) { }

  private pin;
  private nic;
  private verificationCode;
  ngOnInit() {
  }


  request(){

    // this.presentPrompt();


    this.atmService.reqdeactiveATM(this.pin,localStorage.getItem("id")).subscribe(result=>{
      this.verificationCode = result;
      this.alert();
    })
  }

     async alert() {
        const prompt = await this.alertC.create({
            header: 'Enter Verification Code',
            inputs: [
                {
                    name: 'code',
                    placeholder: 'Verification Code',
                    type:'number'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Deactive',
                    handler: data => {
                       if(data.code==this.verificationCode){
                          this.atmService.deactivate(this.pin);
                          this.message("ATM Card Deactivated !");
                           return;
                       }
                       this.message("Invalid Verification Code !");
                    }
                }
            ]
        });
      await prompt.present()
    }
    async message(msg) {
        const alert = await this.alertC.create({
            header: 'Warning',
            subHeader: 'Royal Bank',
            message: msg,
            buttons: ['OK']
        });

        await alert.present();
    }


}
