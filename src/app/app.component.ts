import {Component} from "@angular/core";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {LoginComponent} from "./shared/login/login.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private modalService:NgbModal) {

  }

  login() {
    const modalRef = this.modalService.open(LoginComponent);
  }
}
