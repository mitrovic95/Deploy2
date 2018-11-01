package dm.pozoristePromena.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Vesti {

	@Id
	@GeneratedValue
	private Long id;

	private String opis;
	
	private String naslov;

	@ManyToOne(fetch = FetchType.EAGER)
	Slike slike;

	public Vesti() {

	}

	public Vesti(Long id, String opis, String naslov, Slike slike) {
		super();
		this.id = id;
		this.opis = opis;
		this.naslov = naslov;
		this.slike = slike;
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

	public Slike getSlike() {
		return slike;
	}

	public void setSlike(Slike slike) {
		this.slike = slike;
	}

	@Override
	public String toString() {
		return "Vesti [id=" + id + ", opis=" + opis + ", naslov=" + naslov + ", slike=" + slike + "]";
	}
	
}