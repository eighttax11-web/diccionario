import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Word } from 'src/app/interfaces/word.interface';
import { WordsService } from '../../services/words.service';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss'],
})
export class WordComponent implements OnInit {

  @Input() id;

  word: Word = {
    id:          0,
    name:        '',
    url:         '',
    category_id: 0,
  };

  constructor(private wordsService: WordsService,
              private modalCtrl: ModalController) { }

  ngOnInit() {
    this.wordsService.getWord(this.id).subscribe(
      resp => {
        this.word = resp;
        console.log(this.word);
      }
    )
  }

  regresar() {
    this.modalCtrl.dismiss();
  }

}
