import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
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
export class DemoComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() message: any;
  @ViewChild('myMessage') myMessage: ElementRef;
  @ContentChild('para') paragraph: ElementRef;
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

    // properties with
    // @ViewChild()
    // @ViewChildren()
    // @ContentChild()
    // @ContentChildren()
  }
  ngDoCheck(): void {
    console.log("Demo's DoCheck() Called...");
    // console.log(
    //   "In Demo's value for paragraph in DoCheck(): ",
    //   this.paragraph.nativeElement.innerHTML
    // );
  }

  ngAfterContentInit(): void {
    console.log("Demo's AfterContentInit() Called...");
    // console.log(
    //   "In Demo's value for paragraph in AfterContentInit(): ",
    //   this.paragraph.nativeElement.innerHTML
    // );
  }
  ngAfterContentChecked(): void {
    console.log("Demo's AfterContentChecked() Called...");
  }
  ngAfterViewInit(): void {
    console.log("Demo's AfterViewInit() called.....");
  }

  ngAfterViewChecked(): void {
    console.log("Demo's AfterViewChecked() called");
  }

  ngOnDestroy(): void {
    console.log("Demo's OnDestroy Called...");
  }
}
