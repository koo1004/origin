// let data = {
//     'data1' : "A",
//     'data2' : "B",
//     'data3' : "C"
// }

// console.log(data);

// Object.entries(data).forEach(function([key, value]) {
//     // console.log(key, value);
//     if(value.charAt(0) == 'B'){
//         console.log(key);
//     }
// }

function onclick_button() {
    let selectElement = document.querySelector("#mySelect").value;
    if (selectElement == 0) {
        console.log("숫자는 0 입니다.");
    } else if (selectElement < 0) {
        console.log("숫자는 음수 입니다.");
    } else {
        console.log("숫자는 양수 입니다.");
    }
    let selectnumber = Number(selectElement);
    if(Number.isInteger(selectnumber) == true){
        console.log('정수입니다.')
    } else {
        console.log('실수입니다.')
    }

    let n =11
    let isPrime = true

    if (n ===1){// 1은 소수가 아님 
        isPrime = false
    }else{
        for(let i=2;i<n;i++){
          if(n % i == 0){
            isPrime =  false 
          }
        }
    }

    console.log(isPrime)
}

function onclick_point_button() {
    let selectElement = document.querySelector("#myPoint").value;
    if (selectElement >= 90) {
        console.log("등급은 A입니다.");
    } else if (selectElement < 90 && selectElement >= 80) {
         console.log("등급은 B입니다.");
    } else if (selectElement < 80 && selectElement >= 70){
         console.log("등급은 C입니다.");
    } else if (selectElement < 70 && selectElement >= 60){
         console.log("등급은 D입니다.");
    } else {
         console.log("등급은 F입니다.");
    }
}

function onclick_skill_button() {
    let selectedSkills = document.querySelectorAll('input[name="skill"]:checked');

    // NodeList의 각 요소의 value를 가져오기 위해 반복문 사용
    // selectedSkills.forEach(function(skill) {
    //     console.log(skill.value); // 각 체크된 요소의 값을 출력
    // });
    let skills=[];
    for(let items of selectedSkills){
         // console.log(items.value); // 각 체크된 요소의 값을 출력
        skills.push(items.value)
    }
    // console.log(skills);

    if(skills.includes('Javascript') && skills.includes('React')){
         console.log('합격 입니다.'); // 각 체크된 요소의 값을 출력
        return;
    } else if (!skills.includes('Javascript') && !skills.includes('React')){
        console.log('불합격입니다.'); // 각 체크된 요소의 값을 출력
        return;
    } else {
        console.log('예비 합격입니다.'); // 각 체크된 요소의 값을 출력
        return;
    }
}

function number_hab(){
    let sum = 0;
    for(let i=1; i<=100; i++){
        console.log(sum += i)
    }
}

function number_hol(){
    for(let i=1; i<=100; i++){
        // if(i%2 != 0){
        //     console.log(i)
        // }
        console.log(i%2)
    }
    // for(let i=1; i<=100; i+=2){
    //         console.log(i)
    // }
}

function number_sam(){
    for(let i=1; i<=50; i++){
        let stringValue = i.toString();
        let result = "";
        for(let j=0; j<stringValue.length; j++){
            if(stringValue[j] == "3" || stringValue[j] == "6" || stringValue[j] == "9")        {
                result += "짝";
            }
        }
        console.log(result.length>0?result:i)    
    }
}

function greet(name) {
    console.log("안녕 내 이름은 " + name + "야")
}

function meetAt(year = null, month = null, day = null) {
    let todayYear = year;
    let todayMonth = month;
    let todayDay = day;
    if (todayDay) {
        return console.log(`${todayYear}/${todayMonth}/${todayDay}`);
    }
    if (todayMonth) {
        return console.log(`${todayYear}년 ${todayMonth}월`);
    }
    if (todayYear) {
        return console.log(`${todayYear}년`);
    }
}

function findSmallestElement(arr = false) {
    if(arr == false){
        let result = 0
        return console.log(result);
    } else {
        let small = arr[0]
        for(let i=0; i<arr.length; i++){
            if(arr[i] < arr[i+1]){
                 small = arr[i]
            }
        }
        return console.log(small);
    }
}

function formatCurrency(input) {
    
    let value = input.value.replace(/,/g, '');

    if (!isNaN(value) && value.length > 0) {

        input.value = parseFloat(value).toLocaleString('en-US');
    } else {
        input.value = ''; 
    }
}

function removeCommas(value) {
    // 콤마를 제거하는 정규식 사용
    let result = value.replace(/,/g, '');
    return result;
}

function chargeElement() {
    let amount = document.querySelector("#amount").value;
    let result = removeCommas(amount);
    if(result > 0){
        if (result/50000 > 0) {
            let Fifty_thousand = result/50000;
            console.log(`50000원 지폐 ${parseInt(Math.floor(Fifty_thousand))}장`) 
            
            if(parseInt(Math.floor(Fifty_thousand)) > 0){
                result = result - (parseInt(Math.floor(Fifty_thousand))*50000)
            }
        }
        if (result/10000 > 0) {
            let Ten_thousand = result/10000;
            console.log(`10000원 지폐 ${parseInt(Math.floor(Ten_thousand))}장`) 

            if(parseInt(Math.floor(Ten_thousand)) > 0){
                result = result - (parseInt(Math.floor(Ten_thousand))*10000)
            }
        }
        if (result/5000 > 0) {
            let Five_thousand = result/5000;
            console.log(`5000원 지폐 ${parseInt(Math.floor(Five_thousand))}장`) 

            if(parseInt(Math.floor(Five_thousand)) > 0){
                result = result - (parseInt(Math.floor(Five_thousand))*5000)
            }
        }
        if (result/1000 > 0) {
            let One_thousand = result/1000;
            console.log(`1000원 지폐 ${parseInt(Math.floor(One_thousand))}장`) 

            if(parseInt(Math.floor(One_thousand)) > 0){
                result = result - (parseInt(Math.floor(One_thousand))*1000)
            }
        }
        if (result/500 > 0) {
            let Five_hundred = result/500;
            console.log(`500원 동전 ${parseInt(Math.floor(Five_hundred))}개`) 

            if(parseInt(Math.floor(Five_hundred)) > 0){
                result = result - (parseInt(Math.floor(Five_hundred))*500)
            }
        }
        if (result/100 > 0) {
            let One_hundred = result/100;
            console.log(`100원 동전 ${parseInt(Math.floor(One_hundred))}개`) 
        } 
    } else {
        charge = '잘못된 입력값입니다. 다시 입력해주세요.'
    }
}