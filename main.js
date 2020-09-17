

//Написати конвертер валют - пишете скільки у вас є
// гривень і які очікуємо можливі конвертації - у долар, євро,
// нафту(brent), золото. Додатково зробити перевірку чи не
// обманює вас юзер і перевіряти чи не прийшов вам null or
// undefined.


	// let uah = +prompt('Скільки у вас гривень?');
	// let num, amount; 	
	// let currentExchange = {
	// 	usd : 27,
	// 	eur : 32,
	// 	gold : 1775,
	// 	brent : 1000,
	// }
	
	// if (uah && isNaN(uah) == false && uah>=0) {
	// 	num = +prompt('Виберіть одну з можливих конвертацій: (1) В долари (2) В євро (3) В золото (4) В нафту' );

	// 	if ( num == 1){
	// 		amount = uah / currentExchange.usd;
	// 		alert(`Ви отримаєте ${amount} доларів`);
	// 	}
	// 	else if ( num == 2){
	// 		amount = uah / currentExchange.eur;
	// 		alert(`Ви отримаєте ${amount} євро`);
	// 	}
	// 	else if ( num == 3){
	// 		amount = uah / currentExchange.gold;
	// 		alert(`Ви отримаєте ${amount} грам золота`);
	// 	}
	// 	else if ( num == 4){
	// 		amount = uah / currentExchange.brent;
	// 		alert(`Ви отримаєте ${amount} барель нафти`);
	// 	}
	// 	else if ( num != 1 || num != 2 || num != 3 || num != 4 ){
	// 		alert('Ви ввели невірне значення');
	// 	}
	// }
	// else {
	// 	alert('Невірні дані')
	// }


	// Спитатись у юзера суму замовлення і вивести результат з
// урахуванням знижки : до 500 гривень знижка -1 %, від 500
// до 1000 - 5%, більше 1000 - 10% та подарунковий
// сертифікат на 200 гривень у подарунок!


// let price = +prompt('На яку суму ви бажаєте замовити товару в нашому магазині?');

// 	if ( price && isNaN( price ) == false && price >= 0 ){
// 		if ( price < 500 ){
// 			alert('Ви отримаєте знижку 1%');
// 		} 
// 		else if ( price >= 500 && price < 1000 ){
// 			alert('Ви отримаєте знижку 5%');
// 		}
// 		else if ( price >= 1000 ) {
// 			alert('Ви отримаєте знижку 10% та подарунковий сертифікат на 200 грн');
// 		}
// 	}
// 	else {
// 		alert('Такої суми не існує :)');
// 	}


// Створити тест на знання будь-чого, юзер має відповісти на
// 5 питань, вірна відповідь - 1 бал, якщо юзер відповість
// правильно на всі 5 запитань - додатково додати 1
// бонусний бал.

	// let summary = 0 ;
	// let quiz = {

	// 	first: +prompt("скільки днів у тижні?"),
	// 	second: prompt("як називається 1й день тижня?"),
	// 	third: +prompt("скільки годин в добі?"),
	// 	foufth: prompt("хто зображений на 20 гривневій купюрі (прізвище)?"),
	// 	fifth: prompt("як називається наша планета?")
	// }

	// if ( quiz.first == 7 ){
	// 	summary++;
	// }

	// if ( quiz.second.toLowerCase() == 'понеділок' ) {
	// 	summary++;
	// }

	// if ( quiz.third == 24 ){
	// 	summary++;
	// }

	// if ( quiz.foufth.toLowerCase() == 'франко' ){
	// 	summary++;
	// }

	// if ( quiz.fifth.toLowerCase() == 'земля' ){
	// 	summary++;
	// }

	// if ( summary == 5 ) {
	// 	summary++;
	// 	alert('Вітаємо ви відповіли на всі питання правильно і отримуєте бонусний бал!!!')
	// }
	// else {
	// 	alert(`Ви відповіли правильно на ${summary} питання! Дякуємо:)`);
	// }

    
// 5. Запитатись у користувача 3 значне число та сказати чи є у
// ньому однакові цифри

// let number = prompt('Введіть 3-значне число!'), arr;
// //let number = n.toString();
// if ( number.length == 3 ) {
// 	arr = number.split(separator: ""); //чомусь не працює спліт
// }
// else {
// 	alert('error');
// }
// //console.log( n );
// console.log( number );
// console.log( arr[0] );

// 6. Запитатись у юзера одну кнопоку від 1 до = на клавіатурі та
// вивести що буде при нажиманні цифри разом з шифтом.

// let key = prompt("Введіть від 1 до =");

//  if ( key == '1') {
//  	//alert('!');
//  } else if ( key == '2') {
//  	alert('@');
//  } else if ( key == '3') {
//  	alert('#');
//  } else if ( key == '4') {
//  	alert('$');
//  } else if ( key == '5') {
//  	alert('%');
//  } else if ( key == '6') {
//  	alert('^');
//  } else if ( key == '7') {
//  	alert('&');
//  } else if ( key == '8') {
//  	alert('*');
//  } else if ( key == '9') {
//  	alert('(');
//  } else if ( key == '0') { 
//  	alert(')');
//  } else if ( key == '-') {
//  	alert('_');
//  } else if ( key == '=') {
//  	alert('+');
//  }
//  else {
//  	alert('Ви вводите шось не то!');
//  }