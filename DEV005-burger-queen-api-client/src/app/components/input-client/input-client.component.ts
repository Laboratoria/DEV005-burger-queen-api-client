import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-client',
  templateUrl: './input-client.component.html',
  styleUrls: ['./input-client.component.css']
})
export class InputClientComponent {
  // Defino la variable que coloque en mi Ngmodel
  clientName = '';
  tableNumber = '';


  // Agregamos el evento nameChanged que emite el nomnre cuando el mesero lo ingresa en el input.
  // Dicho evento se va a escuchar en el componente padre que es waiter.
  @Output() nameChanged = new EventEmitter<string>();
  @Output() selectedTable = new EventEmitter<string>();

  // Se crea la funcion para cambiar el nombre
  UpdateName() {
    this.nameChanged.emit(this.clientName);
  }

  UpdateTable() {
    this.selectedTable.emit(this.tableNumber);
  }

}
