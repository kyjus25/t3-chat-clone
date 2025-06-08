import { Component } from "@angular/core";

@Component({
  selector: "app-button",
  imports: [],
  template: `
    <button
      class="cursor-pointer w-full text-primary-foreground inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-reflect button-reflect bg-[rgb(162,59,103)] font-semibold shadow hover:bg-[#d56698] active:bg-[rgb(162,59,103)] disabled:hover:bg-[rgb(162,59,103)] disabled:active:bg-[rgb(162,59,103)] dark:bg-primary/20 dark:hover:bg-pink-800/70 dark:active:bg-pink-800/40 disabled:dark:hover:bg-primary/20 disabled:dark:active:bg-primary/20 h-9 w-9 relative rounded-lg p-2 text-pink-50"
    >
      <ng-content />
    </button>
  `,
  styles: `
    .border-reflect {
      --c: 320 100% 75%;
      --min: hsl(var(--c) / 0.2);
      --max: hsl(var(--c) / 1);
      --gradientBorder-gradient:
        linear-gradient(180deg, var(--min), var(--max), var(--min)),
        linear-gradient(15deg, var(--min) 50%, var(--max));
      --opacity: 1;
      --start: rgba(0, 0, 0, 0.85);
      position: relative;
    }
    .border-reflect {
      --gradientBorder-gradient:
        linear-gradient(180deg, #93335b00, #93335bbd, #93335b17),
        linear-gradient(15deg, #93335b1f 50%, #93335bbd);
      --start: rgba(0, 0, 0, 0.92);
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
      background: var(--gradientBorder-gradient);
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
export class ButtonComponent {}
