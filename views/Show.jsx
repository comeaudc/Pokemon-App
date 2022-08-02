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

const row = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
}



class Show extends React.Component {
    render(){
        const mons = this.props.mons;
        return(
            <html style={body}>
            <head>
                <title>{mons.name}</title>
            </head>
            <body style={main}>
                <h1>Gotta Catch 'Em All!</h1>
                <h2>{mons.name}</h2>
                <img src={mons.img}></img>
                <a href="http://localhost:3000/pokemon/"><h3>Back to Main Directory!</h3></a>
            </body>
            </html>
        )
    };
};

module.exports = Show;