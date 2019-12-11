import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
// we need the FormsModule to be able to use the 2-way binding

import { AppComponent } from "./app.component";
import { TestComponent } from "./test/test.component";

@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
