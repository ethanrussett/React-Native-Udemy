import React, {useState, useEffect} from 'react'
import {View, Image, Text, StyleSheet, FlatList } from 'react-native'
import yelp from '../api/yelp';

const ResultsShowScreen = ( { navigation }) => {
    // we use getParam because we are passing the 'id' though the navigation function in ResultsList.js
    const id = navigation.getParam('id')
    const [result, setResult] = useState(null)

    const getResult = async (id) => {
        const response = await yelp.get(`/${id}`)
        setResult(response.data)
    }

    useEffect(() => {
        getResult(id)
    }, [])

    //This just makes sure not to display anything if result has not yet been set
    if (result == null){
        return null
    }

    return <View>
        <Text>{result.name}</Text>
        <FlatList
            data={result.photos}
            keyExtractor={(photo) => photo}
            renderItem={({item}) => {
                return <Image style ={styles.image} source={{uri: item}}/>
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    image: {
        width: 300,
        height: 200,
    }
})

export default ResultsShowScreen