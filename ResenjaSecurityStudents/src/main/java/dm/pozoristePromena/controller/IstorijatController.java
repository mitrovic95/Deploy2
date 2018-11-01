package dm.pozoristePromena.controller;

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
import org.springframework.web.bind.annotation.RestController;

import dm.pozoristePromena.dto.IstorijatDTO;
import dm.pozoristePromena.model.Istorijat;
import dm.pozoristePromena.service.IstorijatService;


	@RestController
	@RequestMapping("/api/istorijat")
	public class IstorijatController {
		
		@Autowired
		AuthenticationManager authenticationManager;

		@Autowired
		private IstorijatService istorijatService;

//	    @PreAuthorize("isAuthenticated()")
		@GetMapping
		public ResponseEntity<List<IstorijatDTO>> getIstorijatPage() {
			final List<IstorijatDTO> retVal = istorijatService.findAll().stream().map(IstorijatDTO::new)
					.collect(Collectors.toList());

			return new ResponseEntity<>(retVal, HttpStatus.OK);
		}

//		@PreAuthorize("isAuthenticated()")
		@GetMapping("/{id}")
		public ResponseEntity<IstorijatDTO> getIstorijat(@PathVariable Long id) {
			final Istorijat istorijat = istorijatService.findOne(id);

			if (istorijat == null) {
				return new ResponseEntity<IstorijatDTO>(HttpStatus.NOT_FOUND);
			}

			final IstorijatDTO istorijatDTO = new IstorijatDTO(istorijat);
			return new ResponseEntity<>(istorijatDTO, HttpStatus.OK);
		}

		@PreAuthorize("hasAnyAuthority('ADMIN')")
		@PostMapping
		public ResponseEntity<String> createNewIstorijat(@RequestBody Istorijat istorijat) {
			final Optional<Istorijat> checkIstorijat = istorijatService.findById(istorijat.getId());
			if (checkIstorijat.isPresent()) {
				return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
			} else if (istorijat.getId() == null) {
				return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
			}
			istorijatService.save(istorijat);
			return new ResponseEntity<>(HttpStatus.CREATED);
		}

		@PreAuthorize("hasAnyAuthority('ADMIN')")
		@PutMapping("/{id}")
		public ResponseEntity<String> updateIstorijat(@PathVariable Long id, @RequestBody Istorijat istorijat) {
			final Istorijat foundIstorijat = istorijatService.findOne(id);
			if (foundIstorijat == null) {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
			foundIstorijat.setTekst(istorijat.getTekst());
			foundIstorijat.setSlike(istorijat.getSlike());
			istorijatService.save(foundIstorijat);
			return new ResponseEntity<>(HttpStatus.OK);

		}

		@PreAuthorize("hasAnyAuthority('ADMIN')")
		@DeleteMapping("/{id}")
		public ResponseEntity<Void> deleteIstorijat(@PathVariable Long id) {
			final Istorijat foundIstorijat = istorijatService.findOne(id);
			if (foundIstorijat == null) {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
			istorijatService.remove(id);
			return new ResponseEntity<>(HttpStatus.OK);
		}

}
