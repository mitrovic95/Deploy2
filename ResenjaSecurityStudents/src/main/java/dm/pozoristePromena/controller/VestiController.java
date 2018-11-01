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

import dm.pozoristePromena.dto.VestiDTO;
import dm.pozoristePromena.model.Vesti;
import dm.pozoristePromena.service.VestiService;


	@RestController
	@RequestMapping("/api/vesti")
	public class VestiController {
		
		@Autowired
		AuthenticationManager authenticationManager;

		@Autowired
		private VestiService vestiService;

//	    @PreAuthorize("isAuthenticated()")
		@GetMapping
		public ResponseEntity<List<VestiDTO>> getVestiPage() {
			final List<VestiDTO> retVal = vestiService.findAll().stream().map(VestiDTO::new)
					.collect(Collectors.toList());

			return new ResponseEntity<>(retVal, HttpStatus.OK);
		}

//		@PreAuthorize("isAuthenticated()")
		@GetMapping("/{id}")
		public ResponseEntity<VestiDTO> getVesti(@PathVariable Long id) {
			final Vesti vesti = vestiService.findOne(id);

			if (vesti == null) {
				return new ResponseEntity<VestiDTO>(HttpStatus.NOT_FOUND);
			}

			final VestiDTO vestiDTO = new VestiDTO(vesti);
			return new ResponseEntity<>(vestiDTO, HttpStatus.OK);
		}

		@PreAuthorize("hasAnyAuthority('ADMIN')")
		@PostMapping
		public ResponseEntity<String> createNewVesti(@RequestBody Vesti vesti) {
			final Optional<Vesti> checkVesti = vestiService.findById(vesti.getId());
			if (checkVesti.isPresent()) {
				return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
			} else if (vesti.getId() == null) {
				return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
			}
			vestiService.save(vesti);
			return new ResponseEntity<>(HttpStatus.CREATED);
		}

		@PreAuthorize("hasAnyAuthority('ADMIN')")
		@PutMapping("/{id}")
		public ResponseEntity<String> updateVesti(@PathVariable Long id, @RequestBody Vesti vesti) {
			final Vesti foundVesti = vestiService.findOne(id);
			if (foundVesti == null) {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
			foundVesti.setOpis(vesti.getOpis());
			foundVesti.setNaslov(vesti.getNaslov());
			foundVesti.setSlike(vesti.getSlike());
			vestiService.save(foundVesti);
			return new ResponseEntity<>(HttpStatus.OK);

		}

		@PreAuthorize("hasAnyAuthority('ADMIN')")
		@DeleteMapping("/{id}")
		public ResponseEntity<Void> deleteVesti(@PathVariable Long id) {
			final Vesti foundVesti = vestiService.findOne(id);
			if (foundVesti == null) {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
			vestiService.remove(id);
			return new ResponseEntity<>(HttpStatus.OK);
		}

}
