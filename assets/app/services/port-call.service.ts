import { Injectable } from '@angular/core';
import { Http, Response, Request, Jsonp, URLSearchParams, RequestOptions, RequestOptionsArgs, Headers } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FormBuilder } from '@angular/forms';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class PortCallService {
    private portCallNormalUrl:string = 'portcall/list';
    private portCallUrl:string = 'portcall/find';
    private portCallFindByDateUrl:string = 'portcall/findByDate';
    
    constructor(private http:Http){}

    GetAllPortCall():Observable<any[]>{
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({headers:headers});
        return this.http.get(this.portCallNormalUrl, options)
                .map(response => response.json())
    }

    GetPortCall():Observable<any[]>{
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({headers:headers});
        return this.http.get(this.portCallUrl, options)
                .map(response => response.json())
    }

    GetPortCallByDate(gtd:Date, gta:Date):Observable<any[]>{
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        let options = new RequestOptions({headers:headers});
        return this.http.post(this.portCallFindByDateUrl,{gtd:gtd, gta:gta}, options)
                .map(response => response.json())
                .map(data => this.filterByListOfVoyage(data))
    }

    private filterByListOfVoyage(data:any[]):any[]{
        let newData:any[] = [];
        data.forEach((item:any, index:number, array:any[]) => {
            if(item.listOfVoyage.length != 0){
                newData.push(item);
            }
        })
        return newData;
    }
}