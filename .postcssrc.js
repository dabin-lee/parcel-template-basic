// const autoprefixer = require('autoprefixer')
// exports = {
//     plugins: [
//         autoprefixer
//     ]
// }

// require('autoprefixer') 하나의 함수가 실행되고 반환된 결과가 autoprefixer라는 변수에 들어가서 plugins에 사용되는 것임.


// 간소화

// 1. 따로 변수에 담지않고 실행되는 플러그인에 바로 아이템으로 실행시킨다.

// const autoprefixer = require('autoprefixer')
module.exports = {
    plugins: [
        require('autoprefixer')
    ]
}