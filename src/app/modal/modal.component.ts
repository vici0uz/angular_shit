import { Component, EventEmitter, Injector, OnDestroy, OnInit, Output, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalService } from '../modal.service';
import { ModalData } from './modalData';
import { DummyComponent } from '../dummy/dummy.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})

export class ModalComponent implements OnInit, OnDestroy{
  @ViewChild('modalContainer', {read: ViewContainerRef}) container!: ViewContainerRef;
  display = false;
  data: any;
  
  private showModalSubscription;

  constructor(private modalService: ModalService, private injector: Injector){
    
    this.showModalSubscription = this.modalService.showModal$.subscribe((show)=> {
      this.display=show;
      this.data = this.modalService.data
      this.loadComponent();
    })

  }

ngOnInit(): void {
  
}
loadComponent(): void {
  if(this.container){
    this.container.clear();
    this.container.createComponent(DummyComponent, {injector: this.injector});
  }
}

 ngOnDestroy() {
    this.showModalSubscription.unsubscribe();
  }

}
