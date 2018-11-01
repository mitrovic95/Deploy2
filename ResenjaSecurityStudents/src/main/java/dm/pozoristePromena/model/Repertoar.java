package dm.pozoristePromena.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

@Entity
public class Repertoar {

	@Id
	@GeneratedValue
	private Long id;

	private Date datum;

	@ManyToOne(fetch = FetchType.EAGER)
	Predstava predstava;
	
	public Repertoar() {
	}

	public Repertoar(Long id, Date datum, Predstava predstava) {
		super();
		this.id = id;
		this.datum = datum;
		this.predstava = predstava;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Date getDatum() {
		return datum;
	}

	public void setDatum(Date datum) {
		this.datum = datum;
	}

	public Predstava getPredstava() {
		return predstava;
	}

	public void setPredstava(Predstava predstava) {
		this.predstava = predstava;
	}

	@Override
	public String toString() {
		return "Repertoar [id=" + id + ", datum=" + datum + ", predstava=" + predstava + "]";
	}
}
