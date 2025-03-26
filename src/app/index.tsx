import colors from "@/constants/colors";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    function handleSignIn() {

    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.logoText}>
                    Dev <Text style={{ color: colors.green }}>App</Text>
                </Text>
                <Text style={styles.slogan}>
                    O futuro da programação
                </Text>
            </View>

            <View style={styles.form}>
                <View>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        placeholder="Digite seu email"
                        style={styles.input}
                        value={email}
                        onChangeText={setEmail}
                    />
                </View>

                <View>
                    <Text style={styles.label}>Senha</Text>
                    <TextInput
                        placeholder="Digite sua senha"
                        style={styles.input}
                        secureTextEntry={true}
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>

                <Pressable style={styles.button} onPress={handleSignIn}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </Pressable>

                <Link href={'/(auth)/signup/page'} style={styles.link}>
                    <Text>Ainda não possui uma conta? Cadastre-se</Text>
                </Link>


            </View>

        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 34,
        backgroundColor: colors.zinc
    },
    header: {
        paddingLeft: 14,
        paddingRight: 14,
    },
    logoText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.white,
        marginBottom: 8
    },
    slogan: {
        fontSize: 34,
        color: colors.white,
        marginBottom: 34
    },
    form: {
        flex: 1,
        backgroundColor: colors.white,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        paddingTop: 24,
        paddingLeft: 14,
        paddingRight: 14
    },
    label: {
        color: colors.zinc,
        marginBottom: 4
    },
    input: {
        borderWidth: 1,
        borderRadius: 8,
        padding: 12,
        marginBottom: 16,
        borderColor: colors.gray,
        paddingHorizontal: 8,
        paddingTop: 14,
        paddingBottom: 14
    },
    button: {
        backgroundColor: colors.green,
        paddingTop: 14,
        paddingBottom: 14,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        borderRadius: 8
    },
    buttonText: {
        color: colors.white,
        fontWeight: 'bold'
    },
    link: {
        marginTop: 16,
        textAlign: 'center'
    }
});