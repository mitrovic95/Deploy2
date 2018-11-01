package dm.pozoristePromena.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import dm.pozoristePromena.model.Predstava;

@Component
public interface PredstavaRepository extends JpaRepository<Predstava, Long>{
	
	Optional<Predstava> findById(Long id);
	List<Predstava> findByNaslovContains(String naslov);
	Page<Predstava> findAll(Pageable pageable);

}
