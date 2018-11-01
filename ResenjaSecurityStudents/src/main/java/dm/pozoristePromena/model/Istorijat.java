package dm.pozoristePromena.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Istorijat {

	@Id
	@GeneratedValue
	private Long id;

	private String tekst;

	@ManyToOne(fetch = FetchType.EAGER)
	Slike slike;

	public Istorijat() {

	}

	public Istorijat(Long id, String tekst, Slike slike) {
		super();
		this.id = id;
		this.tekst = tekst;
		this.slike = slike;
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

	public Slike getSlike() {
		return slike;
	}

	public void setSlike(Slike slike) {
		this.slike = slike;
	}

	@Override
	public String toString() {
		return "Istorijat [id=" + id + ", tekst=" + tekst + ", slike=" + slike + "]";
	}
}