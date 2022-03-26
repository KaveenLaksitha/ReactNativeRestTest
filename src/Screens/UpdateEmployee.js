import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    StatusBar,
    ScrollView,
    TouchableHighlight,
    SafeAreaView,
    Alert
} from 'react-native'
import { updateEmployeeService } from '../Services/Service';

export const UpdateEmployee = ({ route }) => {
    const { data } = route.params;

    const [fName, setFname] = useState("")
    const [lName, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [permAdd, setPermAdd] = useState("")



    useEffect(() => {
        setFname(data.fName)
        setLname(data.lName)
        setEmail(data.email)
        setPermAdd(data.permAdd)
    }, [])

    const handleUpdate = () => {

        const payload = {
            "fName": fName,
            "lName": lName,
            "email": email,
            "nic": data.nic,
            "designation": data.designation,
            "DOB": data.DOB,
            "gender": data.gender,
            "maritalStat": data.maritalStat,
            "currAdd": data.currAdd,
            "permAdd": data.permAdd,
            "mobileNo": data.mobileNo,
            "emgContact": data.emgContact,
            "empPic": data.empPic,
            "cv": data.cv
        }

        updateEmployeeService(data.empId, payload).then((res) => {
            if (res.ok) {
                Alert.alert(
                    "Success!",
                    "Employee deleted successfully!",
                    [
                        {
                            text: "OK",
                            // onPress: () => closeModal(false) 
                        }

                    ]
                );
            } else {
                Alert.alert(
                    "Error!",
                    "Failed to delete!",
                    [
                        { text: "OK" }

                    ]
                );
            }
        })
    }
    return (
        <SafeAreaView style={styles.container}>

            <ScrollView >

                <View style={{ marginTop: 10 }}>
                    <Text style={styles.text}>First Name :</Text>
                    <TextInput style={styles.input} placeholder="First Name" value={fName} onChangeText={(e) => { setFname(e) }}></TextInput>
                    <StatusBar style="auto" />
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.text}>Last Name :</Text>
                    <TextInput style={styles.input} placeholder="Last Name" value={lName} onChangeText={(e) => { setLname(e) }}></TextInput>
                    <StatusBar style="auto" />
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.text}>Email :</Text>
                    <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={(e) => { setEmail(e) }}></TextInput>
                    <StatusBar style="auto" />
                </View>
                <View style={{ marginTop: 10 }}>
                    <Text style={styles.text}>Permanent Address :</Text>
                    <TextInput style={styles.input} placeholder="Permanent Address" value={permAdd} onChangeText={(e) => { setPermAdd(e) }}></TextInput>
                    <StatusBar style="auto" />
                </View>

                <View style={{ alignItems: 'center', marginTop: 20 }}>
                    <TouchableHighlight underlayColor="none"
                        onPress={handleUpdate}
                    >
                        <View style={styles.btnUpdate}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: "white" }}>Submit</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor="none"
                    // onPress={saveAsDraft}
                    >
                        <View style={styles.btnCancel}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: "white" }}>Cancel</Text>
                        </View>
                    </TouchableHighlight>
                </View>




            </ScrollView>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 40
    },
    input: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "black",
        width: 350,
        padding: 10,
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16
    },
    text: {
        color: 'black',
        fontSize: 18
    },
    btnUpdate: {
        width: 350,
        height: 50,
        backgroundColor: '#357C3C',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        marginBottom: 20

    },
    btnCancel: {
        width: 350,
        height: 50,
        backgroundColor: '#52007a',
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        marginBottom: 20

    }
});