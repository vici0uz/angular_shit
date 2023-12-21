import { Component, OnInit } from '@angular/core';
import { TablaComponent } from '../tabla/tabla.component';
import { ModalService } from '../modal.service';



@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [TablaComponent],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent implements OnInit {

  constructor(private modalService: ModalService){}
  cols: any[] = []
  rows: any[] = [];
  data: any = {};

  testModal(){
    // this.modalService.openModal(row,)
  }

  xd(row: any){
    this.data = {
      title: 'Detalle',
      content: row.descripcion
    }
    this.modalService.openModal(this.data)
  }
  cb(){
    return this;
  }

  btn = {
    ref: this,
    icon: 'eye',
    fn: 'xd'
  }
  ngOnInit(): void {
    this.cols = [{ field: "id", header: "Id" },
    { field: "name", header: "Nombre", btn: this.btn }
    ]


    this.rows = [
      { id: 1, name: "Biología", descripcion: "Ciencia que estudia la vida" },
      { id: 2, name: "Química", descripcion: "Ciencia que estudia la materia y sus cambios", btnAction: this.xd, callReference: this },
      { id: 3, name: "Geología", descripcion: "Ciencia que estudia la tierra y sus procesos", btnAction: this.xd, callReference: this}
    ]
  }

}
