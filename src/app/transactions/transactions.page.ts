import {Component, OnInit} from '@angular/core';
import {TransactionsService} from "../../service/transactions.service";

@Component({
    selector: 'app-transactions',
    templateUrl: './transactions.page.html',
    styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {
    private accounts: any;
    private transaction = "deposit"
    private accno;

    private deposits:any;
    private withdraws:any;
    private transfers:any
    // private depositDateTime;
    // private depositAmount;
    // private depositorName;
    // private depositType;
    constructor(private transactions: TransactionsService) {
    }

    ngOnInit() {
        this.clientAccounts();
    }

    clientAccounts() {
        this.transactions.clientAccounts(localStorage.getItem("id")).subscribe(result => {
            this.accounts = result["bankAccountDTOS"];
        }, error1 => {
            this.transactions.clientAccountsServer1(localStorage.getItem("id")).subscribe(result => {
                this.accounts = result["bankAccountDTOS"];
            })
        })
    }


    findAccount() {

        this.transactions.findAccount(this.accno).subscribe(result => {
               this.deposits = result["depositDTOS"];
               this.withdraws = result["widthdrawDTOS"];
               this.transfers = result["sendMoneyDTOS"];
        }, error1 => {
            this.transactions.findAccountServer1(this.accno).subscribe(result => {
                this.deposits = result["depositDTOS"];
                this.withdraws = result["widthdrawDTOS"];
                this.transfers = result["sendMoneyDTOS"];
            })
        })
    }

}
