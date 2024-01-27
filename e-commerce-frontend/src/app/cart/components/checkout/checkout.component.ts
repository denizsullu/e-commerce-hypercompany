import {Component} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {CartItem} from "../../model/cartItem";
import {AuthService} from "../../../auth/services/auth.service";
import {ToastrService} from "ngx-toastr";
import {Subscription} from "rxjs";
import {
    MatStep,
    MatStepContent,
    MatStepLabel,
    MatStepper,
    MatStepperNext,
    MatStepperPrevious
} from "@angular/material/stepper";
import {AddressModel} from "../../../user/models/addressModel";
import {CreditCardService} from "../../../user/service/credit-card.service";
import {CreditCardModel} from "../../../user/models/creditCard";
import {AddressService} from "../../../user/service/address.service";
import {MatButton} from "@angular/material/button";
import {TurkishLiraPipe} from "../../../shared/pipes/turkish-lira.pipe";
import {NgClass} from "@angular/common";

@Component({
    selector: 'app-checkout',
    standalone: true,
    imports: [
        MatStepper,
        MatStep,
        MatStepLabel,
        MatStepContent,
        MatButton,
        MatStepperNext,
        MatStepperPrevious,
        TurkishLiraPipe,
        NgClass
    ],
    templateUrl: './checkout.component.html',
    styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
    cartItems: CartItem[];
    addresses: AddressModel[] = [];
    creditCards: CreditCardModel[] = [];

    // for request backend
    selectedAddressId: number | null = null;
    selectedCardId: number | null = null;
    userId = this.authService.getCurrentUserId();
    selectAddress(addressId: number): void {
        this.selectedAddressId = addressId;

    }
    selectCard(cardId: number) {
        this.selectedCardId = cardId;
    }


    private subscription: Subscription = new Subscription();

    constructor(private cartService: CartService,
                private authService: AuthService,
                private toastService: ToastrService,
                private addressService: AddressService,
                private creditCardService: CreditCardService
    ) {}

    // const userId = this.authService.getCurrentUserId();
    // this.cartService.loadCartItems(userId);
    ngOnInit() {
        this.subscription.add(
            this.cartService.getCartItems().subscribe(cartItems => {
                this.cartItems = cartItems;
            })
        );

        this.subscription.add(
            this.creditCardService.getUserCreditCards().subscribe(cards => {
                this.creditCards = cards;
            })
        );

        this.addressService.refreshUserAddresses();
        this.loadAddresses();

    }
    loadAddresses() {
        this.addressService.getUserAddresses().subscribe(addresses => {
            this.addresses = addresses;
        });
    }

    increaseQuantity(productId: number, userId: number) {
        this.cartService.increaseCartItemQuantity(productId, userId).subscribe();
    }

    decreaseQuantity(productId: number, userId: number) {
        this.cartService.decreaseCartItemQuantity(productId, userId).subscribe();
    }


    ngOnDestroy() {
        this.subscription.unsubscribe();
    }


}
