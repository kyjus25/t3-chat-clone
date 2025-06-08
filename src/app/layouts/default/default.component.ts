import { ChangeDetectionStrategy, Component } from "@angular/core";
import { GradientComponent } from "./gradient.component";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-default",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterOutlet, GradientComponent],
  host: {
    class: "flex h-screen",
  },
  template: `
    <router-outlet />
    <app-gradient />
  `,
  styles: [],
})
export default class DefaultComponent {}
