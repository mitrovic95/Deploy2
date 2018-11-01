package dm.pozoristePromena.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;


@Entity
public class Predstava {

	@Id
	@GeneratedValue
	private Long id;

	private String naslov;
	
	@Column(columnDefinition ="TEXT")
	private String opis;

	private String slika;

	@ManyToOne(fetch = FetchType.EAGER)
	Slike slike;

	private String video;
	
	@ManyToOne(fetch = FetchType.EAGER)
	Osoba osoba;

	public Predstava() {

	}

	public Predstava(Long id, String naslov, String opis, String slika, Slike slike, String video,Osoba osoba) {
		super();
		this.id = id;
		this.naslov = naslov;
		this.opis = opis;
		this.slika = slika;
		this.slike = slike;
		this.video = video;
		this.osoba = osoba;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNaslov() {
		return naslov;
	}

	public void setNaslov(String naslov) {
		this.naslov = naslov;
	}

	public String getOpis() {
		return opis;
	}

	public void setOpis(String opis) {
		this.opis = opis;
	}

	public String getSlika() {
		return slika;
	}

	public void setSlika(String slika) {
		this.slika = slika;
	}

	public Slike getSlike() {
		return slike;
	}

	public void setSlike(Slike slike) {
		this.slike = slike;
	}

	public String getVideo() {
		return video;
	}

	public void setVideo(String video) {
		this.video = video;
	}

	public Osoba getOsoba() {
		return osoba;
	}

	public void setOsoba(Osoba osoba) {
		this.osoba = osoba;
	}

	@Override
	public String toString() {
		return "Predstava [id=" + id + ", naslov=" + naslov + ", opis=" + opis + ", slika=" + slika + ", slike=" + slike
				+ ", video=" + video + ", osoba=" + osoba + "]";
	}

}
