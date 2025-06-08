import { Component } from "@angular/core";
import { GradientComponent } from "./gradient.component";
import { SidebarComponent } from "./sidebar.component";

@Component({
  selector: "app-default",
  imports: [SidebarComponent, GradientComponent],
  host: {
    class: "flex h-screen",
  },
  template: `
    <app-sidebar />
    <article
      class="relative z-10 bg-chat-background flex-1 mt-3.5 p-4 bg-[url(/noise.png)] border-l border-t border-chat-border rounded-tl-xl"
    >
      <ng-content />
    </article>

    <!-- <router-outlet /> -->
    <app-gradient />
  `,
  styles: [],
})
export class DefaultComponent {}
