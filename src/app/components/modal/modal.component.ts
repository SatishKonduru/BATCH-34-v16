import { Component, ContentChild } from '@angular/core';
import { ModalHeaderComponent } from '../modal-header/modal-header.component';
import { ModalBodyComponent } from '../modal-body/modal-body.component';
import { ModalFooterComponent } from '../modal-footer/modal-footer.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @ContentChild(ModalHeaderComponent) headerComponent?: ModalHeaderComponent;

  @ContentChild(ModalBodyComponent) bodyComponent?: ModalBodyComponent;

  @ContentChild(ModalFooterComponent) footerComponent?: ModalFooterComponent;

  headerAvailable = false;
  bodyAvailable = false;
  footerAvailable = false;

  ngAfterContentInit() {
    // !! always returns TRUE for Truthy values
    // !! always returns FALSE for "undefined" or "null"
    this.headerAvailable = !!this.headerComponent;
    this.bodyAvailable = !!this.bodyComponent;
    this.footerAvailable = !!this.footerComponent;
  }

  bodyMessage: any;
  getBodyMesage() {
    if (this.bodyComponent) {
      this.bodyMessage = this.bodyComponent.getBodyMessage();
    }
  }
}
