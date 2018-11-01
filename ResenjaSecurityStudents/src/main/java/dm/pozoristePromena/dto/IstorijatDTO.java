package dm.pozoristePromena.dto;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import dm.pozoristePromena.model.Istorijat;

public class IstorijatDTO {
	
	@Id
	@GeneratedValue
	private Long id;

	private String tekst;

	private SlikeDTO slike;

	public IstorijatDTO(Long id, String tekst, SlikeDTO slike) {
		super();
		this.id = id;
		this.tekst = tekst;
		this.slike = slike;
	}

	public IstorijatDTO(Istorijat istorijat) {
		this.id = istorijat.getId();
		this.tekst = istorijat.getTekst();
		this.slike = new SlikeDTO(istorijat.getSlike());
	}
	
	public IstorijatDTO() {

	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTekst() {
		return tekst;
	}

	public void setTekst(String tekst) {
		this.tekst = tekst;
	}

	public SlikeDTO getSlike() {
		return slike;
	}

	public void setSlike(SlikeDTO slike) {
		this.slike = slike;
	}

	@Override
	public String toString() {
		return "IstorijatDTO [id=" + id + ", tekst=" + tekst + ", slike=" + slike + "]";
	}
	
}
