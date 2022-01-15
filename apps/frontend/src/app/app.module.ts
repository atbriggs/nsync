import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { EasterEggDirective } from './directives/easter-egg.directive';
import { GraphQLModule } from './graphql.module';

@NgModule({
  declarations: [AppComponent, EasterEggDirective],
  imports: [BrowserModule, HttpClientModule, GraphQLModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
