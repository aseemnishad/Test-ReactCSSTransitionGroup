import React from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import './slider.css';

import fl1 from '../img/fl1.jpg'; // Tell Webpack this JS file uses this image
import fl2 from '../img/fl2.jpg'; // Tell Webpack this JS file uses this image
import fl3 from '../img/fl3.jpg'; // Tell Webpack this JS file uses this image


export default class Slider extends React.Component {
constructor(props) {
    super(props);
    this.showNext = this.showNext.bind(this);
    this.state = {
       total : 0,
    	current: 0, 
  		images  : [fl1,fl2,fl3]
    }
  }

  componentDidMount() {
  	this.setState({ total : this.state.images.length})
    this.interval = setInterval(this.showNext,2000);
  }

  componentWillUnmount() {
  	clearInterval(this.interval);
  }

  showNext(){
    this.setState({current : this.state.current + 1 === this.state.total ? 0 : this.state.current + 1 })
  }

  render() {
  	this.bullet = Array(this.state.total).fill('☺');
  	this.bullet[this.state.current]='☻';
    return (
      <div className="slider">
       <h2>Slider using ReactCSSTransitionGroup</h2>
       <div>{this.bullet}</div>
       <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={800}
          transitionLeaveTimeout={800}>
          <img key={this.state.current} src={this.state.images[this.state.current]} height="300" width="300"/>
          </ReactCSSTransitionGroup>
      </div>

    );
  }
}

