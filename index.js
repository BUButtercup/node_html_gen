const inquirer = require('inquirer');
const fs = require('fs');
const { lightgoldenrodyellow, lavender, lightcoral, plum, seagreen, lightseagreen, lightcyan, mediumturquoise, mediumorchid, bisque, crimson } = require('color-name');

inquirer.prompt ([
    {
        type: 'input',
        message: 'What is your first name?',
        name: 'firstName'
    },
    {
        type: 'input',
        message: 'What is your last name?',
        name: 'lastName'
    },
    {
        type: 'input',
        message: 'What city are you located in?',
        name: 'location'
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is your ten-digit phone number (separate by dashes)?',
        name: 'phone'
    },
    {
        type: 'input',
        message: 'What is your GitHub name?',
        name: 'gitHub'
    },
    {
        type: 'input',
        message: 'What is your GitHub link?',
        name: 'gitHubLink'
    },
    {
        type: 'input',
        message: 'What is your LinkedIn username?',
        name: 'linkedIn'
    },
    {
        type: 'input',
        message: 'Please provide a link to your LinkedIn profile page:',
        name: 'linkedInLink'
    },
    {
        type: 'list',
        message: 'What\'s your favorite color?',
        choices: ['Salmon', 'Purple', 'Green', 'Blue', 'Magenta', 'Red'],
        name: 'color'
    }

]).then(ans=>{
    const FIRSTNAME = ans.firstName;
    const LASTNAME = ans.lastName;
    const LOCATION = ans.location;
    const EMAIL = ans.email;
    const PHONE = ans.phone;
    const GITHUB = ans.gitHub;
    const GITHUBLINK = ans.gitHubLink;
    const LINKEDIN = ans.linkedIn;
    const LINKEDINLINK = ans.linkedInLink;
    let COLOR = ans.color;
    let COMPCOLOR;
    if (COLOR === 'Salmon'){
        COMPCOLOR = 'lightcoral';
    } else if (COLOR === 'Purple'){
        COMPCOLOR = 'plum';
    } else if (COLOR === 'Green'){
        COLOR = 'seagreen'
        COMPCOLOR = 'lightseagreen';
    } else if (COLOR === 'Blue'){
        COLOR = 'mediumturquoise'
        COMPCOLOR = 'lightcyan';
    } else if (COLOR === 'Magenta'){
        COMPCOLOR = 'mediumorchid';
    } else {
        COLOR = 'crimson'
        COMPCOLOR = 'bisque';
    } 

    const profilePage = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="${FIRSTNAME}${LASTNAME}.css">
        <title>${FIRSTNAME} ${LASTNAME}</title>
    </head>
    <body>
        <header>
            <h1>Hi! My name is ${FIRSTNAME} ${LASTNAME}.</h1>
            <nav>
                <a href='mailto:${EMAIL}' class="foot">Email</a>
                <a href='tel:${PHONE}' class="foot">Call</a>
                <p>I'm on GitHub as <a href='${GITHUBLINK}' class="head">${GITHUB}.</a></p>
                <p>I'm on LinkedIn as <a href='${LINKEDINLINK}' class="head">${LINKEDIN}.</a></p>
            </nav>
            <p>I'm a developer from ${LOCATION}.</p>
            <p>I'm excited to work with you to bring your vision to life! I look forward to hearing from you.</p>
        </header>
        <script src="index.js"></script>
    </body>
    </html>`

    const styleSheet = `
    @font-face {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url(https://fonts.gstatic.com/s/roboto/v29/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2) format('woff2');
        unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
    
    :root {
        font-family: Roboto, Verdana, Geneva, Tahoma, sans-serif;
    }
    
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    header {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color:${COLOR};
    }
    
    h1 {
        width: 60%;
    }
    
    nav {
        width: 60%;
        background-color: ${COLOR};
    }
    
    header p {
        width: 60%;
    }
    
    nav p {
        width: 40%;
        padding: 5px;
        margin-top: 20px;
        background-color: ${COMPCOLOR};
    }
    
    body {
        padding: 30px;
        background-color: ${COMPCOLOR};
    }
    
    a {
        padding-right: 20px;
    }
    
    a:link, a:visited {
        text-decoration: none;
        color: black;
    }
    
    a:hover {
        color: ${COMPCOLOR};
    }
    
    
    a.head:hover {
        color: ${COLOR};
    }`

    fs.writeFile(`${FIRSTNAME}${LASTNAME}.html`, profilePage, (err) =>{
        if (err){
            throw(err);
        }
    })
    fs.writeFile(`${FIRSTNAME}${LASTNAME}.css`, styleSheet, (err) =>{
        if (err){
            throw(err);
        }
    })
})