import React from 'react';
import Loading from './Loading';
import PersonCard from './PersonCard';

class Person extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      api: [],
      name: [],
      age: '',
      image: '',
      email: '',
    }
    this.setPerson = this.setPerson.bind(this);
  }

  componentDidMount() {
    const url = 'https://api.randomuser.me/';
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ api: data.results, loading: false }, this.setPerson);
      });
  }

  

  setPerson() {
    const { api } = this.state;
    this.setState({
      name: api[0].name,
      age: api[0].registered.age,
      email: api[0].email,
      image: api[0].picture.thumbnail,
    })
  }

  render() {
    const { loading, name, age, email, image } = this.state;
    if(loading) return <Loading />
    return (
      <div>
        <PersonCard
          name={ `${name.title}. ${name.first} ${name.last}` }
          age={ age }
          email={ email }
          image={ image }
        />
      </div>
    );
  }
}

export default Person;