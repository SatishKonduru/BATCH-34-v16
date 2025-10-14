import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
})
export class DemoComponent implements OnChanges, OnInit {
  @Input() message: any;
  @ViewChild('myMessage') myMessage: ElementRef;
  constructor() {
    // console.log('Demo Constructor called....');
    // console.log(
    //   'Message Value in Demo constructor from Home Component: ',
    //   this.message
    // );
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log("Demo's OnChanges called....", this.message);

    // console.log('Changes: ', changes);
  }

  ngOnInit() {
    console.log("Demo's OnInit Called...");
    console.log(
      "Demo's myMessage Value in OnInit: ",
      this.myMessage.nativeElement.innerHTML
    );
    // properties with
    // @ViewChild()
    // @ViewChildren()
    // @ContentChild()
    // @ContentChildren()
  }
}
