//Bạn được cho 3 số nguyên smart, power, exp lần lượt là chỉ số thông minh, chỉ số sức mạnh, 
//số kinh nghiệm của một nhân vật trong game.
//    Một điểm exp có thể đổi để tăng 1 điểm smart, hoặc tăng 1 điểm power.
//    Nhân vật game khác nhau khi nhân vật smart hoặc power khác nhau.
//    Bạn phải dùng hết điểm exp để tạo ra nhân vật mới.
//Hãy tính số cách để tạo ra nhân vật có smart lớn hơn power.

function countNumbersPerson(smart, power, exp){
    if (exp==0) {
        if (smart>power) {
            return 1;
        } else return 0;
    }
    if (smart-power>exp) {
        return exp;
    } else if (power-smart>=exp) {
        return 0;
    } else {
        return Math.ceil(exp/2)+Math.floor((smart-power)/2);
    }
}
