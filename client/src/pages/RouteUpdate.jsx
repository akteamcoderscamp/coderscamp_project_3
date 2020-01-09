import React, { Component } from 'react'
import api from '../api'
import { Formik } from 'formik'
import { Form, Button } from 'react-bootstrap'

class RouteUpdate extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            fetched: false,
        }
    }

    componentDidMount = () => {
        const { id } = this.state
        api.getRouteById(id).then(v => {
            this.setState({
                route: v.data,
                fetched: true,
            })
        })
    }

    render() {
        return (
            <div style={{marginLeft: "100px"}}>
                <h1 style={{paddingTop: "30px"}}>Edit the route</h1> <br />
                {this.state.fetched
                    ? <Formik
                        initialValues={{
                            ...this.state.route
                        }}
                        validate={values => {
                            const errors = {};
                        if (!values.name) {
                            errors.name = 'Required'
                        }
                        if (!values.starting) {
                            errors.starting = 'Required'
                        }
                        if (!values.destination) {
                            errors.destination = 'Required'
                        }
                        if (! /^\d+$/.test(values.km)) {
                            errors.km = 'Only digit can be used'
                        }
                        return errors
                        }}
                        onSubmit={(values) => {
                            api.updateRouteById(this.state.id, values)
                            window.location.assign("/routes/list")
                        }}
                        render={({
                            values,
                            errors,
                            touched,
                            handleBlur,
                            handleChange,
                            handleSubmit,
                            isSubmitting
                        }) => (
                            <Form onSubmit={handleSubmit} noValidate className="ml-5 mr-5">
                                <Form.Group >
                                    <Form.Label>Route name</Form.Label>
                                    <Form.Control
                                        name='name'
                                        onChange={handleChange}
                                        value={values.name}
                                        isInvalid={!!errors.name}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.name}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group >
                                    <Form.Label>From</Form.Label>
                                    <Form.Control
                                        name='starting'
                                        onChange={handleChange}
                                        value={values.starting}
                                        isInvalid={!!errors.starting}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.starting}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group >
                                    <Form.Label>To</Form.Label>
                                    <Form.Control
                                        name='destination'
                                        onChange={handleChange}
                                        value={values.destination}
                                        isInvalid={!!errors.destination}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.destination}
                                    </Form.Control.Feedback>
                                </Form.Group>

                            

                                <Form.Group >
                                    <Form.Label>Distance in km</Form.Label>
                                    <Form.Control
                                        name='km'
                                        type='number'
                                        min="0"
                                        step="1"
                                        onChange={handleChange}
                                        value={values.km}
                                        isInvalid={!!errors.km}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.km}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <br />
                                <Button variant="primary" type='submit' className='mr-3'>Update</Button>
                                <Button variant="secondary" href={'/routes/list'}>Cancel</Button>
                            </Form>
                            )

                        }

                    />
                    : <p>Loading</p>
                }
            </div>
        )
    }

}

export default RouteUpdate
