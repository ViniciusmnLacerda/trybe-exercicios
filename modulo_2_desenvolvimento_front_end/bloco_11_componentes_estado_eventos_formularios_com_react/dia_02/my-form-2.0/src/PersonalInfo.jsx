import React from "react";
const brazilStates = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espirito Santo", "Goiás", "Maranhão", "Mato Grosso do Sul", "Mato Grosso", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"];

class PersonalInfo extends React.Component {
  render() {
    let { name, email, CPF, address, city, state, type, handleChange, verifyCity } = this.props;
    return (
      <fieldset>
        <legend>Dados Pessoais</legend>
        <div className="container">
          <label htmlFor="name">Nome completo
            <input
              style={{ textTransform: 'uppercase' }}
              type="text"
              name="name"
              maxLength="40"
              required
              onChange={ handleChange }
              value={ name }
            />
          </label>
          
        </div>
        <div className="container">
          <label htmlFor="email"> Seu e-mail
            <input
              type="text"
              name="email"
              required
              onChange={ handleChange }
              value={ email } 
            />
          </label>
        </div>

        <div className="container">
          <label htmlFor="CPF"> Seu CPF
            <input
              type="text"
              name="CPF"
              required
              onChange={ handleChange }
              maxLength="11"
              value={ CPF }
            />
          </label>
        </div>

        <div className="container">
          <label htmlFor="address">Endereço
            <input
              type="text"
              name="address"
              maxLength="200"
              required
              onChange={ handleChange }
              value={ address }
            />
          </label>
        </div>

        <div className="container">
          <label htmlFor="city">Cidade
            <input
              type="text"
              name="city"
              maxLength="28"
              required
              onChange={ handleChange }
              onBlur={ verifyCity }
              value={ city }
            />
          </label>
        </div>

        <div className="container">
          <label htmlFor="state">Estado
            <select
              name="state"
              required
              defaultValue=""
              onChange={ handleChange }
              value={ state }
              >
                <option value="">Selecione</option>
                {
                  brazilStates.map((element, index) => (
                    <option key={ index }>{ element }</option>
                  ))
                }
              </select>
          </label>
        </div>

        <div className="container">
          <label htmlFor="house">
            <input
              type="radio" 
              name="type" 
              id="house" 
              value="house"
              onChange={ handleChange }
            />
              Casa
          </label>
          <label htmlFor="appartment">
            <input
              type="radio" 
              name="type" 
              id="appartment" 
              value="appartment"
              onChange={ handleChange }
            />
              Apartamento
          </label>
        </div>
        
      </fieldset>
    );
  }
}

export default PersonalInfo