import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ContactComponent } from './components/contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ContactComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
