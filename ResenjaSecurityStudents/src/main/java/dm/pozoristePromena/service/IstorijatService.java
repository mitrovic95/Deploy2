package dm.pozoristePromena.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import dm.pozoristePromena.model.Istorijat;
import dm.pozoristePromena.repository.IstorijatRepository;

@Component
public class IstorijatService {
	
	@Autowired
	IstorijatRepository istorijatRepository;
	
	public Optional<Istorijat> findById(Long id) {
		return istorijatRepository.findById(id);
	}
	
	public List<Istorijat> findAll() {
		return istorijatRepository.findAll();
	}
	
	public Page<Istorijat> findAll(Pageable page) {
		return istorijatRepository.findAll(page);
	}

	public Istorijat findOne(Long id) {
		return istorijatRepository.findOne(id);
	}

	public Istorijat save(Istorijat istorijat) {
		return istorijatRepository.save(istorijat);
	}

	public void remove(Long id) {
		istorijatRepository.delete(id);
	}

}
