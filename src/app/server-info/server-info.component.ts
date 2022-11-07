import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-server-info',
  templateUrl: './server-info.component.html',
  styleUrls: ['./server-info.component.css'],
})
export class ServerInfoComponent implements OnInit {

  constructor() { }

byRef = ''
byViewchild = ''

@ViewChild('otherRef',{static:false}) inputRef: ElementRef

  ngOnInit(): void {
  }


  getValueByref(input: HTMLInputElement){


      this.byRef = input.value




  }

  getValuebyChild(input: HTMLInputElement){

    console.log('old')

    this.byViewchild = this.inputRef.nativeElement.value

  }


}
