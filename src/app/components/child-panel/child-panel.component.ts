import {
  AfterContentInit,
  Component,
  ContentChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-child-panel',
  templateUrl: './child-panel.component.html',
  styleUrls: ['./child-panel.component.css'],
})
export class ChildPanelComponent implements AfterContentInit {
  cPara: any;
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;

  ngAfterContentInit() {
    console.log(
      'paragraph value in AfterConetentInit Hook: ',
      this.paragraph.nativeElement.textContent
    );
    this.paragraph = this.paragraph.nativeElement.textContent;
  }
}
