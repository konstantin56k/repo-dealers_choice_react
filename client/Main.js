import React from 'react';
import axios from 'axios';
import Department from './Department';
import AllDepartments from './AllDepartments';

export default class Main extends React.Component {
  constructor() {
    super();
    this.state = {
        departmens: [],
        departmenId: ''
    }
  }
  async componentDidMount(){
    this.setState({ departmens: (await axios.get('/api/departmens')).data});

    window.addEventListener('hashchange', ()=> {
      this.setState({ departmenId: window.location.hash.slice(1)});
    });

    this.setState({ departmenId: window.location.hash.slice(1)});
  }
  render () {
    const { departmens, departmenId } = this.state;

    return (
      <div id='main' className='row container'>
        <div className='container'>
          { departmenId ? <Department departmenId={ departmenId }/> : <AllDepartments departmens={ departmens } /> }
        </div>
      </div>
    )
  }
}