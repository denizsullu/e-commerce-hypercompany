import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../../../../services/cart.service";
import {CartItem} from "../../../../models/cart/cartItem";
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
import {AddressModel} from "../../../../models/user/addressModel";
import {CreditCardService} from "../../../../services/user/credit-card.service";
import {CreditCardModel} from "../../../../models/user/creditCard";
import {AddressService} from "../../../../services/user/address.service";
import {MatButton} from "@angular/material/button";
import {TurkishLiraPipe} from "../../../../pipes/turkish-lira.pipe";
import {NgClass} from "@angular/common";
import {CalculateKdvPipe} from "../../../../pipes/calculate-kdv.pipe";
import {Router, RouterLink} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {OrderService} from "../../../../services/order.service";
import {CreateOrder} from "../../../../models/createOrder";

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
        NgClass,
        CalculateKdvPipe,
        RouterLink,
        ReactiveFormsModule
    ],
    templateUrl: './checkout.component.html',
    styleUrl: './checkout.component.scss'
})
export class CheckoutComponent implements OnInit, OnDestroy {
    cartItems: CartItem[];
    addresses: AddressModel[] = [];
    creditCards: CreditCardModel[] = [];
    totalCartAmount: number = 0;

    // for request backend
    selectedAddressId: number | null = null;
    selectedCardId: number | null = null;

    selectAddress(addressId: number): void {
        this.selectedAddressId = addressId;
        console.log(this.selectedAddressId);

    }

    selectCard(cardId: number) {
        this.selectedCardId = cardId;
        console.log(this.selectedCardId);
    }


    private subscription: Subscription = new Subscription();

    //Service injection
    private cartService = inject(CartService);
    private addressService = inject(AddressService);
    private creditCardService = inject(CreditCardService);
    private orderService = inject(OrderService);
    private toastService = inject(ToastrService);
    private routerService = inject(Router);



    ngOnInit() {
        this.subscription.add(
            this.cartService.getCartItems().subscribe(cartItems => {
                this.cartItems = cartItems;
                if (cartItems.length > 0) {
                    this.totalCartAmount = cartItems[0].productTotalPrice;
                }
            })
        );

        this.subscription.add(
            this.addressService.getUserAddresses().subscribe(addresses => {
                this.addresses = addresses;
            })
        );

        this.subscription.add(
            this.creditCardService.getUserCreditCards().subscribe(cards => {
                this.creditCards = cards;
            })
        );
    }

    increaseQuantity(productId: number, userId: number) {
        this.cartService.increaseCartItemQuantity(productId, userId).subscribe();
    }

    decreaseQuantity(productId: number, userId: number) {
        this.cartService.decreaseCartItemQuantity(productId, userId).subscribe();
    }

    submitOrder() {
        if (this.selectedAddressId === null || this.selectedCardId === null) {
            this.toastService.info('Lütfen adres ve kredi kartı seçiniz');
            return;
        }

        const orderRequest: CreateOrder = {
            totalAmount: this.totalCartAmount,
            status: 'New',
            userId: this.cartItems[0].userId,
            addressId: this.selectedAddressId,
            creditCardId: this.selectedCardId
        };
        this.orderService.createOrder(orderRequest).subscribe({
            next: (response) => {
                this.toastService.success('Hemen kapına geliyoruz','Sipariş başarıyla oluşturuldu');
                this.cartService.deleteAllCartItems(orderRequest.userId).subscribe();
                this.routerService.navigate(['/']);
            },
            error: (err) => {
                console.log(err)
                this.toastService
                    .show('Sipariş sırasında hata meydana geldi sonra tekrar deneyin lütfen.', 'Sipariş Oluşturulamadı')
            }
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }


}
