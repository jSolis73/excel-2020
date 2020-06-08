console.log('hello from module')

async function test() {
  await Promise.resolve('test babel')
}

test()