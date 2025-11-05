import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
  preserveWhitespaces: true,
})
export class EditProfileComponent {
  myName: '';
  saved = false;
  save() {
    this.saved = true;
    alert('Profile saved Succssfully');
  }
  // the following method will be used by canDeactivate guard
  hasUnsavedChanges(): boolean {
    return !this.saved;
  }
}
