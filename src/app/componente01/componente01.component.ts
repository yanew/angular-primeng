import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { SpeedDialModule } from 'primeng/speeddial';
import { InputTextModule } from 'primeng/inputtext';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';//Necessario para animacoes, mas quando importei, nao funcionou

@Component({
  selector: 'app-componente01',
  standalone: true,
  imports: [ButtonModule, AutoCompleteModule, CalendarModule, SpeedDialModule, InputTextModule/*, BrowserAnimationsModule*/],
  templateUrl: './componente01.component.html',
  styleUrl: './componente01.component.css'
})
export class Componente01Component {

  date:any = '';

}

