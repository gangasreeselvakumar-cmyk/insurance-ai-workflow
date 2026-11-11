import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import type { AssistantResponse } from './assistant-response.model';

@Injectable({
  providedIn: 'root',
})
export class AssistantChatService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://insurance-ai-workflow.onrender.com/api/chat';

  /**
   * Sends a user question to the Render FastAPI backend and returns the grounded AssistantResponse.
   */
  askQuestion(question: string): Observable<AssistantResponse> {
    const payload = { question: question.trim() };

    return this.http.post<AssistantResponse>(this.apiUrl, payload).pipe(
      catchError((error: HttpErrorResponse): Observable<AssistantResponse> => {
        let message = 'The assistant service encountered an unexpected error. Please try again shortly.';

        if (error.status === 0) {
          message = 'Unable to reach the assistant service. Please check your network connection and try again.';
        } else if (error.status === 422) {
          message = 'Please enter a valid question for the assistant.';
        } else if (error.status >= 500) {
          message = 'The assistant service is temporarily unavailable. Please try again in a few moments.';
        }

        const fallbackResponse: AssistantResponse = {
          text: message,
          unsupportedAction: false,
        };

        return of(fallbackResponse);
      })
    );
  }
}
