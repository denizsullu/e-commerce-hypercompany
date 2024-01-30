import { Component } from '@angular/core';
import {OrderService} from "../../../../services/user/order.service";
import {GetAllByUserOrder} from "../../../../models/user/getAllByUserOrder";
import {FormsModule} from "@angular/forms";
import {TurkishLiraPipe} from "../../../../pipes/turkish-lira.pipe";

@Component({
  selector: 'app-ordersadmin',
  standalone: true,
    imports: [
        FormsModule,
        TurkishLiraPipe
    ],
  templateUrl: './ordersadmin.component.html',
  styleUrl: './ordersadmin.component.scss'
})
export class OrdersadminComponent {
    orders:GetAllByUserOrder[]=[];
    selectedStatus: string;

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
    changeOrderStatus(orderId:number,status:string){
        this.orderService.updateOrder(orderId,status).subscribe(response=>{
            this.getAllOrders();
        })
    }
}
