import './App.css';
import {Component} from 'react';
import DisplaySimple from './comp/DisplaySimple.js'
{/*import ViewMessage from '.comp/ViewMessage.js'*/}
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
    this.setState({emails: json})
    console.log(this.state.emails)
  }

  render(){
    

    return(
      <body className ='App'>
        <h1 className ='App-header'>Email App</h1>
        <ul>
            <DisplaySimple className="emails" emails={this.state.emails}/>
            {/*<ViewMessage />*/}
        </ul>
      </body>
      
    )
  }

}


export default App;
