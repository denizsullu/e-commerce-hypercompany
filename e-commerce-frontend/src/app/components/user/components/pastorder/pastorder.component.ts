import {Component} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {OrderService} from "../../../../services/user/order.service";
import {GetAllByUserOrder} from "../../../../models/user/getAllByUserOrder";
import {AuthService} from "../../../../services/auth/auth.service";
import {TurkishLiraPipe} from "../../../../pipes/turkish-lira.pipe";
import {MaskCreditCardPipe} from "../../../../pipes/mask-credit-card.pipe";

@Component({
  selector: 'app-pastorder',
  standalone: true,
    imports: [
        MatIcon,
        TurkishLiraPipe,
        MaskCreditCardPipe
    ],
  templateUrl: './pastorder.component.html',
  styleUrl: './pastorder.component.scss'
})
export class PastorderComponent {
    orders:GetAllByUserOrder[]=[];
  constructor(private orderService:OrderService,private authService:AuthService) {
  }
ngOnInit(): void {
      this.getAllOrdersByUser(this.authService.getCurrentUserId())
}
  getAllOrdersByUser(userId:number){
    this.orderService.getAllOrdersByUser(userId).subscribe(response=>{
      this.orders = response;
    })
  }
}
