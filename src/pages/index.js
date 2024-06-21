import React from "react"
import { Helmet } from "react-helmet"
import { FaLinkedin, FaInstagram, FaDiscord } from "react-icons/fa"
import favicon from "../images/icon.ico"
import logo from "../images/logo.jpg"
import { BiBody } from "react-icons/bi"

const IndexPage = () => (
  <div style={styles.container}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Carte de visite</title>
      <meta name="description" content="Ma carte de visite digitale." />
      <link rel="icon" href={favicon} />
    </Helmet>
    <img src={logo} alt="Logo" style={styles.logo} />
    <h1 style={styles.title}>Bienvenue sur ma carte de visite digitale</h1>
    <p style={styles.subtitle}>Connectez-vous avec moi sur les réseaux sociaux</p>
    <div style={styles.iconContainer}>
      <a href="https://www.instagram.com/ardan_arts/" style={{ ...styles.icon, ...styles.instagram }}>
        <FaInstagram size="40" />
      </a>
      <a href="https://discord.com" style={{ ...styles.icon, ...styles.discord }}>
        <FaDiscord size="40" />
      </a>
      <a href="https://www.linkedin.com/in/louanne-dronne-9a6089234/" style={{ ...styles.icon, ...styles.linkedin }}>
        <FaLinkedin size="40" />
      </a>
    </div>
  </div>
)

const styles = {
  container: {
    textAlign: "center",
    margin: "50px auto",
    backgroundColor: "#F5E4A2",
    padding: "40px",
    borderRadius: "15px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    maxWidth: "600px",
    fontFamily: "'Helvetica Neue', sans-serif",
    color: "#FFFFFF"
  },
  logo: {
    width: "150px",
    height: "150px",
    margin: "20px auto",
    borderRadius: "50%",
    border: "5px solid #AE712F",
    objectFit: "cover"
  },
  title: {
    fontSize: "2em",
    margin: "20px 0",
    color: "#2981B3"
  },
  subtitle: {
    fontSize: "1.2em",
    margin: "10px 0 30px",
    color: "#AE712F"
  },
  iconContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    margin: "0 15px",
    transition: "transform 0.3s",
    color: "#FFFFFF"
  },
  instagram: {
    color: "#C13584"
  },
  discord: {
    color: "#7289da"
  },
  linkedin: {
    color: "#0077B5"
  }
}

export default IndexPage
