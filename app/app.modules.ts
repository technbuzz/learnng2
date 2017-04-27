import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./component.app";

@NgModule({
  imports: [ // imports features that we gonna need 
    BrowserModule,
    FormsModule
  ],
  declarations: [ //view classes that belongs to this module, it allows us to import all the modules that 
  // we have in our application
    AppComponent
  ],
  bootstrap: [ // main container of your entire application
    AppComponent
  ]
})

export class AppModule {}