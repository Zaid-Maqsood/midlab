import React from 'react';
import { StyleSheet, TouchableOpacity, View, TextInput, Text, ScrollView, Image } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons'; // Make sure you have installed Ionicons and FontAwesome

const MenuButton = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.iconButton} onPress={onPress}>
          <Ionicons name="menu" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={() => console.log('Bell button pressed')}>
          <Ionicons name="bell-outline" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={() => console.log('User button pressed')}>
          <FontAwesome name="user-circle" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search for the book"
          onChangeText={text => console.log(text)} // You can handle the search functionality here
        />
      </View>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Trending</Text>
      </View>
      <ScrollView horizontal={false} contentContainerStyle={styles.imageGridContainer}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
          <View key={index} style={styles.imageContainer}>
            <Image
              source={require(`./image${index}.jpg`)} // Assuming image files are named image1.jpg, image2.jpg, etc.
              style={styles.image}
            />
            <Text style={styles.bookName}>Book {index}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 20, // Adjust the top position as needed
    right: 20, // Adjust the right position as needed
    zIndex: 1,
  },
  iconsContainer: {
    flexDirection: 'row',
    marginBottom: 10, // Adjust the spacing between icons and search bar as needed
  },
  iconButton: {
    marginRight: 10, // Adjust the spacing between icons as needed
  },
  searchContainer: {
    width: '80%', // Adjust the width of the search container as needed
    marginTop: 10, // Adjust the spacing between icons and search bar as needed
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingLeft: 10,
    flex: 1,
  },
  headingContainer: {
    alignSelf: 'flex-start',
    marginLeft: '10%', // Adjust the spacing from the left side as needed
    marginTop: 20, // Adjust the spacing between search bar and heading as needed
  },
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  imageGridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingVertical: 20, // Adjust the vertical padding as needed
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 10, // Adjust the vertical margin between images as needed
  },
  image: {
    width: '90%', // Adjust the width of the images as needed
    height: 150, // Adjust the height of the images as needed
    borderRadius: 5,
  },
  bookName: {
    marginTop: 5, // Adjust the spacing between image and book name as needed
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MenuButton;
