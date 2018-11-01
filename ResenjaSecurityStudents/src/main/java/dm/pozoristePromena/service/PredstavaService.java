package dm.pozoristePromena.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import dm.pozoristePromena.model.Predstava;
import dm.pozoristePromena.repository.PredstavaRepository;

@Component
public class PredstavaService {
	
	@Autowired
	PredstavaRepository predstavaRepository;
	
	public Optional<Predstava> findById(Long id) {
		return predstavaRepository.findById(id);
	}
	public List<Predstava> findByNameContains(String naslov) {
		return predstavaRepository.findByNaslovContains(naslov);
	}
	
	public List<Predstava> findAll() {
		return predstavaRepository.findAll();
	}
	
	public Page<Predstava> findAll(Pageable page) {
		return predstavaRepository.findAll(page);
	}

	public Predstava findOne(Long id) {
		return predstavaRepository.findOne(id);
	}

	public Predstava save(Predstava predstava) {
		return predstavaRepository.save(predstava);
	}

	public void remove(Long id) {
		predstavaRepository.delete(id);
	}

}