import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormBookComponent } from './form-book/form-book.component';
import { BookstoreService } from './services/bookstore.service';
import { RestApiService } from './services/rest-api.service';
import { UserService } from './services/user.service';
import { booksReducer } from './store/reducer';
import { EffectsModule } from '@ngrx/effects';
import { BooksEffects } from './store/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent, FormBookComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ books: booksReducer }),
    EffectsModule.forRoot([BooksEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
  ],
  providers: [BookstoreService, UserService, RestApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
