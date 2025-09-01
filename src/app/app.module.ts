import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './components/test/test.component';
import { InterpolationComponent } from './components/interpolation/interpolation.component';
import { PropertyBindingComponent } from './components/property-binding/property-binding.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { StyleBindingComponent } from './components/style-binding/style-binding.component';
import { CommonModule } from '@angular/common';
import { ClassBindingComponent } from './components/class-binding/class-binding.component';
import { EventBindingComponent } from './components/event-binding/event-binding.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { TempRefVariablesComponent } from './components/temp-ref-variables/temp-ref-variables.component';
import { TwoWayDataBindingComponent } from './components/two-way-data-binding/two-way-data-binding.component';
import { FormsModule } from '@angular/forms';
import { IfComponent } from './components/if/if.component';
import { SwitchComponent } from './components/switch/switch.component';
import { ForComponent } from './components/for/for.component';
import { SenderComponent } from './components/sender/sender.component';
import { ReceiverComponent } from './components/receiver/receiver.component';
import { TopicComponent } from './components/topic/topic.component';
import { ViewChildComponent } from './components/view-child/view-child.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { Parent2Component } from './components/parent2/parent2.component';
import { Child2Component } from './components/child2/child2.component';
import { QuestionnaireComponent } from './components/questionnaire/questionnaire.component';
import { QuestionComponent } from './components/question/question.component';
import { MatIconModule } from '@angular/material/icon';
import { ParentPanelComponent } from './components/parent-panel/parent-panel.component';
import { ChildPanelComponent } from './components/child-panel/child-panel.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalHeaderComponent } from './components/modal-header/modal-header.component';
import { ModalBodyComponent } from './components/modal-body/modal-body.component';
import { ModalFooterComponent } from './components/modal-footer/modal-footer.component';
import { StepComponent } from './components/step/step.component';
import { StepperComponent } from './components/stepper/stepper.component';
import { HighlightDirective } from './directives/highlight.directive';
import { PermissionDirective } from './directives/permission.directive';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    InterpolationComponent,
    PropertyBindingComponent,
    StyleBindingComponent,
    ClassBindingComponent,
    EventBindingComponent,
    TempRefVariablesComponent,
    TwoWayDataBindingComponent,
    IfComponent,
    SwitchComponent,
    ForComponent,
    SenderComponent,
    ReceiverComponent,
    TopicComponent,
    ViewChildComponent,
    ParentComponent,
    ChildComponent,
    Parent2Component,
    Child2Component,
    QuestionnaireComponent,
    QuestionComponent,
    ParentPanelComponent,
    ChildPanelComponent,
    ModalComponent,
    ModalHeaderComponent,
    ModalBodyComponent,
    ModalFooterComponent,
    StepComponent,
    StepperComponent,
    HighlightDirective,
    PermissionDirective,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    FormsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
