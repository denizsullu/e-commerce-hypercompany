import {Component, OnInit} from '@angular/core';

import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CreditCardModel} from "../../../../models/user/creditCard";
import {CreditCardService} from "../../../../services/user/credit-card.service";
import {AuthService} from "../../../../services/auth/auth.service";
import {CreateCreditCardRequest} from "../../../../models/user/createCreditCardRequest";
import {ToastrService} from "ngx-toastr";
import {MaskCreditCardPipe} from "../../../../pipes/mask-credit-card.pipe";


@Component({
  selector: 'app-credit-card',
  standalone: true,
    imports: [ReactiveFormsModule, MaskCreditCardPipe],
  templateUrl: './credit-card.component.html',
  styleUrl: './credit-card.component.scss'
})
export class CreditCardComponent implements OnInit{
  creditCards: CreditCardModel[] = [];
  showAddCreditCardForm: boolean = false;
  creditCardForm: FormGroup;
  toogleAddCreditCardForm(): void {
    this.showAddCreditCardForm = !this.showAddCreditCardForm;
  }


  constructor(private creditCardService: CreditCardService,
              private formBuilder:FormBuilder,
              private authService:AuthService,
              private toastrService:ToastrService

  ) {}



    createCreditCardForm() {
        this.creditCardForm = this.formBuilder.group({
            cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
            expiryDate: ['', [Validators.required,]],
            securityCode: ['', [Validators.required, Validators.pattern('^[0-9]{3,4}$')]],
            cardHolderName: ['', Validators.required]
        });
    }

  ngOnInit(): void {
    this.creditCardService.refreshUserCreditCards()
    this.loadCreditCards();
    this.createCreditCardForm();
  }

  loadCreditCards(): void {
    this.creditCardService.getUserCreditCards().subscribe(cards => {
      this.creditCards = cards;
        console.log(cards)
    });
  }

  addCreditCard(): void {
    if (this.creditCardForm.valid) {
      let creditCardRequest: CreateCreditCardRequest = {
        ...this.creditCardForm.value,
        userId: this.authService.getCurrentUserId(),
      };
      this.creditCardService.addCreditCard(creditCardRequest).subscribe(() => {
        this.creditCardForm.reset();
        this.loadCreditCards();
      });
    }
    else{
        this.toastrService.error("lütfen bilgileri kontrol ediniz");
    }
  }


  deleteCreditCard(cardId: number): void {
    this.creditCardService.deleteCreditCard(cardId).subscribe(() => {
      this.loadCreditCards();
      this.toastrService.success("Kredi kartı silindi");
    });
  }



}
