import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';



import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { InputComponent } from './input/input.component';
import {FormsModule} from '@angular/forms';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import {UsersService} from './users.service';



@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    InputComponent


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule

  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
