import React, { Component } from 'react';
import "./Post.css";

export default class Posts extends Component {
    render() {
        
        return (
            <div className="card">
                <h4>{this.props.posts.title}</h4>
                <h6>{this.props.posts.body}</h6>
            </div>
        )
    }
}
