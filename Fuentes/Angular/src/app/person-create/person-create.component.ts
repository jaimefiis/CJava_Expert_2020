import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { PersonService } from '../person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html',
  styleUrls: ['./person-create.component.css']
})
export class PersonCreateComponent implements OnInit {

  person: Person = new Person();
  submitted = false;

  constructor(
    private personService: PersonService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  newPerson(): void{
    this.submitted = false;
    this.person = new Person();
  }

  save(){
    this.personService.createPerson(this.person)
    .subscribe(
      data => console.log(data),
      error => console.log(error)
    );
  }

  onSubmit(){
    if ((this.person.nachname != null) && (this.person.vorname != null)) {
      this.submitted = true;
      this.save();
    };
    //this.list();
  }

  list(){
    this.router.navigate(['personas']);
  }

}
