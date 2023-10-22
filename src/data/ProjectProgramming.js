import o1 from '../referenc/Program/organizer/o6.jpg'
import o2 from '../referenc/Program/organizer/o1.jpg'
import o3 from '../referenc/Program/organizer/o3.jpg'
import o4 from '../referenc/Program/organizer/o4.jpg'
import o5 from '../referenc/Program/organizer/o5.jpg'
import o6 from '../referenc/Program/organizer/o22.jpg'
import o7 from '../referenc/Program/organizer/o9.jpg'
import o8 from '../referenc/Program/organizer/o10.jpg'
import o9 from '../referenc/Program/organizer/o11.jpg'
import o10 from '../referenc/Program/organizer/o12.jpg'
import o11 from '../referenc/Program/organizer/o13.jpg'
import o12 from '../referenc/Program/organizer/o14.jpg'
import o13 from '../referenc/Program/organizer/o15.jpg'
import o14 from '../referenc/Program/organizer/o16.jpg'
import o15 from '../referenc/Program/organizer/o18.jpg'

import l1 from '../referenc/Program/quiz/l6.jpg'
import l2 from '../referenc/Program/quiz/l1.jpg'
import l3 from '../referenc/Program/quiz/l3.jpg'
import l4 from '../referenc/Program/quiz/l4.jpg'
import l5 from '../referenc/Program/quiz/l5.jpg'
import l6 from '../referenc/Program/quiz/l2.jpg'

import k1 from '../referenc/Program/kino/k6.jpg'
import k2 from '../referenc/Program/kino/k1.jpg'
import k3 from '../referenc/Program/kino/k3.jpg'
import k5 from '../referenc/Program/kino/k5.jpg'
import k6 from '../referenc/Program/kino/k2.jpg'
import k7 from '../referenc/Program/kino/k9.jpg'
import k9 from '../referenc/Program/kino/k11.jpg'
import k10 from '../referenc/Program/kino/k12.jpg'
import k11 from '../referenc/Program/kino/k13.jpg'
import k13 from '../referenc/Program/kino/k15.jpg'
import k14 from '../referenc/Program/kino/k8.jpg'
import k15 from '../referenc/Program/kino/k7.jpg'


export const itemData2 = [
    {
      img: o1,
      title: 'Organizer',
      describe:'Aplikacja na urządzenia mobilne wspomagająca zarządznie czasem.',
      
      file:[
        {img:o1,title:"Drawer"}, 
        { img:o2,title:"Tworzenie kontaktu"}, 
        { img:o3,title:"Notatnik"}, 
        { img:o4,title:"Dodawanie nowej notatki"}, 
        { img:o5,title:"Ekran główny"}, 
        { img:o6,title:"Prowadzący"}, 
        { img:o7,title:"To do lista"},
        { img:o8,title:"Edycja maila"},
        { img:o9,title:"Edycja notatki"},
        { img:o10,title:"Terminarz"},
        { img:o11,title:"Plan zajęć"},
        { img:o12,title:"Dodawanie nowego linku"},
        { img:o13,title:"Maile"},
        { img:o14,title:"Linki"},
        { img:o15,title:"Lista kont bankowych"},

      ],
        describedetail:'Aplikacja na urządzenia mobilne wspomagająca organizaję. Napisana z myślą o studentach. Program posiada nawigacje typu drawer. Organizer ma funkcje takie jak przechowywanie maili,'+ 
        ' kontaktów do prowadzoncych, linków, kontaktów bankowych. Dodatkową funkcją jest notatnik, to do lista, plan zajęć oraz terminarz.'+
        ' Aplikacja została napisana w języku JavaScript za pomocą React Native z frameworkiem NativeBase. Baza została stworzona w programie Xampp.'
    },
    {
      img: l1,
      title: 'Quiz',
      describe:'Gra na urządzenia mobilne ułatwiająca naukę tabliczki mnożenia.',
      file:[
        {img:l1,title:"Strona główna"}, 
        { img:l2,title:"Ładowanie aplikacji"}, 
        { img:l3,title:"Poprawnie zaznaczona odpowiedź"}, 
        { img:l4,title:"Błędnie zaznaczona odpowiedź"}, 
        { img:l5,title:"Rozgrywka"}, 
        { img:l6,title:"Wynik rozgrywki"}, 
      ],

      describedetail:'Aplikacja na urządzenia mobilne wspomagająca naukę tabliczki mnożenia poprzez zabawę. Napisana z myślą o dzieciach.'+ 
        ' Gra polega na udzielaniu poprawnych odpowiedzi na pytania quizowe. Gdy gracz zaznaczy poprawną odpowiedź kolor zaznaczonej cegiełki zmieni się na zielony,'+
        ' w przeciwnym wypadku na czerwony. Aplikacja została napisana w języku JavaScript za pomocą React Native z frameworkiem NativeBase.'
     },
    {
      img: k13,
      title: 'Kino',
      describe:'Aplikacja kina na urządzenia mobilne zawierająca repertuar.',
     file:[
        {img:k13,title:"Repertuar"}, 
        { img:k11,title:"Drawer"}, 
        { img:k7,title:"Opis filmu"}, 
        { img:k14,title:"Wybór miejsc"}, 
        { img:k15,title:"Nie wybrano miejsc"}, 
        { img:k1,title:"Podsumowanie"}, 
        { img:k6,title:"Konto użytkownika"},
        { img:k2,title:"Nowe hasło"},   
        { img:k9,title:"Rejestracja"},
        { img:k5,title:"Logowanie"},
        { img:k3,title:"Błędne dane"},
        { img:k10,title:"Wyszukiwarka"},
   
     
      ],
      describedetail:'Aplikacja na urządzenia mobilne zawierająca repertuar kina Cinema Zone. Program posiada nawigację typu drawer. Ekran główny przedstawia repertuar. Po wybraniu'+ 
      ' filmu wyświetlony zostanie opis oraz możliwość wybrania godziny seansu. Po dokonaniu wyboru użytkownik może wybrać miejsce w sali. Na koniec pojawia się podsumowanie'+
      ' zamówienia. Aplikacja daje możliwość logowania. Użytkownik może wyszukać film lub przenieść się do biletu przez zeskanowanie QR kodu.'
   },
   
  ];
