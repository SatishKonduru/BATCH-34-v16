import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-panel',
  templateUrl: './parent-panel.component.html',
  styleUrls: ['./parent-panel.component.css'],
})
export class ParentPanelComponent {
  topicName = '@ContentChild()';
}
