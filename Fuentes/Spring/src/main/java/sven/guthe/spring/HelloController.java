package sven.guthe.spring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class HelloController {

	@Autowired
	PersonRepository personRepository;

	@GetMapping("/personas")
	public List<Person> getAllPersons(){
		return personRepository.findAll();
	}

	@GetMapping("/personas/{id}")
	public Optional<Person> getPerson(@PathVariable Integer id)
	{
		Optional<Person> person = personRepository.findById(id);
		return person;
	}
	
	@PostMapping("/personas")
	public Person addPerson(@RequestBody Person person) {
		return personRepository.save(person);
	}
		
	@PutMapping("/personas/{id}")
	public Optional<Person> updatePerson(@RequestBody Person newPerson, @PathVariable Integer id)
	{
		Optional<Person> optionalPerson = personRepository.findById(id);
		if (optionalPerson.isPresent()) {
			Person person = optionalPerson.get();
			person.setVorname(newPerson.getVorname());
			person.setNachname(newPerson.getNachname());
			personRepository.save(person);
		}
		return optionalPerson;
	}
	
	@DeleteMapping(value = "/personas/{id}", produces = "application/json; charset=utf-8")
	public String deletePerson(@PathVariable Integer id) {
		Boolean encontrado = personRepository.existsById(id);
		if (encontrado) {
			personRepository.deleteById(id);
			return "{ \"Resultado\": \"Eliminacion Exitosa !! \"}";
		} else {
			return "{ \"Resultado\": \"Persona " + id  + " No registrado ! \"}";
		}
	}
}
