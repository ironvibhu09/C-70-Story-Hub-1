import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Header } from 'react-native-elements';
//import db from '../config'
//import firebase from 'firebase'

export default class WriteStoryScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      storyText: '',
    };
  }
  /*
    submitStory = ()=>{
        db.collection("stories").add({
            title: this.state.title,
            author: this.state.author,
            storyText: this.state.storyText,
            //date: firebase.firestore.FieldValue.serverTimestamp().now().toDate()
        })
        this.setState({
            title: '',
            author: '',
            storyText: ''
        })
    }
*/
  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'#ff6eb4'}
          centerComponent={{
            text: 'Story Hub',
            style: { color: 'darkblue', fontSize: 30 },
          }}
        />
        <TextInput
          placeholder="Title Of Your Story"
          onChangeText={(text) => {
            this.setState({
              title: text,
            });
          }}
          value={this.state.title}
          style={styles.title}
          placeholderTextColor="black"
        />
        <TextInput
          placeholder="Author Of The Story"
          onChangeText={(text) => {
            this.setState({
              author: text,
            });
          }}
          placeholderTextColor="black"
          value={this.state.author}
          style={styles.author}
        />
        <TextInput
          placeholder="Write Your Story"
          onChangeText={(text) => {
            this.setState({
              storyText: text,
            });
          }}
          placeholderTextColor="black"
          value={this.state.storyText}
          style={styles.storyText}
          multiline={true}
        />

        <TouchableOpacity
          style={styles.submitButton}
          // onPress={this.submitStory}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    height: 40,
    borderWidth: 2,
    marginTop: 40,
    margin: 10,
    color: 'black',
    padding: 6,
  },
  author: {
    height: 90,
    borderWidth: 2,
    margin: 10,
    padding: 6,
  },
  storyText: {
    height: 300,
    borderWidth: 2,
    margin: 10,
    padding: 6,
  },
  submitButton: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'green',
    width: 99,
    height: 40,
    color: 'black',
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    color: 'yellow',
  },
});
