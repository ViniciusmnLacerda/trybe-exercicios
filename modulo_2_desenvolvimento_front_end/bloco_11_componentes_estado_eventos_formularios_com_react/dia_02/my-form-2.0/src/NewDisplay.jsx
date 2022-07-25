import React from "react";

class NewDisplay extends React.Component {
  render() {
    const { CPF, address, resume, city, email, name, role, roleDescription, state, type } = this.props;
    return (
      <div className="data">
      <h2>Dados enviados</h2>
      <h3>Pessoal</h3>
      <div> Name: { name }</div>
      <div> Email: { email }</div>
      <div> CPF: { CPF }</div>
      <div> Endereço: { address }</div>
      <div> Cidade: { city }</div>
      <div> Estado: { state }</div>
      <div> Tipo de residência: { type }</div>
      <h3>Profissional</h3>
      <div> Currículo: { resume }</div>
      <div> Cargo: { role }</div>
      <div> Descrição do cargo: { roleDescription }</div>
    </div>
    );
  }
}

export default NewDisplay;