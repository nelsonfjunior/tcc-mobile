import colors from "@/src/constants/colors";
import { View, Text, StyleSheet, TextInput, Pressable, Image, SafeAreaView, ScrollView } from "react-native";
import { Link, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { useAuthStore } from "../context/authContext";
import api from "../services/api";
import { Poppins_500Medium, useFonts } from "@expo-google-fonts/poppins";
import fonts from "../constants/fonts";

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const { login, loadToken, isAuthenticated } = useAuthStore();

    useEffect(() => {
        loadToken();
    }, []);

    useEffect(() => {
        if (isAuthenticated) {
            router.replace("/(painel)/home");
        }
    }, [isAuthenticated]);

    async function handleSignIn() {
        setLoading(true);
        try {
            const response = await api.post("/auth/login", {
                login: email,
                password: password,
            });

            const token = response.data.token;
            await login(token);

            router.replace("/(painel)/home");
        } catch (error) {
            console.error("Erro ao fazer login", error);
        } finally {
            setLoading(false);
        }
    }

    let [fontsLoaded] = useFonts({
        Poppins_500Medium,
    });

    if (!fontsLoaded) {
        return null;
    }

    

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1, backgroundColor: colors.white }}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.logoText}>
                            Retro <Text style={{ color: colors.yellow }}>Photo</Text>
                        </Text>
                        <Text style={styles.slogan}>
                            Recordando momentos
                        </Text>
                    </View>

                    <View style={styles.form}>
                        <View>
                            <Text style={styles.label}>Email</Text>
                            <TextInput
                                placeholder="Digite seu email"
                                placeholderTextColor={colors.gray}
                                style={styles.input}
                                value={email}
                                onChangeText={setEmail}
                            />
                        </View>

                        <View>
                            <Text style={styles.label}>Senha</Text>
                            <TextInput
                                placeholder="Digite sua senha"
                                placeholderTextColor={colors.gray}
                                style={styles.input}
                                secureTextEntry={true}
                                value={password}
                                onChangeText={setPassword}
                            />
                        </View>

                        <Pressable style={styles.button} onPress={handleSignIn}>
                            <Text style={styles.buttonText}>
                                {loading ? "Carregando..." : "Acessar"}
                            </Text>
                        </Pressable>

                        <Link href={'/(auth)/signup/signup'} style={styles.link}>
                            <Text>Ainda não possui uma conta? <Text style={{ color: colors.yellow}}>Cadastre-se</Text></Text>
                        </Link>

                        <View style={styles.imageView}>
                            <Image
                                source={require('../assets/logo.png')}
                                style={styles.image}
                            />
                        </View>


                    </View>

                </View>
            </ScrollView>

        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: colors.zinc
    },
    header: {
        paddingLeft: 14,
        paddingRight: 14,
    },
    logoText: {
        fontFamily: fonts.font,
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.white,
        marginBottom: 8
    },
    slogan: {
        fontFamily: fonts.font,
        fontSize: 30,
        color: colors.white,
        marginBottom: 20
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
        fontFamily: fonts.font,
        color: colors.zinc,
        marginBottom: 4
    },
    input: {
        fontFamily: fonts.font,
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
        backgroundColor: colors.yellow,
        paddingTop: 14,
        paddingBottom: 14,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        borderRadius: 8
    },
    buttonText: {
        fontFamily: fonts.font,
        fontSize: 16,
        color: colors.white,
        fontWeight: 'bold'
    },
    link: {
        fontFamily: fonts.font,
        fontSize: 14,
        marginTop: 16,
        textAlign: 'center'
    },
    imageView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: "100%",
        height: "100%",
        maxWidth: 400,
        maxHeight: 400,
        aspectRatio: 1,
        resizeMode: "contain",
    }
});