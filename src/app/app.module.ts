import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { AppComponent } from './app.component';
import { ROUTING } from "./app.routing";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import {StringSearchWidget} from './filter/string-search-widget.component'
import {DashnumbersComponent} from './dashnumbers/dashnumbers'
import {FilterPipe} from './filter/filter-pipe';

import { EscDataComponent } from "./escdata/esc-data.component";
import { AvamarComponent } from "./avamar/avamar.component";

import { ChartComponent } from "./chart/chart.component";
import { ChartsComponent } from './charts/charts.component';
import {Chart} from 'chart.js'


@NgModule({
    declarations: [
        AppComponent,
        AboutComponent,
        HomeComponent,
        EscDataComponent,
        StringSearchWidget,
        DashnumbersComponent,
        FilterPipe,
        AvamarComponent,
        ChartComponent,
        ChartsComponent,
        
        
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        ClarityModule.forRoot(),
        ROUTING
        
        
        
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
