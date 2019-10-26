import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookstoreService } from './services/bookstore.service';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { RestApiService } from './services/rest-api.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [BookstoreService, UserService, RestApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
