import { Component, Input, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentInit  ,AfterViewInit, AfterContentChecked, AfterViewChecked} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  @Input()element:{type:string,name:string,content:string};
  @Input()name:string;

  constructor() {
  
    console.log('constructor called');
    
    
  }
  
  ngOnInit(): void {
    console.log('ngOnInit Called');
  }
  


  
  ngOnChanges(changes: SimpleChanges) {

    console.log('on changes');
    
    console.log(changes);
    
    
  }
  
  ngDoCheck(){
    
    console.log('do check');


  }

  ngAfterContentInit(){

    console.log('AfterContentInit')

    
  }


}
