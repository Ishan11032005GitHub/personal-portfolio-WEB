import React, { Component } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import './VoiceNavigation.css';

class VoiceNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listening: false,
      errorMessage: "",
    };
    this.recognition = null;
  }

  componentDidMount() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      this.setState({ errorMessage: "Speech Recognition not supported in this browser." });
      return;
    }

    this.recognition = new SpeechRecognition();
    this.recognition.lang = "en-US";
    this.recognition.interimResults = false;
    this.recognition.continuous = true;

    this.recognition.onresult = this.handleResult;
    this.recognition.onerror = this.handleError;
    this.recognition.onend = () => {
      if (this.state.listening) {
        this.recognition.start();
      }
    };
  }

  componentWillUnmount() {
    if (this.recognition) {
      this.recognition.stop();
    }
    window.speechSynthesis.cancel();
  }

  handleError = (event) => {
    console.error("Speech recognition error", event.error);
    this.setState({
      errorMessage: `Error occurred: ${event.error}`,
      listening: false
    });
  };

  speak = (text) => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(utterance);
    }
  };

  setDarkTheme = (enabled) => {
    const root = document.documentElement;
    const body = document.body;
    const nav = document.querySelector("nav");
    const patternEl = document.getElementById("Pattern");

    if (enabled) {
      root.style.setProperty('--bg-color', '#2a4759');
      root.style.setProperty('--text-color', '#eeeeee');
      body.style.backgroundColor = "#2a4759";
      body.style.color = "#eeeeee";
      if (nav) {
        nav.style.color = "#2a4759";
        nav.style.backgroundColor = "#eeeeee";
      }
      if (patternEl) {
        patternEl.style.color = "#000000";
      }
    } else {
      root.style.setProperty('--bg-color', '#eeeeee');
      root.style.setProperty('--text-color', '#2a4759');
      body.style.backgroundColor = "#eeeeee";
      body.style.color = "#2a4759";
      if (nav) {
        nav.style.color = "#eeeeee";
        nav.style.backgroundColor = "#2a4759";
      }
      if (patternEl) {
        patternEl.style.color = "#ffffff";
      }
    }
    localStorage.setItem("darkMode", enabled.toString());
  };

  handleResult = (event) => {
    const last = event.results.length - 1;
    const transcript = event.results[last][0].transcript.toLowerCase().trim();
    const isFinal = event.results[last].isFinal;

    if (!isFinal) return;

    const { navigate } = this.props;
    console.log("Voice Command:", transcript);

    if (transcript.includes("home")) {
      this.speak("Going to home");
      navigate("/");
    } else if (transcript.includes("about")) {
      this.speak("Going to about me");
      navigate("/About");
    } else if (transcript.includes("contact") || transcript.includes("contacts")) {
      this.speak("Going to contact me");
      navigate("/Contact");
    } else if (transcript.includes("education")) {
      this.speak("Going to education");
      navigate("/Education");
    } else if (transcript.includes("projects")) {
      this.speak("Going to projects");
      navigate("/Projects");
    } else if (transcript.includes("help") || transcript.includes("manual")) {
      this.speak("Refer to the manual");
      navigate("/Mannual");
    } else if (transcript.includes("enable dark theme") || transcript.includes("dark mode")) {
      this.speak("Dark theme enabled");
      this.setDarkTheme(true);
    } else if (transcript.includes("enable light theme") || transcript.includes("light mode")) {
      this.speak("Light theme enabled");
      this.setDarkTheme(false);
    } else if (transcript.includes("stop voice navigation") || transcript.includes("stop listening")) {
      this.speak("Stopping voice navigation");
      this.recognition.stop();
      this.setState({ listening: false });
      window.speechSynthesis.cancel();
    } else {
      this.setState({
        errorMessage: 'Command not recognized. Try saying: Home, About, Contact, Education, Projects, Help, or "Stop voice navigation".',
      });
    }
  };

  toggleRecognition = () => {
    if (!this.recognition) {
      this.setState({ errorMessage: "Speech recognition not available" });
      return;
    }

    if (this.state.listening) {
      this.recognition.stop();
      this.setState({ listening: false, errorMessage: "" });
      window.speechSynthesis.cancel();
    } else {
      try {
        this.recognition.start();
        this.setState({ listening: true, errorMessage: "" });
        this.speak(
          'Voice Navigation has been enabled. Say "Help" or "Manual" for instructions.'
        );
      } catch (error) {
        console.error("Recognition start error:", error);
        this.setState({ errorMessage: "Error starting voice recognition. Please try again." });
      }
    }
  };

  render() {
    return (
      <div className="voice-navigation-panel">
        <button
          onClick={this.toggleRecognition}
          className={`voice-toggle-button ${this.state.listening ? "listening" : ""}`}
        >
          {this.state.listening ? "🛑 Stop Voice Navigation" : "🎙️ Start Voice Navigation"}
        </button>

        <NavLink to="/Mannual" className="manual-link">
          <button className="manual-button">Voice Navigation Manual</button>
        </NavLink>

        {this.state.errorMessage && (
          <div className="error-message">{this.state.errorMessage}</div>
        )}
      </div>
    );
  }
}

export default function VoiceNavigationWrapper() {
  const navigate = useNavigate();
  return <VoiceNavigation navigate={navigate} />;
}
