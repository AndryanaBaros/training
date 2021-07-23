//#region 

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { RequestModel } from '../model/request.model';
import { Observable, throwError } from 'rxjs';
import { GlobalConstants } from '../constant/webaddress';
import { catchError, map } from 'rxjs/operators'
import { UserModel } from '../model/user.model';

//#endregion

@Injectable({
  providedIn: 'root',
})

//#region CLASS

export class UserService {
  private _objectHTTPOption: Object = {};

  //#region CONSTRUCTOR

  constructor(private _clientHTTP: HttpClient) {
  }

  //#endregion


  //#region FUNCTION

  callService(stringData: string, stringURL: string,) {
    this._objectHTTPOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
      }),
      observe: 'response',
      responseType: 'text',
    };

    const modelRequest: RequestModel = new RequestModel();
    modelRequest.Data = stringData;

    // alert(modelRequest.Data + 'ini request');
    console.log(modelRequest)

    return this._clientHTTP.post<HttpResponse<UserModel>>(
      stringURL,
      modelRequest.Data,
      this._objectHTTPOption
    );
  }

  viewService(stringURL: string) {
    this._objectHTTPOption = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8',
      }),
      observe: 'response',
      responseType: 'text',
    };

    return this._clientHTTP.post<HttpResponse<string>>(
      stringURL,
      this._objectHTTPOption
    );
  }

  delete(stringData: string, stringURL: string) {
    this._objectHTTPOption =
    {
      headers: new HttpHeaders
        (
          {
            "Content-Type": "application/json; charset=utf-8"
          }), observe: "response", responseType: "text",
    };
    const modelRequest: RequestModel = new RequestModel();
    modelRequest.Data = stringData;
    alert(modelRequest.Data);
    return this._clientHTTP.post<HttpResponse<string>>(stringURL, JSON.stringify(modelRequest), this._objectHTTPOption);
  }

  update(stringData: string, stringURL: string) {
    this._objectHTTPOption =
    {
      headers: new HttpHeaders
        (
          {
            "Content-Type": "application/json; charset=utf-8"
          }), observe: "response", responseType: "text",
    };
    const modelRequest: RequestModel = new RequestModel();
    modelRequest.Data = stringData;
    alert(modelRequest.Data);
    console.log(modelRequest.Data)
    return this._clientHTTP.post<HttpResponse<string>>(stringURL, JSON.stringify(modelRequest), this._objectHTTPOption);
  }

  find(ID: number): Observable<any> {

    return this._clientHTTP.get(GlobalConstants.API_UPDATE_LEAD + '/edit/' + ID)

      .pipe(
        // catchError(this.errorHandler)
      )
  }

  //#endregion

}


function retry(arg0: number): import("rxjs").OperatorFunction<Object, unknown> {
  throw new Error('Function not implemented.');
}
//#endregion
