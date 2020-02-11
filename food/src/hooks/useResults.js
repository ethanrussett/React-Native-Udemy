import { useState, useEffect } from 'react'
import yelp from '../api/yelp'

export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState("")

    const searchApi = async (searchTerm) => {
        console.log('Hi there')
        try {
            const response =  await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: 'ottawa'
                }
            })      
            setResults(response.data.businesses)
    } catch (err) {
        setErrorMessage('Something went wrong')
    }}

    // Call searchApi when component is first loaded BAD CODE!
    // searchApi('burger')
    // Problem is that the search api get constently hit
    
    useEffect(() => {
        searchApi('burger')
    }, [])

    return [searchApi, results, errorMessage]

}