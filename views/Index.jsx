const React = require('react');

// const headingStyle = {
//     color: "#FFDE00",
//     textAlign: "center",
//     textDecoration: "underline"
// }

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

const button = {
    margin: "10px",
    borderRadius: "25%",
    border: "5px ridge black",
    backgroundColor: "grey",
    cursor: "pointer"
}

const h4 = {
    padding: 0,
    margin: "5px"
}

const main = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
}

const row = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
}

const margin1 = {
    marginBottom: 0
}

const margin2 = {
    marginBottom: 0,
    marginTop: 0
}

class Index extends React.Component {
    render(){
        const { pokemon } = this.props;
        return(
            <html style={body}>
            <head>
                <title>Pokemon</title>
            </head>
            <body style={main}>
                <h1 style={margin1}>See All The Pokemon!</h1><br/>
                <h3 style={margin2}>Click the Pokeball to view Pokemon!!!</h3>
                <ul>
                    {pokemon.map((mons) => {
                        return (
                            <li style={row}>
                                <h3>{mons.name}</h3>
                                <a href={`/pokemon/${mons.id}`}><img src="https://www.freeiconspng.com/uploads/file-pokeball-png-0.png" width="20px" height="20px"></img></a>
                                <br/>
                                <form action={`/pokemon/${mons.id}?_method=DELETE`} method="POST">
                                    <button type="submit" style={button}><h4 style={h4}>Delete Entry</h4></button>
                                </form>
                                <a href={`/pokemon/${mons.id}/edit`}><button type="submit" style={button}><h4 style={h4}>Edit Entry</h4></button></a>
                            </li>
                        );
                    })}
                </ul>
                <a href="/"><button style={button}><h3>Back to Main Directory!</h3></button></a><br/>
            </body>
            </html>
        )
    };
};

module.exports = Index;