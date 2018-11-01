package dm.pozoristePromena.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import dm.pozoristePromena.model.Vesti;
import dm.pozoristePromena.repository.VestiRepository;

@Component
public class VestiService {
	
	@Autowired
	VestiRepository vestiRepository;
	
	public Optional<Vesti> findById(Long id) {
		return vestiRepository.findById(id);
	}
	
	public List<Vesti> findAll() {
		return vestiRepository.findAll();
	}
	
	public Page<Vesti> findAll(Pageable page) {
		return vestiRepository.findAll(page);
	}

	public Vesti findOne(Long id) {
		return vestiRepository.findOne(id);
	}

	public Vesti save(Vesti vesti) {
		return vestiRepository.save(vesti);
	}

	public void remove(Long id) {
		vestiRepository.delete(id);
	}

}
