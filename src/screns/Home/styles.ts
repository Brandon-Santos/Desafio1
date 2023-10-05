import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        justifyContent: 'center',
        alignItems: 'center',
      },
      row: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 60,
      },
      titles1: {
        color: '#4EA8DE',
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 11.8
      },
      titles2: {
        color: '#5E60CE',
        fontSize: 30,
        fontWeight: 'bold',
      },
      image1: {
        width: 19,
        height: 31,
        resizeMode: 'contain',
      },
      form1: {
        width: '90%',
        flexDirection: 'row',
      },
      input: {
        flex: 1,
        height: 56,
        backgroundColor: "#1F1E25",
        borderRadius: 5,
        color: "#fdfcfe",
        padding: 16,
        fontSize: 16,
        marginRight: 12,
        marginLeft: 12
      },
      button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: "#31cf67",
        alignItems: 'center',
        justifyContent: 'center'
      },
      buttonText: {
        color: "#FFF",
        fontSize: 24
      },
      formContainer: {
        flex: 1, // Para centralizar verticalmente
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 14,
        marginBottom: 30
      },
      listEmptyText: {
        color: '#FFF',
        fontSize: 14,
        textAlign: "center",
        marginTop: 50
      }
})