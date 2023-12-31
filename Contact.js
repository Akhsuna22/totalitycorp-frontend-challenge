import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }  
          }
        }
      }
    }
  `;

  return (
   <Wrapper>
     <h2 className="common-heading">Contact Page</h2>

     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.750076287295!2d80.9888158752102!3d26.784235465600432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be4ac0341a871%3A0x96e094c54c92ecc7!2sLulu%20Mall%2C%20Lucknow!5e0!3m2!1sen!2sin!4v1694109358888!5m2!1sen!2sin" 
     width="100%" 
     height="600" 
     style={{border:0}} 
     allowfullscreen="" 
     loading="lazy" 
     referrerpolicy="no-referrer-when-downgrade"></iframe>
   
   <div className="container">
    <div className="contact-form">
      <form action="" method="POST" className="contact-inputs">
        <input 
         type="text" 
         placeholder="username" 
         name="username" 
         required
         autoComplete="off"
         
         />
        
        <input
         type="email"
         name="Email"
         placeholder="Email"
         autoComplete="off"
         required
         
      />
        <textarea 
        name="Message" 
        cols="30" 
        rows="10"
        required
        autoComplete="off"
        placeholder="Enter your message"></textarea>
        <inout type="submit" value="send" />
      </form>   
    </div>
   </div>
   </Wrapper>
  )
};

export default Contact;
