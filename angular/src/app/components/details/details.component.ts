import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import firebase from 'firebase';
import User = firebase.User;

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() source:string;
  @Input() label:string;
  @Input() link:string;
  @Output() message = new EventEmitter<string>();

  constructor(private authService:AuthService) { }
  get user():User{
    return this.authService.user;
  }

  get isLoggedIn(): boolean{
    return this.authService.isLoggedIn;
  }

  ngOnInit(): void {
  }

  emitEvent(label:string){
    this.message.emit(label);
  }
}
