//#region IMPORT

import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/model/user.model';
import { UserService } from '../../services/user.service';
import { ResponseModel } from '../../model/response.model';
import { GlobalConstants } from '../../constant/webaddress';
import { MatDialog } from '@angular/material/dialog';
import { EditComponent } from './edit/edit.component';
import { Router } from '@angular/router';

//#endregion

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.sass'],
})


//#region CLASS

export class UserComponent implements OnInit {

  public data?: any
  modelUser: UserModel = new UserModel()

  //#region  CONSTRUCTOR

  constructor(
    private userService: UserService,
    public _modelUser: UserModel,
    private matDialog: MatDialog,
    private router: Router) { }

  //#endregion


  //#region FUNCTION

  ngOnInit(): void { }

  submit(): void {

    if (this._modelUser.Email != undefined || this._modelUser.Email != null) {
      if (this._modelUser) {
        this.userService.callService(JSON.stringify(this._modelUser), GlobalConstants.API_ENDPOINT).
          subscribe(
            data => {
              this.data = data.body;
              const modelResponse: ResponseModel = JSON.parse(this.data);
              // alert(modelResponse.MessageContent);
              if (modelResponse.MessageContent !== undefined) {
                alert(modelResponse.MessageContent);
              }
              else {
                alert("undefined");
              }
              console.log(modelResponse)
            }
          );
      }
      else {
        alert("Isikan email dengan benar");
      }
    }
    else {
      alert("tidak boleh kosong")
    }
  }

  show(): void {
    this.userService.viewService(GlobalConstants.API_SELECT_LEAD).
      subscribe(
        data => {
          this.data = data
          console.log(data)
        }
      )
  }

  addData(): void {

    this.userService.callService(JSON.stringify(this._modelUser), GlobalConstants.API_ADD_LEAD).
      subscribe(
        data => {
          this.data = data.body;
          // console.log(modelResponse)
        }
      );
  }

  deleteUser(modelUser): void {
    this._modelUser = modelUser
    if (this._modelUser !== undefined) {
      // data, address service
      this.userService.delete(JSON.stringify(this._modelUser), GlobalConstants.API_DELETE_LEAD).subscribe
        (
          data => {
            this.data = data.body;
            const modelResponse: ResponseModel = JSON.parse(this.data);
            alert(JSON.stringify(modelResponse));
            alert("berhasil");
          }
        );
    }
    else {
      alert("gagal");
    }

  }

  updateUser(modelUser): void {
    this._modelUser.ID = modelUser.ID
    if (this._modelUser.ID !== undefined) {
      // data, address service
      this.userService.delete(JSON.stringify(this._modelUser), GlobalConstants.API_DELETE_LEAD).subscribe
        (
          data => {
            this.data = data.body;
            const modelResponse: ResponseModel = JSON.parse(this.data);
            alert(JSON.stringify(modelResponse));
            alert("berhasil");
          }
        );
    }
    else {
      alert("gagal");
    }
  }

  //#endregion

}

//#endregion
