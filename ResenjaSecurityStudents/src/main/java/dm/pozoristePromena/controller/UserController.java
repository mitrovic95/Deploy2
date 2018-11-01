package dm.pozoristePromena.controller;


import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.util.Properties;

import javax.activation.DataHandler;
import javax.activation.DataSource;
import javax.activation.FileDataSource;
import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.Session;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

import org.apache.tomcat.util.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import dm.pozoristePromena.dto.LoginDTO;
import dm.pozoristePromena.dto.TokenDTO;
import dm.pozoristePromena.security.TokenUtils;
import dm.pozoristePromena.service.UserDetailsServiceImpl;

@RestController
public class UserController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    TokenUtils tokenUtils;
    
	@Autowired
	private UserDetailsServiceImpl userService;

    @PostMapping(value = "/api/login")
    public ResponseEntity<TokenDTO> login(@RequestBody LoginDTO loginDTO) {
        try {
            final UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(loginDTO.getUsername(), loginDTO.getPassword());
            final org.springframework.security.core.Authentication authentication = authenticationManager.authenticate(token);
            SecurityContextHolder.getContext().setAuthentication(authentication);
            final UserDetails details = userDetailsService.loadUserByUsername(loginDTO.getUsername());
            final String genToken = tokenUtils.generateToken(details);

            return new ResponseEntity<>(new TokenDTO(genToken), HttpStatus.OK);
        } catch (Exception ex) {
            return new ResponseEntity<>(new TokenDTO(""), HttpStatus.BAD_REQUEST);
        }
    }
    
//    @PostMapping(value = "/api/email")
//	public static MimeMessage createEmailWithAttachment(String to, String from, String subject, String bodyText,
//			File file) throws MessagingException, IOException {
//		Properties props = new Properties();
//		Session session = Session.getDefaultInstance(props, null);
//
//		MimeMessage email = new MimeMessage(session);
//
//		email.setFrom(new InternetAddress(from));
//		email.addRecipient(javax.mail.Message.RecipientType.TO, new InternetAddress(to));
//		email.setSubject(subject);
//
//		MimeBodyPart mimeBodyPart = new MimeBodyPart();
//		mimeBodyPart.setContent(bodyText, "text/plain");
//
//		Multipart multipart = new MimeMultipart();
//		multipart.addBodyPart(mimeBodyPart);
//
//		mimeBodyPart = new MimeBodyPart();
//		DataSource source = new FileDataSource(file);
//
//		mimeBodyPart.setDataHandler(new DataHandler(source));
//		mimeBodyPart.setFileName(file.getName());
//
//		multipart.addBodyPart(mimeBodyPart);
//		email.setContent(multipart);
//
//		return email;
//	}
    
    
//	public static Message sendMessage(Gmail service, String userId, MimeMessage emailContent)
//			throws MessagingException, IOException {
//		Message message = createMessageWithEmail(emailContent);
//		message = service.users().messages().send(userId, message).execute();
//
//		System.out.println("Message id: " + message.getId());
//		System.out.println(message.toPrettyString());
//		return message;
//	}
//	
//	public static Message createMessageWithEmail(MimeMessage emailContent)
//            throws MessagingException, IOException {
//        ByteArrayOutputStream buffer = new ByteArrayOutputStream();
//        emailContent.writeTo(buffer);
//        byte[] bytes = buffer.toByteArray();
//        String encodedEmail = Base64.encodeBase64URLSafeString(bytes);
//        Message message = new Message();
//        message.setRaw(encodedEmail);
//        return message;
//    }
//	
//	public static MimeMessage createEmail(String to, String from, String subject, String bodyText)
//			throws MessagingException {
//		Properties props = new Properties();
//		Session session = Session.getDefaultInstance(props, null);
//
//		MimeMessage email = new MimeMessage(session);
//
//		email.setFrom(new InternetAddress(from));
//		email.addRecipient(javax.mail.Message.RecipientType.TO, new InternetAddress(to));
//		email.setSubject(subject);
//		email.setText(bodyText);
//		return email;
//	}
//    @PreAuthorize("isAuthenticated()")
//    @GetMapping(value = "api/user")
//    public ResponseEntity<List<SecurityUserDTO>> getUsersPage() {
//        final List<SecurityUserDTO> retVal = userService.findAll().stream()
//                .map(SecurityUserDTO::new)
//                .collect(Collectors.toList());
//
//        return new ResponseEntity<>(retVal, HttpStatus.OK);
//    }
//    
//
//    @PreAuthorize("isAuthenticated()")
//    @GetMapping(value = "api/user" , params = {"username"})
//    public ResponseEntity<List<SecurityUserDTO>> getUsersByUsername(@RequestParam String username) {
//        final List<SecurityUserDTO> retVal = userService.findByUsernameContains(username).stream()
//                .map(SecurityUserDTO::new)
//                .collect(Collectors.toList());
//
//        return new ResponseEntity<>(retVal, HttpStatus.OK);
//    }
//
//    @PreAuthorize("isAuthenticated()")
//    @GetMapping(value = "api/user/{id}")
//    public ResponseEntity<SecurityUserDTO> getExam(@PathVariable Long id) {
//        final SecurityUser securityUser = userService.findById(id);
//
//        if (securityUser == null) {
//            return new ResponseEntity<SecurityUserDTO>(HttpStatus.NOT_FOUND);
//        }
//
//        final SecurityUserDTO securityUserDTO = new SecurityUserDTO(securityUser);
//        return new ResponseEntity<>(securityUserDTO, HttpStatus.OK);
//    }
//
//    @PreAuthorize("hasAnyAuthority('SuperAdmin', 'CompanyAdmin')")
//    @PostMapping(value = "/api/user")
//	public ResponseEntity<String> registerNewUser(@RequestBody SecurityUser user) {
//		final Optional<SecurityUser> checkUser = userService.findByUsername(user.getUsername());
//		if (checkUser.isPresent()) {
//			return new ResponseEntity<>("Username already used", HttpStatus.BAD_REQUEST);
//		} else if (user.getUsername() == null) {
//			return new ResponseEntity<>("Username is null", HttpStatus.BAD_REQUEST);
//		}
//		userService.addUser(user);
//		return new ResponseEntity<>("User created", HttpStatus.CREATED);
//	}
//    
//    @PreAuthorize("hasAnyAuthority('SuperAdmin', 'CompanyAdmin')")
//	@PutMapping(value = "/api/user/{id}")
//	public ResponseEntity<String> updateUser(@PathVariable Long id, @RequestBody SecurityUser user) {
//		final SecurityUser foundUser = userService.findById(id);
//		if (foundUser == null) {
//			return new ResponseEntity<>("Not found", HttpStatus.NOT_FOUND);
//		}
//		foundUser.setFirstName(user.getFirstName());
//		foundUser.setLastName(user.getLastName());
//		foundUser.setUsername(user.getUsername());
//		foundUser.setPassword(Crypt.hashPassword(user.getPassword()));
//		foundUser.setRole(user.getRole());
//		userService.save(foundUser);
//		return new ResponseEntity<>("User updated successfully", HttpStatus.OK);
//
//	}
//		
//    @PreAuthorize("hasAnyAuthority('SuperAdmin', 'CompanyAdmin')")
//	@DeleteMapping(value = "/api/user/{id}")
//	    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
//	        final SecurityUser foundUser = userService.findById(id);
//	        if (foundUser == null) {
//	            return new ResponseEntity<>("Not found", HttpStatus.NOT_FOUND);
//	        }
//	        userService.remove(id);
//	        return new ResponseEntity<>("OK", HttpStatus.OK);
//	    }
//	  
//	  private List<SecurityUserDTO> convertUserToDTTOs(List<SecurityUser> users){
//			
//			return users
//					  .stream()
//					  .map(SecurityUserDTO::new)
//					  .collect(Collectors.toList());
//
//		}
}
