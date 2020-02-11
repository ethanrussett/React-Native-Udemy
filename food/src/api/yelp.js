import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer Us6c6ibvaPj0ZDzNc2ZP99ljYfsX9ZPzdPrzbG8wa6EP58k0GAQ58JXN1TdRk8BTILIOe3cDiWduL_p5cWmV7SvI8DSSaESfIz845vgls13OemXFoVDW0-mYdggzXnYx'
    }
})

