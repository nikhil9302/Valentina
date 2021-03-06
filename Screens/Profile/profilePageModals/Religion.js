import { View, Text, StyleSheet, TouchableOpacity, FlatList, Modal } from 'react-native';
import React, { useState } from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Icon from 'react-native-vector-icons/Ionicons'

const Religion = ({styles, edit, religion, setReligion}) => {
    const [modalVisible, setModalVisible] = useState(false)

    const religions = [
        "Hinduism",
        "Islam",
        "Christianity",
        "Sikhism"
    ]

    const Item = ({ title }) => (
        <View style={style.item}>
          <Text style={[style.title,{
              fontWeight:religion === title?'bold':'normal',
          }]}>{title}</Text>
        </View>
    );

    const renderItem = ({ item }) => (

        <TouchableOpacity
            onPress={() => onPressHandler(item)} 
        >
            <Item title={item}/>
        </TouchableOpacity>
    );

    const onPressHandler = (id) => {

        setReligion(id)
        setModalVisible(!modalVisible)

    }




  return (
    <>
        <TouchableOpacity style={[styles.basicOption,{
            alignItems: 'center'
        }]}
            onPress={() => setModalVisible(!modalVisible)}
            disabled={!edit}
        >

            <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexGrow: 1,
                }}>


                <MaterialCommunityIcons
                    style={{
                        marginRight:10,
                        marginTop:4,
                    }}
                name="human" color="#222" size={25} />
                
                <Text style={styles.basicText}>Religion</Text>

            </View>

            <View
                style={{
                    backgroundColor:'#efefef',
                    textAlign: 'center',
                    paddingHorizontal: 10,
                    right: 10,
                    borderRadius: 20,
                    borderColor: '#ddd',
                    borderWidth: 1,
                    display: religion?'flex':'none'
                }}
            >
                <Text>
                    {religion}
                </Text>
            </View>




            <Icon name="chevron-forward" style={{
                marginRight:8,
                //marginTop:6
            }} size={18} color="#333"/>

            </TouchableOpacity>

            <View style={styles.centeredView}>
                
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(!modalVisible)}
                    style={{
                        zIndex: 10
                    }}
                >

                    <View style={styles.centeredView}>
                    
                        <View style={[styles.modalView, {
                                justifyContent: 'space-between'
                            }]}
                        >

                            <FlatList
                                data={religions}
                                renderItem={renderItem}
                                keyExtractor={item => item}
                            />
                            
                        </View>
                    
                    </View>
                </Modal>
            
            </View>
    </>
  );
};

export default Religion;


const style = StyleSheet.create({
    container: {
      flex: 1,
    },
    item: {
      padding: 8,
      marginVertical: 5,
      marginHorizontal: 5,
    },
    title: {
      fontSize: 16,
    },
  });