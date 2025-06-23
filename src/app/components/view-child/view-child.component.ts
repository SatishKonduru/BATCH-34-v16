import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css'],
  preserveWhitespaces: true,
})
export class ViewChildComponent {
  topicName: string = '@ViewChild';
  inputValueWithRef = '';
  inputValueWithViewChild = '';
  @ViewChild('inputValue', { static: true }) inputStaticTrue: ElementRef;
  @ViewChild('inputValue', { static: false }) inputStaticFalse: ElementRef;
  // if TURE-> it is available when the component is initaialized (ngOnInit())
  // if FALSE -> it is available (resolved)in every change detection
  getValueWitRef(element: HTMLInputElement) {
    this.inputValueWithRef = element.value;
  }
  getValueWithViewChild() {
    // this.inputValueWithViewChild = this.el.nativeElement.value;
    // this.inputValueWithViewChild = this.inputStaticTrue?.nativeElement?.value;
    this.inputValueWithViewChild = this.inputStaticFalse?.nativeElement?.value;
  }
  ngOnInit() {
    console.log('ngOnInit Called....');
    console.log(
      'inputStaticTrue in OnInit: ',
      this.inputStaticTrue.nativeElement.value
    );
    console.log(
      'inputStaticTrue in OnInit: ',
      this.inputStaticFalse.nativeElement.value
    );
  }
  ngAfterViewInit() {
    console.log('AfterViewInit Called....');
    console.log(
      'inputStaticTrue in AfterViewInit: ',
      this.inputStaticTrue.nativeElement.value
    );
    console.log(
      'inputStaticFalse in AfterViewInit: ',
      this.inputStaticFalse.nativeElement.value
    );
  }
}
