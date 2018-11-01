package dm.pozoristePromena.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import dm.pozoristePromena.model.Osoba;
import dm.pozoristePromena.repository.OsobaRepository;


@Component
public class OsobaService {
	
	@Autowired
	OsobaRepository osobaRepository;
	
	public Optional<Osoba> findById(Long id) {
		return osobaRepository.findById(id);
	}
	
	public List<Osoba> findAll() {
		return osobaRepository.findAll();
	}
	
	public Page<Osoba> findAll(Pageable page) {
		return osobaRepository.findAll(page);
	}

	public Osoba findOne(Long id) {
		return osobaRepository.findOne(id);
	}

	public Osoba save(Osoba osoba) {
		return osobaRepository.save(osoba);
	}

	public void remove(Long id) {
		osobaRepository.delete(id);
	}
	

}
