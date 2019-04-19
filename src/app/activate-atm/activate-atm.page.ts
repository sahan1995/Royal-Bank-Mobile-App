import { Component, OnInit } from '@angular/core';
import {AtmService} from "../../service/atm.service";
import {AlertController} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-activate-atm',
  templateUrl: './activate-atm.page.html',
  styleUrls: ['./activate-atm.page.scss'],
})
export class ActivateATMPage implements OnInit {
    private accounts: any;
    private accno;
    private accDTO;
    private code;
    private pin;
  constructor(private atmSer:AtmService,private alertC:AlertController,private route:Router) { }

  ngOnInit() {
    this.clientAccounts();
  }
    clientAccounts() {
        this.atmSer.clientAccounts(localStorage.getItem("id")).subscribe(result => {
            this.accounts = result["bankAccountDTOS"];
        }, error1 => {
            this.atmSer.clientAccountsServer1(localStorage.getItem("id")).subscribe(result => {
                this.accounts = result["bankAccountDTOS"];
            })
        })
    }

    findAccount() {

        this.atmSer.findAccount(this.accno).subscribe(result => {
           this.accDTO = result;

        },error1 => {
            this.atmSer.findAccountServer1(this.accno).subscribe(result=>{


                this.accDTO = result;

            })
        })
    }
    activeATM(){
        var atmDTO={
            code : this.code,
            pin:this.pin,
            bankAccountDTO:this.accDTO
        }
        this.atmSer.createATMCard(atmDTO).subscribe(re=>{
          this.alert("ATM card Activated ");
            this.route.navigate(["/home"]);

        },error1 => {
          this.atmSer.createATMCardserver3(atmDTO).subscribe(re=>{
              this.alert("ATM card Activated ");
              this.route.navigate(["/home"]);
          },error2 => {
              this.alert("Failed to Activate");
          })
        })
    }
    async alert(msg) {
        const alert = await this.alertC.create({
            subHeader: 'Royal Bank',
            message: msg,
            buttons: ['OK']
        });

        await alert.present();
    }
}
