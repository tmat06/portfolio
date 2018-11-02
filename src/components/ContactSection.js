import React from "react";
import { Motion, spring } from "react-motion";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import swal from "sweetalert";

export default class ContactSection extends React.Component {
  constructor() {
    super();
    this.state = {
      input1: false,
      input2: false,
      waiting: true,
      timer: {},
      name: ""
    };
  }

  componentDidMount() {
    var timer = setInterval(() => {
      this.setState({
        waiting: !this.state.waiting
      });
    }, 5000);
    this.setState({ timer });
  }

  stopTimer() {
    clearInterval(this.state.timer);
  }

  handleEmail() {
    swal(
      "Message was sent!",
      "Thank you and I'll be in Contact with you shortly",
      "success"
    );
    this.setState({ message: "" });
  }

  render() {
    return (
      <Motion
        initialStyle={{
          waiting: 50,
          eyesWaiting: 40,
          earsWaiting: 20,
          bodyWaiting: 0
        }}
        style={{
          eyesWaiting: this.state.waiting ? spring(40) : spring(60),
          waiting: this.state.waiting
            ? spring(40, { stiffness: 60, damping: 15 })
            : spring(60, { stiffness: 60, damping: 15 }),
          earsWaiting: this.state.waiting
            ? spring(20, { stiffness: 80, damping: 3 })
            : spring(30, { stiffness: 80, damping: 3 }),
          bodyWaiting: this.state.waiting ? spring(0) : spring(10)
        }}
      >
        {mot => {
          return (
            <div className="contact-container">
              <div className="contact-container-upper-header">
                Let's get in Contact
              </div>
              {/* Dog Animation */}
              <div className="dog-frame">
                <div
                  className="dog-head"
                  style={{
                    marginRight: `${mot.waiting - 25}px`,
                    marginTop: `${mot.waiting - 25}px`
                  }}
                >
                  <div
                    className="dog-ears"
                    style={{
                      transform: `rotate(${mot.earsWaiting}deg)`,
                      marginRight: "-20px",
                      marginTop: "-25px"
                    }}
                  />
                  <div className="dog-face">
                    <div className="dog-head-eyes-row">
                      <div className="dog-head-eye">
                        <div
                          className="dog-head-eye-pupil"
                          style={{ marginTop: mot.eyesWaiting - 40 }}
                        />
                      </div>
                      <div className="dog-head-eye">
                        <div
                          className="dog-head-eye-pupil"
                          style={{ marginTop: mot.eyesWaiting - 40 }}
                        />
                      </div>
                    </div>
                    <div
                      className="dog-head-mouth"
                      style={{
                        marginLeft: "-20px",
                        marginBottom: "-25px"
                      }}
                    >
                      <div className="dog-head-nose" />
                      <div
                        className="dog-head-mouth-smile"
                        style={{
                          width: `${mot.waiting}px`,
                          height: "10px",
                          marginLeft: `${mot.waiting - 5}px`
                        }}
                      />
                    </div>
                  </div>
                  <div
                    className="dog-ears"
                    style={{
                      transform: `rotate(-${mot.earsWaiting}deg)`,
                      marginLeft: "-20px",
                      marginTop: "-25px"
                    }}
                  />
                </div>
                <div
                  className="dog-body"
                  style={{
                    transform: `rotate(-${mot.bodyWaiting}deg)`,
                    top: `${mot.bodyWaiting + 170}px`,
                    left: `${mot.bodyWaiting + 90}px`
                  }}
                >
                  <div className="dog-body-collar">
                    <div
                      className="dog-body-collar-flap"
                      style={{
                        WebkitTransform: "skew(-50deg)",
                        MozTransform: "skew(-50deg)",
                        OTransform: "skew(-50deg)",
                        transform: "rotate(30deg)"
                      }}
                    />
                    <div
                      className="dog-body-collar-flap"
                      style={{
                        WebkitTransform: "skew(50deg)",
                        MozTransform: "skew(50deg)",
                        OTransform: "skew(50deg)",
                        transform: "rotate(-30deg)"
                      }}
                    />
                  </div>
                  <div className="dog-body-knot" />
                  <div className="dog-body-tie" />
                </div>
                <div
                  className="dog-paws"
                  style={{
                    left: 70,
                    bottom: -5,
                    transform: "rotate(25deg)"
                  }}
                >
                  <div className="dog-claw" />
                  <div className="dog-claw" />
                  <div className="dog-claw" />
                </div>
                <div
                  className="dog-paws"
                  style={{
                    right: 70,
                    bottom: -5,
                    transform: "rotate(-25deg)"
                  }}
                >
                  <div className="dog-claw" />
                  <div className="dog-claw" />
                  <div className="dog-claw" />
                </div>
              </div>
              {/* End of Dog Animation */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%"
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%"
                  }}
                >
                  <TextField
                    label="Name*"
                    style={{ width: "100%" }}
                    value={this.state.name}
                    onChange={e => this.setState({ name: e.target.value })}
                    margin="normal"
                    variant="outlined"
                    onClick={() => this.stopTimer()}
                  />
                  <TextField
                    label="Email*"
                    style={{ width: "100%" }}
                    value={this.state.email}
                    onChange={e => this.setState({ email: e.target.value })}
                    margin="normal"
                    variant="outlined"
                    onClick={() => this.stopTimer()}
                  />
                </div>
                <TextField
                  label="Message"
                  style={{ width: "100%" }}
                  value={this.state.message}
                  onChange={e => this.setState({ message: e.target.value })}
                  multiline
                  rows="6"
                  margin="normal"
                  variant="outlined"
                  onClick={() => this.stopTimer()}
                />
                <Button
                  fullWidth={true}
                  aria-label="Send"
                  variant="extendedFab"
                  onClick={() => this.handleEmail()}
                >
                  Send
                </Button>
              </div>
            </div>
          );
        }}
      </Motion>
    );
  }
}
