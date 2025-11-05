import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { EditProfileComponent } from '../components/edit-profile/edit-profile.component';

@Injectable({
  providedIn: 'root',
})
export class CanDeactivatedGuard
  implements CanDeactivate<EditProfileComponent>
{
  canDeactivate(component: EditProfileComponent): boolean {
    if (component.hasUnsavedChanges()) {
      return confirm('You have Unsaved Changes. Do you really want to leave?');
    }
    return true; //allow to navaigate
  }
}
