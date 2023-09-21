import React from 'react'
import { Input } from 'tamagui';

interface LoginFormProps {
    placeholder: string;
    onChangeText: (text: string) => void;
    secureTextEntry?: boolean;
}

const LoginForm: React.FC<LoginFormProps> = ({placeholder, onChangeText, secureTextEntry}) => {
    return (
        <Input
          size="$5"
          fontSize="$2"
          borderWidth={2}
          br={20}
          placeholder={placeholder}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
        />
    );
}

export default LoginForm;