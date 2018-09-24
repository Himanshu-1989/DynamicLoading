import {
  Component, Input, Output, Inject, PLATFORM_ID, EventEmitter, OnInit, AfterContentChecked, AfterViewChecked,
  ComponentFactoryResolver, Directive, ViewContainerRef, ViewChild, ElementRef, Renderer2
} from '@angular/core';
import {DynamicEntryComponentService} from '../app/services/dynamic.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'app';
  
}
