import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonService } from '../person.service';

@Component({
  selector: 'app-person-update',
  templateUrl: './person-update.component.html',
  styleUrls: ['./person-update.component.css']
})
export class PersonUpdateComponent implements OnInit {

  id: number;
  person: Person;
  submitted = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personService: PersonService
  ) { }

  ngOnInit() {
    this.person = new Person();
    this.id = this.route.snapshot.params['id'];
    this.personService.getPerson(this.id)
      .subscribe(
        data => 
        {
        console.log(data)
        this.person = data;
        },
        error => console.log(error)
      );
  }

  onSubmit(){
    this.submitted = true;
    this.update();
  }

  update(){
    this.personService.updatePerson(this.id, this.person)
    .subscribe(
      data => console.log(data),
      error => console.log(error)
    );
    this.person = new Person();
    //this.list();
  }

  list(){
    this.router.navigate(['personas']);
  }

}
