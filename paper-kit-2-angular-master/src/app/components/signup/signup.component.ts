import { Component, OnInit } from '@angular/core';
import { User } from 'app/models/user';
import { UserServiceService } from 'app/service/user-service.service';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  user = new User();
  confirm: string;
  status: string;
  StatusDecription: string;
  constructor(public userSvc: UserServiceService, private _formBuilder: FormBuilder, private spinner: NgxSpinnerService) { }
  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
  Regis() {
    this.spinner.show();
    this.userSvc.Register(this.user, this);
    console.log(status);
    console.log(this.user);
  }
  RegisterSucess(status) {
    console.log(status);
    this.spinner.hide();
  }
  RegisterFail(status) {
    status = "Fail!";
    console.log(status);
    this.spinner.hide();
  }
}
