import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AuthComponent } from './auth/auth.component';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component';

import { AppareilService } from './services/appareil.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard.service';
import { UserService } from './services/user.service';
import { NewUserComponent } from './new-user/new-user.component';


const appRoutes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'appareils', canActivate: [AuthGuard], component: AppareilViewComponent },
  { path: 'appareils/:id', canActivate: [AuthGuard], component: SingleAppareilComponent },
  { path: 'edit', canActivate: [AuthGuard], component: EditAppareilComponent },
  { path: 'users', canActivate: [AuthGuard], component: UserListComponent },
  { path: 'new-user', canActivate: [AuthGuard], component: NewUserComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AppareilViewComponent,
    AuthComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
