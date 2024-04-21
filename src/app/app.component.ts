import { Component } from '@angular/core';
import { CustomPipe } from './pipes/custom.pipe';

@Component({
  selector: 'app-root',
  template: `
 {{name | uppercase}}// tüm harfleri büyüt <br>
 {{name | slice : 0:5}}// baştan 1 ve 3 cü karaktere kadar al <br>
 {{price | currency}}// sayıyı parasal değerde gösterme<br>
 {{'09.14.2000' | date : 'fullDate'}}// tarih gösterme<br>
 {{"doldur be meyhaneci, boş kalmasın kadehim..."| custom : 10 :19}} ----- custompipe
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private custom : CustomPipe){
    console.log(custom.transform("naber nasılsın",3,10))//custom pipe class içinde de bir service gibi kullanabiliriz
  }
  name = 'proje6-pipe';
  price :number=150;
  
}
