package dm.pozoristePromena.dto;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import dm.pozoristePromena.model.Predstava;

public class PredstavaDTO {
	
	@Id
	@GeneratedValue
	private Long id;

	private String naslov;

	private String opis;

	private String slika;

	private SlikeDTO slike;

	private String video;
	
	private OsobaDTO osoba;
	
	public PredstavaDTO(Long id, String naslov, String opis, String slika, SlikeDTO slike, String video,
			OsobaDTO osoba) {
		super();
		this.id = id;
		this.naslov = naslov;
		this.opis = opis;
		this.slika = slika;
		this.slike = slike;
		this.video = video;
		this.osoba = osoba;
	}

	public PredstavaDTO(Predstava predstava) {
		this.id = predstava.getId();
		this.naslov = predstava.getNaslov();
		this.opis = predstava.getOpis();
		this.slika = predstava.getSlika();
		this.slike = new SlikeDTO(predstava.getSlike());
		this.video = predstava.getVideo();
		this.osoba = new OsobaDTO(predstava.getOsoba());
	}

	public PredstavaDTO() {

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

	public SlikeDTO getSlike() {
		return slike;
	}

	public void setSlike(SlikeDTO slike) {
		this.slike = slike;
	}

	public String getVideo() {
		return video;
	}

	public void setVideo(String video) {
		this.video = video;
	}

	public OsobaDTO getOsoba() {
		return osoba;
	}

	public void setOsoba(OsobaDTO osoba) {
		this.osoba = osoba;
	}

	@Override
	public String toString() {
		return "PredstavaDTO [id=" + id + ", naslov=" + naslov + ", opis=" + opis + ", slika=" + slika + ", slike="
				+ slike + ", video=" + video + ", osoba=" + osoba + "]";
	}
	
}
