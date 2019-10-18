import { Component } from "@angular/core";
import { Bookstore } from "./models/bookstore-model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "bookstore-app";
}

class Program {
  public static main(): void {
    const bookstore = new Bookstore();

    console.log(bookstore);
  }
}

Program.main();
