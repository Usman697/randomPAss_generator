function RandomPassGenerator(){
    var randomvalues='ABCDEFGHIJF123408657EYUWFWJKD37801<>!@#$%^KFJGkgdyfdyfyd128384!##@iy8618389&*'
var randompass='';
for(var i=0;i<=12;i++){
    var randomnum=Math.floor(Math.random()*randomvalues.length)
    randompass += randomvalues[randomnum]
}
document.write(randompass)
}

RandomPassGenerator()