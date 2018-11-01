package dm.pozoristePromena;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@SpringBootApplication
public class App
{
    public static void main( String[] args )
    {
    	SpringApplication.run(App.class, args);
    }
    
    @Configuration
    public class WebConfiguration extends WebMvcConfigurerAdapter {

      @Override
      public void addViewControllers(ViewControllerRegistry registry) {
          registry.addViewController("/{spring:\\w+}")
                .setViewName("forward:/");
          registry.addViewController("/**/{spring:\\w+}")
                .setViewName("forward:/");
          registry.addViewController("/{spring:\\w+}/**{spring:?!(\\.js|\\.css)$}")
                .setViewName("forward:/");
      }
    }
 
}