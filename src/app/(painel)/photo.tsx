import colors from "@/src/constants/colors";
import fonts from "@/src/constants/fonts";
import { useAuthStore } from "@/src/context/authContext";
import { Group } from "@/src/interfaces/Group";
import { Publish } from "@/src/interfaces/Publish";
import api from "@/src/services/api";
import { useState } from "react";
import { Pressable, StyleSheet, SafeAreaView, ScrollView, View, Text, TextInput, ActivityIndicator } from "react-native";

export default function Photo() {
    const { userId } = useAuthStore();
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [image, setImage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [grupos, setGrupos] = useState<Group[]>([]);

    async function handlePublicar() {
        if (!userId) {
            setErrorMessage("Usuário não autenticado.");
            return;
        }

        const novaPublicacao: Publish = {
            description: descricao,
            image: image,
            author: userId,
            groups: grupos,
        };
    
        try {
            await api.post("/publicacoes", novaPublicacao);
        } catch (error) {
            console.error("Erro ao publicar", error);
        } finally {
            setLoading(false);
        }
    }


    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1, backgroundColor: colors.white }}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={styles.logoText}>
                            Nova <Text style={{ color: colors["brown-white"] }}>Publicação</Text>
                        </Text>
                    </View>

                    <View style={styles.form}>
                        <View>
                            <Text style={styles.label}>Título</Text>
                            <TextInput
                                placeholder="Título da publicação"
                                placeholderTextColor={colors.gray}
                                style={styles.input}
                                value={titulo}
                                onChangeText={setTitulo}
                            />
                        </View>

                        <View>
                            <Text style={styles.label}>Descrição</Text>
                            <TextInput
                                placeholder="Descrição da publicação"
                                placeholderTextColor={colors.gray}
                                style={styles.input}
                                value={descricao}
                                onChangeText={setDescricao}
                            />
                        </View>

                        <View>
                            <Text style={styles.label}>Foto</Text>
                            <TextInput
                                placeholder="Foto da publicação"
                                placeholderTextColor={colors.gray}
                                style={styles.input}
                                value={image}
                                secureTextEntry={true}
                                onChangeText={setImage}
                            />
                        </View>

                        {errorMessage ? (
                            <Text style={styles.errorText}>{errorMessage}</Text>
                        ) : null}

                        <Pressable style={styles.button} onPress={handlePublicar} disabled={loading}>
                            {loading ? (
                                <ActivityIndicator color={colors.white} />
                            ) : (
                                <Text style={styles.buttonText}>Publicar</Text>
                            )}
                        </Pressable>

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
        backgroundColor: colors["brown-red"]
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
        backgroundColor: colors["brown-red"],
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
    backButton: {
        backgroundColor: colors["brown-red-dark"],
        alignSelf: 'flex-start',
        padding: 8,
        borderRadius: 8,
        marginBottom: 20
    },
    errorText: {
        color: "red",
        marginBottom: 10,
        textAlign: "center"
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