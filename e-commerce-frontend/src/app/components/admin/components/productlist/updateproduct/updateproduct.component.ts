import {Component, EventEmitter, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-updateproduct',
  standalone: true,
    imports: [
        FormsModule
    ],
  templateUrl: './updateproduct.component.html',
  styleUrl: './updateproduct.component.scss'
})
export class UpdateproductComponent {
@Output() popUpUpdate = new EventEmitter<boolean>();
    closePopUp() {
        this.popUpUpdate.emit(false);
    }
    constructor() {}

    ngOnInit(): void {
    }
}
