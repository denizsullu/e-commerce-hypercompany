import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {UserService} from "../../../../services/user/user.service";
import {ToastrService} from "ngx-toastr";
import {UpdateUser} from "../../../../models/user/updateUser";
import {Router} from "@angular/router";
import {AuthService} from "../../../../services/auth/auth.service";
import {MatIcon} from "@angular/material/icon";

@Component({
    selector: 'app-changeuserdetails',
    standalone: true,
    imports: [ReactiveFormsModule, MatIcon],
    templateUrl: './changeuserdetails.component.html',
    styleUrl: './changeuserdetails.component.scss'
})
export class ChangeuserdetailsComponent {
    @Output() toggleChange = new EventEmitter<boolean>();
    userDetailsForm: FormGroup;
    username: string;

    closeComponent() {
        this.toggleChange.emit(false);
    }

    getUsername() {
        this.authService.currentUser$.subscribe(response => {
            this.username = response.username;
        });
    }

    constructor(private userService: UserService,
                private toastService: ToastrService,
                private formBuilder: FormBuilder,
                private routerService: Router,
                private authService: AuthService
    ) {
    }


    updateUserDetailsForm() {
        this.userDetailsForm = this.formBuilder.group({
            name: ['', [Validators.required, Validators.minLength(3)]],
            surname: ['', [Validators.required, Validators.minLength(3)]],
            username: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
        });
    }

    ngOnInit(): void {
        this.updateUserDetailsForm();
        this.getUsername();
    }

    updateUserDetails() {
        if (this.userDetailsForm.valid) {
            let userDetails: UpdateUser = {
                pastUsername: this.username,
                ...this.userDetailsForm.value,
            };
            this.userService.updateUser(userDetails).subscribe(response => {
                this.authService.logout();
                this.routerService.navigate(["/login"]);
                this.toastService.success("Kullanıcı bilgileri başarıyla güncellendi", "lütfen tekrar giriş yapınız");
                localStorage.clear();
            });
        } else {
            this.toastService.error("Alanları kontrol ediniz");
        }
    }

}
