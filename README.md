﻿# Snake_game
 
## Projekt przestawia popularną grę SNAKE napisaną w języku JavaScript. 

* Gra rysowana jest w znaczniku <canvas></canvas>. Sterowanie odbywa się za pomocą klawiszy W, S, A, D. 
* Skrypt przerabia dane wprowadzane przez użytkownika na klawiaturze i zamienia je na kierunek w jakim wąż się porusza. 
* Za pomocą obiektu Math losowane są współrzędne pojawienia się „owoca”, który jest zaznaczony kolorem czerwonym. 
* Gdy owoc jest zjadany (głowa węża osiąga te same współrzędne co owoc), to zmieniane są jego współrzędne, do wyniku „Score:” dodawany jest 1 punkt, a wąż się wydłuża (nowy moduł węża jest dokładany na jego końcu). 
* Podczas natrafienia na ścianę wąż pojawia się z drugiej strony planszy. 
* Gdy wąż natrafi na część siebie („ugryzie się”) wyświetlany jest alert z osiągniętym wynikiem, po którego zaakceptowaniu strona się odświeża. 

###Maksymalny możliwy wynik do uzyskania to 897, po jego osiągnięciu wyświetla się komunikat „Wygrana”
