import {Component, OnInit} from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { NgModel, FormBuilder, FormGroup } from '@angular/forms';

import { PortCallService } from '../../services/port-call.service';

@Component({
    templateUrl: './app/feature-component/voyage/voyage.component.html'
})

export class VoyageComponent implements OnInit {
    private voyages:any[];
    constructor(private portCallService:PortCallService){
        this.voyages = [];
    }

    ngOnInit(){
        this.portCallService.GetPortCall()
            .subscribe(
                data => {
                    console.log(data);
                    this.voyages = data;
                },
                err => console.log(err)
            )
    }

}