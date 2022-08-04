const React = require('react');
const Pokemon = require('../models/pokemon');

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

const row = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
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

class Edit extends React.Component {
    render() {
        const pokemon = this.props.pokemon;
        return (
            <html style={body}>
            <head>
                <title>Edit Pokemon!</title>
            </head>
            <body style={main}>
                <h1 style={margin1}>Update Your Pokedex Entry</h1>
                <h3 style={margin2}>Tell me about the Pokemon!</h3>
                    {/* NOTE: action will be the route, method will be the HTTP verb */}
                    <form action={`/pokemon/${pokemon.id}?_method=PUT`} method="PUT">
                        Name: <input style={margin3} type="text" name="name" placeholder='Name'/><br/>
                        Image: <input style={margin3} type="text" name="img" placeholder='Image URL' /><br/>
                        <input type="submit" name="" value="Edit Entry"/>
                    </form>
            </body>
            </html>
        );
    }
}

module.exports = Edit;