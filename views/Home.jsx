const React = require('react');

const body = {
    backgroundColor: "#e4000f ",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: "100%",
    width: "100%",
    color: "#FFDE00",
    textDecoration: "underline"
}

const main = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
}

const button = {
    margin: "10px",
    borderRadius: "25%",
    border: "5px ridge black",
    backgroundColor: "grey"
}

const margin1 = {
    marginBottom: 0
}

const margin2 = {
    marginBottom: 0,
    marginTop: 0
}
const margin3 = {
    margin: "1rem"
}

class Home extends React.Component {
    render() {
        return (
            <html style={body}>
            <head>
                <title>PokeDex</title>
            </head>
            <body style={main}>
                <h1 style={margin1}>Pokedex!</h1>
                <h3 style={margin2}>What would you like to do?</h3>
                <div>
                    <a style={margin3} href='/pokemon'><button style={button}><h3>View Pokemon</h3></button></a>
                    <a style={margin3} href='/pokemon/new'><button style={button}><h3>Add New Entry</h3></button></a>
                </div>
            </body>
            </html>
        );
    }
}

module.exports = Home;