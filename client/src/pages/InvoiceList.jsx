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


class InvoiceList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            invoices: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = () => {
        this.setState({ isLoading: true })
        api.getAllRouteLogs().then(invoices => {
            this.setState({
                invoices: invoices.data,
                isLoading: false,
            })
        })

    }

    render() {
        const { invoices, isLoading } = this.state

        const columns = [
            {
                Header: 'Driver',
                accessor: 'driver_email',
            },
            {
                Header: 'Route',
                accessor: 'route_name',
            },
            {
                Header: 'Invoice',
                accessor: 'invoice',
            },
        ]

        let showTable = true
        if (!invoices.length) {
            showTable = false
        }

        return (
            <Wrapper>
                <h1 style={{paddingTop: "30px"}}>Invoices</h1>
                {showTable && (
                    <ReactTable
                        data={invoices}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default InvoiceList