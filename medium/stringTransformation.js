function stringTransformation(s){
    let sum=0;
    let arr=s.split('');
    let count = {'z': 0, 'w': 0, 'x': 0, 'u': 0, 'g': 0, 's': 0, 'f': 0, 'r': 0,
    'i': 0, 'o': 0};
    arr.forEach(function(ele) {
        count[ele]++;
    });
    let count0 = count['z'];
    let count2 = count['w'];
    let count6 = count['x'];
    let count4 = count['u'];
    let count8 = count['g'];
    let count7 = count['s']-count6;
    let count5 = count['f']-count4;
    let count3 = count['r']-count0-count4;
    let count9 = count['i']-count5-count6-count8;
    let count1 = count['o']-count0-count4-count2;
    sum =count0*0+count1*1+count2*2+count3*3+count4*4+count5*5+count6*6+count7*7
    +count8*8+count9*9;
    return sum;
}
