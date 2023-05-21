# week17-JS

Вопросы 💎

1. Чем отличается класс от объекта? Приведите примеры и того, и другого, отличные от указанных в уроке.

Класс описывает переменные, свойства, процедуры и события объекта. Объекты являются экземплярами классов. Определив класс, вы можете создать из него любое количество объектов.

Пример Классa: 
class Hero {
	constructor(name, level) {
		this.name = name;
		this.level = level;
	}
}
Пример объекта:
let hat = new Object(); //конструктор объекта
let hat = new {}; //литерал объекта
let hat = Object.create({}); 

2. Приведите примеры объектно-ориентированного подхода в реальной жизни. 
    Спортивный комплекс (футбольное поле, теннисный корт, бассейн)
    
    Приведите примеры объектно-ориентированного подхода в программировании. 
    
    фото в Инстаграм (время и дата загрузки, ник автора, комментарии, лайки)
    
3. Что такое конструктор? Самостоятельно изучите и напишите, какие бывают виды конструкторов.
constructor - это специальный метод, служащий для создания и инициализации объектов, созданных с использованием class.
Основные конструкторы -- Object(), Array(), Function(), Date(), String(). Принцип работы конструкторов, назначение ключевого слова this в конструкторе.

4. Что выведет код? Почему именно так?
ninja
pomidor
site
5. Чем статические свойства и методы отличаются от нестатических? В каких ситуациях они применяются?
В отличие от обычных нестатических методов, которые определяют поведение класса, статические методы определяют поведение для всего класса. Поскольку статический метод относится классу в целом, а не к объекту, то мы НЕ можем обращаться в нем к нестатическим полям/свойствам и методам объекта, наподобие следующего:
6. Самостоятельно изучите, что такое геттеры и сеттеры, приведите пример класса с их использованием.

get – аксессор, который используется для чтения значения из внутреннего поля класса; 
set – аксессор, используемый для записи значения во внутреннее поле класса.

let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  }
};
// set fullName запустится с данным значением
user.fullName = "Alice Cooper";

alert(user.name); // Alice
alert(user.surname); // Cooper

alert(user.fullName);
7. Что выведет код? Почему именно так?
object - значение typeof показывает обьект.
8.  Что выведет код? Почему именно так?
//
name: 'Valera', age: 23}
age: 23
name: "Valera"
[[Prototype]]: Object

city не отображается, так как не был указан изначально в самом объекте 
