import { SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Pokemon from './Components/Pokemon';

export default function App() {
  const baseUrl = 'https://pokeapi.co/api/v2';
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${baseUrl}/pokemon/?limit=20&offset=0`).then((response) => {
      console.log(response.data);
      setData(response.data.results);
    });
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Pokedex</Text>
     <ScrollView style={stylesscrollViewContainer}>
      {
        data.map((pokemon) => {
          return <Pokemon name={pokemon.name} url={pokemon.url}/>
        })
      }
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title:{
    fontSize: 20,
    fontWeight: "900",
    marginBottom: 10
  },
  scrollViewContainer: {
    width: "100%"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width:"100%" 
  },
  header: {
    fontSize: 20
  }
});
