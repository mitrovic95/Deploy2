package dm.pozoristePromena.dto;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import dm.pozoristePromena.model.Osoba;

public class OsobaDTO {
	
	@Id
	@GeneratedValue
	private Long id;

	private String ime;

	private String prezime;

	private String slika1;

	private String slika2;

	private String opis;

	private int prioritet;

	private int brojTelefona;

	private String mejl;
	
	public OsobaDTO(Long id, String ime, String prezime, String slika1, String slika2, String opis, int prioritet,
			int brojTelefona, String mejl) {
		super();
		this.id = id;
		this.ime = ime;
		this.prezime = prezime;
		this.slika1 = slika1;
		this.slika2 = slika2;
		this.opis = opis;
		this.prioritet = prioritet;
		this.brojTelefona = brojTelefona;
		this.mejl = mejl;
	}
	
	public OsobaDTO(Osoba osoba) {
		this.id = osoba.getId();
		this.ime = osoba.getIme();
		this.prezime = osoba.getPrezime();
		this.slika1 = osoba.getSlika1();
		this.slika2 = osoba.getSlika2();
		this.opis = osoba.getOpis();
		this.prioritet = osoba.getPrioritet();
		this.brojTelefona = osoba.getBrojTelefona();
		this.mejl = osoba.getMejl();
	}
	
	public OsobaDTO() {

	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getIme() {
		return ime;
	}

	public void setIme(String ime) {
		this.ime = ime;
	}

	public String getPrezime() {
		return prezime;
	}

	public void setPrezime(String prezime) {
		this.prezime = prezime;
	}

	public String getSlika1() {
		return slika1;
	}

	public void setSlika1(String slika1) {
		this.slika1 = slika1;
	}

	public String getSlika2() {
		return slika2;
	}

	public void setSlika2(String slika2) {
		this.slika2 = slika2;
	}

	public String getOpis() {
		return opis;
	}

	public void setOpis(String opis) {
		this.opis = opis;
	}

	public int getPrioritet() {
		return prioritet;
	}

	public void setPrioritet(int prioritet) {
		this.prioritet = prioritet;
	}

	public int getBrojTelefona() {
		return brojTelefona;
	}

	public void setBrojTelefona(int brojTelefona) {
		this.brojTelefona = brojTelefona;
	}

	public String getMejl() {
		return mejl;
	}

	public void setMejl(String mejl) {
		this.mejl = mejl;
	}

	@Override
	public String toString() {
		return "OsobaDTO [id=" + id + ", ime=" + ime + ", prezime=" + prezime + ", slika1=" + slika1 + ", slika2="
				+ slika2 + ", opis=" + opis + ", prioritet=" + prioritet + ", brojTelefona=" + brojTelefona + ", mejl="
				+ mejl + "]";
	}

}
