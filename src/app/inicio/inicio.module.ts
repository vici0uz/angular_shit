import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from '../main/main.component';
import { RouterModule } from '@angular/router';
import { ListaComponent } from '../lista/lista.component';
import { ModalComponent } from '../modal/modal.component';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalService } from '../modal.service';
@NgModule({
  declarations: [MainComponent, ModalComponent],
  providers: [ ModalService],
  imports: [
    DialogModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([{path:'', component: ListaComponent}])
  ],
  bootstrap: [MainComponent]
})
export class InicioModule { }
