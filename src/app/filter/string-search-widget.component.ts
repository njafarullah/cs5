
import { Component, OnInit, Input } from '@angular/core';
import {Filter, DatagridFilter} from "clarity-angular";
import {Subject} from 'rxjs';


@Component({
    selector: 'string-search',
    template: `
        <input type="text" placeholder="Customer Name" (change)="search($event)">
    `,
    providers:[DatagridFilter]
})


export class StringSearchWidget implements OnInit, Filter<any> {
    @Input() property;
    private value;
    constructor(private filterContainer: DatagridFilter) {
        //filterContainer.filter = this;
        
    }

    ngOnInit() { }
    changes = new Subject<any>();
    isActive():boolean {
        return this.value ? true : false;
    }
    accepts(item: any){
        
        return true;
    }
    search(event){
        if(event.target.value){
            this.value = { $search: event.target.value };  
        }else{
            this.value = null;
        }
        this.changes.next(true);
    }
}