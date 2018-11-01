package dm.pozoristePromena.dto;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import dm.pozoristePromena.model.PredstavaOsoba;

public class PredstavaOsobaDTO {
	
	@Id
	@GeneratedValue
	private Long id;
	
	private String uloga;
	
	private PredstavaDTO predstava;
	
	private OsobaDTO osoba;
	
	public PredstavaOsobaDTO(Long id, String uloga, PredstavaDTO predstava, OsobaDTO osoba) {
		super();
		this.id = id;
		this.uloga = uloga;
		this.predstava = predstava;
		this.osoba = osoba;
	}

	public PredstavaOsobaDTO(PredstavaOsoba predstavaOsoba) {
		this.id = predstavaOsoba.getId();
		this.uloga = predstavaOsoba.getUloga();
		this.predstava = new PredstavaDTO(predstavaOsoba.getPredstava());
		this.osoba = new OsobaDTO(predstavaOsoba.getOsoba());
	}

	public PredstavaOsobaDTO() {
		
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUloga() {
		return uloga;
	}

	public void setUloga(String uloga) {
		this.uloga = uloga;
	}

	public PredstavaDTO getPredstava() {
		return predstava;
	}

	public void setPredstava(PredstavaDTO predstava) {
		this.predstava = predstava;
	}

	public OsobaDTO getOsoba() {
		return osoba;
	}

	public void setOsoba(OsobaDTO osoba) {
		this.osoba = osoba;
	}

	@Override
	public String toString() {
		return "PredstavaOsobaDTO [id=" + id + ", uloga=" + uloga + ", predstava=" + predstava + ", osoba=" + osoba
				+ "]";
	}
	
}
