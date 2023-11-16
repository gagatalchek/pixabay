import logo from "./logo.svg";
import "./App.css";
import { grid } from "./grid";
import header from "./Components/header/Header";
import Header from "./Components/header/Header";
import DefaultInput from "./Components/Inputs/input";
import { useEffect, useState, useRef } from "react";
import { getImages } from "./api/pixabay";

function App() {
  const timeout = useRef(null);
  // const calculator = (number1, number2) => {
  //   const result = number1 / number2;
  // };

  // const result = calculator(160, 10);
  // console.log("наш результат:", result);

  const list = [1, 2, 3, 4, 5, 6, 7, 8];

  // const task1 = (number) => {
  //   if (number < 0) {
  //     console.log("Число отрицательное");
  //   } else if (number === 0) {
  //     console.log("Ваше число 0");
  //   } else {
  //     console.log("Ваше число не отрицательное");
  //   }
  // };
  // const number = task1(-10);

  // const task2 = (dlina) => {
  //   console.log("длинна вашей строки", dlina.length);
  // };

  // const dlina = task2("Aboba");

  // const task3 = (last_charackter) => {
  //   console.log(
  //     "Последний сивмовл: ",
  //     last_charackter[last_charackter.length - 1]
  //   );
  // };

  // const last_charackter = task3("aboba");

  // const task4 = (chetnos) => {
  //   const result = chetnos / 2;

  //   if (Number.isInteger(result)) {
  //     console.log("Ваше число четное", result);
  //   } else {
  //     console.log("Ваше число не чётное", result);
  //   }
  // };

  // const chetnos = task4(28);

  // const task5 = (slovo, slovo2) => {
  //   // const arr = Array.from(slovo);
  //   // const arr2 = Array.from(slovo2);
  //   if (slovo.toLowerCase()[0] === slovo2.toLowerCase()[0]) {
  //     console.log("Первые буквы ваших слов одинаковые :");
  //   } else {
  //     console.log("первые буквы ваших слов разные :");
  //   }
  //   // if () {
  //   //   console.log("Первые буквы ваших слов совпадают")
  //   // } else {
  //   //   console.log("первые буквы ваших слов не совпадают")
  //   // }
  // };
  // const slova = task5("aboba", "Avenger");

  // const task6 = (input) => {
  //   const arr = Array.from(input);
  //   if (arr.at(-1) === "ь") {
  //     console.log("Ваша последняя буква: ", arr.at(-2));
  //   } else {
  //     console.log("Ваша последняя буква: ", arr.at(-1));
  //   }
  // };

  // const input = task6("терзатель");

  // const task1_1 = (nubmer) => {
  //   const arr = Array.from(String(nubmer));
  //   console.log("Ваша первая цифра :", arr[0]);
  // };

  // const number_task6 = task1_1(123213);

  // const task1_2 = (number) => {
  //   const arr = Array.from(String(number));
  //   console.log("Ваша последняя цифра :", arr.at(-1));
  // };

  // const number_task1_2 = task1_2(562);

  // const task1_3 = (number1_3) => {
  //   const arr = Array.from(String(number1_3));
  //   const sum = Number(arr[0]) + Number(arr.at(-1));
  //   console.log("Сумма первой и последней цифры :", sum);
  // };

  // const number1_3 = task1_3(5028);

  // const task1_4 = (number1_4) => {
  //   const arr = Array.from(String(number1_4));
  //   console.log("Количество цифр: ", arr.length);
  // };

  // const nubmer1_4 = task1_4(123123);

  // const task1_5 = (number1_51, number1_52) => {
  //   const arr1 = Array.from(String(number1_51));
  //   const arr2 = Array.from(String(number1_52));
  //   if (arr1[0] === arr2[0]) {
  //     console.log("Первые цифры совпадают и они: ", arr1[0]);
  //   } else {
  //     console.log("Первые цифры не совпадают :");
  //   }
  // };
  // const numbers1_5 = task1_5(22342, 14532);

  // const task13_1 = (inp13_1) => {
  //   console.log("type of argument", typeof inp13_1);
  //   // if(typeof inp13_1 === "number"){
  //   //   console.log("You entered number, you should try to enter string");
  //   //   return;
  //   // }
  //   const arr = Array.from(inp13_1);
  //   if (arr.length > 1) {
  //     console.log("предпоследний сивол :", arr.at(-2));
  //   } else {
  //     console.log("У вашей строки недостаточно символов");
  //   }
  // };
  // const inp13_1 = task13_1("52352352");

  // const task13_2 = (input1, input2) => {
  //   const result = input1 / input2;
  //   if (Number.isInteger(result)) {
  //     console.log("Первое число делится на второе :");
  //   } else {
  //     console.log("Первое число не делится на второе :");
  //   }
  // };

  // const inp13_2 = task13_2(20, 10);

  // const task14_1 = () => {
  //   let arr = [];
  //   for (let i = 1; i <= 100; i++) {
  //     arr.push(i);
  //   }
  //   return arr;
  // };

  // const inp14_1 = task14_1();
  // console.log(inp14_1);

  // const task14_2 = () => {
  //   let arr = [];
  //   for (let i = -100; i <= 0; i++) {
  //     arr.push(i);
  //   }
  //   return arr;
  // };

  // const inp14_2 = task14_2();
  // console.log(inp14_2);

  // const task14_3 = () => {
  //   let arr = [];
  //   for (let i = 100; i >= 1; i--) {
  //     arr.push(i);
  //   }
  //   return arr;
  // };

  // const inp14_3 = task14_3();
  // console.log(inp14_3);

  // const task14_4 = () => {
  //   let arr = [];
  //   for (let i = 1; i <= 100; i++) {
  //     if (i % 2 == 0) arr.push(i);
  //   }
  //   return arr;
  // };

  // const inp14_4 = task14_4();
  // console.log(inp14_4);

  // const task14_5 = () => {
  //   let arr = [];
  //   for (let i = 1; i <= 100; i++) {
  //     if (i % 3 == 0) arr.push(i);
  //   }
  //   return arr;
  // };

  // const inp14_5 = task14_5();
  // console.log(inp14_5);

  // const task15_1 = () => {
  //   let arr = [];
  //   for (let i = 1; i <= 100; i++) {
  //     arr.push(i);
  //   }
  //   let sum = 0;
  //   for (let number of arr) {
  //     sum += number;
  //     console.log(number, sum);
  //   }
  //   return sum;
  // };

  // const inp15_1 = task15_1();
  // console.log(inp15_1);

  const [name, setName] = useState("flowers");
  const [hits, setHits] = useState([]);

  const handleChangeName = (event) => {
    const value = event.target.value;

    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      setName(value);
    }, 1000);
  };

  useEffect(() => {
    const getPhotos = async (name) => {
      try {
        const response = await getImages(name);
        const data = await response.json();
        setHits(data.hits);
        console.log("render", data);
      } catch (error) {}
      console.log("Наше значение инпута :", name);
    };
    getPhotos(name);
  }, [name]);

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div>
          <DefaultInput onChange={handleChangeName} />
          {/* <input onChange={handleChangeName} type="text" /> */}
        </div>
        <div className="list">
          {hits.map((hits, id) => {
            return (
              <div className="card" key={hits.id}>
                <img className="image" src={hits.webformatURL} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
