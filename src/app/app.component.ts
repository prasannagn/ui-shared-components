import {Component} from "@angular/core";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {LoginComponent} from "./shared/login/login.component";
import {IHeaderItem} from "./shared/header/header-item";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private modalService:NgbModal) {
  }

  items:Array<IHeaderItem> = [
    {
      title: 'Home',
      link: '/',
      type: 'Link',
      action: undefined
    },
    {
      title: 'Books',
      link: '/books',
      type: 'Link',
      action: undefined
    },
    {
      title: 'Search',
      link: undefined,
      type: 'Search',
      action: function (form) {
        console.log('Search...', form.value);
      }
    },
    {
      title: 'Login',
      link: undefined,
      type: 'Button',
      action: this.login.bind(this)
    }
  ];

  

  login() {
    const modalRef = this.modalService.open(LoginComponent);
  }

}
