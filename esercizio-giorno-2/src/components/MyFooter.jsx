import React from 'react'
import { Navbar, Container } from 'react-bootstrap'

export default function MyFooter() {
    return (
        <Navbar className='bg-secondary text-light justify-content-center fixed-bottom'>
            Questo è il footer
        </Navbar>
    );
}