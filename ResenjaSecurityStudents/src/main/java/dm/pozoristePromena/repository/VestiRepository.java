package dm.pozoristePromena.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import dm.pozoristePromena.model.Vesti;

@Component
public interface VestiRepository extends JpaRepository<Vesti, Long>{
	
	Optional<Vesti> findById(Long id);

}
