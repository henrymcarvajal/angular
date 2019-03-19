import { Component, OnInit } from '@angular/core';
import { ListadoCartasService } from '../listado-cartas.service';
import { CARTA_SP_DATA, CARTA_EN_DATA, CARTA_FR_DATA, CARTA_IT_DATA, CARTA_GE_DATA } from '../cartas-patrocinio/listado-cartas';

@Component({
  selector: 'app-cartas-patrocinio',
  templateUrl: './cartas-patrocinio.component.html',
  styleUrls: ['./cartas-patrocinio.component.css']
})
export class CartasPatrocinioComponent implements OnInit {

  displayedColumns: string[] = ['name', 'previewLink', 'generateLink'];
  dataSource = CARTA_SP_DATA;

  addressee = false;
  xxx;

  constructor(private listadoCartasService: ListadoCartasService) { }

  ngOnInit() {
    this.changeLanguage('SP');
  }

  changeAddressee(event: any) {
    this.addressee = !this.addressee;
  }

  /*changeLanguage(lang: string): void {
    this.xxx = this.listadoCartasService.getListaCartas(lang)
      .subscribe(listadoCartas => this.dataSource = listadoCartas);
      this.dataSource = this.xxx.values;
      console.log(JSON.stringify(this.xxx));
  }*/

  changeLanguage(lang: string):void {
    
    switch (lang) {
      case 'SP':
        this.dataSource = CARTA_SP_DATA;
        break;
      case 'EN':
        this.dataSource = CARTA_EN_DATA;
        break;
      case 'FR':
        this.dataSource = CARTA_FR_DATA;
        break;
      case 'IT':
        this.dataSource = CARTA_IT_DATA;
        break;
      case 'GE':
        this.dataSource = CARTA_GE_DATA;
        break;
    }
  }
}
