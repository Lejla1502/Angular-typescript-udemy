import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  username="";
  isUsernameEmpty=true;

  onButtonClickIfUsernameNotEmpty()
  {
      if(this.username!="")
      this.username="";
  }
}


