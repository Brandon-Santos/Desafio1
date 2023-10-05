import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";
import { styles } from "./styles";
import { Image } from "react-native";
import { Tasks } from "../../components/Tasks";

export default function Home(){

    const [taskss, setTakss] = useState<string[]>([]);
    const [taskName, setTaksName] = useState('');

    function handleTaskAdd(){
        setTakss(prevState => [...prevState, taskName]);
        setTaksName('');
    }

    function handleTaskRemove(Tasks: string){
        Alert.alert("Romver", "Deseja remover essa tarefa?",[
            {
                text: 'Sim',
                onPress: () => setTakss(prevState => prevState.filter(taskss => taskss !== Tasks))
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ]);
        }

    return(
        <View>
            <View style={styles.container}>
                <View style={styles.row}>
                    <Image 
                        source={require('./assets/rocket.png')}
                        style={styles.image1}
                    />
                    <Text style={styles.titles1}>
                        to
                    </Text>
                    <Text style={styles.titles2}>
                        do
                    </Text>
                </View>
            </View>
            <View style={styles.formContainer}>
                <View style={styles.form1}>
                        <TextInput 
                            style={styles.input}
                            placeholder="Adicione uma nova tarefa"
                            placeholderTextColor="#6B6B6B"
                            onChangeText={setTaksName}
                            value={taskName}
                        />
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={handleTaskAdd}
                    >
                        <Text style={styles.buttonText}>
                            +
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            
            <FlatList 
                data={taskss}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Tasks 
                        key={item}
                        task={item}
                        onRemove={() => handleTaskRemove(item)}
                    />
                )}
                showsVerticalScrollIndicator = {false}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                          Ninguém chegou no evento ainda? Adicionar participantes na lista.
                    </Text>
                )}
            />
        </View>
    );
}