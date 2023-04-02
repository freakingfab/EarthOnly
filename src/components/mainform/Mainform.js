import react from 'react';
import './mainform.css';
import { useFormik } from 'formik';

function Mainform() {
    const formik = useFormik({
        initialValues: {
            email: 'xyz@gmail.com',
            firstname: 'First Name',
            lastname: 'Last Name',
            company: 'Company',
            role: 'Select anyone',
            country: 'Select anyone',
            language: 'Select a Language'
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });
    return (
        <div className='mainform'>
            <form onSubmit={formik.handleSubmit}>
                <div className='form-attribute'>
                <label htmlFor="firstname">First name</label>
        <input
         id="firstname"
         name="firstname"
                        type="text"
                        required
         onChange={formik.handleChange}
         value={formik.values.firstname}
       />
                </div>
                <div className='form-attribute'>
                <label htmlFor="lastname">Last Name</label>
        <input
         id="lastname"
         name="lastname"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.lastname}
       />
                </div>
                <div className='form-attribute'>
                <label htmlFor="email">Email Address</label>
        <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
       />
                </div>
                <div className='form-attribute'>
                <label htmlFor="company">Company Name</label>
        <input
         id="company"
         name="company"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.company}
       />
                </div>
                <div className='form-attribute'>
                <label for="role">Choose a Role:</label>

                    <select name="role" id="role" onChange={formik.handleChange} value={formik.values.role}
                    >
  <option value="default">Select a Role</option>
  <option value="backend">Backend Developer</option>
  <option value="frontend">Frontend</option>
  <option value="Fullstack">Fullstack</option>
</select>
                </div>  
                <div className='form-attribute'>
                <label for="role">Choose a Country:</label>

                    <select name="cuntry" id="country" onChange={formik.handleChange} value={formik.values.country}
                    >
  <option value="default">Select a country</option>
  <option value="India">India</option>
  <option value="India">India</option>
  <option value="India">India</option>
</select>
                </div>    
                <div className='form-attribute'>
                <label for="role">Choose a Development Language:</label>

                    <select name="language" id="language" onChange={formik.handleChange} value={formik.values.language}
                    >
  <option value="default">Slect a language</option>
  <option value="C++">C++</option>
  <option value="python">Python</option>
  <option value="java">Java</option>
</select>
           </div>     
                <button type="submit">CREATE AN ACCOUNT</button>
            </form>
            <p>Signing up signifies that you have read and agree to the <a href='https://www.heroku.com/policy'>Terms of Service</a> and our <a href='https://www.salesforce.com/company/privacy/?_gl=1*1r57pbg*_ga*MTI5NjI3NTk5My4xNjgwNDM3OTE3*_ga_62RHPFWB9M*MTY4MDQ1ODAzOS41LjEuMTY4MDQ1ODA1Ny4wLjAuMA..'>Privacy Policy</a>.
            </p>
            </div>
    );
}

export default Mainform;