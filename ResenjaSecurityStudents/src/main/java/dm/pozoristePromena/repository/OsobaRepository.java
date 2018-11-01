package dm.pozoristePromena.repository;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import dm.pozoristePromena.model.Osoba;

@Component
public interface OsobaRepository extends JpaRepository<Osoba, Long>{
	
	Optional<Osoba> findById(Long id);
	Page<Osoba> findAll(Pageable pageable);
	
}