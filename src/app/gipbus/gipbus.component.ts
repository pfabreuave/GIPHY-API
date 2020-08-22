import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gipbus',
  templateUrl: './gipbus.component.html',
  styleUrls: ['./gipbus.component.css']
})
export class GipbusComponent implements OnInit {

  constructor() { }
  termo: string;

  ngOnInit(): void {
  }
  buscar(form) {
    location.href = `/resultados/${form.value.termo}`
  }

}
