package dm.pozoristePromena.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;


	@Entity
	public class PredstavaOsoba {

		@Id
		@GeneratedValue
		private Long id;
		
		private String uloga;
		
		@ManyToOne(fetch = FetchType.EAGER)
		Predstava predstava;
		
		@ManyToOne(fetch = FetchType.EAGER)
		Osoba osoba;
		
		public PredstavaOsoba() {
			
		}

		public PredstavaOsoba(Long id, String uloga, Predstava predstava, Osoba osoba) {
			super();
			this.id = id;
			this.uloga = uloga;
			this.predstava = predstava;
			this.osoba = osoba;
		}

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getUloga() {
			return uloga;
		}

		public void setUloga(String uloga) {
			this.uloga = uloga;
		}

		public Predstava getPredstava() {
			return predstava;
		}

		public void setPredstava(Predstava predstava) {
			this.predstava = predstava;
		}

		public Osoba getOsoba() {
			return osoba;
		}

		public void setOsoba(Osoba osoba) {
			this.osoba = osoba;
		}

		@Override
		public String toString() {
			return "PredstavaOsoba [id=" + id + ", uloga=" + uloga + ", predstava=" + predstava + ", osoba=" + osoba
					+ "]";
		}
		
}
