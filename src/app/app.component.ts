import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title: string = "Testing sandbox:";
  allowNewServer: boolean = false;
  serverCreationStatus: string = "No server has been created!";
  serverName: string = "";

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  // event binding function
  onCreateServer() {
    this.serverCreationStatus = "A new server has been created!";
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

  // can be done with explicit type casting - warning in eslint

  // onUpdateServerName(event: Event) {
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }
}
