import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { SpeedDialModule } from 'primeng/speeddial';

@Component({
  selector: 'app-componente01',
  standalone: true,
  imports: [ButtonModule, AutoCompleteModule, CalendarModule, SpeedDialModule],
  templateUrl: './componente01.component.html',
  styleUrl: './componente01.component.css'
})
export class Componente01Component {

  date:any = '';

}
