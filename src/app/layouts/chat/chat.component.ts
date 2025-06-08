import { ChangeDetectionStrategy, Component } from "@angular/core";
import { SidebarComponent } from "./sidebar.component";
import { RouterOutlet } from "@angular/router";
import { ButtonComponent } from "../../components/button.component";
import { ArrowUp, LucideAngularModule } from "lucide-angular";

@Component({
  selector: "app-chat",
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    SidebarComponent,
    RouterOutlet,
    ButtonComponent,
    LucideAngularModule,
  ],
  host: {
    class: "flex h-screen flex-1",
  },
  template: `
    <app-sidebar />
    <article
      class="relative z-10 bg-chat-background flex-1 mt-3.5 bg-[url(/noise.png)] border-l border-t border-chat-border rounded-tl-xl"
    >
      <div class="max-w-3xl mx-auto h-full flex flex-col">
        <div class="flex w-full flex-1">
          <router-outlet />
        </div>
        <div
          class="border-reflect rounded-t-[20px] bg-chat-input-background p-2 pb-0 backdrop-blur-lg ![--c:hsl(289 23% 23%)]"
        >
          <form
            class="flex flex-col rounded-t-xl border border-b-0 border-white/70 bg-[--chat-input-background] px-3 pt-3 text-secondary-foreground outline outline-8 outline-[hsl(var(--chat-input-gradient)/0.5)] pb-safe-offset-3 max-sm:pb-6 sm:max-w-3xl dark:border-[hsl(0,0%,83%)]/[0.04] dark:bg-secondary/[0.045] dark:outline-chat-background/40"
          >
            <textarea
              placeholder="Type your message here..."
              class="placeholder:text-secondary-foreground/60 focus:outline-none resize-none"
              rows="3"
            ></textarea>
            <div class="flex items-center justify-between mb-3">
              <button class="text-xs font-bold">Gemini 2.5 Flash</button>
              <app-button>
                <lucide-angular [img]="ArrowUp" class="h-4" />
              </app-button>
            </div>
          </form>
        </div>
      </div>
    </article>
  `,
  styles: `
    .border-reflect {
      --gradientBorder-gradient:
        linear-gradient(180deg, var(--min), var(--max), var(--min)),
        linear-gradient(15deg, var(--min) 50%, var(--max));
      --start: #000000e0;
    }
    .button-reflect {
      --min: #2e001f40 !important;
      --max: #ffa6e2b0 !important;
      --start: #000000d9 !important;
    }
    .border-reflect:before {
      content: "";
      pointer-events: none;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      position: absolute;
      inset: 0;
      border-radius: inherit;
      padding: var(--gradientBorder-size, 1px);
      background:
        linear-gradient(180deg, var(--min), var(--max), var(--min)),
        linear-gradient(15deg, var(--min) 50%, var(--max));
      --start: #000000e0;
      --opacity: 1;
      -webkit-mask:
        linear-gradient(var(--start), #000) content-box,
        linear-gradient(var(--start), #000);
      mask:
        linear-gradient(var(--start), #000) content-box,
        linear-gradient(var(--start), #000);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
      opacity: var(--opacity, 1);
    }
  `,
})
export default class ChatComponent {
  protected ArrowUp = ArrowUp;
}
