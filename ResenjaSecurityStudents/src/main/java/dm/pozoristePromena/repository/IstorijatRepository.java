package dm.pozoristePromena.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import dm.pozoristePromena.model.Istorijat;

@Component
public interface IstorijatRepository  extends JpaRepository<Istorijat, Long>{
	
	Optional<Istorijat> findById(Long id);
	
}
