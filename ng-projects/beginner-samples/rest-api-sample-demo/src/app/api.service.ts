import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private SERVER_URL = "http://localhost:3000/products";

  constructor(private httpClient:HttpClient) { }

  public get(){
    return this.httpClient.get(this.SERVER_URL);
  }

  handleError(error:HttpErrorResponse){
    let errorMessage = "Unkown error!";
    if(error.error instanceof ErrorEvent){
      //Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    }else{
      //server side errors
      errorMessage = `Error Code: ${error.status} \n Message: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public sendGetRequest(){
    return this.httpClient.get(this.SERVER_URL).pipe(catchError(this.handleError));
  }

}
