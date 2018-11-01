package dm.pozoristePromena.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Slike {

	@Id
	@GeneratedValue
	private Long id;

	private String namena;

	private Date datum;

	private String sadrzaj;

	public Slike() {
	}

	public Slike(Long id, String namena, Date datum, String sadrzaj) {
		super();
		this.id = id;
		this.namena = namena;
		this.datum = datum;
		this.sadrzaj = sadrzaj;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNamena() {
		return namena;
	}

	public void setNamena(String namena) {
		this.namena = namena;
	}

	public Date getDatum() {
		return datum;
	}

	public void setDatum(Date datum) {
		this.datum = datum;
	}
	
	public String getSadrzaj() {
		return sadrzaj;
	}

	public void setSadrzaj(String sadrzaj) {
		this.sadrzaj = sadrzaj;
	}

	@Override
	public String toString() {
		return "Slike [id=" + id + ", namena=" + namena + ", datum=" + datum + ", sadrzaj=" + sadrzaj + "]";
	}
	
}
