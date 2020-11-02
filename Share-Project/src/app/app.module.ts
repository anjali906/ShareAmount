import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { ShareLoginComponent } from './share-login/share-login.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
 { path: '', component:ShareLoginComponent},
  { path: 'registeration', component: RegisterationComponent},
  { path: 'main', component: MainComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    ShareLoginComponent,
    RegisterationComponent,
    MainComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
