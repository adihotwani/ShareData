import axios from "axios";
import React, { useEffect, useState } from "react";
import { Text, SafeAreaView, FlatList, TextInput, TouchableOpacity, ActivityIndicator } from "react-native";
import styles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { fetchMoreProducts } from "../../redux/actions/productActions";

const Home = ({navigation}: any) => {
    const [search, setSearch] = useState('');
    const dispatch = useDispatch<AppDispatch>();
    const { products, loading, hasMore } = useSelector((state: RootState) => state.products);
    useEffect(()=>{
        dispatch(fetchMoreProducts());
    },[])

    const loadMore = () => {
        if(!loading && hasMore){
            dispatch(fetchMoreProducts());
        }
    };
    const filteredProducts = products.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
    );
    return(
        <SafeAreaView style={styles.container}>
            <TextInput
                placeholder="Search products"
                value={search}
                onChangeText={setSearch}
                style={styles.searchBar}
            />
            <FlatList
                data={filteredProducts}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                <TouchableOpacity
                    style={styles.card}
                    onPress={() => navigation.navigate('ProductDetail', { productId: item.id })}
                >
                    <Text style={styles.imagePlaceholder}>{item.images[0] ? 'Image' : 'No Image'}</Text>
                    <Text>{item.title}</Text>
                    <Text>${item.price.toFixed(2)}</Text>
                    <Text>{item.category?.name}</Text>
                </TouchableOpacity>
                )}
                onEndReached={loadMore}
                onEndReachedThreshold={0.5}
                ListFooterComponent={loading ? <ActivityIndicator size="large" /> : null}
            />
        </SafeAreaView>
    )
}
export default Home;