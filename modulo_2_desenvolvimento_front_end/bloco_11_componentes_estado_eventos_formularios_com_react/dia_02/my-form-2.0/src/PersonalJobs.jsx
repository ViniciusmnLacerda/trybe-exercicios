import React from "react";

class PersonalJobs extends React.Component {
  render() {
    const { resume, role, alert, roleDescription, handleChange, toggleAlert } = this.props;
    return (
      <fieldset>
        <legend>Dados Profissionais</legend>
        <div className="container">
          <label htmlFor="resume">Faça um resumo do seu currículo
             <textarea
              name="resume"
              maxLength="1000"
              required
              onChange={ handleChange }
              value={ resume }
            />
          </label>
        </div>

        <div className="container">
          <label htmlFor="role">Seu último cargo
             <input
             typeof="text"
              name="role"
              maxLength="40"
              required
              onChange={ handleChange }
              value={ role }
            />
          </label>
        </div>

        <div className="container">
          <label htmlFor="roleDescription">Descreva seu último cargo
             <textarea
              name="roleDescription"
              maxLength="500"
              required
              onChange={ handleChange }
              value={ roleDescription }
            />
          </label>
        </div>

        <div className="button-send">
        <button
          type="button"
          
        >
          Enviar
        </button>
      </div>
      </fieldset>
    );
  }
}

export default PersonalJobs