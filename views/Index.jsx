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

const main = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
}



class Index extends React.Component {
    render(){
        const {pokemon} = this.props;
        return(
            <html style={body}>
            <head>
                <title>Pokemon</title>
            </head>
            <body style={main}>
                <h1>See All The Pokemon!</h1><br/>
                <ul>
                    {pokemon.map((mons, i) => {
                        let name = mons.name.split('');
                        name[0] = name[0].toUpperCase();
                        name.join('');
                        return (
                            <li>
                                <a href={`/pokemon/${i}`}>{name}</a>
                                  <br/>
                            </li>
                        );
                    })}
                </ul>
            </body>
            </html>
        )
    };
};

module.exports = Index;