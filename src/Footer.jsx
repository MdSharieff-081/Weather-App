import React from 'react';


export default function Footer() {
    return (
        <footer style={{
            textAlign: 'center',
            padding: '1rem',
            marginTop: '16rem',
            backgroundColor: '#f5f5f5',
            fontSize: '20px',
            color: '#555'
        }}>
            Designed and Developed by <strong>Sharieff Md</strong> © {new Date().getFullYear()}
        </footer>
    );
}
