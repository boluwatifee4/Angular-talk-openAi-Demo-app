import { Component } from '@angular/core';
import { GptService } from '../../services/gpt.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  userInput: string = '';
  response: string = '';
  constructor(private gptService: GptService) { }

  sendPrompt(): void {
    this.gptService.generateResponse(this.userInput).subscribe(
      (data) => {
        this.response = data.choices[0].message.content.trim();
      },
      (error) => {
        console.error('Error:', error);
        this.response = 'Something went wrong. Please try again.';
      }
    );
  }
}
