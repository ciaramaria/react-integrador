import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>
          © 2023 Ciaramaria. Todos los derechos reservados.{' '}
          <button style={styles.linkButton} onClick={scrollToTop}>
            Ir inicio
          </button>
        </p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: 'black',
    padding: '20px',
    textAlign: 'center',
  },
  container: {
    maxWidth: '960px',
    margin: '0 auto',
  },
  text: {
    marginBottom: '10px',
    color: 'white',
  },
  linkButton: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#007bff',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
};

export default Footer;