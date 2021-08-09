import { FormEvent } from 'react';

export interface InputProps {
  type: 'text' | 'number';
  label: string;
  placeholder?: string;
  value: string;
  error: string | null;
  required: boolean;
  onChange: (e: FormEvent<HTMLInputElement>) => void;
}
