import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = "http://localhost:3000/users";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  // list() {
  //   // console.log("Todo display")
  //    return this.http.get(baseUrl + "/list", {
  //      withCredentials: true
  //    })
  //   }

  add(item) {
    
    return this.http.post(baseUrl + "/addItem", {
      item
    }, { withCredentials: true })
  }

get(){
  return this.http.get(baseUrl + "/sendItem",
    { withCredentials: true }
  )
}

}
