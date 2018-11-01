package dm.pozoristePromena.repository;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import dm.pozoristePromena.model.Repertoar;

@Component
public interface RepertoarRepository extends JpaRepository<Repertoar, Long>{
	
	Optional<Repertoar> findById(Long id);
	Page<Repertoar> findAll(Pageable pageable);

}

