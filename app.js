const md5 = require('md5')
const bf = require('bruteforce')

const charSet = 'abcdefghijklmnopqrstuvwxyz0123456789+-._@'
let email = 'emir.mertoglu.97@gmail.com'
let hash = '55bd0f8f1248219ef6b6d52ca16938ee8f66dd446b3002c6fe438a7740046d479e1f92544d643f9a202faed8c7fa40490e24c2372a95d4272c27120dc5b4167fe215a97349c3cf5d1bb08963a4330d7aa914550c9a58a66908f39c0d9c3fdb9f36b665ebb2d48a86121fea0eb6d075a77e66ed71ec2a4e21e3d7b04e346a77d30c3908addccbf4808d41feab0e5440354d1e036642cb03361279d0b7e2a08eea26ed8a70ae9b16fb6466048245c6eb714c808b4a8b7c5963873147dbd751023932fb367046aa89df7e3150a2277d0299537479e56d6c6358dde8e6dd0b0f9df4520a3603bdb03d06bbd138c6525a09a3f5cdf3a586149937c690487baea73a16'
let hashSplitted = []
let secretMail = ''

for (let i = 0; i <= 480; i += 32) {
    hashSplitted.push(hash.substring(i, i + 32))
}

let counter = 2
for (let i = 0; i < 16; i++) {
    bf({
        len: counter,
        chars: charSet,
        prefix: secretMail,
        step: (char) => {
            let hashed = md5(md5(email) + char + md5(char))
            if (hashed === hashSplitted[i]) {
                secretMail = char
            }
            else {
                console.log(char)
            }
        }
    })
    counter += 2
}

console.log(secretMail)