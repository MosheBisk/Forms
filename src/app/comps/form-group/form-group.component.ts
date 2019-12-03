import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormGroupmodel } from "src/app/moduls/form-groupmodel";
import { FormGorupService } from "src/app/svcs/fore-gorup.service";


@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {

  message:string = 'Please fill the form'

  constructor(public svc:FormGorupService) { }

  ngOnInit() {
  }

  myForm = new FormGroup({
    subject:new FormControl(''),
    content:new FormControl(''),
    name:new FormControl(''),
    helpfull:new FormControl('')
  })

  formOnSubmit(){
    let contactMe:FormGroupmodel = this.myForm.value
    if (contactMe.helpfull) {
      this.message = 'Please send in a review'
    }
    else{
      this.message = 'Please write us why'
    }
    this.svc.formGroup.push(contactMe)
  }
}
