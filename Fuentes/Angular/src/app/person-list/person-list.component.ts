import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../person';
import { PersonService } from '../person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  personas: Observable<Person[]>;

  constructor(
    private personService: PersonService,
    private router: Router
    ) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    console.log("Carga Lista de Personas 1");
    this.personas = this.personService.getPersonsList();
    console.log("Carga Lista de Personas 2");
  }

  deletePerson(id: number) {
    this.personService.deletePerson(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  personDetails(id: number){
    this.router.navigate(['details', id]);
  }

  updatePerson(id: number){
    this.router.navigate(['update', id]);
  }


}
