import React from 'react'

const footerStyle = {
    display: 'flex',
    textAlign: 'center',
    width: '100%',
    margin: '3rem auto ',
    alignItems: 'center',
    justifyContent: 'center',
    flexFlow: 'column',
    boxSizing: 'border-box'
}

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <p>Copyright © 2022 もくもく会</p>
            <p>coded by <a href="https://lovelovetrb.github.io/" target="_blank" rel="noopener noreferrer">Mizuki</a></p>
            <p>このAppのコードは<a href="https://github.com/lovelovetrb/mokumokuApp" target="_blank" rel="noopener noreferrer">こちら</a></p>
            <p>このAppに関するお問合せは<a href="https://forms.gle/bfwuKSJpEFE2WTTFA" target="_blank" rel="noopener noreferrer">こちら</a></p>
        </footer>
    )
}

export default Footer