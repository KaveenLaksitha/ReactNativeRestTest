import React, { useState, useEffect } from 'react'
import { Modal, StyleSheet, View, Text, TouchableHighlight, Dimensions, Alert, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import { deleteEmployeeService, updateEmployeeService } from '../Services/Service';

//getting device window width
const windowWidth = Dimensions.get('window').width;

const ViewSingleItemModal = (props) => {

    const navigation = useNavigation()

    const [fName, setFname] = useState("");
    const [lName, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [modalVisible, setModalVisible] = useState(props.visible);
    const [text, onChangeText] = React.useState("Useless Text");

    useEffect(() => {
        setFname(props.data.fName)
        setLname(props.data.lName)
        setEmail(props.data.email)
    }, [props]);

    //to close the modal
    const closeModal = (bool) => {
        props.changeModalVisibility(bool)
    }

    const navigateToUpdate = (data) => {
        closeModal(false)
        navigation.navigate("Update", {
            data
        })
    }

    const handleDelete = (data) => {
        deleteEmployeeService(data).then((res) => {
            if (res.ok) {
                Alert.alert(
                    "Success!",
                    "Employee deleted successfully!",
                    [
                        { text: "OK", onPress: () => closeModal(false) }

                    ]
                );
            } else {
                Alert.alert(
                    "Error!",
                    "Failed to delete!",
                    [
                        { text: "OK", onPress: () => closeModal(false) }

                    ]
                );
            }
        })
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                setModalVisible(false);
            }}
        >
            <View style={styles.centeredView}>


                <View style={styles.modalView}>
                    <View style={styles.horizontal}>
                        <View style={styles.vertical}>
                            <Text style={styles.textTitle}>First Name: <Text style={styles.text}>{fName}</Text></Text>
                            <Text style={styles.textTitle}>Last Name: <Text style={styles.text}>{lName}</Text></Text>
                            <Text style={styles.textTitle}>Email: <Text style={styles.text}>{email}</Text></Text>
                        </View>

                    </View>
                    <View style={styles.btnGrid}>
                        <TouchableHighlight
                            // onPress={() => handleUpdate(props.data)}
                            onPress={() => navigateToUpdate(props.data)}
                            underlayColor="none">
                            <View
                                style={styles.btnUpdate}>
                                <Text style={styles.textStyle}>Update</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => handleDelete(props.data)}
                            underlayColor="none">
                            <View
                                style={styles.btnDelete}>
                                <Text style={styles.textStyle}>Delete</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight
                            onPress={() => closeModal(false)}
                            underlayColor="none">
                            <View
                                style={styles.btnClose}>
                                <Text style={styles.textStyle}>Close</Text>
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>

            </View>
        </Modal >
    )
}

//styles
const styles = StyleSheet.create({

    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalView: {
        width: windowWidth - 30,
        backgroundColor: "white",
        paddingTop: 20,
        paddingBottom: 20,
        alignItems: "center",
        borderRadius: 10
    },
    btnUpdate: {
        width: 100,
        height: 40,
        backgroundColor: "#357C3C",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    btnDelete: {
        width: 100,
        height: 40,
        backgroundColor: "#D82148",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    btnClose: {
        width: 100,
        height: 40,
        backgroundColor: "#52007a",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10
    },
    textStyle: {
        color: "white",
        fontSize: 18,
    },

    textTitle: {
        marginBottom: 15,
        fontSize: 16,
        fontWeight: "bold"
    },
    text: {
        fontSize: 16,
        fontWeight: "normal"
    },
    vertical: {
        flexDirection: "column",
        width: '100%',
        paddingHorizontal: 25,
        paddingVertical: 10
    },
    btnGrid: {
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    horizontal: {
        flexDirection: "row",
        alignItems: "center"
    },
    inputRow: {
        display: 'flex',
        flexDirection: 'row'
    },
    input: {
        height: 30,
        width: 200,
        margin: 0,
        borderWidth: 1,
        borderColor: 'black',
        padding: 5,
    },
})

export { ViewSingleItemModal }
