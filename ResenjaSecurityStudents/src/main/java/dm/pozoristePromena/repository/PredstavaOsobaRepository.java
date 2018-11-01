package dm.pozoristePromena.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import dm.pozoristePromena.model.PredstavaOsoba;

@Component
public interface PredstavaOsobaRepository extends JpaRepository<PredstavaOsoba, Long>{
	
	Optional<PredstavaOsoba> findById(Long id);
	public List<PredstavaOsoba> findByPredstavaId(Long predstavaId);

}
