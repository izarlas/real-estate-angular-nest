import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { HousingService } from '@client/services/housing/housing.service';
import {
  MatError,
  MatFormField,
  MatInputModule,
  MatLabel,
} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-application',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormField,
    MatFormFieldModule,
    MatLabel,
    MatButtonModule,
    MatInputModule,
    MatError,
  ],
  template: `
    <section class="pl-2 pr-2">
      <p class="text-xl mb-2">Apply now to live here</p>
      <form
        [formGroup]="applyForm"
        (submit)="submitApplication()"
        class="flex flex-col"
      >
        <mat-form-field class="full-width" appearance="fill">
          <mat-label>First Name</mat-label>
          <input
            formControlName="firstName"
            matInput
            type="text"
            [placeholder]="'First name'"
          />
          <mat-error *ngIf="applyForm.get('firstName')?.hasError('required')">
            First name is required
          </mat-error>
          <mat-error *ngIf="applyForm.get('firstName')?.hasError('minlength')">
            Minimum 3 characters
          </mat-error>
        </mat-form-field>

        <mat-form-field class="full-width" appearance="fill">
          <mat-label>Last Name</mat-label>
          <input
            formControlName="lastName"
            matInput
            type="text"
            [placeholder]="'Last name'"
          />
          <mat-error *ngIf="applyForm.get('lastName')?.hasError('required')">
            Last name is required
          </mat-error>
          <mat-error *ngIf="applyForm.get('lastName')?.hasError('minlength')">
            Minimum 3 characters
          </mat-error>
        </mat-form-field>

        <mat-form-field class="full-width" appearance="fill">
          <mat-label>Email</mat-label>
          <input
            formControlName="email"
            matInput
            type="email"
            [placeholder]="'Email'"
          />
          <mat-error *ngIf="applyForm.get('email')?.hasError('required')">
            Email is required
          </mat-error>
          <mat-error *ngIf="applyForm.get('email')?.hasError('email')">
            Must be a valid email
          </mat-error>
          <mat-error *ngIf="applyForm.get('email')?.hasError('minlength')">
            Minimum 6 characters
          </mat-error>
        </mat-form-field>

        <br />
        <button
          type="submit"
          mat-fab
          extended
          color="primary"
          [disabled]="!applyForm.valid"
        >
          Apply now
        </button>
      </form>
    </section>
  `,
})
export class Application {
  housingService: HousingService = inject(HousingService);

  applyForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.minLength(6),
    ]),
  });

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
    );
  }
}
