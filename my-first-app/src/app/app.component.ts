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
  isParagraphShown=false;

  onButtonClickIfUsernameNotEmpty()
  {
      if(this.username!="")
      this.username="";
  }

  onButtonclickedChangeParagraphStatus()
  {
    if(this.isParagraphShown)
      this.isParagraphShown=false;
    if(!this.isParagraphShown)
      this.isParagraphShown=true;
  }

}


