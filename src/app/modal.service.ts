import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ModalData } from './modal/modalData';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private showModalSubject = new Subject<boolean>();
  data: any;
  showModal$: Observable<boolean> = this.showModalSubject.asObservable();

  openModal(data: ModalData){
    console.log("open modal");
    this.showModalSubject.next(true);
    this.data = data;
  }

  closeModal(){
    this.showModalSubject.next(false);
  }

}
