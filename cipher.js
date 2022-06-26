const encrypt=(text,code)=>{
  let encryptedText=[]
  for(let i=0;i<text.length;i++){
    encryptedText.push(String.fromCharCode(text.charCodeAt(i)+code))
  }
  return encryptedText.join('')
}
const decrypt=(encrptedText,code)=>{
  let text=[]
  for(let i=0;i<encrptedText.length;i++){
    text.push(String.fromCharCode(encrptedText.charCodeAt(i)-code))
  }
  return text.join('')
}

//Test
let encryptedText=encrypt("Hello World",4)
console.log(encryptedText)
let decryptedText=decrypt(encryptedText,4)
console.log(decryptedText)
