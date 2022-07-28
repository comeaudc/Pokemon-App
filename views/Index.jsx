const React = require('react');

const headingStyle = {
    color: "#FFDE00",
    textAlign: "center",
    textDecoration: "underline"
}

const body = {
    backgroundColor: "#e4000f ",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: "100%",
    width: "100%"
}



class Index extends React.Component {
    render(){
        return(
            <html style={body}>
            <head>
                <title>Pokemon</title>
            </head>
            <body>
                <h1 style={headingStyle}>See All The Pokemon!</h1>
            </body>
            </html>
        )
    };
};

module.exports = Index;