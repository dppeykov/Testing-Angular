import { Component } from "@angular/core";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html"
})
export class TestComponent {
  id: number = 10;
  status: string = "online";

  constructor() {
    this.status = Math.random() > 0.5 ? "online" : "offline";
  }

  getStatus = () => this.status;

  getColor() {
    return this.status === "online" ? "green" : "red";
  }
}
