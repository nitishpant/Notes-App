
const ch= require('chalk')
const notes=require('./parts.js')
const yargs= require('yargs')


yargs.version('1.1.0')
yargs.command({ 
    command: 'add',
    describe: 'add a new note',
    builder:{
        title:{
            describe:'note title',
            demandOption:true
        },
        body:{
            describe:'body of title',
            demandOption:true,
            type:'string'
        }
    },
    handler: function(argv){
        console.log('title='+argv.title)
       // console.log('\n')
        console.log('body='+argv.body)
    }

})

yargs.command({
    command:'remove',
    describe:'remove the note',
    handler:function(){
        console.log('removing the node')
    }
})

yargs.command({
    command:'list',
    describe:'list the note',
    handler:function(){
        console.log('listing the node')
    }
})
yargs.command({
    command:'read',
    describe:'read the note',
    handler:function(){
        console.log('reading the node')
    }
})

console.log(yargs.argv)