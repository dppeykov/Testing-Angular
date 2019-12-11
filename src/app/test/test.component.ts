import { Component } from "@angular/core";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html"
})
export class TestComponent {
  id: number = 10;
  status: string = "online";

  getStatus = () => this.status;
}
