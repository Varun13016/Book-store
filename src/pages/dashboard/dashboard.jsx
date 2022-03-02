import React, { useEffect } from "react";
import Header from "../../components/header/header";
import { fetchBook } from "../../services/dataservice";
import GetBook from "../../components/getbook/getbook"
import { Box, Grid } from "@mui/material";
import CardBox from "../../components/card/card"




function Dashboard() {

    //state is used for mapping function in geting book data(intially setting as empty array),set state is getting data from axios

    const [state, setState] = React.useState([])

    // dispaly is used for conditional rendering to show the list of books(intialy it is true),after click on book it should show the card box layout

    const [display, setDisplay] = React.useState(true)

    // current is used for getting the data from list of books

    const [currentBook, setCurrentBook] = React.useState({})

    const MappingBooks = (bookObj) => {

        setDisplay(false)
        setCurrentBook(bookObj)

    }

    useEffect(() => {
        fetchBook().then((data) => {
            setState(data.data.result)
        }).catch((err) => {
            console.log(err)
        })
    })


    return (
        <div>
            <Header />
            <Box sx={{
                width: '85%', marginTop: '5%', position: 'relative', left: '8%', display: 'flex',
                flexWrap: 'wrap', justifyContent: 'space-around', alignContent: 'space-evenly'
            }}>
                {display ?

                    <Grid container Spacing={1}>

                        {state.map((book) =>
                            <Grid item xs={12} sm={6} md={3}>
                                <GetBook MappingBooks={MappingBooks} book={book} />
                            </Grid>)}

                    </Grid>

                    : <CardBox currentBook={currentBook} />}




            </Box>

        </div>
    )
}
export default Dashboard