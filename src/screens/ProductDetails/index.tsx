import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { fetchProductById, fetchRelatedProducts } from '../../API/products';
import styles from './styles';

const ProductDetail = ({ route }) => {
  const { productId } = route.params;
  const [product, setProduct] = useState<any>(null);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    fetchProductById(productId).then((data) => {
      setProduct(data);
      fetchRelatedProducts(data.category.id).then(setRelated);
    });
  }, [productId]);

  if (!product) return <Text>Loading...</Text>;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{product.title}</Text>

      <ScrollView horizontal pagingEnabled style={styles.carousel}>
        {product.images.map((img: string, index: number) => (
          <View key={index} style={styles.imagePlaceholder}>
            <Text>{img ? 'Image Placeholder' : 'No Image'}</Text>
          </View>
        ))}
      </ScrollView>

      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      <Text style={styles.description}>{product.description}</Text>

      <Text style={styles.sectionTitle}>Related Products</Text>
      {related
        .filter((p) => p.id !== productId)
        .map((item) => (
          <View key={item.id} style={styles.relatedCard}>
            <Text>{item.title}</Text>
            <Text>${item.price}</Text>
          </View>
        ))}
    </ScrollView>
  );
};

export default ProductDetail;