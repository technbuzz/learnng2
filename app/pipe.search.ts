import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name : 'search'
})

export class SearchPipe implements PipeTransform {
  transform(pipeData, pipeModifier){
    return pipeData.filter(function(eachItem){
      return eachItem['name'].toLowerCase().includes(pipeModifier.toLowerCase()) ||
             eachItem['reknown'].toLowerCase().includes(pipeModifier.toLowerCase());
    });
  }
}