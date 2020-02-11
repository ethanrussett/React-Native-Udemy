import React from 'react'
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import { withNavigation } from 'react-navigation'
import ResultsDetail from './ResultsDetail'

const ResultsList = ({title, results, navigation}) => {
    // This just makes sure nothing shows until there are items in a given chatagory 
    if (!results.length){
        return null
    }
    
    return <View style={styles.container}>
        <Text style={styles.titleStyle}>{title}</Text>
        <FlatList
            horizontal={true} // This could also just be horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(results) => results.id}
            renderItem={({ item }) =>{
                return (
                //ResultsShow from App.js
                <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}> 
                    <ResultsDetail result={item}/>
                </TouchableOpacity>
                )}
        }
        />

    </View>
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },
    container: {marginBottom: 10}
})
// withNavigation allows us to call the navigation function withough having to go through SearchScreen.js  
export default withNavigation(ResultsList)