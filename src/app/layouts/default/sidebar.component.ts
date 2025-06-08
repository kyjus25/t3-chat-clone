import { Component } from "@angular/core";
import { LogoComponent } from "./logo.component";
import { LucideAngularModule, PanelLeft } from "lucide-angular";
import { ButtonComponent } from "../../components/button.component";

@Component({
  selector: "app-sidebar",
  imports: [LogoComponent, ButtonComponent, LucideAngularModule],
  template: `
    <aside
      class="relative w-64 overflow-hidden z-10 h-full p-4 text-primary-foreground"
    >
      <div class="grid grid-cols-3 items-center mt-1 mb-5">
        <div>
          <lucide-angular [img]="PanelLeft" class="h-4"></lucide-angular>
        </div>
        <div class="flex justify-center">
          <app-logo />
        </div>
        <div></div>
      </div>

      <app-button> New Chat </app-button>
      Hello world!
    </aside>
  `,
  styles: [],
})
export class SidebarComponent {
  protected PanelLeft = PanelLeft;
}
