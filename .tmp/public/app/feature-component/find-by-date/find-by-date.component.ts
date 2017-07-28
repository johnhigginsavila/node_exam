import {Component, OnInit} from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { NgModel, FormBuilder, FormGroup, FormControl } from '@angular/forms';

import { PortCallService } from '../../services/port-call.service';

@Component({
    templateUrl: './app/feature-component/find-by-date/find-by-date.component.html'
})
export class FindByDateComponent implements OnInit {
    findVoyageForm:FormGroup;
    private voyages:any[];
    constructor(private formBuilder:FormBuilder, private portCallService:PortCallService){
        this.voyages = [];
        this.findVoyageForm = this.formBuilder.group({
            gtd: new FormControl(null),
            gta: new FormControl(null)
        });
    }

    ngOnInit(){
        this.findVoyageForm = this.formBuilder.group({
            gtd: new FormControl(null),
            gta: new FormControl(null)
        });

    }

    findVoyage(){
        this.portCallService.GetPortCallByDate(this.findVoyageForm.value.gtd, this.findVoyageForm.value.gta)
            .subscribe(
                data => {
                    console.log(data); 
                    this.voyages = data;
                },
                err => console.log(err)
            )
    }
    isVoyage():boolean{
        if(this.voyages.length == 0){
            return false;
        }else{
            return true;
        }
    }
 }