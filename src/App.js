import './App.css';
import {Component} from 'react';
const url ='http://localhost:3001/emails';


class App extends Component{
  constructor(){
    super();
    this.state={
      emails: [],
      sent: false

    };
    
  }


  async componentDidMount() {
    let res = await fetch(url);
    let json = await res.json();
    let emails = json.emails;
    this.setState({ emails: emails})
    console.log()
  }

  render(){

    return(
      <body className ='App'>
        <h1 className ='App-header'>Email App</h1>
        <div className='emails'>
            {this.state.emails}
        </div>
      </body>
      
    )
  }

}


export default App;
