import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../app/user/user.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { SignUpCompComponent } from './home/sign-up-comp/sign-up-comp.component';
import { LoginComponent } from './home/login/login.component';
import { UserHomeScreenComponent } from './home/user-home-screen/user-home-screen.component';
import { EditUserProfileComponent } from './home/edit-user-profile/edit-user-profile.component';
import { SynopsisPageComponent } from './home/synopsis-page/synopsis-page.component';
import { BookTicketsComponent } from './home/book-tickets/book-tickets.component';
import { BookSeatsComponent } from './home/book-seats/book-seats.component';
import { SelectAgesComponent } from './home/select-ages/select-ages.component';
import { OrderConfirmationComponent } from './home/order-confirmation/order-confirmation.component';
import { CheckoutComponent } from './home/checkout/checkout.component';
import { ConfirmaionComponent } from './home/confirmaion/confirmaion.component';
import { NewAdminComponent } from './admin/new-admin/new-admin.component';
import { ForgotPasswordComponent } from './home/forgot-password/forgot-password.component';
import { SignUp2Component } from './home/sign-up2/sign-up2.component';
import { ChangePasswordComponent } from './home/change-password/change-password.component';
import { VerfiyUserComponent } from './home/verfiy-user/verfiy-user.component';
import { AdminRegComponent } from './admin/admin-reg/admin-reg.component';
import { ManageCardsComponent } from './home/manage-cards/manage-cards.component';
import { OrderHistoryComponent } from './home/order-history/order-history.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'admin2', component: NewAdminComponent },
  { path: 'adminHomePage', component: AdminHomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'changePassword', component: ChangePasswordComponent },
  { path: 'SignUp', component: SignUp2Component },
  { path: 'SignUp2', component: SignUpCompComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'verifyUser', component: VerfiyUserComponent },
  { path: 'manageCards', component: ManageCardsComponent },
  { path: 'userHomePage', component: UserHomeScreenComponent },
  { path: 'editUserProfile', component: EditUserProfileComponent },
  { path: 'synopsis/:movieName/:id', component: SynopsisPageComponent },
  { path: 'bookTickets/:movieName', component: BookTicketsComponent },
  { path: 'bookSeats', component: BookSeatsComponent },
  { path: 'selectAges', component: SelectAgesComponent },
  { path: 'orderConfirmation', component: OrderConfirmationComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'confirmation', component: ConfirmaionComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'adminRegistration', component: AdminRegComponent },
  { path: 'orderHistory', component: OrderHistoryComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
