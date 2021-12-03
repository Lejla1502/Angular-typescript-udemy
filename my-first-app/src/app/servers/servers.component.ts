import { Component, OnInit } from '@angular/core';

@Component({
 // selector: 'app-servers',
 // selector:'[app-servers]',
 selector:'app-servers', 
 templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer=false;
  serverCreationStatus="No server was created!";
  serverName="";
  serverCreated=false;
  servers=['Testserver', 'testserver 2'];

  constructor() { 
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000);
  }

  ngOnInit(): void {
  }

  onCreateServer()
  {
    this.serverCreated=true;
    this.serverCreationStatus="Server was created. New name is "+this.serverName;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event:any)
  {
      this.serverName=event.target.value;
  }

}
