import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  //pipe ın kullanuldığı değeri manipüle/transform etmemizi sağlayan fonkisyondur
  transform(value: string, a:number, b:number): string {
    
    return value.slice(a,b);
  }

}
