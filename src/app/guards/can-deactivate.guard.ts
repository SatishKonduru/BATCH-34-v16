// import { CanDeactivatedGuard } from './can-deactivate.guard';
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { EditProfileComponent } from '../components/edit-profile/edit-profile.component';
import { CanComponentDeactivate } from '../interfaces/can-component-deactivate';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
// export class CanDeactivatedGuard
//   implements CanDeactivate<EditProfileComponent>
// {
//   canDeactivate(component: EditProfileComponent): boolean {
//     if (component.hasUnsavedChanges()) {
//       return confirm('You have Unsaved Changes. Do you really want to leave?');
//     }
//     return true; //allow to navaigate
//   }
// }
export class CanDeactivatedGuard
  implements CanDeactivate<CanComponentDeactivate>
{
  canDeactivate(
    component: CanComponentDeactivate
  ): boolean | Observable<boolean> | Promise<boolean> {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
