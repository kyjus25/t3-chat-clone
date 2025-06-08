import { Component } from "@angular/core";
import { DefaultComponent } from "./layouts/default/default.component";

@Component({
  selector: "app-root",
  imports: [DefaultComponent],
  template: ` <app-default> Hello world?</app-default> `,
  styles: [],
})
export class AppComponent {}
