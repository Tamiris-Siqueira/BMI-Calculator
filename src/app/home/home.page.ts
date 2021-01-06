import { Component } from '@angular/core';
import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { ToastController } from '@ionic/angular';
import { prepareSyntheticListenerFunctionName } from '@angular/compiler/src/render3/util';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public toastController: ToastController) {}
  peso: number;
  altura: number;
  imc: number;
  indice: string = "";
  async calcular() {
    if(this.altura > 0 && this.peso > 0)
    {
      this.imc = (this.peso / (this.altura * this.altura));
      
      if (this.imc < 18.5)
        this.indice = "IMC: " + this.imc.toFixed(2) + "\nAbaixo do peso.";
      else if (this.imc >= 18.5 && this.imc < 25)
        this.indice = "IMC: " + this.imc.toFixed(2) + "\nPeso ideal.";
      else if (this.imc >= 25 && this.imc < 30)
        this.indice = "IMC: " + this.imc.toFixed(2) + "\nAcima do peso.";
      else if (this.imc >= 30 && this.imc < 35)
        this.indice = "IMC: " + this.imc.toFixed(2) + "\nObesidade nível I.";
      else if (this.imc >= 35 && this.imc < 40)
        this.indice = "IMC: " + this.imc.toFixed(2) + "\nObesidade nível II.";
      else if (this.imc >= 40)
        this.indice = "IMC: " + this.imc.toFixed(2) + "\nObesidade mórbida.";
    }
    else 
      this.indice = "Peso e/ou altura inválido(s).";

    const toast = await this.toastController.create({
      message: "" + this.indice,
      duration: 5000,
      position: "top",
      color: "primary",
      cssClass: "toastIMC"
    });
    console.log(toast);
    toast.present();
  }
}
