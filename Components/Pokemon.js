import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const Pokemon = (props) => {
    const {name, url} = props;
    const [pokemonDetails, setPokemonDetails] = useState({});

    useEffect(() => {
        axios.get(`${url}`).then((response) => {
            setPokemonDetails({
                name: name,
                front_default: response.data.sprites.front_default,
                types: response.data.types.map((type) => type.type.name)
            })
        });
    }, [])    

  return (
     <View style={styles.container}>
            <View>
                {pokemonDetails.front_default && <Image style={styles.imageStyle} source={{ uri: pokemonDetails.front_default}}/>}    
            </View>
            <View>
                <Text style={styles.nameStyle}>{pokemonDetails?.name}</Text>
                <View style={styles.typesContainer}> 
                    {pokemonDetails.types?.length!=0 && pokemonDetails.types.map((type) => {
                        return <Text style={styles.typeStyle}>{type}</Text>
                    })}
                </View>
            </View>
        </View>
  );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        backgroundColor: "#f5f5f5",
        padding: 10, 
        margin: 5, 
        flexDirection: "row", 
        borderRadius: 10
    },
    imageStyle: {
        height:100, 
        width: 100, 
        alignItems:"center"
    },
    nameStyle: {
        textTransform:"capitalize", 
        fontWeight: "600", 
        fontSize: 16, 
        color: "#616161"
    },
    typesContainer: {
        display: "flex", 
        flexDirection: "column"
    },
    typeStyle: {
        textTransform:"capitalize", 
        marginTop: 5, 
        fontSize: 15, 
        color: "#757575"
    }    
});
  

export default Pokemon;