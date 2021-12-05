import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: ['.white{color:white;}']
})
export class AppComponent implements OnInit{
 
  username="";
  isUsernameEmpty=true;
  isParagraphShown=true;

  buttonClicks:Array<any>=[];

  counter:number=1;

  ngOnInit(): void {
    
  }

  constructor(){
    this.counter=1;
  }
  onButtonClickIfUsernameNotEmpty()
  {
      if(this.username!="")
      this.username="";
  }

  onButtonclickedChangeParagraphStatus()
  {
    if(this.isParagraphShown)
      this.isParagraphShown=false;
    else
      this.isParagraphShown=true;

      this.buttonClicks.push(this.counter);
      this.counter++;
      console.log(this.counter);
      
  }

}


