function calculateElectricBill(n){
    if (n<=50) {
        return n*230+1000;
    } else if(n<=100) {
        return 50*230+(n-50)*480+1000;
    } else if (n<=149) {
        return 50*230+50*480+(n-100)*700+1000;
    } else {
        return 50*230+50*480+49*700+(n-149)*900+1000;
    }
}
