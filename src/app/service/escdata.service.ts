import { Injectable } from '@angular/core';
import { Esc } from '../escdata/esc';
import { ESCS } from '../escdata/mock-esc';
import { Http, Response, Headers } from '@angular/http';
//import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';




@Injectable()
export class EscdataService {

    constructor(private http: Http) {}

    getEscdata(): Esc[] { return ESCS; }


/*
    getEscdata(): Promise<Esc[]> {
        return this.http.get(`http://10.31.143.99:5000/Av`)
             .toPromise()
             //.then(response => response.json().data)   
             .then(response => response.json() as Esc[]);
             //.catch(this.handleError);
             
    }   */

}