package dm.pozoristePromena.dto;

import java.util.Date;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import dm.pozoristePromena.model.Repertoar;

public class RepertoarDTO {

	@Id
	@GeneratedValue
	private Long id;

	private Date datum;

	private PredstavaDTO predstava;

	public RepertoarDTO(Long id, Date datum, PredstavaDTO predstava) {
		super();
		this.id = id;
		this.datum = datum;
		this.predstava = predstava;
	}

	public RepertoarDTO(Repertoar repertoar) {
		this.id = repertoar.getId();
		this.datum = repertoar.getDatum();
		this.predstava = new PredstavaDTO(repertoar.getPredstava());
	}

	public RepertoarDTO() {

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

	public PredstavaDTO getPredstava() {
		return predstava;
	}

	public void setPredstava(PredstavaDTO predstava) {
		this.predstava = predstava;
	}

	@Override
	public String toString() {
		return "RepertoarDTO [id=" + id + ", datum=" + datum + ", predstava=" + predstava + "]";
	}

}
