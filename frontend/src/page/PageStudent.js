import React, { Component } from 'react'
import {Header, Container, Segment, Table} from 'semantic-ui-react'
import axios from 'axios'

//----------------------------------------------------------------------------------


//----------------------------------------------------------------------------------

class PageStudent extends Component {

    fetch() {
        const API="http://127.0.0.1:8080/api/students/"
        axios.get(API).then(response => {
            this.setState({data:response.data})
            console.log(response.data)
        })
    }

    //----------------------------------------------------------------------------------

    constructor(props) {
        super(props);
        this.state = {
            data: [],
        }
    }

       componentDidMount() {
        this.fetch();
    }

    //----------------------------------------------------------------------------------

    render () {
        let table_student = ""
        if (typeof this.state.data != "undefined") {
            table_student = (this.state.data).map((element, index) => {
                return (
                    <Table.Row key={index}>
                        <Table.Cell>{element["name"]}</Table.Cell>
                        <Table.Cell>{element["email"]}</Table.Cell>
                        <Table.Cell>{element["document"]}</Table.Cell>
                        <Table.Cell>{element["phone"]}</Table.Cell>
                        <Table.Cell>{element["registrationDate"]}</Table.Cell>
                    </Table.Row>
                )
        })}

        return (
            <div>
            <Container>
            <Segment>
            Table of students
            </Segment>

            <Segment>
            <Table>
                <Table.Body>
                {table_student}
                </Table.Body>
            </Table>
            </Segment>
            </Container>
            </div>
        )
    }
}

export default PageStudent;