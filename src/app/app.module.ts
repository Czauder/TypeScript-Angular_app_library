import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookstoreService } from './services/bookstore.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [BookstoreService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
