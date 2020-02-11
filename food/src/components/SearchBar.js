import React from 'react'
import {View, TextInput, StyleSheet} from 'react-native'
import { Feather } from '@expo/vector-icons'

const SearchBar= ({term, onTermChange, onTermSubmit}) => {
    return <View style={styles.backgroundStyle}>
        <Feather name='search' style={styles.IconStyle}/>
        <TextInput 
            style={styles.inputStyle}
            placeholder="Search"
            value={term}
            onChangeText={newTerm => onTermChange(newTerm)}
            autoCapitalize="none"
            autoCorrect={false}
            onEndEditing={() => onTermSubmit()}
        />
    </View>
}

const styles = StyleSheet.create({
    IconStyle:{
        fontSize:35,
        alignSelf: 'center',
        marginHorizontal: 15,
        
    },
    backgroundStyle: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 10,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginTop: 15,
        marginBottom:10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    }
})

export default SearchBar