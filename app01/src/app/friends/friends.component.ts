import { Component } from '@angular/core';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent {

  friendsList:string[];
  fnm:string;

  constructor(){
    this.friendsList=["Vamsy","Sagar"];
    this.fnm="";
  }

  remove(index:number){
    this.friendsList.splice(index,1);
  }

  add(){
    this.friendsList.push(this.fnm);
    this.fnm="";
  }
}
