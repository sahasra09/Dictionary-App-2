import * as React from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity } from 'react-native';
import {Header} from 'react-native-elements';
import dictionary from './localfile'
export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      text:'',
      displayText:'',
      lexicalCategory:[],
      definition:''



    }
  }
  getWord=(alpha)=>{
    
    var alpha=alpha.toLowerCase();
    try{
    var word=dictionary[alpha]["word"]
      if(word){
         var lexicalCategory=dictionary[alpha]["lexicalCategory"]
      var definition=dictionary[alpha]["definition"]
      this.setState({
        "word":word,
        "lexicalCategory":lexicalCategory,
        "definition":definition
      })
      }
    }
    catch(err){
      alert("This word is not available for now");
      this.setState({
        text:''
      })
    }
      
      }
    noWord=()=>{
      if(this.state.text===''){
      return(
        <Text>Sorry ,word not avialable</Text>
      )
    }
    }
     
     
      
    
  
  render() {
    
    return (
      <View style={styles.container}>
          <Header
          backgroundColor={'red'}
          centerComponent={{text:'COLLINS-dictionary',style:{color:'black',fontSize:20,fontFamily:"Monospace",height:30,marginTop:0}}}
        />
        <TextInput
        style={styles.inputBox}
          onChangeText={text=>{
            this.setState({
              text:text,
              


            })
          }}
          value={this.state.text}
        />
        <TouchableOpacity 
        style={styles.submitButton}
        onPress={()=>{
          this.getWord(this.state.text)
          this.setState({
            displayText:this.state.text,
            
          })
          
        }}
        >
        <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        
        <Text style={styles.displayText}>{this.state.text}</Text>
        <Text style={{alignSelf:"center",marginTop:30}}>{this.state.lexicalCategory}</Text>
        <Text style={{marginLeft:20}}>{this.state.definition}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  inputBox:{
    marginTop:20,
    width:'80%',
    alignSelf:'center',
    height:40,
    textAlign:'center',
    borderWidth:4,
    borderColor:"purple",
    backgroundColor:"white"
  },
  submitButton:{
    width:'40%',
    height:45,
    alignSelf:'center',
    margin:30,
    padding:7,
    backgroundColor:"lightgreen",
    bordorWidth:4,
    borderColor:"black",
    borderRadius:20
    
    
  },
  buttonText:{
    textAlign:'center',
    fontSize:25,
    fontFamily:"Century"
  },
  displayText:{
    textAlign:'center',
    fontSize:30,
  }
});
