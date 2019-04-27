import { Component, OnInit } from '@angular/core';
import {AccountService} from "../../service/account.service";

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.page.html',
  styleUrls: ['./accounts.page.scss'],
})
export class AccountsPage implements OnInit {


    private accounts: any;
    private accountacount;
    private accno;
    private accountType;
    private balance;
    private transactions;
    private deposits;
    private withdraws;
    private transfers;
  constructor(private accountService:AccountService) { }

  ngOnInit() {
    this.clientDetails();
  }


  clientDetails(){
    this.accountService.clientAccounts(localStorage.getItem("id")).subscribe(result=>{
        this.accounts = result["bankAccountDTOS"];
        this.accountacount = result["bankAccountDTOS"].length;
    })
  }

    findAccount() {

        this.accountService.findAccount(this.accno).subscribe(result => {
          this.accountType = result["accountType"];
          this.balance = "Rs "+result["amount"]+".00";
          this.deposits = result["depositDTOS"].length;
          this.withdraws = result["widthdrawDTOS"].length;
          this.transfers = result["sendMoneyDTOS"].length;
          this.transactions = this.deposits+this.withdraws+this.transfers;
          console.log(result);
        })
    }
}
