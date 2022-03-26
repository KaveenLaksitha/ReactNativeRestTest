import React, { useEffect, useState } from 'react'

import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    SafeAreaView,
    ActivityIndicator,
    Modal,
    TouchableHighlight,
    ScrollView
} from 'react-native'
import { getAllEmployeesService } from '../Services/Service'
import { ViewSingleItemModal } from './ViewSingleItemModal';

//getting device window width
const windowWidth = Dimensions.get('window').width;

export const Home = () => {

    const [isLoading, setLoading] = useState(true);
    const [allUsers, setAllUsers] = useState([])

    const [modalData, setModalData] = useState([])

    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        getAllEmployeesService().then((res) => {
            setLoading(true);
            if (res.ok) {
                setLoading(false);
                setAllUsers(res?.data);
            } else {
                setLoading(false);
                setAllUsers([])
            }
        })
    }, [modalVisible])

    //function to open modal
    const openModal = (user) => {
        setModalData(user)
        changeModalVisibility(true)
    }

    //function to set modal visibility
    const changeModalVisibility = (state) => {
        setModalVisible(state)
    }

    return (

        <SafeAreaView style={styles.container}>

            <ScrollView style={styles.scrollView}>
                <View style={styles.listContainer}>
                    {isLoading ? <ActivityIndicator /> : (

                        <View style={{ flex: 1, paddingTop: 20, zIndex: 9999 }}>

                            {
                                allUsers.map((user) => {
                                    return (

                                        <TouchableHighlight key={user._id} onPress={() => {
                                            openModal(user)
                                        }}
                                            underlayColor='none'
                                            style={[styles.itemList, styles.elevation]}
                                        >
                                            <View>
                                                <Text style={styles.itemTxt}>First Name: {user.fName}</Text>
                                                <Text style={styles.itemTxt}>Last Name: {user.lName}</Text>
                                            </View>
                                        </TouchableHighlight>
                                    )
                                })
                            }

                        </View>
                    )}
                </View>

                <Modal
                    animationType="slide"
                    transparent={true}
                    onHide={() => setModalVisible(false)}
                    visible={modalVisible}
                >
                    <ViewSingleItemModal data={modalData} changeModalVisibility={changeModalVisibility} />

                </Modal>
            </ScrollView>
        </SafeAreaView>
    )
}


//styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f2f2f2",
    },
    listTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 20
    },
    listContainer: {
        flex: 1,
        // backgroundColor: "#f2f2f2",
        backgroundColor: "#f2f2f2",
        padding: 15
    },
    input: {
        fontSize: 18,
        height: 40,
        width: windowWidth - 180,
        borderWidth: 0,
        backgroundColor: "#f2f2f2",
        padding: 10,
    },

    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },


    itemTxt: {
        fontWeight: 'bold',
        fontSize: 18,
    },

    itemList: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        backgroundColor: "white",
        borderRadius: 10,

        marginLeft: 17,
        borderColor: "#D8D8D8",
        borderWidth: 0.5,
        zIndex: 9999

    }
}
)

