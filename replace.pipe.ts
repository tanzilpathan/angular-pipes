#Create one pipe in angular and then paste the code below and call the pipe name "replace" in your html under string interpolation with pipe "|".

============replace.pipe.ts====================================
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform {

  transform(value: string, regexValue: string, replaceValue: string): any {
    let regex = new RegExp(regexValue, 'g');
    return value.replace(regex, replaceValue);
  }
}


===================example.component.html========================
{{string | replace:'oldValue':'replaceValue'}} 
