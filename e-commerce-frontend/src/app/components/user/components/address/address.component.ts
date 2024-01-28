import {Component} from '@angular/core';
import {MatIcon} from "@angular/material/icon";

import {ToastrService} from "ngx-toastr";
import {MatStep, MatStepLabel, MatStepper, MatStepperNext, MatStepperPrevious} from "@angular/material/stepper";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {AddressModel} from "../../../../models/user/addressModel";
import {AddressService} from "../../../../services/user/address.service";
import {AuthService} from "../../../../services/auth/auth.service";


@Component({
    selector: 'app-address',
    standalone: true,
    imports: [
        MatIcon,
        MatStep,
        MatStepper,
        MatFormField,
        ReactiveFormsModule,
        MatLabel,
        MatFormFieldModule,
        MatInputModule,
        MatStepperNext,
        MatButton,
        MatStepLabel,
        MatStepperPrevious,
    ],
    templateUrl: './address.component.html',
    styleUrl: './address.component.scss'
})
export class AddressComponent {
    addresses: AddressModel[] = [];
    isStepperVisible: boolean = false;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;

    toggleStepper() {
        this.isStepperVisible = !this.isStepperVisible;
    }
    resetStepper() {
        this.firstFormGroup.reset();
        this.secondFormGroup.reset();
    }

    constructor(private addressService: AddressService,
                private toastrService: ToastrService,
                private _formBuilder: FormBuilder,
                private authService:AuthService) {}

    ngOnInit() {
      this.addressService.refreshUserAddresses();
        this.loadAddresses();
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', Validators.required],
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', Validators.required],
        });
    }

    loadAddresses() {
        this.addressService.getUserAddresses().subscribe(addresses => {
            this.addresses = addresses;
        });
    }

    onDeleteAddress(addressId: number) {
        this.addressService.deleteAddress(addressId).subscribe(() => {
            this.toastrService.show("Addresiniz başarıyla silindi")
            this.loadAddresses();
        });
    }

  submitAddress() {
    const addressTitle = this.firstFormGroup.value.firstCtrl; //eklenecek
    const publicAddress = this.secondFormGroup.value.secondCtrl;

    const userId = this.authService.getCurrentUserId();
    if (userId !== null) {
      const addressData = {
        publicAddress: publicAddress,
        userId: userId,
      };

      this.addressService.addAddress(addressData).subscribe({
        next: (response) => {
          console.log('Address successfully added', response);
          this.resetStepper();
          this.toastrService.info("Adresiniz başarıyla veritabanına eklendi");
          this.loadAddresses();
          this.isStepperVisible = false;
        },
        error: (error) => {
          console.error('Error adding address', error);
        }
      });
    }
  }


}
