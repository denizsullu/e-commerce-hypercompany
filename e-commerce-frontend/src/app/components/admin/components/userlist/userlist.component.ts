import {Component} from '@angular/core';
import {UserService} from "../../../../services/user/user.service";
import {GetAllUserResponse} from "../../../../models/user/getAllUserResponse";

@Component({
    selector: 'app-userlist',
    standalone: true,
    imports: [],
    templateUrl: './userlist.component.html',
    styleUrl: './userlist.component.scss'
})
export class UserlistComponent {
    users:GetAllUserResponse[] = [];
    constructor(private userService: UserService) {
    }

    ngOnInit(): void {
        this.getAllUserDetails();
    }

    getAllUserDetails():void{
        this.userService.getAllUserDetails().subscribe(response => {
            this.users  = response;
        });
    }
}
