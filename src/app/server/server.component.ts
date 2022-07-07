import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  ngOnInit(): void {
  }




  serverElements = [{type:'server',name: 'testserver',content:'just test'}];
  title: any;

  onServerAdded(serverData: {serverName: string, serverContent: string, } ) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content :serverData.serverContent
    });
  }

  onBlueprintAdded(serverData: {serverName: string, serverContent: string, }) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content :serverData.serverContent
    });

}

onChangeFirst(){
  this.serverElements[0].name = 'changed !';

}


}
