import { ChangeDetectionStrategy, Component } from "@angular/core";
import {
  Code,
  GraduationCap,
  LucideAngularModule,
  Newspaper,
  Sparkle,
  Sparkles,
} from "lucide-angular";

@Component({
  selector: "app-help",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: "flex items-center h-full w-full flex-1 max-w-2xl mx-auto",
  },
  imports: [LucideAngularModule],
  template: `
    <div>
      <h1 class="text-3xl font-semibold">How can I help you?</h1>
      <div class="mt-7 mb-4 flex gap-4">
        <button
          class="cursor-pointer justify-center whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-pink-600/90 disabled:hover:bg-primary h-9 flex items-center gap-1 rounded-xl px-5 py-2 font-semibold outline-1 outline-secondary/70 backdrop-blur-xl data-[selected=false]:bg-secondary/30 data-[selected=false]:text-secondary-foreground/90 data-[selected=false]:outline data-[selected=false]:hover:bg-secondary max-sm:size-16 max-sm:flex-col sm:gap-2 sm:rounded-full"
          data-selected="false"
        >
          <lucide-angular [img]="Sparkles" class="h-4" />
          <div>Create</div>
        </button>
        <button
          class="cursor-pointer justify-center whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-pink-600/90 disabled:hover:bg-primary h-9 flex items-center gap-1 rounded-xl px-5 py-2 font-semibold outline-1 outline-secondary/70 backdrop-blur-xl data-[selected=false]:bg-secondary/30 data-[selected=false]:text-secondary-foreground/90 data-[selected=false]:outline data-[selected=false]:hover:bg-secondary max-sm:size-16 max-sm:flex-col sm:gap-2 sm:rounded-full"
          data-selected="false"
        >
          <lucide-angular [img]="Newspaper" class="h-4" />
          <div>Explore</div>
        </button>
        <button
          class="cursor-pointer justify-center whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-pink-600/90 disabled:hover:bg-primary h-9 flex items-center gap-1 rounded-xl px-5 py-2 font-semibold outline-1 outline-secondary/70 backdrop-blur-xl data-[selected=false]:bg-secondary/30 data-[selected=false]:text-secondary-foreground/90 data-[selected=false]:outline data-[selected=false]:hover:bg-secondary max-sm:size-16 max-sm:flex-col sm:gap-2 sm:rounded-full"
          data-selected="false"
        >
          <lucide-angular [img]="Code" class="h-4" />
          <div>Code</div>
        </button>
        <button
          class="cursor-pointer justify-center whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground shadow hover:bg-pink-600/90 disabled:hover:bg-primary h-9 flex items-center gap-1 rounded-xl px-5 py-2 font-semibold outline-1 outline-secondary/70 backdrop-blur-xl data-[selected=false]:bg-secondary/30 data-[selected=false]:text-secondary-foreground/90 data-[selected=false]:outline data-[selected=false]:hover:bg-secondary max-sm:size-16 max-sm:flex-col sm:gap-2 sm:rounded-full"
          data-selected="false"
        >
          <lucide-angular [img]="GraduationCap" class="h-4" />
          <div>Learn</div>
        </button>
      </div>
      <div class="flex items-start gap-2 py-1">
        <button
          class="cursor-pointer w-full rounded-md py-2 text-left text-secondary-foreground hover:bg-secondary/50 sm:px-3"
        >
          <span>Can machines ever become conscious?</span>
        </button>
      </div>
      <div
        class="flex items-start gap-2 border-t border-secondary/40 py-1 first:border-none"
      >
        <button
          class="cursor-pointer w-full rounded-md py-2 text-left text-secondary-foreground hover:bg-secondary/50 sm:px-3"
        >
          <span>What happens if you fall into a black hole?</span>
        </button>
      </div>
      <div
        class="flex items-start gap-2 border-t border-secondary/40 py-1 first:border-none"
      >
        <button
          class="cursor-pointer w-full rounded-md py-2 text-left text-secondary-foreground hover:bg-secondary/50 sm:px-3"
        >
          <span>Why do we dream?</span>
        </button>
      </div>
      <div
        class="flex items-start gap-2 border-t border-secondary/40 py-1 first:border-none"
      >
        <button
          class="cursor-pointer w-full rounded-md py-2 text-left text-secondary-foreground hover:bg-secondary/50 sm:px-3"
        >
          <span>How many atoms are in a human body?</span>
        </button>
      </div>
    </div>
  `,
  styles: ``,
})
export class HelpComponent {
  protected Sparkles = Sparkles;
  protected Code = Code;
  protected Newspaper = Newspaper;
  protected GraduationCap = GraduationCap;
}
