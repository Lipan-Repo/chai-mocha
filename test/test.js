const assert=require('assert')
const { afterEach } = require('mocha')

describe('file to be tested',()=>{
    context('function to be tested',()=>{
        // before(()=>{
        //     console.log('===before')
        // })
        // after(()=>{
        //     console.log('===after')
        // })
        // beforeEach(()=>{
        //     console.log('--beforeeach')
        // })
        // afterEach(()=>{
        //     console.log('--aftereach')
        // })
        it("should do something",()=>{
            assert.equal(1,1)
        });

        it('do something else',()=>{
            assert.deepEqual({name:"lipan"},{name:"lipan"})
        });
        it('pending test')
    })
    context('another function',()=>{
        it('do something for another')
    })
})