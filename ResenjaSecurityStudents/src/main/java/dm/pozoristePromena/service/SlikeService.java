package dm.pozoristePromena.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Component;

import dm.pozoristePromena.model.Slike;
import dm.pozoristePromena.repository.SlikeRepository;


@Component
public class SlikeService {
	
	@Autowired
	SlikeRepository slikeRepository;
	
	public Optional<Slike> findById(Long id) {
		return slikeRepository.findById(id);
	}
	
//	public List<Slike> findByNamena(String namena) {
//		return slikeRepository.findByNamena();
//	}
	
	public List<Slike> findAll() {
		return slikeRepository.findAll();
	}
	
	public Page<Slike> findAll(Pageable page) {
		return slikeRepository.findAll(page);
	}

	public Slike findOne(Long id) {
		return slikeRepository.findOne(id);
	}

	public Slike save(Slike slike) {
		return slikeRepository.save(slike);
	}

	public void remove(Long id) {
		slikeRepository.delete(id);
	}

}
