import React from "react"
import { Link } from "gatsby"


const ListLink = props => (
    <li style={{ display: `inline-block`, marginRight: `1rem` }}>
        <Link to={props.to}>{props.children}</Link>
    </li>
)
  
export default function Layout(props) {
    return (
        <div style={{ margin: `3rem auto`, padding: `0 1rem` }}>
            <header style={{ margin: `3rem auto`, marginBottom: `5rem`, maxWidth: 700, borderBottom: "3px solid #E0E0E0"}}>
                <h1 style={{ display: `inline`, color: "ghostwhite" }}>Matthew Gadsden</h1>
                <ul style={{ listStyle: "none", float: `right` }}>
                    <ListLink to="/">Home</ListLink>
                    <ListLink to="/projects/">Projects</ListLink>
                    <ListLink to="/resume/">Resume</ListLink>
                </ul>
            </header>
            {props.children}
            <footer style={{margin: `20px auto auto auto`}}>
                <div style= {{padding: "10px 0px 0px 0px", bottom: 0, width: "95%", height: "2.5rem", margin: `3rem auto`, borderTop: "1px solid #E0E0E0", textAlign: "center", position: "relative"}}>
                    <ul style={{ listStyle: "none", }}>
                        <ListLink to="/">Home</ListLink>
                        <ListLink to="/resume/">Resume</ListLink>
                        <ListLink to="/projects/">Projects</ListLink>
                    </ul>
                </div>
            </footer>
        </div>
    )
}
