import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'TestServer', content: 'Just a test'}];



  emitAddServer(serverData:{name:string, content:string}) {
    this.serverElements.push({
       type: 'server',
       name: serverData.name,
       content: serverData.content
     });
     
     console.log(this.serverElements)

   }
 
   emitAddBlueprint(serverData:{serverName:string,serverContent:string}) {
      this.serverElements.push({
       type: 'blueprint',
       name: serverData.serverName,
       content: serverData.serverContent
     }); 
   }

changeName(){


  this.serverElements[0].name = 'changed'


}

}
