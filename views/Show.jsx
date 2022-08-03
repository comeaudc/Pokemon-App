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

const back  = {
    color: "#FFDE00",
    border: "5px ridge black"
}

class Show extends React.Component {
    render(){
        const mons = this.props.pokemon;
        return(
            <html style={body}>
            <head>
                <title>{mons.name}</title>
            </head>
            <body style={main}>
                <h1>Gotta Catch 'Em All!</h1>
                <h2>{mons.name}</h2>
                <img src={mons.img + '.jpg'}></img>
                <a href="/"><button style={button}><h3>Back to Main Directory!</h3></button></a><br/>
                <a href="/pokemon"><button style={button}><h3>View Pokedex</h3></button></a><br/>
                
            </body>
            </html>
        )
    };
};

module.exports = Show;