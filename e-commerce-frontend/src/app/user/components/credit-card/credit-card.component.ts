import {Component, OnInit} from '@angular/core';
import {CreditCardModel} from "../../models/creditCard";
import {CreateCreditCardRequest} from "../../models/createCreditCardRequest";
import {CreditCardService} from "../../service/credit-card.service";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AuthService} from "../../../auth/services/auth.service";

@Component({
  selector: 'app-credit-card',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './credit-card.component.html',
  styleUrl: './credit-card.component.scss'
})
export class CreditCardComponent implements OnInit{
  creditCards: CreditCardModel[] = [];


  constructor(private creditCardService: CreditCardService,private formBuilder:FormBuilder,private authService:AuthService) {}

  creditCardForm: FormGroup;

  creaeCreditCardForm() {
    this.creditCardForm = this.formBuilder.group({
      cardNumber: ['', Validators.required],
      expirationDate: ['', Validators.required],
      cvc: ['', Validators.required],
      cardHolderName: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.creditCardService.refreshUserCreditCards()
    this.loadCreditCards();
    this.creaeCreditCardForm();
  }

  loadCreditCards(): void {
    this.creditCardService.getUserCreditCards().subscribe(cards => {
      this.creditCards = cards;
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
  }


  deleteCreditCard(cardId: number): void {
    this.creditCardService.deleteCreditCard(cardId).subscribe(() => {
      this.loadCreditCards();
    });
  }



}
