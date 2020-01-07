import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api'
import styled from 'styled-components'
import 'react-table/react-table.css'
import { Button } from 'react-bootstrap'


const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
    margin-left: 70px
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

const Add = styled.div`
    right: 50px;
    position: absolute;
    margin-top: 10px;
`

class DeleteRoute extends Component {
    deleteRoute = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do you want to detele the route permanently?`
            )
        ) {
            api.deleteRouteById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteRoute}>Delete</Delete>
    }
}

class UpdateRoute extends Component {
    updateRoute = event => {
        event.preventDefault()
        window.location.href = `/routes/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateRoute}>Update</Update>
    }
}

class RouteList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            routes: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = () => {
        this.setState({ isLoading: true })
        api.getAllRoutes().then(routes => {
            this.setState({
                routes: routes.data,
                isLoading: false,
            })
        })

    }

    render() {
        const { routes, isLoading } = this.state

        const columns = [
            {
                Header: 'Route name',
                accessor: 'name',
            },
            {
                Header: 'From',
                accessor: 'starting',
            },
            {
                Header: 'To',
                accessor: 'destination',
            },
            {
                Header: 'Distance',
                accessor: 'km',
            },
            {
                Header: 'Update',
                accessor: '',
                Cell: function (props) {
                    return (
                        <span>
                            <UpdateRoute id={props.original._id} />
                        </span>
                    )
                }
            },
            {
                Header: 'Delete',
                accessor: '',
                Cell: function (props) {
                    return (
                        <span>
                            <DeleteRoute id={props.original._id} />
                        </span>
                    )
                }
            },
        ]

        let showTable = true
        if (!routes.length) {
            showTable = false
        }

        return (
            <Wrapper>
                <h1 style={{paddingTop: "30px"}}>Routes</h1>
                {showTable && (
                    <ReactTable
                        data={routes}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
                <Add>
                    <Button variant="primary" style={{fontSize: "30px"}} href={'/routes/create'}>+</Button>
                </Add>
            </Wrapper>
        )
    }
}

export default RouteList