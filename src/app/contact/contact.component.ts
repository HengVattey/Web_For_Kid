import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'], // Note: Corrected 'styleUrl' to 'styleUrls'
})
export class ContactComponent implements OnInit {

  ngOnInit() {
    // Use jQuery once the component is initialized
    this.initializeJQuery();
    this.hi();

  }

  hi(){
$(document).ready(function(){

  $("p").css("color","red");
  

})

console.log("hi");

  }

  initializeJQuery() {
    $(document).ready(() => {
      $("#hide").click(() => {
        $("p").hide();
      });
      $("#show").click(() => {
        $("p").show();
      });
    });


  }
}
