import { Component, OnInit } from '@angular/core';
import { Note } from '../note.model';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.scss']
})
export class NoteListComponent {

  note: string;
  notes: Array<Note> = [];

  addNote(){
    this.notes.push({message:this.note});
    this.note = '';
  }

  changeFirstNote(){
    this.notes[0].message = "this just got changed ";
  }

  deleteNote(indexOfNoteToDelete: number){
    this.notes.splice(indexOfNoteToDelete,1);
  }

  triggerChangeDetection(){
    //this should trigger Change Detection

  }
}
