import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GptService {
  private apiUrl = 'https://api.openai.com/v1/chat/completions'; // Replace with actual GPT API URL
  private apiKey = environment.openAiApiKey; // Replace with actual GPT API key

  constructor(private http: HttpClient) { }

  generateResponse(prompt: string): Observable<any> {
    const headers = {
      Authorization: `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json',
    };
    const body = {
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: prompt },
      ],

      max_tokens: 100,
    };
    return this.http.post(this.apiUrl, body, { headers });
  }
}
