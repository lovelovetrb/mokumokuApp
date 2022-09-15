import React from 'react'

const FooterStyle = {
    display: 'flex',
    textAlign: 'center',
    width: '100%',
    height: '3vh',
    alignItems: 'center',
    justifyContent: 'center',
    flexFlow: 'column'
}

const Footer = () => {
    return (
        <footer style={footerStyle}>
            <p>Copyright © 2022 もくもく会</p>
            <p>coded by <a href="https://lovelovetrb.github.io/" target="_blank" rel="noopener noreferrer">Mizuki</a></p>
            <p>このAppのコードは<a href="" target="_blank" rel="noopener noreferrer">こちら</a></p>
            {/* ↓お問合せリンク追加 */}
            <p>このAppに関するお問合せは<a href="http://" target="_blank" rel="noopener noreferrer">こちら</a></p>
        </footer>
    )
}

export default Footer