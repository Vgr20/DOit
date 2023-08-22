import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const CheckBoxWithText = ({ label, initialValue = false, onChange }) => {
    const [isChecked, setIsChecked] = useState(initialValue);

    const handleToggle = () => {
        setIsChecked(!isChecked);
        if (onChange) {
            onChange(!isChecked);
        }
    };

    return (
        <TouchableOpacity style={styles.container} onPress={handleToggle}>
            <View style={styles.checkBox}>
                {isChecked && <View style={styles.checkedBox} />}
            </View>
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkBox: {
        width: 20,
        height: 20,
        borderWidth: 2,
        borderColor: '#000',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkedBox: {
        width: 12,
        height: 12,
        backgroundColor: '#000',
    },
    label: {
        fontSize: 20,
    },
});

export default CheckBoxWithText;
