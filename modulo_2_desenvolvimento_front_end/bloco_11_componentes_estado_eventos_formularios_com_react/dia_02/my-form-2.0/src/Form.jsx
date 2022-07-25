import React from "react";
import PersonalInfo from "./PersonalInfo";
import PersonalJobs from "./PersonalJobs";
import NewDisplay from "./NewDisplay";

class Form extends React.Component {
  constructor() {
    super(); {
      this.handleChange = this.handleChange.bind(this);
      this.verifyCity = this.verifyCity.bind(this);
      this.state = {
        name: '',
        email: '',
        CPF: '',
        address: '',
        city: '',
        state: '',
        type: '',
        resume: '',
        role: '',
        roleDescription: '',
      }
    }
  }

  handleChange({ target }) {
    let { name, value } = target;
    if (name === 'name') value = value.toUpperCase();
    if (name === 'address') value = value.replace(/[^\w\s]/gi, '');
    this.setState({
      [name]: value,  
    })
  }

  verifyCity({ target }) {
    let { name, value } = target; 
    value = value[0];
    if(!isNaN(value)) {
      target.value = '';
      this.setState({
        [name]: '',  
      })
    }
  } 

  render() {
    let { CPF, address, resume, city, email, name, role, roleDescription, state, type } = this.state
    return (
      <div className="form-container">
        <form>
          <PersonalInfo value={ name, email, CPF, address, state, city } handleChange={ this.handleChange } verifyCity={ this.verifyCity } />
          <PersonalJobs handleChange={ this.handleChange } toggleAlert={ this.toggleAlert } />
          <NewDisplay
            CPF={ CPF }
            address={ address }
            city={ city }
            name={ name }
            email={ email }
            role={ role }
            roleDescription={ roleDescription }
            state={ state }
            type={ type }
            resume={ resume }
          />
        </form>
      </div>
    );
  }
}

export default Form; 