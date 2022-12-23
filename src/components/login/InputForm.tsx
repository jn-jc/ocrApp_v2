import React from 'react'
import { Pressable, StyleSheet, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

interface Props {
  value: string
  onChangeText: (text: string) => void
  secureTextEntry?: boolean
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters'
  autoComplete?: 'off' | 'username' | 'password' | 'email' | 'name' | 'tel' | 'street-address' | 'postal-code' | 'cc-number' | 'cc-csc' | 'cc-exp' | 'cc-exp-month' | 'cc-exp-year'
  autoCorrect?: boolean
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad' | 'number-pad' | 'decimal-pad' | 'visible-password' | 'ascii-capable' | 'numbers-and-punctuation' | 'url' | 'name-phone-pad' | 'twitter' | 'web-search',
  placeholder?: string | undefined
  children?: JSX.Element
  password?: boolean
}

const InputForm = ({ value, onChangeText, secureTextEntry = false, autoCapitalize = 'none', autoComplete= 'off', autoCorrect = false, keyboardType= 'default', placeholder = undefined, children, password = false, ...props }: Props) => {

  const [isFocused, setIsFocused] = React.useState(false)
  const [showPass, setShowPass] = React.useState(false)

  return (
    <View style={isFocused ? { ...styles.inputContainer, borderColor: '#5EB04E', borderWidth: 2 } : { ...styles.inputContainer }} >
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password && showPass ? false : secureTextEntry}
        autoCapitalize={autoCapitalize}
        autoCorrect={autoCorrect}
        autoComplete={autoComplete}
        keyboardType={password && showPass ? 'visible-password' : keyboardType}
        onBlur={() => { setIsFocused(false) }}
        onFocus={() => { setIsFocused(true) }}
        placeholder={placeholder}
      />
      {children ? children : undefined}
      {password ?
        <Pressable
          onPress={() => { setShowPass(!showPass) }}
        >
          <Icon style={styles.icon} name='eye-off' size={22} color='#009530' />
        </Pressable> : undefined}
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    fontSize: 12,
    fontWeight: '600',
    color: '#404447',
    width: '100%',
    paddingHorizontal: 16
  },
  icon: {
    paddingRight: 15,
    paddingVertical: 12
  },
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#C9C9C9',
    marginTop: 4,
    height: 50,
    width: '100%',
    marginBottom: 24,
  },
})

export { InputForm }