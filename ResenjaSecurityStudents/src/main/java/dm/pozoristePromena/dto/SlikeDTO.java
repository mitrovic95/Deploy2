package dm.pozoristePromena.dto;

import java.util.Date;
import java.util.List;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import dm.pozoristePromena.model.Slike;

public class SlikeDTO {
	@Id
	@GeneratedValue
	private Long id;

	private String namena;

	private Date datum;
	
	private String sadrzaj;

	public SlikeDTO(Long id, String namena, Date datum, String sadrzaj) {
		super();
		this.id = id;
		this.namena = namena;
		this.datum = datum;
		this.sadrzaj = sadrzaj;
	}

	public SlikeDTO(Slike slike) {
		this.id = slike.getId();
		this.namena = slike.getNamena();
		this.datum = slike.getDatum();
		this.sadrzaj = slike.getSadrzaj();
	}
	
	public SlikeDTO() {
		
	}

	public SlikeDTO(List<Slike> slike) {
		// TODO Auto-generated constructor stub
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
		return "SlikeDTO [id=" + id + ", namena=" + namena + ", datum=" + datum + ", sadrzaj=" + sadrzaj + "]";
	}

}
