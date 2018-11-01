package dm.pozoristePromena.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import dm.pozoristePromena.model.PredstavaOsoba;
import dm.pozoristePromena.repository.PredstavaOsobaRepository;


@Component
public class PredstavaOsobaService {
	
	@Autowired
	PredstavaOsobaRepository predstavaOsobaRepository;
	
	public Optional<PredstavaOsoba> findById(Long id) {
		return predstavaOsobaRepository.findById(id);
	}
	
	public List<PredstavaOsoba> findAll() {
		return predstavaOsobaRepository.findAll();
	}
	
	public Page<PredstavaOsoba> findAll(Pageable page) {
		return predstavaOsobaRepository.findAll(page);
	}

	public PredstavaOsoba findOne(Long id) {
		return predstavaOsobaRepository.findOne(id);
	}

	public PredstavaOsoba save(PredstavaOsoba predstavaOsoba) {
		return predstavaOsobaRepository.save(predstavaOsoba);
	}

	public void remove(Long id) {
		predstavaOsobaRepository.delete(id);
	}
	
	public List<PredstavaOsoba> findByPredstavaId(Long id) {
		return predstavaOsobaRepository.findByPredstavaId(id);
	}

}