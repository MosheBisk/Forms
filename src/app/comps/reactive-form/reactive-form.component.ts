import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  name = new FormControl('')
  phone = new FormControl('')
  insert = new FormControl('')

  newLeads:{}[] = []

  constructor() { }

  ngOnInit() {
  }
  addLead(){
    this.newLeads.push({
      name: this.name.value,
      phone: this.phone.value
    })
  }

  setDefualt(){
    this.insert.setValue('my defualt value')
  }
}
