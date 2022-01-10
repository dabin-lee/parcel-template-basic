console.log('hello parcel!')

async function test(){
 const promise = Promise.resolve(123)
 console.log(await promise)
}
// 비동기 함수

test()