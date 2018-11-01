package dm.pozoristePromena.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import dm.pozoristePromena.model.Repertoar;
import dm.pozoristePromena.repository.RepertoarRepository;


@Component
public class RepertoarService {
	
	@Autowired
	RepertoarRepository repertoarRepository;
	
	public Optional<Repertoar> findById(Long id) {
		return repertoarRepository.findById(id);
	}
	
	public List<Repertoar> findAll() {
		return repertoarRepository.findAll();
	}
	
	public Page<Repertoar> findAll(Pageable page) {
		return repertoarRepository.findAll(page);
	}

	public Repertoar findOne(Long id) {
		return repertoarRepository.findOne(id);
	}

	public Repertoar save(Repertoar repertoar) {
		return repertoarRepository.save(repertoar);
	}

	public void remove(Long id) {
		repertoarRepository.delete(id);
	}

}