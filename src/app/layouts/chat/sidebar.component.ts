import { ChangeDetectionStrategy, Component } from "@angular/core";
import { LogoComponent } from "./logo.component";
import { LogIn, LucideAngularModule, PanelLeft, Search } from "lucide-angular";
import { ButtonComponent } from "../../components/button.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-sidebar",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LogoComponent, ButtonComponent, LucideAngularModule, RouterLink],
  template: `
    <aside
      class="relative flex flex-col justify-between w-64 overflow-hidden z-10 h-full p-4 text-primary-foreground"
    >
      <div>
        <div class="grid grid-cols-3 items-center mt-1 mb-5">
          <div>
            <lucide-angular [img]="PanelLeft" class="h-4" />
          </div>
          <div class="flex justify-center">
            <app-logo />
          </div>
          <div></div>
        </div>
        <app-button> New Chat </app-button>
        <div
          class="flex items-center gap-2 mt-4 mb-4 py-2 border-b border-chat-border"
        >
          <lucide-angular [img]="Search" class="h-3.5" />
          <input
            type="text"
            placeholder="Search your threads..."
            class="w-full text-xs text-white placeholder-muted-foreground/50 focus:outline-none"
          />
        </div>
        <p class="text-heading text-xs font-medium mb-2">Yesterday</p>
        <button
          class="cursor-pointer rounded-lg py-2 px-3 w-full text-left hover:bg-sidebar-accent text-sm"
        >
          Greeting
        </button>
      </div>
      <div>
        <button
          class="flex items-center gap-3 py-4 px-3 hover:bg-sidebar-accent w-full cursor-pointer rounded-lg"
          routerLink="/auth"
        >
          <lucide-angular [img]="LogIn" class="h-4" />
          Login
        </button>
      </div>
    </aside>
  `,
  styles: [],
})
export class SidebarComponent {
  protected PanelLeft = PanelLeft;
  protected Search = Search;
  protected LogIn = LogIn;
}
