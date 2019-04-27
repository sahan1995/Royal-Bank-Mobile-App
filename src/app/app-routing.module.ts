import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'profile',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'transfermoney', loadChildren: './transfermoney/transfermoney.module#TransfermoneyPageModule' },
  { path: 'transactions', loadChildren: './transactions/transactions.module#TransactionsPageModule' },
  { path: 'activate-atm', loadChildren: './activate-atm/activate-atm.module#ActivateATMPageModule' },
  { path: 'logout', loadChildren: './logout/logout.module#LogoutPageModule' },
  { path: 'accounts', loadChildren: './accounts/accounts.module#AccountsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
