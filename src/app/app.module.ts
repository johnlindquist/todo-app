import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {ServicesModule} from "./services";
import {AppComponent} from "./app.component";

export {
    ServicesModule
}

@NgModule({
    imports:[BrowserModule, ServicesModule.forRoot()],
    declarations:[AppComponent],
    bootstrap:[AppComponent]
})
export class AppModule{}