import React, { Component } from "react";
import Posts from "./Posts";
import "./Test.css";

export default class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      perPage: 1,
      loading:false
    };
  }

  fetchData = async(pageNum) => {
    let postUrl = `https://jsonplaceholder.typicode.com/posts/?_start=${pageNum}&_limit=10`;
    this.setState({loading:true})
    await fetch(postUrl)
      .then((res) => res.json())
      .then((data) => {
          // console.log("data",data)
          if (data)
          {
            this.setState({loading:false})
            this.setState({
           
              posts: [...this.state.posts, ...data],
            });
          }
          else{
            this.setState({loading:false})
          }
        
      });
  };

  componentDidMount = () => {
    this.fetchData(this.state.perPage)
    window.addEventListener("scroll", this.infiniteScroll);
    // this.fetchData(this.state.perPage);
  };

  componentWillUnmount(){
    window.removeEventListener("scroll",this.infiniteScroll);
  }

  infiniteScroll = () => {
    // End of the document reached?
    if (
      window.innerHeight + document.documentElement.scrollTop
      === document.documentElement.offsetHeight
    ) 
    {
        console.log("infinite")
      let newPage = this.state.perPage;
      newPage=newPage+10;
      this.setState({
        perPage: newPage,
       
      });
      
      this.fetchData(newPage);
    }
  }

  render() {
    return <div>
    <h1>Test Example</h1>
        {this.state.posts.map((beerdata,idx) => (<Posts key={idx} posts={beerdata} loading={this.state.loading}/>))}
    </div>;
  }
}
