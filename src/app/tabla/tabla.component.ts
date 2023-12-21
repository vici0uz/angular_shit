import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-tabla',
  standalone: true,
  imports: [TableModule, CommonModule, ButtonModule],
  templateUrl: './tabla.component.html',
  styleUrl: './tabla.component.css'
})
export class TablaComponent implements OnInit {

  @Input() cols: any[] = [];
  @Input() rows: any[] = [];

  ngOnInit() {
  }

  exec(btn: any, row: any) {
    btn.ref[btn.fn](row)
  }
}
