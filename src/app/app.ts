import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // Print the single PDF file 
  printSinglePDF() {
    const url = 'doc1.pdf';  
    const win = window.open(url, '_blank');
    if (win) {
      win.onload = () => {
        win.focus();
        win.print();
      };
    } else {
     
    }
  }

  // Print multiple PDFs
  printMultiplePDFs() {
    const pdfUrls = ['doc1.pdf', 'doc2.pdf'];  
    pdfUrls.forEach(url => {
      const win = window.open(url, '_blank');
      if (win) {
        win.onload = () => {
          win.focus();
          win.print();
        };
      } else {
       
      }
    });
  }
}
