function beautifulBinaryString(binaryString){
    while (binaryString.match(/AA|BB/)!=undefined) {
        binaryString = binaryString.replace(/AA|BB/g, '');
    }
    return (binaryString.length==0);

}
