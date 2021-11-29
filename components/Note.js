import React from 'react'
import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native'
import colors from '../utils/colors';
const width = Dimensions.get('window').width - 40;

const Note = ({ item, onPress }) => {
    const { title, desc } = item;
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.container}>
            <Text style={styles.title} numberOfLines={2}>
                {title}
            </Text>
            <Text style={styles.desc} numberOfLines={6}>{desc}</Text>
            <Text style={styles.date}>Date</Text>
        </TouchableOpacity>
    )
}

export default Note

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: width / 2 + 3,
        paddingHorizontal: 16,
        paddingTop: 18,
        paddingBottom: 45,
        borderRadius: 12,
    },
    date:{
        position: 'absolute',
        bottom: 18,
        left: 16,
        color: colors.gray
    },
    desc: {
        fontSize: 15,
        color: colors.darkgray,
    },
    title: {
        fontWeight: '700',
        fontSize: 16,
        color: 'black',
        marginBottom: 5
    },
})
