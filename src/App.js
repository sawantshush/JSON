import './App.css';
import React from 'react';
import Beer from './Beer';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
    beers: [],
    page: 1
    }
    }

    fetchData = (pageNum) => {
      let beerUrl = 'https://api.punkapi.com/v2/beers?page='+pageNum;
      fetch(beerUrl)
         .then(res=>res.json())
         .then(data => {
            this.setState({
                beers: [...this.state.beers,...data]
            })
         })
      }

      componentDidMount = () => {
        window.addEventListener('scroll', this.infiniteScroll);
        this.fetchData(this.state.page);
        }

        infiniteScroll = () => {
          // End of the document reached?
          if (
            window.innerHeight + document.documentElement.scrollTop
            === document.documentElement.offsetHeight
          ) 
          {
            let newPage = this.state.page;
            newPage++;
            this.setState({
              page: newPage
            });
            
            this.fetchData(newPage);
          }
        }

    render(){
      return(
        <div>
        
          {this.state.beers.map((beerdata,idx) => (<Beer key={idx} beer={beerdata} />))}
        </div>
      );
    }
}

export default App;
