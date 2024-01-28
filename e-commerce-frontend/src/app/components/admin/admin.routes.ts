import {Routes} from '@angular/router';
import {AdminComponent} from "./pages/admin.component";
import {UserlistComponent} from "./components/userlist/userlist.component";
import {ProductlistComponent} from "./components/productlist/productlist.component";
import {CategorylistComponent} from "./components/categorylist/categorylist.component";
import {OrdersadminComponent} from "./components/ordersadmin/ordersadmin.component";



export const routes: Routes = [
    {path: '', component: AdminComponent, children: [
            {path: '', redirectTo: 'userlist', pathMatch: 'full'},
            {path: 'userlist', component: UserlistComponent},
            {path: 'productlist', component: ProductlistComponent},
            {path: 'categorylist', component: CategorylistComponent},
            {path: 'orders', component: OrdersadminComponent},
        ], title: "Admin | Hyper Company"
    },
];
