import {Component, OnInit} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {ToastrService} from "ngx-toastr";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    MatIcon,
    ReactiveFormsModule,
    RouterLink,
    MatFormField,
    MatInput,
    MatLabel
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private toastrService: ToastrService, private router: Router) {
  }

  ngOnInit(): void {
    this.createRegisterForm();
  }


  createRegisterForm() {
    this.registerForm = this.formBuilder.group({
      name: [
        "",
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50)
        ]
      ],
      surname: [
        "",
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(50)
        ]
      ],
      username: [
        "",
        [
          Validators.required,
          Validators.email
        ]
      ],
      password: [
        "",
        [
          Validators.required,
          Validators.minLength(6)
        ]
      ]
    });
  }

  register() {
    if (this.registerForm.valid) {
      let registerModel = Object.assign({}, this.registerForm.value)
      this.authService.register(registerModel).subscribe({
        next: (response) => {
          this.toastrService.info("Başarı ile kayıt oldunuz");
          console.log(response)
          this.router.navigate(["/login"])
        },
        error: (error) => {
          this.toastrService.error('Kayıt başarısız', 'Kullanıcı zaten var');
          console.error(error);
        },
        complete: () => {

        }
      })
    }
  }
}
