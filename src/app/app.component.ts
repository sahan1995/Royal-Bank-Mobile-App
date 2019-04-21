import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {



    public appPages = [
        {
            title: 'Home',
            url: '/home',
            icon: 'home'
        },
        {
            title: 'My Profile',
            url: '/profile',
            icon: 'contact'
        },
        {
            title: 'Transfer Money',
            url: '/transfermoney',
            icon: 'cash'
        },
        {
            title: 'My Transactions',
            url: '/transactions',
            icon: 'swap'
        },
        {
            title: 'Activate ATM Card',
            url: '/activate-atm',
            icon: 'card'
        }
    ];

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar


    ) {

        this.initializeApp();
    }

    initializeApp() {

        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });

    }
}
