import { Component } from "@angular/core";

@Component({
  selector: 'app',
  templateUrl: './partials/app.html',
  // styles: [
  //   ".btn{background-color:chocolate}",
  //   ".btn:hover{background-color:rebeccapurple}"
  //   ]
  styleUrls: ["./css/app.css"]
  
})


export class AppComponent {
  name : string;
  artists : any; // we use any when we have complex data type


  onClick(myItem, myElement){
    this.name = myItem.name;
    myElement.style.backgroundColor = '#fece4e';
  }

  addArtist(value){
    if(value !== 0){
      this.artists.push({
        name: value,
        school: 'Hard Knox'
      })
    }
  }


  constructor(){
    this.name = "Samiullah Khan";
    this.artists = [
      {
        name: "Justing Seeley",
        school: "Penn State"
      },
      {
        name: "James Williamson",
        school: "Columbia International"
      },
      {
        name: "Morton Ranhandrikson",
        school: "Universting of Florida"
      }
    ]
  }
}