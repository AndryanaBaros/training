import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { UserModel } from '../../../model/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalConstants } from '../../../constant/webaddress';
import { ResponseModel } from 'src/app/model/response.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})

export class EditComponent implements OnInit {

  ID?: any
  data?: any
  firstname?: any
  userID?: any = ''
  modelUser: UserModel = new UserModel()

  constructor(
    private userService: UserService,
    public _modelUser: UserModel,
    private activatedRouter: ActivatedRoute) { }


  ngOnInit(): void {

    this.activatedRouter.params.subscribe(data => {
      this._modelUser = data
      console.log(data)
    })


    this.userService.update(JSON.stringify(this._modelUser), GlobalConstants.API_UPDATE_LEAD).subscribe
      (
        data => {
          this.data = data.body;
          // const modelResponse: ResponseModel = JSON.parse(this.data);
          // alert(JSON.stringify(modelResponse));
          // alert("berhasil");
          console.log(data)
        }
      );

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
}
