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
  user = {
    name: 'Satish Konduru',
    email: 'satish@gmail.com',
    bio: 'Full Stack AI Develiper',
  };
  save() {
    this.saved = true;
    alert('Profile saved Succssfully');
  }

  onInputChange() {}
  // the following method will be used by canDeactivate guard
  hasUnsavedChanges(): boolean {
    return !this.saved;
  }
}
