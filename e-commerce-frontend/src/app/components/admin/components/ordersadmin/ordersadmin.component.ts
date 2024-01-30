import { Component } from '@angular/core';
import {OrderService} from "../../../../services/user/order.service";
import {GetAllByUserOrder} from "../../../../models/user/getAllByUserOrder";

@Component({
  selector: 'app-ordersadmin',
  standalone: true,
  imports: [],
  templateUrl: './ordersadmin.component.html',
  styleUrl: './ordersadmin.component.scss'
})
export class OrdersadminComponent {
    orders:GetAllByUserOrder[]=[];
    constructor(private orderService:OrderService) { }

    ngOnInit(): void {
        this.getAllOrders();
    }
    getAllOrders(){
        this.orderService.getAllOrders().subscribe(response=>{
            this.orders = response
            console.log(this.orders)
        })
    }
}
