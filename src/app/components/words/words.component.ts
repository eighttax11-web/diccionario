import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Word } from 'src/app/interfaces/word.interface';
import { WordsService } from 'src/app/services/words.service';
import { ActivatedRoute } from '@angular/router';
import { IonInfiniteScroll } from '@ionic/angular';


@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss'],
})
export class WordsComponent implements OnInit {
  
  @ViewChild(IonInfiniteScroll, {static: false}) infiniteScroll: IonInfiniteScroll;

  words: Word[] = [];
  id;

  constructor(private wordsService: WordsService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.wordsService.getWordsByCategory(this.id).subscribe(
      (resp:any) => {
        this.words = resp;
        console.log(this.words);
      }
    )
  }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.words.length == 1000) {
        event.target.complete();
        event.target.disabled = true;
        return;
      }

      const nuevoArray = Array(20);
      this.words.push(...nuevoArray);
      event.target.complete();

    }, 500);
  }
}
