import { ChangeDetectionStrategy, Component } from "@angular/core";
import { HelpComponent } from "../components/help.component";

@Component({
  selector: "app-chat",
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: "h-full w-full flex-1",
  },
  imports: [HelpComponent],
  template: ` <app-help /> `,
  styles: [],
})
export default class ChatComponent {}
