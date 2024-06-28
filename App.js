import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image,Pressable ,TextInput, Button,Modal,TouchableOpacity

} from 'react-native';
import SearchBar from './searchbar/SearchBar';
import  { useState } from 'react';
//import DocumentPicker from 'react-native-document-picker';





export default function App() {
  const [press,setPress]=useState(false)
  const [selectedFile, setSelectedFile] = useState(null);
    
  const handleSearch = (query) => {
      // Implement your search logic here using the query
      console.log('Searching for:', query);
    };

    const pickDocument = async () => {
      try {
        const result = await DocumentPicker.pick({
          type: [DocumentPicker.types.allFiles],
        });
  
        console.log(result);
  
        // Update state with the selected file
        setSelectedFile(result);
      } catch (err) {
        if (DocumentPicker.isCancel(err)) {
          // User canceled the picker
          console.log('User canceled the picker');
        } else {
          console.error('Error picking document', err);
        }
      }
    };
  
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row'}}>
      <Pressable onPress={()=> console.log("Image pressed")}>
      <Image  source ={require("./assets/person1.png")}
       style={styles.photo}
       resizeMode='contain'/>
       </Pressable>
       <SearchBar onSearch={handleSearch} />
       <Pressable onPress={()=> console.log("Chat pressed")}>
       <Image  source ={require("./assets/arrowback.png")}
       style={styles.photo}
       resizeMode='contain'/>
       </Pressable>
       </View>
       <Text style={
        {
          color:'red',
          fontSize:20,
          fontWeight: 'bold', 
          }
       }>
        PostYourBloodRequest</Text>
        <TextInput 
        placeholder='Patient Full Name'
        style={styles.input}
        underlineColorAndroid="black"/>
         <TextInput 
        placeholder='No Of Units'
        style={styles.input}
        underlineColorAndroid="black"/>
         <TextInput 
        placeholder='Patient Blood Group'
        style={styles.input}
        underlineColorAndroid="black"/>
         <TextInput 
        placeholder='Hospital Name'
        style={styles.input}
        underlineColorAndroid="black"/>
         <TextInput 
        placeholder='Patient Age'
        style={styles.input}
        underlineColorAndroid="black"/>
         <TextInput 
        placeholder='Purpose'
        style={styles.input}
        underlineColorAndroid="black"/>
         <TextInput 
        placeholder='dd/mm/yyyy'
        style={styles.input}
        underlineColorAndroid="black"/>
         <TextInput 
        placeholder='Contact Person'
        style={styles.input}
        underlineColorAndroid="black"/>
         <TextInput 
        placeholder='Where You need'
        style={styles.input}
        underlineColorAndroid="black"/>
         <TextInput 
        placeholder='Contact Number'
        style={styles.input}
        underlineColorAndroid="black"/>
        
       
       
      <View style={{flexDirection:'row'}}>
          
        <View style={styles.btn1}>
           <Button 
           title="RESET"
           onPress={()=>setPress(true)}
           color='blue'/>

          <Modal visible={press}
          onRequestClose={()=>setPress(false)}>
          <View style={{flex:1,marginTop:30}}>
          <Text style={{color:'red',fontWeight:'bold',marginLeft:20}}>Profile Information</Text>
          
          <View style={{flexDirection:'row',marginLeft:20}}>
          <TextInput 
          placeholder='Patient First Name'
          style={styles.input}
          underlineColorAndroid="black"/>
          <TextInput
          placeholder='Patient Last Name'
          style={styles.input}
          underlineColorAndroid="black"/>
          </View>
          <View style={{flexDirection:'row',marginLeft:20,marginRight:20}}>
          <TextInput 
          placeholder='Mobile Number'
          style={styles.input}
          underlineColorAndroid="black"/>
          <TextInput
          placeholder='AlterNate Mobile Number'
          style={styles.input}
          underlineColorAndroid="black"/>
          </View>
          <TextInput 
          placeholder='EmailId'
          style={[styles.input,{marginLeft:20,marginRight:40}]}
          underlineColorAndroid="black"/>
          <View style={{flexDirection:'row',marginLeft:20}}>
          <TextInput 
          placeholder='Age'
          style={styles.input}
          underlineColorAndroid="black"/>
          <TextInput
          placeholder='BloodGroup'
          style={styles.input}
          underlineColorAndroid="black"/>
          <TextInput
          placeholder='Gender'
          style={styles.input}
          underlineColorAndroid="black"/>
          </View>

          <View style={{flexDirection:'row',marginLeft:20}}>
          <TextInput 
          placeholder='City/Town'
          style={styles.input}
          underlineColorAndroid="black"/>
          <TextInput
          placeholder='State'
          style={styles.input}
          underlineColorAndroid="black"/>
          </View>
          <View style={{flexDirection:'row',marginLeft:20}}>
          <TextInput 
          placeholder='India'
          style={styles.input}
          underlineColorAndroid="black"/>
          <TextInput
          placeholder='Pin'
          style={styles.input}
          underlineColorAndroid="black"/>
         </View>

      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={pickDocument} 
      style={{ padding: 16, backgroundColor: 'skyblue', borderRadius: 8 }}>
        <Text style={{ color: 'white' }}>Select File</Text>
      </TouchableOpacity>

      {selectedFile && (
        <View style={{ marginTop: 20 }}>
          <Text>Selected File:</Text>
          <Text>{'Name: ${selectedFile.name}'}</Text>
          <Text>{'Type: ${selectedFile.type}'}</Text>
          <Text>{'Size: ${selectedFile.size / (1024 * 1024)} MB'}</Text>
        </View>
      )}
    </View>
         
         <View style={{flexDirection:'row',padding:30}}>
          <View style={{marginRight:30}}>
             <Button 
             title="RESET"
             onPress={()=>setPress(true)}
             color='blue'/>
             </View>
              <View style={{marginLeft:30}}>
         <Button 
         title="SAVE"
         onPress={()=>setPress(true)}
          color='red'/>
         </View>
         <View style={{width:120,height:40,alignItems:'center',marginLeft:20}}>
          <Button 
          title="Close"
          onPress={()=>setPress(false)}
           color='black'></Button>
            </View>
      </View>
      
          </View>
          </Modal> 
        </View>

        
        <View style={styles.btn2}>
         
         <Button 
         title="SAVE"
         onPress={()=>setPress(true)}
          color='red'
          />
       
      </View>

      </View>
     
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "space-evenly",
    padding:30,
    marginTop:20
  },
  photo: {
    width:50,
    height:50,
    borderRadius: 50,
    
  },
  input: {
    height: 40,
    marginBottom: 10,
    padding: 10,
    
  },
  
  btn1:{
    marginRight:50
  },
  btn2:{
    marginLeft:100
  }
 
  
});

