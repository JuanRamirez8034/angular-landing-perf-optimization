import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateDatePeriode'
})
export class CalculateDatePeriodePipe implements PipeTransform {

  transform(beforeDate: Date): string {
    const msPerDay = 24 * 60 * 60 * 1000; // numero de milisegundos del dia
    const days = ( (new Date()).getTime() - beforeDate.getTime() ) / msPerDay; // numeros de dias transcurridos desde el comienzo hasta la actualidaa
    const daysPerMonths = (((365 * 3) + 366) / 4) / 12; // promedio de dias por mes ( ((3 añosNormal) + (1 añoBiciesto)) / 4años) / 12 Meses    
    const months = Math.round(days / daysPerMonths); // numero de meses equivalentes a la diferencia de las fechas
    let periodeResult = (months < 12) ? `${months} Months` : `${Math.round(months / 12)} years`;
    return periodeResult;
  }

}
