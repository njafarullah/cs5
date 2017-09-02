import { Component,OnChanges } from '@angular/core';
import {FilterPipe} from '../filter/filter-pipe';


@Component({

    selector: 'dashnumbers',
    styleUrls: ['./material-dashboard.css'],
    template : `

        <div class="row">

                <div class="col-lg-2 col-md-6 col-sm-6">
                    <div class="card card-stats clickable" style="height:120px" (click)="onSelect('')">
                        <div class="card-header" data-background-color="green" >
                                        O/R
                        </div>
                        <div class="card-content">
                            <p class="category">Opened/Resolved</p>
                            <h3 class="title">5/10</h3>
                            <hr>
                        </div>
                        
                    </div>
                </div>

            <!--<div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="card card-stats">
                        <div class="card-header" data-background-color="orange">
                            <i class="material-icons">content_copy</i>
                        </div>
                        <div class="card-content">
                            <p class="category">Used Space</p>
                            <h3 class="title">49/50<small>GB</small></h3>
                        </div>
                        <div class="card-footer">
                            <div class="stats">
                                <i class="material-icons text-danger">warning</i> <a href="#pablo">Get More Space...</a>
                            </div>
                        </div>
                    </div>
                </div>-->

                <div class="col-lg-1 col-md-6 col-sm-6">
                    <div class="card card-stats clickable" style="height:120px" (click)="onSelect('S1')">
                        <div class="card-header" data-background-color="red">
                                        S1
                        </div>
                        <div class="card-content">
                            <p class="category">&nbsp;</p>
                            <h3 class="title">5</h3>
                            <hr>
                        </div>
                        
                    </div>
                </div>


                <div class="col-lg-1 col-md-6 col-sm-6">
                    <div class="card card-stats clickable" style="height:120px" (click)="onSelect('S2')">
                        <div class="card-header" data-background-color="orange">
                                    S2
                        </div>
                        <div class="card-content">
                            <p class="category">&nbsp;</p>
                            <h3 class="title">15</h3>
                            <hr>
                        </div>
                        
                    </div>
                </div>



                <div class="col-lg-1 col-md-6 col-sm-6">
                    <div class="card card-stats clickable" style="height:120px" (click)="onSelect('S3')">
                        <div class="card-header" data-background-color="yellow">
                                        S3
                        </div>
                        <div class="card-content">
                            <p class="category">&nbsp;</p>
                            <h3 class="title">25</h3>
                            <hr>
                        </div>
                        
                    </div>
                </div>


                <div class="col-lg-1 col-md-6 col-sm-6">
                    <div class="card card-stats  clickable" style="height:120px" (click)="onSelect('S4')">
                        <div class="card-header" data-background-color="cyan">
                                    S4
                        </div>
                        <div class="card-content">
                            <p class="category">&nbsp;</p>
                            <h3 class="title">4</h3>
                            <hr>
                        </div>
                        
                    </div>
                </div>
            
                <div class="col-lg-1 col-md-6 col-sm-6">
                    <div class="card card-stats clickable" style="height:120px" (click)="onSelect('S5')">
                        <div class="card-header" data-background-color="">
                                    S5
                        </div>
                        <div class="card-content">
                            <p class="category">&nbsp;</p>
                            <h3 class="title">4</h3>
                            <hr>
                        </div>
                        
                    </div>
                </div>
                
                <div class="col-lg-2 col-md-6 col-sm-6">
                    <div class="card card-stats clickable" style="height:120px" (click)="onSelect('')">
                        <div class="card-header" data-background-color="green">
                                        TOTAL
                        </div>
                        <div class="card-content">
                            <p class="category">Total</p>
                            <h3 class="title">79</h3>
                            <hr>
                        </div>
                        
                    </div>
                </div>



            <div class="col-lg-2 col-md-6 col-sm-6">
    

                <div style="text-align:right;padding-top:17px;">
                    <form>
                        <span class="select">
                            <select id="selects_1" [(ngModel)]="predefinedfiltervalue" name="predefinedFiltervalues" (ngModelChange)="changedValues($event)">
                                <option value="">Choose any predefined filters</option>
                                <option value="DEV">Esc with DEV team</option>
                                <option value="SPT">Esc with Support team</option>
                                <option value="QA">Esc with QA team</option>
                                <option value="APP">Esc with APP team</option>
                            </select>
                        </span>
                    </form>
                </div>

    
                <div style="text-align:right; padding-top:10px;">
                <input type="text" [(ngModel)]="searchinput" placeholder="Search any in esc table">
                </div>


                <div style="text-align:right;padding-top:10px;">
                <button class="btn" (click)="clear()">Clear Filters</button>
                </div>
            </div>


      </div>

            <div class="toggle-switch">
                <input type="checkbox" id="toggle_1" [(ngModel)]="checkboxflag" />
                <label for="toggle_1">Toggles turn on and off</label>
            </div>


    <div>
    <esc-data [mysearch]="searchinput" [mySevValue]="this.clickedSev" [checkflag]="checkboxflag"  ></esc-data>
    </div>

    `,


})

//clickedSev mySevValue


export class DashnumbersComponent {    
    searchinput:string;
    predefinedfiltervalue:string;
    checkboxflag:boolean = true;
    clickedSev:string;


changedValues(event) {

console.log(this.predefinedfiltervalue);

    if(this.predefinedfiltervalue.length>0){
            this.searchinput = this.predefinedfiltervalue;
        console.log(this.searchinput);
        }
        else{
            this.searchinput="";
        }
    }

ngOnInit(): void {
    this.predefinedfiltervalue="";
}


clear() {
    this.searchinput="";
    this.predefinedfiltervalue="";
  }

/*ref($event) {
    this.checkboxflag = !this.checkboxflag; 
}*/


onSelect(value): void {
    this.clickedSev = value;
    console.log(this.clickedSev);
  }

}

