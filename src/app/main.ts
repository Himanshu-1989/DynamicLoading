import {
    Component, Input, Output, Inject, PLATFORM_ID, EventEmitter, OnInit, AfterContentChecked, AfterViewChecked,
    ComponentFactoryResolver, Directive, ViewContainerRef, ViewChild, ElementRef, Renderer2
  } from '@angular/core';
  import {DynamicEntryComponentService} from '../app/services/dynamic.service'

  @Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[component-host]',
})

  export class ModalComponentDirective  {
    constructor(public viewContainerRef: ViewContainerRef) { }
  }
  
  @Component({
    selector: 'mainComp',
    templateUrl: './main.html'
  })
  
  export class MainComp implements OnInit {
    title = 'TripSummary';
    @Input()
    modalComponentName: string;
    
    constructor(
      private el: ElementRef,
      private ren: Renderer2,
      @Inject(PLATFORM_ID) private platformId: Object,
      private componentFactoryResolver: ComponentFactoryResolver
  ) {
  }
  @ViewChild(ModalComponentDirective) componentHost: ModalComponentDirective;
  
  

  ngOnInit() {
  }
    loadComponent(){
    this.componentContentLoad();
  }
  
  
  public componentContentLoad() {
      const factory = this.componentFactoryResolver.resolveComponentFactory(DynamicEntryComponentService.
          getComponent(this.modalComponentName));
      const ref = this.componentHost.viewContainerRef.createComponent(factory);
      ref.instance['content'] = "Test";
      ref.changeDetectorRef.detectChanges();
  
      }
  
  }
  