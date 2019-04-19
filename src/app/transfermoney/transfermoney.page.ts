import {Component, OnInit} from '@angular/core';
import {ToastController} from "@ionic/angular";
import {TransfermoneyService} from "../../service/transfermoney.service";
import {Router} from "@angular/router";

@Component({
    selector: 'app-transfermoney',
    templateUrl: './transfermoney.page.html',
    styleUrls: ['./transfermoney.page.scss'],
})
export class TransfermoneyPage implements OnInit {

    private sendDTO;
    private depositDTO;
    private accounts: any;
    private accselect = false;
    private Depoaccselect = false;
    private accno;
    private acctype;
    private amount;

    private depoAccno;
    private depoName;
    private depoAcctype;
    private depoAmount;
    private msg;
    private dateAndTime;
    constructor(public toastController: ToastController, private  transfer: TransfermoneyService,
                private route:Router) {
    }

    ngOnInit() {
        this.clientAccounts();
        // let dateFormat = require('dateformat')
        this.dateAndTime = new Date();
        // this.dateAndTime = dateFormat(this.dateAndTime,"dddd, mmmm dS, yyyy, h:MM:ss TT")
    }

    async presentToast() {
        const toast = await this.toastController.create({
            message: this.msg,
            duration: 2000
        });
        toast.present();
    }


    async presentToastWithOptions() {
        const toast = await this.toastController.create({
            header: 'Toast header',
            message: 'Click to Close',
            position: 'top',
            buttons: [
                {
                    side: 'start',
                    icon: 'star',
                    text: 'Favorite',
                    handler: () => {
                        console.log('Favorite clicked');
                    }
                }, {
                    text: 'Done',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        toast.present();
    }

    clientAccounts() {
        this.transfer.clientAccounts(localStorage.getItem("id")).subscribe(result => {
            this.accounts = result["bankAccountDTOS"];
        },error1 => {
            this.transfer.clientAccountsServer1(localStorage.getItem("id")).subscribe(result=>{
                this.accounts = result["bankAccountDTOS"];
            })
        })
    }

    findAccount() {
        this.accselect = true;
        this.transfer.findAccount(this.accno).subscribe(result => {
            this.sendDTO = result;
            this.acctype = result["accountType"];
            this.amount = result["amount"];

        },error1 => {
            this.transfer.findAccountServer1(this.accno).subscribe(result=>{
                this.sendDTO = result;
                this.acctype = result["accountType"];
                this.amount = result["amount"];
            })
        })
    }

    findDepoAccount() {
        this.Depoaccselect = true;
        this.transfer.findAccount(this.depoAccno).subscribe(result => {
            this.depositDTO = result;
            this.depoName = result["clientDTO"]["fname"] + " " + result["clientDTO"]["lname"]
            this.depoAcctype = result["accountType"];


        },error1 => {
            this.transfer.findAccountServer1(this.depoAccno).subscribe(result=>{
                console.log(result);
                this.depositDTO = result;
                this.depoName = result["clientDTO"]["fname"] + " " + result["clientDTO"]["lname"]
                this.depoAcctype = result["accountType"];

            })
        })
    }

    transferMoney() {

        if (this.depoAmount > this.amount) {
            this.msg = "Insufficient Money";
            this.presentToast();
            return;
        }

        var sendMoneyDTO={
            dateAndTime: this.dateAndTime,
            amount : this.depoAmount,
            depositAccount : this.depoAccno,
            bankAccountDTO : this.sendDTO,
        }

        this.transfer.transferMoney(sendMoneyDTO).subscribe(result=>{
            this.msg = "Money Transfer Successfully";
            this.route.navigate(["/home"]);
            this.presentToast();
        },error1 => {
            this.transfer.transferMoneyServer3(sendMoneyDTO).subscribe(res=>{
                this.msg = "Money Transfer Successfully";
                this.presentToast();
                this.route.navigate(["/home"]);
            })
        })


    }

}
