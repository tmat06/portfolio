import React from "react";

import ImageSlide from "./ImageSlide";

export default class Carousel extends React.Component {
  constructor() {
    super();
    this.state = {
      currentImageIndex: 0
    };

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  componentDidMount() {
    var timer = setInterval(() => {
      const lastIndex = this.props.images.length - 1;
      const shouldResetIndex = this.state.currentImageIndex === 0;
      const index = shouldResetIndex
        ? lastIndex
        : this.state.currentImageIndex - 1;

      this.setState({
        currentImageIndex: index
      });
    }, 4000);

    this.setState({ timer });
  }

  previousSlide() {
    clearInterval(this.state.timer);
    const lastIndex = this.props.images.length - 1;
    const shouldResetIndex = this.state.currentImageIndex === 0;
    const index = shouldResetIndex
      ? lastIndex
      : this.state.currentImageIndex - 1;

    this.setState({
      currentImageIndex: index
    });
  }

  nextSlide() {
    clearInterval(this.state.timer);
    const lastIndex = this.props.images.length - 1;
    const shouldResetIndex = this.state.currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : this.state.currentImageIndex + 1;

    this.setState({
      currentImageIndex: index
    });
  }

  render() {
    return (
      <div className="project-carousel">
        <ImageSlide
          url={this.props.images[this.state.currentImageIndex]}
          previousSlide={this.previousSlide}
          nextSlide={this.nextSlide}
        />
      </div>
    );
  }
}
