package dm.pozoristePromena.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import dm.pozoristePromena.dto.PredstavaOsobaDTO;
import dm.pozoristePromena.model.PredstavaOsoba;
import dm.pozoristePromena.service.PredstavaOsobaService;

@RestController
@RequestMapping("/api/predstavaOsoba")
public class PredstavaOsobaController {

	 @Autowired
	 AuthenticationManager authenticationManager;

	@Autowired
	private PredstavaOsobaService predstavaOsobaService;

//	 @PreAuthorize("isAuthenticated()")
	@GetMapping
	public ResponseEntity<List<PredstavaOsobaDTO>> getPredstavaOsobaPage() {
		final List<PredstavaOsobaDTO> retVal = predstavaOsobaService.findAll().stream().map(PredstavaOsobaDTO::new)
				.collect(Collectors.toList());

		return new ResponseEntity<>(retVal, HttpStatus.OK);
	}
	
	@RequestMapping(value = "/{predstavaId}/osobe", method = RequestMethod.GET)
	public ResponseEntity<List<PredstavaOsobaDTO>> getPrestavaOsobe(
			@PathVariable Long predstavaId) {
		List<PredstavaOsoba> predstavaOsobe = predstavaOsobaService.findByPredstavaId(predstavaId);
		List<PredstavaOsobaDTO> retVal = new ArrayList<>();
		for (PredstavaOsoba predstavaOsoba: predstavaOsobe) {
			retVal.add(new PredstavaOsobaDTO(predstavaOsoba));
		}

		return new ResponseEntity<>(retVal, HttpStatus.OK); 
	}

//	 @PreAuthorize("isAuthenticated()")
	@GetMapping("/{id}")
	public ResponseEntity<PredstavaOsobaDTO> getPredstavaOsoba(@PathVariable Long id) {
		final PredstavaOsoba predstavaOsoba = predstavaOsobaService.findOne(id);

		if (predstavaOsoba == null) {
			return new ResponseEntity<PredstavaOsobaDTO>(HttpStatus.NOT_FOUND);
		}

		final PredstavaOsobaDTO predstavaOsobaDTO = new PredstavaOsobaDTO(predstavaOsoba);
		return new ResponseEntity<>(predstavaOsobaDTO, HttpStatus.OK);
	}

	 @PreAuthorize("hasAnyAuthority('ADMIN')")
	@PostMapping
	public ResponseEntity<String> createNewPredstavaOsoba(@RequestBody PredstavaOsoba predstavaOsoba) {
		final Optional<PredstavaOsoba> checkPredstavaOsoba = predstavaOsobaService.findById(predstavaOsoba.getId());
		if (checkPredstavaOsoba.isPresent()) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		} else if (predstavaOsoba.getId() == null) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		predstavaOsobaService.save(predstavaOsoba);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}

	 @PreAuthorize("hasAnyAuthority('ADMIN')")
	@PutMapping("/{id}")
	public ResponseEntity<String> updatePredstavaOsoba(@PathVariable Long id,
			@RequestBody PredstavaOsoba predstavaOsoba) {
		final PredstavaOsoba foundPredstavaOsoba = predstavaOsobaService.findOne(id);
		if (foundPredstavaOsoba == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		foundPredstavaOsoba.setUloga(predstavaOsoba.getUloga());
		foundPredstavaOsoba.setPredstava(predstavaOsoba.getPredstava());
		foundPredstavaOsoba.setOsoba(predstavaOsoba.getOsoba());
		predstavaOsobaService.save(foundPredstavaOsoba);
		return new ResponseEntity<>(HttpStatus.OK);

	}

	 @PreAuthorize("hasAnyAuthority('ADMIN')")
	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deletePredstavaOsoba(@PathVariable Long id) {
		final PredstavaOsoba foundPredstavaOsoba = predstavaOsobaService.findOne(id);
		if (foundPredstavaOsoba == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		predstavaOsobaService.remove(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}

}
