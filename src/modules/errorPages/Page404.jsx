import { Search } from '@material-ui/icons'
import { Button, TextField } from '@mui/material'
import React from 'react'
import { ButtonGroup, Col, Form, Row } from 'react-bootstrap'
import { useEffect } from 'react'

const Page404 = ({setHideToolbar}) => {
    useEffect(() => {
        setHideToolbar(true);
        return () => {
          setHideToolbar(false);
        };
      }, []);
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <container>
        <Row className="justify-content-center d-flex">
          <Col md="6">
            <div className="clearfix mt-5">
              <h1 className="float-left display-3 mr-4">404</h1>
              <h4 className="pt-3">Oops! You{'\''}re lost.</h4>
              <p className="text-muted float-left">The page you are looking for was not found.</p>
            </div>
           
          </Col>
        </Row>
      </container>
    </div>
  )
}

export default Page404
