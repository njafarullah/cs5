import { Component, OnInit, Input } from '@angular/core';
import { Esc } from './esc';
//import { ESCS } from './mock-esc';
import { EscdataService } from '../service/escdata.service';
import {DatagridPropertyComparator,SortOrder} from 'clarity-angular';
import {HostListener} from '@angular/core';
import {FilterPipe} from '../filter/filter-pipe';
import {DashnumbersComponent} from '../dashnumbers/dashnumbers'

import { IntervalObservable } from "rxjs/observable/IntervalObservable";
import { Observable } from "rxjs";
import 'rxjs/Rx';




@Component({

    selector: 'esc-data',
    //styleUrls: ['./datagrid.clarity.scss'],

    styles: [
         `
            /deep/

            .datagrid .datagrid-cell {
                font-size: 12px;
                border-top: 1px solid #eee;
                //border-left: 1px dotted #eee;
                padding: 10px 12px 11px;
                padding: 8px 8px 8px;
                vertical-align: top;
            }
`
    ],

    template: `

         

  
    <clr-datagrid [style.height]="this.cardheight + 'px'" (clrDgRefresh)="refresh($event)" >
  
        <clr-dg-column [clrDgField]="'Esc'">Esc</clr-dg-column>
        <clr-dg-column [clrDgField]="'Severity'" [clrDgSortOrder]="sortOrder" [(clrFilterValue)]="mySevValue">  
                 Sev
            </clr-dg-column>
        <clr-dg-column [style.min-width.px]="240" [clrDgField]="'Desc'">
                <ng-container *clrDgHideableColumn="{hidden: false}">Desc</ng-container> 
        </clr-dg-column>
        <clr-dg-column [style.width.px]="95" [clrDgSortBy]="comparator">
             <ng-container *clrDgHideableColumn="{hidden: false}">Mod</ng-container>
        </clr-dg-column>
        <clr-dg-column [clrDgField]="'Cmnt'">
            <ng-container *clrDgHideableColumn="{hidden: false}">Cmnt</ng-container> 
        </clr-dg-column>
        <clr-dg-column [clrDgField]="'SLA'">
            <ng-container *clrDgHideableColumn="{hidden: false}">SLA</ng-container>
        </clr-dg-column>
        <clr-dg-column [clrDgField]="'NextUpdateDate'">
             <ng-container *clrDgHideableColumn="{hidden: false}">Nxt_Upd</ng-container>
        </clr-dg-column>
        <clr-dg-column [style.width.px]="120" [clrDgField]="'Owner'">
            <ng-container *clrDgHideableColumn="{hidden: false}">Owner</ng-container>
        </clr-dg-column>
        <clr-dg-column [style.width.px]="90" [clrDgField]="'Team'">
            <ng-container *clrDgHideableColumn="{hidden: false}">Team</ng-container>
        </clr-dg-column>
        <clr-dg-column [style.width.px]="150" [clrDgField]="'WhiteBoard'">
            <ng-container *clrDgHideableColumn="{hidden: false}">White Board</ng-container>
        </clr-dg-column>
        <clr-dg-column [style.width.px]="90" [clrDgField]="'SrNumber'">
            <ng-container *clrDgHideableColumn="{hidden: false}"> SR </ng-container> 
        </clr-dg-column>
        <clr-dg-column *ngIf="this.simple > 1610" [clrDgField]="'CustomerName'">
            <ng-container *clrDgHideableColumn="{hidden: false}">Customer</ng-container>
        </clr-dg-column>
        <clr-dg-column *ngIf="this.simple > 1780" [clrDgField]="'CompName'">
            <ng-container *clrDgHideableColumn="{hidden: false}">Comp</ng-container>
        </clr-dg-column>
        <clr-dg-column *ngIf="this.simple > 1890" [style.width.px]="110" [clrDgField]="'OtherAssignee'">
            <ng-container *clrDgHideableColumn="{hidden: false}">OA</ng-container>
        </clr-dg-column>
        <clr-dg-column  *ngIf="this.simple > 1910" [clrDgField]="'EscAge'">
            <ng-container *clrDgHideableColumn="{hidden: false}">E.Age</ng-container>
        </clr-dg-column>
        <clr-dg-column  *ngIf="this.simple > 1960" [clrDgField]="'SrAge'">
            <ng-container *clrDgHideableColumn="{hidden: false}">SR.Age</ng-container>
        </clr-dg-column>
        <clr-dg-column  *ngIf="this.simple > 2067" [clrDgField]="'CustLoc'">
            <ng-container *clrDgHideableColumn="{hidden: false}">Cust Loc</ng-container>
        </clr-dg-column>
        <clr-dg-column  *ngIf="this.simple > 2150" [clrDgField]="'EnggLoc'">
            <ng-container *clrDgHideableColumn="{hidden: false}">Engg Loc</ng-container>
        </clr-dg-column>
        
    <clr-dg-row *clrDgItems="let esc of escs | FilterPipe:'Esc,Desc,Mod,Cmnt,SLA,Nxt_Upd,Owner,Team,WhiteBoard,CustomerName,CompName, OtherAssignee,EscAge,SrAge,CustLoc,EnggLoc':mysearch">
        
            <clr-dg-cell>
                <a href="https://esc.avamar.com/show_bug.cgi?id={{esc.Esc}}" target="_blank" >{{esc.Esc}}</a>
            </clr-dg-cell>

            <clr-dg-cell *ngIf="esc.Severity == 'S1'">
                    {{esc.Severity}} <span class="badge badge-danger"></span>
                </clr-dg-cell>
            <clr-dg-cell *ngIf="esc.Severity == 'S2'">
                    {{esc.Severity}} <span class="badge badge-orange"></span>
                </clr-dg-cell>
            <clr-dg-cell *ngIf="esc.Severity == 'S3'">
                    {{esc.Severity}} <span class="badge badge-warning"></span>
                </clr-dg-cell>
            <clr-dg-cell *ngIf="esc.Severity == 'S4'">
                    {{esc.Severity}} <span class="badge badge-info"></span>
            </clr-dg-cell>
            <clr-dg-cell *ngIf="esc.Severity == 'S5'">
                    {{esc.Severity}} <span class="badge"></span>
            </clr-dg-cell>
            
            <clr-dg-cell>{{esc.Desc}}</clr-dg-cell>
            <clr-dg-cell>{{esc.Mod}}</clr-dg-cell>
            <clr-dg-cell>{{esc.Cmnt}}</clr-dg-cell>
            
            <!--<clr-dg-cell><span class="color-square" [style.backgroundColor]="esc.empty">z</span></clr-dg-cell>-->
            
            <clr-dg-cell *ngIf="esc.Severity == 'S1'">{{esc.Mod - 1}}</clr-dg-cell>
            <clr-dg-cell *ngIf="esc.Severity == 'S2'">{{esc.Mod - 3}}</clr-dg-cell>
            <clr-dg-cell *ngIf="esc.Severity == 'S3'">{{esc.Mod - 5}}</clr-dg-cell>
            <clr-dg-cell *ngIf="esc.Severity == 'S4'">{{esc.Mod - 1}}</clr-dg-cell>
            <clr-dg-cell *ngIf="esc.Severity == 'S5'">{{esc.Mod - 10}}</clr-dg-cell>

             
            <clr-dg-cell *ngIf="esc.NextUpdateActionPlan != '' ">{{esc.NextUpdateDate}}
                                                       
                        <span role="tooltip" aria-haspopup="true" class="tooltip tooltip-md tooltip-bottom-right"> 
                        <a href="https://esc.avamar.com/show_bug.cgi?id={{esc.Esc}}#cf_action_plan" target="_blank"> <clr-icon shape="pin" class="is-info"></clr-icon> </a>
                        <span class="tooltip-content">{{esc.NextUpdateActionPlan}}</span>
                        </span>
                </clr-dg-cell>

                <clr-dg-cell *ngIf="esc.NextUpdateActionPlan == '' ">{{esc.NextUpdateDate}}</clr-dg-cell>

           
            <clr-dg-cell>
                <a href='mailto:jafarullah.noordeen@emc.com?cc=jafarullah.noordeen@emc.com&Subject=[FOLLOW-UP]:Esc {{esc.Esc}}-{{esc.Desc}}&body=Hi {{esc.Owner}},' target='_top'><clr-icon shape="email" class="is-info"></clr-icon></a> {{esc.Owner}} 
            </clr-dg-cell>

            <clr-dg-cell>{{esc.Team}}</clr-dg-cell>
            <clr-dg-cell>{{esc.WhiteBoard}}</clr-dg-cell>
            
            <clr-dg-cell>
                 <a href="https://support.emc.com/servicecenter/srManagement/{{esc.SrNumber}}" target="_blank" > {{esc.SrNumber}}</a>
            </clr-dg-cell>
            
            <clr-dg-cell *ngIf="this.simple > 1610">{{esc.CustomerName}}</clr-dg-cell>
            
            <clr-dg-cell *ngIf="this.simple > 1780"> 
                        <span role="tooltip" aria-haspopup="true" class="tooltip tooltip-md tooltip-bottom-right">
                                {{esc.ProdName}}({{esc.CompName}})
                             <span class="tooltip-content">{{esc.Versions}}</span>
                        </span>
            </clr-dg-cell>
            
            <clr-dg-cell *ngIf="this.simple > 1890">{{esc.OtherAssignee}}</clr-dg-cell>
            <clr-dg-cell *ngIf="this.simple > 1910">{{esc.EscAge}}</clr-dg-cell>
            <clr-dg-cell *ngIf="this.simple > 1960">{{esc.SrAge}}</clr-dg-cell>
            <clr-dg-cell *ngIf="this.simple > 2067">{{esc.CustLoc}}</clr-dg-cell>
            <clr-dg-cell *ngIf="this.simple > 2150">{{esc.EnggLoc}}</clr-dg-cell>
           

            <clr-dg-row-detail *ngIf="this.simple <= 1610">
            <clr-dg-row-detail  *clrIfExpanded>
                   <span>Cust: {{esc.CustomerName}}</span>
            </clr-dg-row-detail>
            </clr-dg-row-detail>



            <clr-dg-row-detail *ngIf="this.simple <= 1780">
            <clr-dg-row-detail  *clrIfExpanded>
                <span role="tooltip" aria-haspopup="true" class="tooltip tooltip-md tooltip-bottom-right">
                     Comp:{{esc.ProdName}}({{esc.CompName}})
                     <span class="tooltip-content">{{esc.Versions}}</span>
                </span>
            </clr-dg-row-detail>
            </clr-dg-row-detail>




            <clr-dg-row-detail *ngIf="this.simple <= 1900">
            <clr-dg-row-detail  *clrIfExpanded>
                    OA: {{esc.OtherAssignee}}
            </clr-dg-row-detail>
            </clr-dg-row-detail>


            <clr-dg-row-detail *ngIf="this.simple <= 1910">
            <clr-dg-row-detail  *clrIfExpanded>
                    E.Age: {{esc.EscAge}}
            </clr-dg-row-detail>
            </clr-dg-row-detail>
            
            <clr-dg-row-detail *ngIf="this.simple <= 1960">
            <clr-dg-row-detail *clrIfExpanded>
                    SR.Age: {{esc.SrAge}}
            </clr-dg-row-detail>
            </clr-dg-row-detail>
            
            <clr-dg-row-detail *ngIf="this.simple <= 2060">
            <clr-dg-row-detail *clrIfExpanded>
                    Cust Loc: {{esc.CustLoc}}
            </clr-dg-row-detail>
            </clr-dg-row-detail>
            
            <clr-dg-row-detail *ngIf="this.simple <= 2150">
            <clr-dg-row-detail *clrIfExpanded>
                    Engg Loc: {{esc.EnggLoc}} {{escs.length}}
            </clr-dg-row-detail>
            </clr-dg-row-detail>
  
    </clr-dg-row>
    
        <clr-dg-footer>
                    {{pagination.firstItem + 1}} - {{pagination.lastItem + 1}} of {{escs.length}} escalations
                    <clr-dg-pagination #pagination [clrDgPageSize]="0"></clr-dg-pagination>
        </clr-dg-footer>

    </clr-datagrid>   

    `,


    providers: [EscdataService]

})




export class EscDataComponent implements OnInit {

   escs : Esc[];
   //escs = ESCS;
   simple : number;
   cardheight: number;
   alive:boolean;
   //checkflag:boolean = true;
   //mysearch: string;
   @Input() mysearch:string;
   @Input() checkflag:boolean;
   @Input() mySevValue: string;

   t:any;
   example:any;
   
   


   constructor(private escdataService:EscdataService) { this.alive = true}

    getEscdata(): void {

       this.escs = this.escdataService.getEscdata();
       //this.escdataService.getEscdata().then(escs => this.escs = escs);
       console.log(this.escs);
    }

   
    

    ngOnInit(): void {
       this.getEscdata();
       this.checkflag = true;
       console.log('document.load: ', window.innerWidth);
       this.simple = window.innerWidth;
       this.cardheight = window.innerHeight - 285;

      /* if (this.checkflag) { 
           this.autoRefresh();
       }*/
    }

    repeat() {
        if( ! this.example) {

        this.example = IntervalObservable.create(10000)
        //Observable.timer(0, 10000)
       .takeWhile(() => this.alive) // only fires when component is alive
       .subscribe(() => {
         this.getEscdata()
       });
     }
    }


    ngOnChanges () {
        console.log('externally changed :' + this.checkflag);
        if(this.checkflag) { this.alive = true; this.repeat(); } else {this.alive=false;}
    }

    ngOnDestroy(){
        this.alive = false; // switches your IntervalObservable off
    }



    sortOrder = SortOrder.Asc;
    comparator = new DatagridPropertyComparator('Mod');

    /*innerHeight = (window.screen.height) + "px";
    innerWidth = (window.screen.width) + "px";
    innerWidth1 = "1800px" */

    /*getSize() {
        console.log ( event.target.innerWidth );
    }*/

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.getSize(event);
        }   

    getSize(event) {
         event.target.innerWidth;
         console.log(event.target.innerWidth);
         this.simple = event.target.innerWidth;
         this.cardheight = window.innerHeight - 285;
         return this.simple, this.cardheight;
    }
    
         
    refresh(event) {
/*        if (this.checkflag) {
            this.ngOnChanges();
            console.log("checked, and so auto-refreshing by calling function getEscData() which inturns fetches from escdata service");
            }
            else { this.alive = false;  console.log("not checked, and so auto refreshing disabled"); }
*/    };

}

    


