import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { ShareLoginComponent } from './share-login/share-login.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TimesDirective } from './times.directive'

const routes: Routes = [
  { path: '', component: ShareLoginComponent },
  { path: 'registeration', component: RegisterationComponent },
  { path: 'main', component: MainComponent  },
  { path: '**', component: NotFoundComponent}

]

@NgModule({
  declarations: [
    AppComponent,
    ShareLoginComponent,
    RegisterationComponent,
    MainComponent,
    TimesDirective
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(routes), ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
