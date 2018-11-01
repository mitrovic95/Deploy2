package dm.pozoristePromena.dto;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import dm.pozoristePromena.model.Vesti;

public class VestiDTO {
	
	@Id
	@GeneratedValue
	private Long id;

	private String opis;
	
	private String naslov;

	private SlikeDTO slike;

	public VestiDTO(Long id, String opis, String naslov, SlikeDTO slike) {
		super();
		this.id = id;
		this.opis = opis;
		this.naslov = naslov;
		this.slike = slike;
	}

	public VestiDTO(Vesti vesti) {
		this.id = vesti.getId();
		this.opis = vesti.getNaslov();
		this.naslov = vesti.getNaslov();
		this.slike = new SlikeDTO(vesti.getSlike());
	}
	
	public VestiDTO() {

	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getOpis() {
		return opis;
	}

	public void setOpis(String opis) {
		this.opis = opis;
	}

	public String getNaslov() {
		return naslov;
	}

	public void setNaslov(String naslov) {
		this.naslov = naslov;
	}

	public SlikeDTO getSlike() {
		return slike;
	}

	public void setSlike(SlikeDTO slike) {
		this.slike = slike;
	}

	@Override
	public String toString() {
		return "VestiDTO [id=" + id + ", opis=" + opis + ", naslov=" + naslov + ", slike=" + slike + "]";
	}
	
}
