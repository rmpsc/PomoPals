import React from 'react'
import { Input } from 'tamagui';

interface LoginFormProps {
    placeholder: string;
    onChangeText: (text: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({placeholder, onChangeText}) => {
    return (
        <Input
          size="$5"
          fontSize="$2"
          borderWidth={2}
          br={20}
          placeholder={placeholder}
          onChangeText={onChangeText}
        />
    );
}

export default LoginForm;