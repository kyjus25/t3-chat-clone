import { Component } from "@angular/core";

@Component({
  selector: "app-gradient",
  imports: [],
  host: {
    class: "absolute inset-0 dark:bg-sidebar z-0",
  },
  template: `
    <div
      class="absolute inset-0 opacity-40"
      style="
          background-image: radial-gradient(
              closest-corner at 120px 36px,
              rgba(255, 1, 111, 0.19),
              rgba(255, 1, 111, 0.08)
            ),
            linear-gradient(rgb(63, 51, 69) 15%, rgb(7, 3, 9));
        "
    ></div>
    <div class="absolute inset-0 bg-[url(/noise.png)]"></div>
    <div class="absolute inset-0 bg-black/40"></div>
  `,
  styles: [],
})
export class GradientComponent {}
